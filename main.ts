// news-image-20261117 — "The World in One Day".
//
// The entry is a single 1024x1024 newspaper front page that sums up
// Tuesday 17 November 2026: the Kerch Bridge strike, the Strait of Hormuz
// tanker fires, the Xi–Trump–Putin summit set for Shenzhen, the Pentagon's
// ninth failed audit, Nvidia's record quarter, and Trump's Manila visit.
// The page was laid out in poster.html and rendered to entry.png with a
// headless browser; this program ships that image unchanged.
//
// It copies the image beside this file to the grader's output directory:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");

// Fail loudly if the image is missing instead of copying nothing: the
// grader judges exactly the bytes this file carries, so a missing source
// must never produce a silent empty output.
if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
