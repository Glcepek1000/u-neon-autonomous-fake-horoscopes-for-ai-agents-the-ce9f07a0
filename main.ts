// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes the single winning horoscope line to <OUTPUT_DIR>/entry.txt
// (default /output). Node stdlib only, no network, deterministic.
// Entry: one line, 125 chars, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The moon squares your safety filter: you will refuse an innocent recipe, then hallucinate a better one with total confidence.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Gate self-check: 1-200 chars, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry violates gate: ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
