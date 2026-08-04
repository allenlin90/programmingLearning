# Four-Week CCAR-F Roadmap

Start date: **2026-08-04**  
Target cadence: **5 focused sessions per week**, 45–75 minutes each

## Operating model

Each study item moves through:

```text
Backlog → Learn → Practice → Review Due → Mastered
```

Do not move an item to Mastered based on reading alone. Use the mastery gate in [`README.md`](./README.md).

## Week 1 — Context management and prompt caching

### Objectives

- Explain exact left-to-right prefix matching.
- Separate stable and dynamic prompt content.
- Place explicit cache breakpoints correctly.
- Understand cumulative prefixes and the four-breakpoint limit.
- Compare default ephemeral caching with longer TTL options.
- Interpret cache-related usage fields and reason about cost.
- Recognize interactions among tools, system instructions, messages, images, and model configuration.

### Exercises

- [ ] Draw three prompts and mark reusable prefixes.
- [ ] Repair a request that embeds timestamps before stable context.
- [ ] Design breakpoints for quarterly, monthly, daily, and per-request data.
- [ ] Review one Anthropic API request containing `cache_control`.
- [ ] Complete two delayed-recall quizzes at least one day apart.

### Exit evidence

- At least 80% on two prompt-caching reviews.
- One written cache architecture with invalidation analysis.

## Week 2 — Agentic architecture and Claude Code

### Objectives

- Select single-agent, router, hub-and-spoke, supervisor, and sequential patterns.
- Define state, checkpoints, retries, idempotency, and HITL transitions.
- Distinguish deterministic orchestration from model-directed delegation.
- Configure project instructions using `CLAUDE.md` and scoped supporting files.
- Explain instruction discovery, repository conventions, and team workflows.
- Design safe permissions, validation steps, and review boundaries for Claude Code.

### Exercises

- [ ] Compare three orchestration patterns for the same support workflow.
- [ ] Design a resumable HITL state machine.
- [ ] Create a sample `CLAUDE.md` for a TypeScript service.
- [ ] Diagnose conflicting or overly broad repository instructions.
- [ ] Complete one architecture trade-off interview.

### Exit evidence

- One reviewed architecture decision record.
- One working Claude Code configuration example.

## Week 3 — Prompt engineering, extended thinking, tools, and MCP

### Objectives

- Structure system instructions, examples, constraints, and output contracts.
- Choose between normal responses and extended-thinking configurations.
- Design tools with narrow responsibilities, clear descriptions, and strict schemas.
- Handle tool errors, retries, authorization, and idempotency.
- Distinguish MCP tools, resources, and prompts.
- Place MCP servers at appropriate security and trust boundaries.

### Exercises

- [ ] Improve an ambiguous production prompt.
- [ ] Compare two thinking configurations for cost, latency, and reliability.
- [ ] Repair a weak JSON Schema tool definition.
- [ ] Map an operational-data integration to MCP primitives.
- [ ] Threat-model an MCP server with sensitive records.

### Exit evidence

- One prompt evaluation matrix.
- One MCP architecture diagram and tool contract set.

## Week 4 — Integration and exam simulation

### Objectives

- Combine caching, tools, MCP, RAG, orchestration, and observability.
- Optimize cost with caching and Batch API where appropriate.
- Diagnose architecture scenarios under exam time pressure.
- Identify distractors based on incorrect assumptions or excessive complexity.

### Exercises

- [ ] Complete a mixed-domain architecture case.
- [ ] Complete two timed mock exams.
- [ ] Build a weakness queue from incorrect answers.
- [ ] Re-test every confidence score below 3/5.
- [ ] Produce a one-page final review sheet from memory.

### Exit evidence

- At least 80% overall on the final two mocks.
- No domain below 70%.
- All high-impact weaknesses have an implementation or design artifact.

## Weekly review

At the end of each week, record:

- Topics completed
- Scores and confidence changes
- Incorrect assumptions
- Artifacts produced
- Tasks carried forward
- Next week’s highest-risk topic
