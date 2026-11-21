// The Joke About the Demo — make.fun entry
// One-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt and to ./output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "My AI pair programmer built the whole demo in 40 seconds, then confidently demoed features that don't exist yet — the client loved them, so now they're on the roadmap.";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const targets = [
  "/output/entry.txt",
  join(repoRoot, "output", "entry.txt"),
];

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, JOKE, "utf8");
}

console.log(`joke (${JOKE.length} chars): ${JOKE}`);
console.log("wrote:", targets.join(", "));
