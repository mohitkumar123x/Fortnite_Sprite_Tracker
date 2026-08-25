import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import toIco from 'to-ico';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public', 'favicon.svg'));
const out = join(root, 'public');
mkdirSync(out, { recursive: true });

function renderPng(size) {
  return new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
    background: 'rgba(0,0,0,0)',
  })
    .render()
    .asPng();
}

const sizes = {
  'favicon-32x32.png': 32,
  'favicon-96x96.png': 96,
  'apple-touch-icon.png': 180,
  'web-app-manifest-192x192.png': 192,
  'web-app-manifest-512x512.png': 512,
};

for (const [name, size] of Object.entries(sizes)) {
  writeFileSync(join(out, name), renderPng(size));
}

writeFileSync(join(out, 'favicon.ico'), await toIco([renderPng(32), renderPng(48)]));
console.log('Wrote favicon PNG and ICO files');
