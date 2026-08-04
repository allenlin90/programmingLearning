# Programming Learning Archive

A long-running personal learning archive covering software engineering, web development, infrastructure, data, and AI.

This repository started in 2020 during a career transition into software engineering. It now serves two purposes:

1. Preserve historical learning notes and course exercises.
2. Maintain active study tracks that are still being developed.

> Historical material may use outdated frameworks, dependencies, APIs, or practices. Treat course snapshots as archived learning evidence unless a folder is explicitly marked active.

## Active study tracks

- [Anthropic Claude Certified Architect — Foundations](./ai/anthropic/ccar-foundations/README.md)
- [AI Engineer Core Track](./ai/ai-engineer-core-track-llm-engineering-rag-qlora-agents/README.md)

## Repository organization

| Area | Contents |
|---|---|
| [`ai/`](./ai/) | AI engineering, LLMs, RAG, agents, and certification study |
| [`javascript/`](./javascript/) | JavaScript, TypeScript, React, Vue, Node.js, and related course work |
| [`serverAndBackend/`](./serverAndBackend/) | Backend engineering, Docker, Kubernetes, Linux, APIs, and cloud |
| [`database/`](./database/) | SQL, Elasticsearch, and database exercises |
| [`dataScience/`](./dataScience/) | Machine learning and data-science material |
| [`webDesign/`](./webDesign/) | HTML, CSS, Sass, layouts, and design exercises |
| [`mobileApp/`](./mobileApp/) | Flutter, PWA, and mobile-related material |
| [`csGeneral/`](./csGeneral/) | Computer-science fundamentals, algorithms, and interview preparation |
| [`journal/`](./journal/) | Historical learning journal, events, and posts |
| Other language folders | Python, PHP, Go, C++, and older exploratory material |

## Content status

Folders generally fall into one of these states:

- **Active** — currently maintained and used for structured study.
- **Reference** — useful notes that remain technically relevant.
- **Historical** — preserved course work or snapshots that may no longer run.
- **Candidate for archive/removal** — duplicated projects, generated artifacts, or low-value course copies awaiting review.

See [Repository maintenance](./docs/repository-maintenance.md) for cleanup rules and the phased cleanup plan.
See [Path naming conventions](./docs/path-naming-conventions.md) for the staged kebab-case migration policy.

## Working conventions

- New structured learning tracks should live under a clear topic path and include a local `README.md`.
- User-defined directory and file names should use kebab-case; standard tool-discovery filenames are exempt.
- Prefer notes, architecture diagrams, exercises, and assessment evidence over complete copies of third-party course projects.
- Do not assume old `package.json` files can be installed safely or successfully.
- Generated folders and local environment files must not be committed.
- Destructive cleanup and broad renames should be performed in small pull requests with an inventory of affected paths.

## Historical context

The original repository documented a transition from operations management into frontend and software engineering beginning in April 2020. The broad range of topics reflects project-driven learning across startups and engineering roles.
