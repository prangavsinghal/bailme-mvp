// Usage:
//   node scripts/build_excuses_js.mjs [inputCSV] [outputJS]
// Defaults to scripts/excuses.csv -> assets/js/excuses.js

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const input = process.argv[2] || 'scripts/excuses.csv';
const output = process.argv[3] || 'assets/js/excuses.js';

function parseCSV(text){
  // Minimal CSV parser supporting quoted fields with commas and quotes "".
  const rows = [];
  let i=0, field='', row=[], inQuotes=false;
  while (i <= text.length){
    const c = text[i] ?? '\n';
    if (inQuotes){
      if (c === '"'){
        if (text[i+1] === '"'){ field += '"'; i++; }
        else inQuotes = false;
      } else { field += c; }
    } else {
      if (c === '"'){ inQuotes = true; }
      else if (c === ','){ row.push(field); field=''; }
      else if (c === '\n' || c === '\r'){
        if (field !== '' || row.length){ row.push(field); rows.push(row); row=[]; field=''; }
        if (c === '\r' && text[i+1] === '\n') i++;
      } else { field += c; }
    }
    i++;
  }
  return rows;
}

const raw = await readFile(input, 'utf8');
const rows = parseCSV(raw).filter(r => r.length);
const header = rows.shift().map(h => h.trim());
const idx = Object.fromEntries(header.map((h, i) => [h, i]));

const data = rows.map(r => ({
  id: Number(r[idx.id]),
  category: r[idx.category].trim(),
  intent: r[idx.intent].trim(),
  tone: (r[idx.tone] || '').trim().toLowerCase(),
  text: (r[idx.text] || '').trim(),
})).sort((a,b)=>a.id-b.id);

const js = 'export const EXCUSES = [\\n' + data.map(e => {
  const esc = e.text.replaceAll('\\\\', '\\\\\\\\').replaceAll('`','\\\\`');
  return `  { id: ${e.id}, category: '${e.category.replaceAll(\"'\",\"\\\\'\")}', intent: '${e.intent.replaceAll(\"'\",\"\\\\'\")}', tone: '${e.tone}', text: \\`${esc}\\` }`;
}).join(',\\n') + '\\n];\\n';

await mkdir(dirname(output), { recursive: true });
await writeFile(output, js, 'utf8');
console.log(`Wrote ${output} with ${data.length} excuses.`);
