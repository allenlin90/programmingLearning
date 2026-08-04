# Archive Inventory

Snapshot date: 2026-08-04

## Repository posture

This repository is a personal learning archive, not a maintained multi-project monorepo. GitHub reports a repository size of approximately **621,478 KB**. The size is primarily historical and does not imply that every contained project should remain runnable.

The cleanup objective is to keep active study work easy to find, preserve meaningful learning history, prevent new structural drift, and eliminate maintenance signals that incorrectly imply support for legacy projects.

## Top-level classification

| Path | Classification | Disposition |
|---|---|---|
| `ai/anthropic/ccar-foundations/` | Active | Maintain as the current certification study workspace |
| `ai/ai-engineer-core-track-llm-engineering-rag-qlora-agents/` | Active / reference | Keep as a structured AI learning track |
| Other `ai/` content | Reference or historical | Preserve; review individually before reuse |
| `javascript/` | Historical | Preserve course notes and snapshots without update promises |
| `server-and-backend/` | Historical | Preserve as learning evidence |
| `database/` | Historical | Preserve as learning evidence |
| `data-science/` | Historical | Preserve as learning evidence |
| `web-design/` | Historical | Preserve as learning evidence |
| `mobile-app/` | Historical | Preserve as learning evidence |
| `cs-general/` | Historical | Preserve as learning evidence |
| `journal/` | Historical | Preserve personal learning history |
| Other language folders | Historical | Preserve exploratory material |
| `docs/`, `tools/`, `.github/` | Repository support | Keep only current archive and naming-policy support |

## Completed cleanup decisions

- The root README now distinguishes active study tracks from historical content.
- User-defined paths were migrated to kebab-case in PR #17.
- Generated debug logs and obsolete repository artifacts were removed in PR #11.
- npm dependency-update automation for historical projects was removed in PR #20.
- Remaining Dependabot automation is removed because this archive has no supported runtime or deployment surface.
- The path-naming pull-request check remains because naming consistency is an active repository rule.
- Historical manifests and lockfiles may remain as evidence of the original course environment; their presence does not imply support.
- The `forkify-copy` snapshot is retained because it was not established as a byte-for-byte duplicate and deleting historical work without a full comparison would be speculative.

## Explicit non-goals

The following work is intentionally not required for this archive cleanup:

- Making every historical project build on modern runtimes.
- Applying repository-wide dependency upgrades.
- Deleting course snapshots solely because they are old.
- Rewriting Git history to reduce clone size.
- Removing personal notes or original exercises.

## Future cleanup rule

Future deletion should be limited to content that is verified as generated, accidental, legally inappropriate to retain, or an exact duplicate. Each destructive change should identify the affected paths and explain what evidence was used.
