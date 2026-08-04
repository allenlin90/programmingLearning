# Path Naming Conventions

This repository is migrating user-defined directory and file names to kebab-case so paths are consistent, readable, and shell-friendly.

## Rule

Use lowercase words separated by a single hyphen:

```text
server-and-backend/
react-query-server-state-management/
my-component.test.tsx
```

Convert common legacy forms as follows:

| Existing form | Kebab-case form |
|---|---|
| `serverAndBackend` | `server-and-backend` |
| `DataScience` | `data-science` |
| `custom_data_serialization` | `custom-data-serialization` |
| `My Component` | `my-component` |
| `C++` | `c-plus-plus` |

Acronyms are lowercase words. For example, `nodeJS` becomes `node-js` and `RESTAPI` becomes `rest-api`.

## Exemptions

Do not rename names that are discovered by tools or established conventions, including:

- Hidden files and directories such as `.github`, `.gitignore`, and `.env.example`
- Repository documents such as `README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md`, `SECURITY.md`, and `CLAUDE.md`
- Package and lock files such as `package.json`, `package-lock.json`, `yarn.lock`, and `pnpm-lock.yaml`
- Runtime and build configuration such as `tsconfig.json`, `Dockerfile`, `Makefile`, `Gemfile`, `go.mod`, and framework-standard config names

The migration utility contains the authoritative exemption set. Add an exemption only when a tool, runtime, or widely used convention requires the exact name.

## Migration principles

1. Use `git mv` so Git can preserve rename history.
2. Detect path collisions before applying changes.
3. Rename one directory family or runnable project per pull request.
4. Update Markdown links, imports, scripts, manifests, workflow paths, and Dependabot directories in the same pull request.
5. Validate runnable projects after their paths change.
6. Do not combine dependency upgrades with naming-only pull requests.
7. Do not rename external vendored material unless it is retained and actively maintained.

A repository-wide one-shot rename is intentionally prohibited. It would create an unreviewable diff and make broken references difficult to isolate.

## Migration utility

Inventory all proposed changes:

```bash
python tools/kebab-case-migration.py inventory
```

Inventory one directory family:

```bash
python tools/kebab-case-migration.py inventory --scope serverAndBackend
```

Export a reviewable mapping:

```bash
python tools/kebab-case-migration.py inventory --format csv > kebab-case-paths.csv
```

Apply a reviewed scope:

```bash
python tools/kebab-case-migration.py apply --scope serverAndBackend
```

Check all tracked paths:

```bash
python tools/kebab-case-migration.py check
```

The utility renames tracked paths only. It does not automatically rewrite references because broad text replacement can silently corrupt imports, URLs, code examples, and historical notes.

## Pull request validation

Each rename pull request must include:

- The old-to-new path mapping
- Collision-check result
- Updated repository navigation and Markdown links
- Updated source imports and package scripts where applicable
- Updated CI, deployment, and dependency-monitoring paths
- A search showing no unresolved references to the renamed paths
- Build and test results for every retained runnable project in scope

## Migration sequence

1. Repository policy and migration tooling
2. Root documentation and active AI study paths
3. Top-level subject directories
4. Active runnable projects and their source files
5. Historical course directories, one course family at a time
6. Final repository-wide path and broken-reference checks
