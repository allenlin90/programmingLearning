# Claude Certified Architect – Foundations Study Hub

This directory is the persistent control surface for CCAR-F preparation. GitHub tracks the roadmap, tasks, evidence, and review history; tutoring sessions provide explanations, quizzes, design reviews, and remediation.

> Certification availability and current official materials should be checked in Anthropic Partner Academy. Anthropic publicly introduced Claude Certified Architect, Foundations in March 2026 for solution architects building production applications with Claude.

## Current profile

- Level: Intermediate
- Strong areas: agentic workflows, HITL state tracking, Hybrid RAG, tool calling, and JSON Schema design
- Priority weakness: prompt caching mechanics
- Baseline note: reported as **4/16 points** and **80% item accuracy**; confirm the scoring model in the next assessment
- Study window: 4 weeks, starting 2026-08-04

## Dashboard

| Domain | Working weight | Current state | Confidence | Evidence target |
|---|---:|---|---:|---|
| Agentic architecture and orchestration | 27% | Strong / validate | 3/5 | Two architecture scenarios and one failure-mode review |
| Claude Code and `CLAUDE.md` workflows | 20% | Planned | 2/5 | Configure a sample repository and explain instruction precedence |
| Prompt engineering and extended thinking | 20% | Planned | 2/5 | Compare prompt patterns and select an appropriate thinking configuration |
| Tool design and MCP integration | 18% | Strong / validate | 3/5 | Design tools, resources, prompts, and an MCP boundary |
| Context, prompt caching, and Batch API | 15% | Active weakness | 1/5 | Correctly place cache breakpoints and calculate cost behavior |

The percentages above are the learner-provided working blueprint. Reconcile them with the current Partner Academy exam guide before the exam.

## Current sprint

**Prompt caching:** complete the note, solve three breakpoint-placement scenarios, inspect one API request, and explain cache invalidation without notes.

Start here:

1. Read [`notes/prompt-caching.md`](./notes/prompt-caching.md).
2. Open the master tracking issue and select the next unchecked task.
3. Ask the tutor to test the selected task before explaining it.
4. Record the result in [`progress/assessment-log.md`](./progress/assessment-log.md).
5. Move the task to mastered only after meeting the evidence gate below.

## Mastery gate

A topic is **mastered** only when all five conditions are met:

- Explain it accurately without notes.
- Solve a scenario question.
- Identify at least two common failure modes.
- Produce or review an implementation or architecture artifact.
- Score at least 80% on two reviews performed on different days.

## Session protocol

Use this prompt at the start of a tutoring session:

```text
Work on CCAR-F task <issue number or task name>.
Test retrieval first. Do not explain until I answer.
After remediation, give one architecture or code challenge.
Finish with a score, confidence adjustment, and next review date.
```

## Navigation

- [`ROADMAP.md`](./roadmap.md) — four-week learning sequence
- [`references.md`](./references.md) — official Anthropic source index
- [`notes/prompt-caching.md`](./notes/prompt-caching.md) — first remediation module
- [`progress/assessment-log.md`](./progress/assessment-log.md) — scores and evidence
- [`templates/study-task.md`](./templates/study-task.md) — reusable issue/task format
