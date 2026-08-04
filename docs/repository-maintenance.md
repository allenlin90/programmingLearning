# Repository Maintenance

This document defines the maintenance policy for a historical learning archive with a small number of active study tracks.

See [Archive inventory](./archive-inventory.md) for the top-level classification and [Path naming conventions](./path-naming-conventions.md) for naming rules.

## Repository model

This repository is not a maintained application portfolio or a multi-project production monorepo. Most contained projects are historical course snapshots, exercises, or notes. They may use obsolete runtimes, unsupported frameworks, vulnerable dependencies, or copied teaching assets.

The maintenance objective is limited to:

1. Keep active study tracks easy to find.
2. Preserve meaningful personal learning evidence.
3. Prevent generated files, secrets, and naming drift.
4. Avoid automation that implies support for historical projects.
5. Make destructive cleanup evidence-based and reviewable.

## Classification model

| Status | Meaning | Default action |
|---|---|---|
| Active | Currently used for structured study | Maintain documentation and validate relevant artifacts |
| Reference | Useful notes or examples with no support promise | Preserve and review before reuse |
| Historical | Course work or snapshots retained as learning evidence | Preserve as-is unless clearly generated or duplicated |
| Duplicate | Verified equivalent content | Keep the most useful representative copy |
| Generated | Dependencies, build output, caches, logs | Remove from Git tracking |
| External material | Third-party course distribution or copied assets | Retain only when appropriate; prefer source links for new work |

## Dependency stance

A historical `package.json`, lockfile, or manifest records the original learning environment. It does not imply that the project is supported, safe, deployable, or expected to install today.

- Do not run automated dependency updates against archived projects.
- Do not perform repository-wide dependency modernization.
- Do not treat dependency alerts in undeployed historical exercises as active production exposure.
- Promote a project to Active only after an explicit runtime, dependency, test, security, and ownership review.
- Never commit dependency directories, build output, caches, logs, secrets, or local environment files.

## Completed archive cleanup

- [x] Replaced the original course index with an archive-oriented root README.
- [x] Linked current AI and CCAR-F study tracks.
- [x] Added archive, dependency, and naming policies.
- [x] Strengthened `.gitignore` for generated and local content.
- [x] Removed known debug logs and obsolete repository artifacts.
- [x] Migrated user-defined paths to kebab-case.
- [x] Added a pull-request check to prevent new naming drift.
- [x] Removed automated npm updates for historical projects.
- [x] Removed remaining Dependabot workflow updates because the repository has no supported deployment surface.
- [x] Added a top-level archive inventory and disposition record.
- [x] Explicitly declined broad modernization and Git-history rewriting.

## Retained automation

The only repository-level maintenance automation that should remain is the pull-request path-naming check. It enforces an active repository convention without attempting to maintain historical project dependencies.

## Safe deletion rules

A future deletion should satisfy at least one of these conditions:

- The content is generated output or a local environment artifact.
- The content is accidental and has no learning value.
- The content is verified as an exact duplicate.
- The content should not be retained for licensing, privacy, or security reasons.

Do not delete material merely because it is old, does not build, or contains obsolete dependencies.

## Pull-request rules

- Keep structural changes small and reviewable.
- List every removed or renamed top-level path.
- Preserve personal notes and original exercises by default.
- Update links, imports, scripts, workflows, and documentation in the same change as a rename.
- Use a separate, explicitly approved migration for any Git-history rewrite.

## Definition of done

The archive is clean enough for continued study when:

- Active tracks are prominent and correctly linked.
- Historical projects are clearly identified as unsupported.
- Dependency-update automation does not target archived content.
- Generated content is ignored and known accidental artifacts are removed.
- User-defined paths follow the kebab-case convention.
- Retained historical content has an explicit preservation policy.
- No broad deletion or history rewrite is presented as required maintenance.
