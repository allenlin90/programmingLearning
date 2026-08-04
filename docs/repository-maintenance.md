# Repository Maintenance

This document defines how the learning archive should be maintained without losing useful history.

See [Path naming conventions](./path-naming-conventions.md) for the staged kebab-case migration policy.

## Current condition

The repository has grown over several years and contains:

- Active notes and current study tracks.
- Historical course notes and exercises.
- Many standalone JavaScript projects with independent dependency manifests.
- Starting, intermediate, and final course snapshots that duplicate substantial code.
- Old package manifests that may reference unsupported or vulnerable dependencies.
- Generated or local files that should not be added again.

GitHub currently reports the repository at roughly 622 MB. The goal is not to make every historical project runnable. The goal is to keep the archive navigable, preserve high-value learning evidence, and reduce unnecessary maintenance and storage.

## Classification model

Each top-level course or project should eventually receive one status:

| Status | Meaning | Default action |
|---|---|---|
| Active | Currently maintained or used for study | Keep and validate |
| Reference | Notes remain useful, but code is not actively maintained | Keep notes; minimize project copies |
| Historical | Preserved as learning history | Keep selectively; add an archive notice |
| Duplicate | Starting/final copies or repeated course assets | Keep the most useful representative version |
| Generated | Dependencies, build output, caches, logs | Remove from Git tracking |
| External material | Unmodified or lightly modified course distribution | Prefer links or a concise index over copied content |

## Package policy

A `package.json` inside a historical exercise does not imply ongoing maintenance.

For each project:

1. Keep the manifest only when the code example is worth preserving or running.
2. Add a local README when the setup or historical context is not obvious.
3. Do not perform repository-wide dependency upgrades across unrelated course projects.
4. Do not run automated dependency update bots against the entire archive.
5. Remove lockfiles when reproducibility is no longer a goal and the project is explicitly historical.
6. Never commit `node_modules`, build output, caches, logs, or secrets.

## Cleanup phases

### Phase 1 — Navigation and policy

- [x] Replace the outdated root course index with a current repository overview.
- [x] Strengthen `.gitignore` for common generated files.
- [x] Establish classification and deletion rules.
- [x] Merge the CCAR-F study workspace.
- [x] Establish dependency-maintenance policy.
- [ ] Complete the staged kebab-case path migration.

### Phase 2 — Inventory

Create a reviewable inventory containing:

- Top-level path.
- Approximate size.
- Last meaningful update.
- Number of package manifests and lockfiles.
- Whether the content is primarily notes, original exercises, or copied course material.
- Proposed status and action.
- Proposed kebab-case path and collision status.

No large deletion or rename should happen before its inventory is reviewed.

### Phase 3 — Safe mechanical cleanup

Remove only clearly generated or accidental content:

- Tracked dependency directories.
- Build and coverage output.
- IDE/OS files.
- Debug logs and caches.
- Exact duplicate folders such as accidental `copy` directories, after comparison.

### Phase 4 — Historical course consolidation

For courses containing many starting/intermediate/final snapshots:

1. Preserve the user's notes and meaningful original exercises.
2. Select one representative runnable project only when it still has learning value.
3. Replace redundant snapshots with an archive README describing the course and retained evidence.
4. Move unusually large third-party assets out of the active repository or remove them when they can be obtained from the original source.

### Phase 5 — Git-history optimization

Deleting files in a normal commit does not reduce existing clone history. After the working tree is cleaned and verified, evaluate a separate history rewrite using `git filter-repo`.

A history rewrite must be treated as a standalone migration because it changes commit hashes and requires force-pushing and fresh clones.

## Pull-request rules

- Separate policy/navigation changes from destructive cleanup.
- List every removed or renamed top-level path in the PR description.
- Prefer one topic or course family per cleanup or rename PR.
- Preserve recoverability through Git history until any deliberate history rewrite.
- Use draft PRs for cleanup proposals until the retained content has been reviewed.
- Update links, imports, scripts, manifests, workflows, and dependency-monitoring paths in the same PR as a rename.

## Definition of done

The repository is considered clean enough for active study when:

- The root README clearly points to active study tracks.
- New work has an obvious location and status.
- Historical projects are not mistaken for maintained applications.
- Generated content is excluded.
- User-defined paths follow the kebab-case policy.
- Large duplicated course snapshots have a reviewed disposition.
- Repository size and clone cost are understood, even if historical reduction is deferred.
