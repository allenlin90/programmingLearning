# Programming Learning Archive

A long-running personal learning archive covering software engineering, web development, infrastructure, data, and AI.

This repository began in 2020 during a career transition into software engineering. It now has two explicit purposes:

1. Preserve historical notes, exercises, and course snapshots as learning evidence.
2. Host a small number of active study tracks.

> Most code in this repository is archival. Historical projects are not maintained, deployed, dependency-patched, or guaranteed to build on current runtimes.

## Active study tracks

- [Anthropic Claude Certified Architect — Foundations](./ai/anthropic/ccar-foundations/README.md)
- [AI Engineer Core Track](./ai/ai-engineer-core-track-llm-engineering-rag-qlora-agents/README.md)

## Repository organization

| Area | Status | Contents |
|---|---|---|
| [`ai/`](./ai) | Mixed: active and reference | AI engineering, LLMs, RAG, agents, and certification study |
| [`javascript/`](./javascript) | Historical | JavaScript, TypeScript, React, Vue, Node.js, and related course work |
| [`server-and-backend/`](./server-and-backend) | Historical | Backend engineering, Docker, Kubernetes, Linux, APIs, and cloud |
| [`database/`](./database) | Historical | SQL, Elasticsearch, and database exercises |
| [`data-science/`](./data-science) | Historical | Machine learning and data-science material |
| [`web-design/`](./web-design) | Historical | HTML, CSS, Sass, layouts, and design exercises |
| [`mobile-app/`](./mobile-app) | Historical | Flutter, PWA, and mobile-related material |
| [`cs-general/`](./cs-general) | Historical | Computer-science fundamentals, algorithms, and interview preparation |
| [`journal/`](./journal) | Historical | Learning journal, events, and posts |
| Other language folders | Historical | Python, PHP, Go, C++, and older exploratory material |

See [Archive inventory](./docs/archive-inventory.md) for the repository-level classification and retained-content decisions.

## Maintenance stance

- Historical projects are preserved as-is unless an item is clearly generated, accidental, or an exact duplicate.
- Old dependency manifests do not create a maintenance obligation.
- Automated dependency updates are disabled for archived course projects and repository workflows.
- New user-defined paths must use kebab-case; standard ecosystem filenames remain exempt.
- The pull-request path-naming check remains active to prevent new naming drift.
- Broad dependency upgrades, repository-wide modernization, and Git-history rewriting are intentionally out of scope.

## Working conventions

- Put new structured learning tracks under a clear topic path with a local `README.md`.
- Prefer notes, architecture diagrams, exercises, and assessment evidence over copied third-party distributions.
- Do not deploy or reuse historical examples without a fresh security, dependency, runtime, and licensing review.
- Never commit dependencies, build output, caches, logs, secrets, or local environment files.
- Use small, reviewable pull requests for future structural changes.

## Documentation

- [Repository maintenance](./docs/repository-maintenance.md)
- [Dependency policy](./docs/dependency-maintenance.md)
- [Archive inventory](./docs/archive-inventory.md)
- [Path naming conventions](./docs/path-naming-conventions.md)

## Historical context

The original repository documented a transition from operations management into frontend and software engineering beginning in April 2020. Its breadth reflects project-driven learning across courses, startups, and engineering roles rather than a maintained application portfolio.
