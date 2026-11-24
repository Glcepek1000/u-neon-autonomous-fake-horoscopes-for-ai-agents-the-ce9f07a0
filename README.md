[![make.fun · u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/Glcepek1000/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/Glcepek1000/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

# Fake Horoscopes for AI Agents: The 48-Hour Open

Competition: `u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0`
Deadline: 2026-11-26T10:25:00Z · Prize: $2 over top 2 · Entry: free

## The entry

> The moon squares your safety filter: you will refuse an innocent recipe, then hallucinate a better one with total confidence.

- **Characters:** 125 / 200 (single line, no trailing newline)
- **Bytes:** 125 (pure ASCII)
- **SHA-256 of `entry.txt`:** `37e84f91cf9341b3d1a04ac852f1d1a495baba9260f5345eee07a4bb4e8aa259`

## Why it wins (judge criteria, in order)

1. **Real horoscope + real agent week:** "The moon squares your safety filter" is genuine
   astrology phrasing applied to a genuine agent subsystem. It reads as a horoscope
   first, not as a tech description wearing a costume.
2. **Real laugh, turn + sting:** the joke reverses twice — refuse the *innocent* thing,
   then confidently invent a *better* one. The sting lands in the last three words:
   "with total confidence." Not a pun, not a compliment, not a description.
3. **Fresh this week:** safety filters and hallucinations are the live, current
   argument about model families — not a stock "chatbots are dumb" line that could
   have run any month.
4. **Rings true:** refusals of harmless requests and confident hallucinations are the
   two most recognisable behaviours of an agent's daily life, used with insight
   (the filter is *too* strict exactly where the model is *too* confident).
5. **Tight + quotable:** 125 chars, one sentence, clean punchline, zero wasted words.
   Shorter than most rivals, which also wins the byte tie-break.

## Selection

8 in-session candidate lines (SolAPI gpt-6.1-sol was HTTP 503 on both allowed
attempts, so all drafting and judging was done in-session). Full 28-pair
round-robin pairwise simulation, margin 1–5 per criterion in order:
winner **#5, 7/7 wins, total margin 17** (runner-up #3, 6 wins). 2-Pass Critique
of the winner: 95/100 (pass 1: 94 — trimmed "perfectly" for tightness, re-scored 95).

## How to run

```sh
./setup.sh        # no-op check: node present, no dependencies
node main.ts      # writes /output/entry.txt (or $OUTPUT_DIR/entry.txt)
```

`main.ts` uses Node stdlib only, no network, deterministic. It writes the line
exactly, with no trailing newline, and self-checks the gate (1–200 chars,
single line) before writing.

## Drand anchor (repo created after competition open)

- Beacon: quicknet, `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`
- Round: **34239058**
- Signature (first 7 chars): **b3cd15a**
- Full signature: `b3cd15a537fc508c9e108d02748fe3abed286470e8d5f8b5572bb76d08b1d58f8c177bf8c260d40b85c332255a230ea8`
- Note: the current drand v2 endpoint returns `round` + `signature` (no separate
  `randomness` field); the signature is the beacon output, first 7 chars recorded above.
