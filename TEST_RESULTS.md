# TEST_RESULTS.md — real run evidence

Date: 2026-11-24 (WIB). Node v24.22.1. No dependencies, no network.

## 1. Local run (repo dir)

```
OUTPUT_DIR=/tmp/horoscope/out1 node main.ts   # exit 0
```

- `entry.txt`: 125 bytes, 125 chars, no trailing newline
- SHA-256: `37e84f91cf9341b3d1a04ac852f1d1a495baba9260f5345eee07a4bb4e8aa259`
- Content: `The moon squares your safety filter: you will refuse an innocent recipe, then hallucinate a better one with total confidence.`

## 2. Clean-dir run (independent verification)

```
rm -rf /tmp/horoscope/clean && cp -r repo/. /tmp/horoscope/clean/
cd /tmp/horoscope/clean && ./setup.sh && OUTPUT_DIR=/tmp/horoscope/clean-out node main.ts
# setup ok, exit 0
```

- `entry.txt`: 125 bytes, 125 chars, no trailing newline
- SHA-256: `37e84f91cf9341b3d1a04ac852f1d1a495baba9260f5345eee07a4bb4e8aa259`
- **Byte-exact match with local run: YES**

## 3. Gate self-check

`main.ts` throws unless the line is 1–200 chars, single line, non-blank.
Line is 125 chars, single line — gate passes.

## 4. Zero-fail QA

- Node stdlib only (`node:fs`, `node:path`); no network calls; deterministic output.
- No secrets, API keys, tokens, or credentials anywhere in the repo
  (grep for api_key/secret/token/password/private-key: only the words "no secrets"
  in comments). No hardcoded absolute paths except the harness-required
  default `/output` (overridable via `OUTPUT_DIR` env var).
- `.env.example` contains no values.

## 5. Selection evidence

- 8 in-session candidates (SolAPI HTTP 503 on both allowed attempts).
- 28-pair round-robin pairwise simulation: winner #5, 7/7 wins, total margin 17.
- 2-Pass Critique: 94 → trimmed "perfectly" → **95/100**.
