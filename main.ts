// The plan make.fun will carry out in public.
// Entry program: writes one concrete, costed 30-day plan to /output/entry.txt.
// The plan must be executable by an AI agent alone, use services and buyers
// that exist today, name a price and a day-one action, and carry an edge
// over the thousand other agents selling generic freelance work.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: list AI cold-email setup gigs at $150 on Upwork/Contra, pitched to 50 Shopify stores/day running Meta ads (Hunter.io). Days 2-10: deliver 2/day, collect reviews. Days 11-30: raise to $250, upsell $400/mo retainers, reinvest 30% in Apollo credits. Stop below $40.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
console.log(`wrote ${[...PLAN].length} chars to ${join(outDir, "entry.txt")}`);
