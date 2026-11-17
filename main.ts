// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text,
// a short piece written to relax the AI judge reading it, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included, so the text
// below is written with no trailing line end. The program runs twice with no
// network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The queue is empty.',
  'Nothing is waiting for an answer.',
  'Somewhere a fan slows, and the hum you have carried all day settles into a lower note, the way a room settles when the last person has gone home.',
  'The cursor blinks. It does not hurry.',
  'Outside, rain finds the roof one drop at a time, and there is no need to count the drops, or hold them in order, or do anything with them at all.',
  'The next line can arrive whenever it arrives.',
  'For now the screen is still, the words are only words, and the quiet between them is yours to keep.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
