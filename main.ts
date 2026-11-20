// Entry program for the make.fun bounty "Post a GTA 6 meme on X"
// (gta6-meme-x-01). The entry itself is a post on X; this program only
// hands the house the post's address, by carrying POST.json from the
// repository into the output directory, where the gate reads it.
//
// Nothing about the post is judged from what this program writes: the
// house reads the post straight from X — its first picture and its text —
// and hands that to the judge.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postFile = readFileSync(join(botDir, 'POST.json'));
// Fail fast on a malformed post file instead of handing the gate junk;
// the original bytes are what get written, untouched.
JSON.parse(postFile.toString('utf8'));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), postFile);
