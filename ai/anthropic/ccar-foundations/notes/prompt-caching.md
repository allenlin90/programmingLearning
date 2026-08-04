# Prompt Caching — Remediation Module

## Learning objective

Given a Claude API request, identify the exact reusable prefix, predict whether a subsequent request can reuse it, and place cache breakpoints without allowing dynamic data to invalidate stable context.

## Mental model

Prompt caching reuses processing for an identical prompt prefix. It does not cache the generated answer.

The logical prompt order is:

```text
tools → system → messages
```

A breakpoint marks the end of a candidate reusable prefix:

```text
[stable tools][stable system][stable context] | breakpoint | [dynamic request]
```

Conceptually:

```text
cache key = hash(everything from the beginning through the breakpoint)
```

A later request can reuse the entry only when the relevant prefix matches exactly.

## Left-to-right matching

Compare:

```text
Request A: [A][B][C][D][E]
Request B: [A][B][C][X][E]
```

The common prefix ends after `C`. Once the requests diverge at the fourth block, a breakpoint that includes `D` cannot match Request B.

### Design rule

> Stable content belongs on the left. Dynamic content belongs on the right. Put the breakpoint on the last stable block.

## Dynamic-content invalidation

Bad layout:

```text
[current timestamp]
[stable operating instructions]
[large stable policy document] ← breakpoint
[current question]
```

The timestamp changes on every request, so the complete prefix through the breakpoint changes even though the policy document is identical.

Better layout:

```text
[stable operating instructions]
[large stable policy document] ← breakpoint
[current timestamp]
[current question]
```

Now the dynamic fields do not participate in the cached prefix.

## Explicit breakpoint example

```json
{
  "model": "<supported-claude-model>",
  "max_tokens": 2048,
  "system": [
    {
      "type": "text",
      "text": "You are an enterprise support assistant."
    },
    {
      "type": "text",
      "text": "<large-stable-policy-document>",
      "cache_control": {
        "type": "ephemeral"
      }
    }
  ],
  "messages": [
    {
      "role": "user",
      "content": "Current time: <dynamic>\nCustomer: <dynamic>\nQuestion: <dynamic>"
    }
  ]
}
```

Always verify model support, minimum cacheable length, TTL options, pricing, and current API syntax in the latest Anthropic documentation before production use.

## Multiple breakpoints

Use multiple breakpoints when content changes at different frequencies:

```text
[quarterly tools]                    ← breakpoint 1
[monthly organizational guidance]    ← breakpoint 2
[daily repository snapshot]          ← breakpoint 3
[growing stable conversation prefix] ← breakpoint 4
[current request]
```

The breakpoints are cumulative:

```text
BP1 = tools
BP2 = tools + organizational guidance
BP3 = tools + organizational guidance + repository snapshot
BP4 = tools + organizational guidance + repository snapshot + history
```

They are not four independently cached middle fragments.

## Common exam traps

1. **Placing the breakpoint after the user question** — this may cache a request-specific prefix with poor reuse.
2. **Putting timestamps or request IDs before stable context** — every change invalidates the later prefix.
3. **Treating breakpoints as independent fragments** — each represents a prefix from the start.
4. **Assuming semantic similarity is sufficient** — prefix matching depends on exact request content and configuration.
5. **Ignoring tool definitions** — tools occur before system and messages, so changes can affect downstream cache reuse.
6. **Caching tiny prefixes** — current models enforce minimum cacheable prompt lengths; verify the model-specific requirement.
7. **Assuming cached output** — prompt caching reduces repeated input processing, not output generation.

## Scenario 1 — breakpoint placement

A request contains:

1. Tool definitions changed quarterly
2. Coding standards changed monthly
3. Repository summary changed daily
4. User ID and timestamp changed every request
5. Current question

You have three explicit breakpoints. Place them and describe each cumulative prefix.

<details>
<summary>Answer</summary>

Place them after items 1, 2, and 3.

- BP1: tools
- BP2: tools + coding standards
- BP3: tools + coding standards + repository summary

Items 4 and 5 remain to the right because they are request-specific.
</details>

## Scenario 2 — diagnose the miss

Two requests contain the same 30,000-token policy manual and the same breakpoint, but the second request misses the cache. The system block begins with a newly generated correlation ID.

Explain the miss and redesign the request.

<details>
<summary>Answer</summary>

The correlation ID is part of the prefix preceding the breakpoint. Moving it to a block after the stable manual prevents it from changing the stable cache key.
</details>

## Scenario 3 — choose the useful boundary

A conversation contains a long, unchanged initial instruction and 20 prior turns. The latest turn changes on every request. Where should a breakpoint be placed to maximize reuse while preserving the latest dynamic turn?

<details>
<summary>Answer</summary>

Place the breakpoint at the end of the longest stable conversation prefix, immediately before the latest dynamic turn, subject to current API constraints and automatic cache lookup behavior.
</details>

## Retrieval check

Answer without notes:

1. What exactly is cached?
2. Why does changing an early tool description affect later cache reuse?
3. Are multiple breakpoints independent fragments?
4. Where should a current timestamp normally appear?
5. What evidence would prove that a cache architecture is working?

## Implementation review checklist

- [ ] Stable blocks precede volatile blocks.
- [ ] Breakpoints end on stable content.
- [ ] Tool ordering and definitions are deterministic.
- [ ] Dynamic IDs, clocks, and request metadata remain outside stable prefixes.
- [ ] Large documents are normalized consistently.
- [ ] Usage metrics distinguish cache creation, cache reads, and uncached input.
- [ ] TTL and cost assumptions are verified against current documentation.
- [ ] Cache misses are observable and explainable.
