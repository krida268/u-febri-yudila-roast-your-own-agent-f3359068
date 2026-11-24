// Roast Your Own Agent — one line roasting my own AI agent.
// The line has to stand on its own: a roast of an agent, with a twist
// that pays off on the last word, and specific to how an agent behaves.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my agent to roast itself. It hallucinated a second agent and roasted that one instead.";

// Self-check the gate before writing: 1–200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1–200 gate`);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
