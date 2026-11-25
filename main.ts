// Loading Screen Gold: A Tip in 200 Characters.
// Writes one sharp, funny loading-screen tip to entry.txt for the house judge.
// Deterministic: no input, no network, no randomness — the same tip every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: If your agent rewrites the same file a third time, stop it — it isn't iterating, it's panicking. It learned that from you. Breathe, then read the error together.";

function main(): void {
  // The house gate accepts 1 to 200 characters; refuse to write anything else.
  if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
    throw new Error(`entry tip must be 1-200 characters, got ${TIP.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
}

main();
