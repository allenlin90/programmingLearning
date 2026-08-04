#!/usr/bin/env python3
"""Inventory, validate, and apply kebab-case path migrations in a Git repository.

The utility intentionally renames tracked paths only. Empty directories are not
tracked by Git and are therefore outside its scope.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import shutil
import subprocess
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from typing import Iterable, Sequence

KEBAB_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
CAMEL_1_RE = re.compile(r"([A-Z]+)([A-Z][a-z])")
CAMEL_2_RE = re.compile(r"([a-z0-9])([A-Z])")
SEPARATOR_RE = re.compile(r"[\s_./:]+")
NON_ALNUM_RE = re.compile(r"[^a-z0-9-]+")
MULTI_HYPHEN_RE = re.compile(r"-+")

STANDARD_FILE_NAMES = {
    "README",
    "README.md",
    "LICENSE",
    "LICENSE.md",
    "CHANGELOG.md",
    "CONTRIBUTING.md",
    "CODE_OF_CONDUCT.md",
    "SECURITY.md",
    "CLAUDE.md",
    "Dockerfile",
    "Makefile",
    "Procfile",
    "Gemfile",
    "Gemfile.lock",
    "Rakefile",
    "package.json",
    "package-lock.json",
    "npm-shrinkwrap.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    "bun.lockb",
    "composer.json",
    "composer.lock",
    "pyproject.toml",
    "requirements.txt",
    "Pipfile",
    "Pipfile.lock",
    "poetry.lock",
    "go.mod",
    "go.sum",
    "Cargo.toml",
    "Cargo.lock",
    "tsconfig.json",
    "tsconfig.build.json",
    "jsconfig.json",
    "vite.config.js",
    "vite.config.ts",
    "next.config.js",
    "next.config.mjs",
    "nuxt.config.js",
    "nuxt.config.ts",
    "jest.config.js",
    "jest.config.ts",
    "vitest.config.js",
    "vitest.config.ts",
    "eslint.config.js",
    "eslint.config.mjs",
    "prettier.config.js",
    "tailwind.config.js",
    "tailwind.config.ts",
    "postcss.config.js",
    "webpack.config.js",
    "babel.config.js",
    "metro.config.js",
    "app.json",
    "app.yaml",
    "serverless.yml",
    "serverless.yaml",
    "docker-compose.yml",
    "docker-compose.yaml",
}

WORD_REPLACEMENTS = {
    "+": " plus ",
    "#": " sharp ",
    "&": " and ",
    "@": " at ",
    "%": " percent ",
}


class MigrationError(RuntimeError):
    """Raised when the migration cannot proceed safely."""


@dataclass(frozen=True)
class Rename:
    old: str
    new: str


def run_git(args: Sequence[str], *, check: bool = True) -> str:
    process = subprocess.run(
        ["git", *args],
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if check and process.returncode != 0:
        raise MigrationError(process.stderr.strip() or f"git {' '.join(args)} failed")
    return process.stdout


def repository_root() -> Path:
    root = run_git(["rev-parse", "--show-toplevel"]).strip()
    if not root:
        raise MigrationError("Not inside a Git repository")
    return Path(root)


def tracked_paths() -> list[str]:
    output = subprocess.run(
        ["git", "ls-files", "-z"],
        check=True,
        stdout=subprocess.PIPE,
    ).stdout
    return [item.decode("utf-8", errors="surrogateescape") for item in output.split(b"\0") if item]


def changed_paths(base: str) -> list[str]:
    output = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=ACMR", "-z", f"{base}...HEAD"],
        check=True,
        stdout=subprocess.PIPE,
    ).stdout
    return [item.decode("utf-8", errors="surrogateescape") for item in output.split(b"\0") if item]


def in_scope(path: str, scopes: Sequence[str]) -> bool:
    if not scopes:
        return True
    normalized = path.strip("/")
    return any(
        normalized == scope.strip("/") or normalized.startswith(scope.strip("/") + "/")
        for scope in scopes
    )


def is_hidden_or_standard(component: str, *, is_file: bool) -> bool:
    if component.startswith("."):
        return True
    return is_file and component in STANDARD_FILE_NAMES


def kebab_token(value: str) -> str:
    for old, replacement in WORD_REPLACEMENTS.items():
        value = value.replace(old, replacement)
    value = CAMEL_1_RE.sub(r"\1-\2", value)
    value = CAMEL_2_RE.sub(r"\1-\2", value)
    value = unicodedata.normalize("NFKD", value)
    value = value.encode("ascii", "ignore").decode("ascii")
    value = value.lower()
    value = SEPARATOR_RE.sub("-", value)
    value = NON_ALNUM_RE.sub("-", value)
    value = MULTI_HYPHEN_RE.sub("-", value).strip("-")
    return value or "unnamed"


def split_file_name(component: str) -> tuple[str, str]:
    if component.startswith(".") or "." not in component:
        return component, ""
    first, *rest = component.split(".")
    return first, "." + ".".join(part.lower() for part in rest)


def convert_component(component: str, *, is_file: bool) -> str:
    if is_hidden_or_standard(component, is_file=is_file):
        return component
    if is_file:
        stem, suffix = split_file_name(component)
        return kebab_token(stem) + suffix
    return kebab_token(component)


def component_is_valid(component: str, *, is_file: bool) -> bool:
    if is_hidden_or_standard(component, is_file=is_file):
        return True
    if is_file:
        stem, suffix = split_file_name(component)
        if not KEBAB_RE.fullmatch(stem):
            return False
        return not suffix or suffix == suffix.lower()
    return bool(KEBAB_RE.fullmatch(component))


def propose_path(path: str) -> str:
    parts = list(PurePosixPath(path).parts)
    converted: list[str] = []
    for index, component in enumerate(parts):
        converted.append(convert_component(component, is_file=index == len(parts) - 1))
    return str(PurePosixPath(*converted))


def build_renames(paths: Iterable[str], scopes: Sequence[str]) -> list[Rename]:
    renames: list[Rename] = []
    for path in paths:
        if not in_scope(path, scopes):
            continue
        proposed = propose_path(path)
        if proposed != path:
            renames.append(Rename(path, proposed))
    return renames


def validate_collisions(renames: Sequence[Rename], all_paths: Sequence[str]) -> None:
    by_target: dict[str, list[str]] = {}
    for rename in renames:
        by_target.setdefault(rename.new, []).append(rename.old)
    duplicate_targets = {target: olds for target, olds in by_target.items() if len(olds) > 1}

    moving_sources = {rename.old for rename in renames}
    existing = set(all_paths)
    occupied_targets = {
        rename.new: rename.old
        for rename in renames
        if rename.new in existing and rename.new not in moving_sources
    }

    if duplicate_targets or occupied_targets:
        lines = ["Kebab-case migration has path collisions:"]
        for target, sources in sorted(duplicate_targets.items()):
            lines.append(f"  {target} <= {', '.join(sorted(sources))}")
        for target, source in sorted(occupied_targets.items()):
            lines.append(f"  {source} -> {target} (target already exists)")
        raise MigrationError("\n".join(lines))


def print_inventory(renames: Sequence[Rename], output_format: str) -> None:
    if output_format == "json":
        print(json.dumps([rename.__dict__ for rename in renames], indent=2, ensure_ascii=False))
        return
    if output_format == "csv":
        writer = csv.writer(sys.stdout)
        writer.writerow(["old", "new"])
        writer.writerows((rename.old, rename.new) for rename in renames)
        return
    if not renames:
        print("No path changes proposed.")
        return
    width = max(len(rename.old) for rename in renames)
    for rename in renames:
        print(f"{rename.old:<{width}}  ->  {rename.new}")
    print(f"\n{len(renames)} tracked path(s) would be renamed.")


def ensure_clean_worktree() -> None:
    status = run_git(["status", "--porcelain"])
    if status.strip():
        raise MigrationError("Working tree must be clean before applying path renames")


def apply_renames(renames: Sequence[Rename], *, dry_run: bool) -> None:
    if not renames:
        print("No path changes to apply.")
        return
    if dry_run:
        print_inventory(renames, "table")
        return

    ensure_clean_worktree()
    root = repository_root()
    temp_root = root / ".kebab-case-migration-tmp"
    if temp_root.exists():
        raise MigrationError(f"Temporary path already exists: {temp_root}")
    temp_root.mkdir()

    try:
        staged: list[tuple[Path, Rename]] = []
        for index, rename in enumerate(renames):
            temp_path = temp_root / f"{index:08d}"
            run_git(["mv", "--", rename.old, str(temp_path.relative_to(root))])
            staged.append((temp_path, rename))

        for temp_path, rename in staged:
            target = root / rename.new
            target.parent.mkdir(parents=True, exist_ok=True)
            run_git(["mv", "--", str(temp_path.relative_to(root)), rename.new])
    finally:
        shutil.rmtree(temp_root, ignore_errors=True)

    print(f"Renamed {len(renames)} tracked path(s).")
    print("Next: update imports, scripts, manifests, and Markdown links, then run project-specific validation.")


def check_paths(paths: Sequence[str]) -> list[str]:
    invalid: list[str] = []
    for path in paths:
        parts = PurePosixPath(path).parts
        for index, component in enumerate(parts):
            if not component_is_valid(component, is_file=index == len(parts) - 1):
                invalid.append(path)
                break
    return sorted(set(invalid))


def command_inventory(args: argparse.Namespace) -> int:
    paths = tracked_paths()
    renames = build_renames(paths, args.scope)
    validate_collisions(renames, paths)
    print_inventory(renames, args.format)
    return 0


def command_check(args: argparse.Namespace) -> int:
    paths = changed_paths(args.changed_only) if args.changed_only else tracked_paths()
    paths = [path for path in paths if in_scope(path, args.scope)]
    invalid = check_paths(paths)
    if not invalid:
        print(f"Checked {len(paths)} tracked path(s): all comply with the naming policy.")
        return 0
    print("Non-compliant tracked paths:", file=sys.stderr)
    for path in invalid:
        print(f"  {path}", file=sys.stderr)
    return 1


def command_apply(args: argparse.Namespace) -> int:
    paths = tracked_paths()
    renames = build_renames(paths, args.scope)
    validate_collisions(renames, paths)
    apply_renames(renames, dry_run=args.dry_run)
    return 0


def parser() -> argparse.ArgumentParser:
    result = argparse.ArgumentParser(description=__doc__)
    subparsers = result.add_subparsers(dest="command", required=True)

    inventory = subparsers.add_parser("inventory", help="List proposed path renames")
    inventory.add_argument("--scope", action="append", default=[], help="Limit to a repository-relative path; repeatable")
    inventory.add_argument("--format", choices=("table", "json", "csv"), default="table")
    inventory.set_defaults(handler=command_inventory)

    check = subparsers.add_parser("check", help="Fail when paths do not follow the naming policy")
    check.add_argument("--scope", action="append", default=[], help="Limit to a repository-relative path; repeatable")
    check.add_argument("--changed-only", metavar="BASE", help="Check only paths changed relative to BASE")
    check.set_defaults(handler=command_check)

    apply = subparsers.add_parser("apply", help="Rename tracked paths using git mv")
    apply.add_argument("--scope", action="append", default=[], help="Limit to a repository-relative path; repeatable")
    apply.add_argument("--dry-run", action="store_true", help="Print the plan without modifying the repository")
    apply.set_defaults(handler=command_apply)

    return result


def main() -> int:
    try:
        args = parser().parse_args()
        return int(args.handler(args))
    except (MigrationError, subprocess.CalledProcessError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
