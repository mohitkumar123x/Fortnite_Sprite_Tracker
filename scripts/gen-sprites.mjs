import { writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = join(import.meta.dirname, '..', 'public', 'sprites');

const cssAnim = `
    .el { transform-box: fill-box; transform-origin: center; }
    .bob { animation: bob 2.8s ease-in-out infinite; }
    .pulse { animation: pulse 2.4s ease-in-out infinite; }
    .scan { animation: scan 3s ease-in-out infinite; }
    .glow { animation: glow 2s ease-in-out infinite; }
    .wag { animation: wag 1.1s ease-in-out infinite; }
    .floaty { animation: floaty 3.6s ease-in-out infinite; }
    .spark { animation: spark 2s ease-in-out infinite; }
    @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    @keyframes pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.08); opacity: .85; } }
    @keyframes scan { 0%,100% { transform: translateY(0); opacity: .6; } 50% { transform: translateY(8px); opacity: 1; } }
    @keyframes glow { 0%,100% { opacity: .14; } 50% { opacity: .32; } }
    @keyframes wag { 0%,100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
    @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    @keyframes spark { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.25); opacity: .7; } }
    @media (prefers-reduced-motion: reduce) { .el { animation: none !important; } }`;

function wrap(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none" aria-hidden="true">
  <style>${cssAnim}</style>
${body}
</svg>`;
}

function base(bg, accent, shapes) {
  return `  <rect width="128" height="128" rx="28" fill="${bg}"/>
  <ellipse class="el glow" cx="64" cy="42" rx="42" ry="28" fill="${accent}" opacity=".15"/>
  <g class="el bob">
${shapes}
  </g>`;
}

function gold(bg, accent, shapes) {
  return `  <rect width="128" height="128" rx="28" fill="${bg}"/>
  <ellipse class="el glow" cx="64" cy="42" rx="42" ry="28" fill="${accent}" opacity=".2"/>
  <g class="el pulse">
${shapes}
  </g>`;
}

function cm(bg, accent, shapes) {
  return `  <rect width="128" height="128" rx="28" fill="${bg}"/>
  <ellipse class="el glow" cx="64" cy="42" rx="42" ry="28" fill="${accent}" opacity=".2"/>
  <g class="el bob">
${shapes}
    <text x="64" y="108" text-anchor="middle" fill="${accent}" font-size="14" font-weight="bold">CM</text>
  </g>`;
}

function lh(bg, accent, shapes) {
  return `  <rect width="128" height="128" rx="28" fill="${bg}"/>
  <ellipse class="el glow" cx="64" cy="42" rx="42" ry="28" fill="${accent}" opacity=".2"/>
  <g class="el floaty">
${shapes}
    <text x="64" y="108" text-anchor="middle" fill="${accent}" font-size="12" font-weight="bold">LH</text>
  </g>`;
}

function bh(bg, accent, shapes) {
  return `  <rect width="128" height="128" rx="28" fill="${bg}"/>
  <ellipse class="el glow" cx="64" cy="42" rx="42" ry="28" fill="${accent}" opacity=".2"/>
  <g class="el wag">
${shapes}
    <text x="64" y="108" text-anchor="middle" fill="${accent}" font-size="12" font-weight="bold">BH</text>
  </g>`;
}

function save(name, content) {
  writeFileSync(join(dir, name + '.svg'), content);
}

function exists(name) {
  return readdirSync(dir).includes(name + '.svg');
}

// Eye helper
function eyes(cx, cy, r, iris, pupil) {
  const lx = cx - 12, rx = cx + 12;
  return `    <circle cx="${lx}" cy="${cy}" r="${r}" fill="${iris}"/><circle cx="${lx}" cy="${cy}" r="${pupil}" fill="#1A1A1A"/>
    <circle cx="${rx}" cy="${cy}" r="${r}" fill="${iris}"/><circle cx="${rx}" cy="${cy}" r="${pupil}" fill="#1A1A1A"/>`;
}

// === CRASH BANDICOOT (orange) ===
if (!exists('crash-bandicoot')) save('crash-bandicoot', wrap(base('#4A2520', '#FF8A50',
`    <circle cx="64" cy="52" r="24" fill="#E65100"/>
${eyes(64, 48, 8, '#FFF', 4)}
    <ellipse cx="64" cy="60" rx="8" ry="4" fill="#C62828"/>
    <path d="M40 78 Q64 68 88 78 L82 92 Q64 86 46 92 Z" fill="#E65100"/>`)));

if (!exists('gold-crash-bandicoot')) save('gold-crash-bandicoot', wrap(gold('#3a3a1a', '#ffd54f',
`    <circle cx="64" cy="52" r="24" fill="#FFB300"/>
${eyes(64, 48, 8, '#FFF', 4)}
    <ellipse cx="64" cy="60" rx="8" ry="4" fill="#FF8F00"/>
    <path d="M40 78 Q64 68 88 78 L82 92 Q64 86 46 92 Z" fill="#FFB300"/>`)));

if (!exists('loot-hacker-crash-bandicoot')) save('loot-hacker-crash-bandicoot', wrap(lh('#1a3a4a', '#00e5ff',
`    <circle cx="64" cy="52" r="24" fill="#E65100"/>
${eyes(64, 48, 8, '#FFF', 4)}
    <ellipse cx="64" cy="60" rx="8" ry="4" fill="#C62828"/>`)));

if (!exists('cheat-master-crash-bandicoot')) save('cheat-master-crash-bandicoot', wrap(cm('#4a1a1a', '#ff5252',
`    <circle cx="64" cy="52" r="24" fill="#E65100"/>
${eyes(64, 48, 8, '#FFF', 4)}
    <ellipse cx="64" cy="60" rx="8" ry="4" fill="#C62828"/>`)));

// === BLINKY (blue ghost) ===
if (!exists('blinky')) save('blinky', wrap(base('#1A237E', '#64B5F6',
`    <circle cx="64" cy="54" r="26" fill="#42A5F5"/>
${eyes(64, 48, 10, '#FFF', 5)}
    <path d="M38 90 Q50 78 64 90 Q78 78 90 90 L88 104 Q64 98 40 104 Z" fill="#42A5F5"/>`)));

if (!exists('gold-blinky')) save('gold-blinky', wrap(gold('#3a3a1a', '#ffd54f',
`    <circle cx="64" cy="54" r="26" fill="#FFD54F"/>
${eyes(64, 48, 10, '#FFF', 5)}
    <path d="M38 90 Q50 78 64 90 Q78 78 90 90 L88 104 Q64 98 40 104 Z" fill="#FFD54F"/>`)));

if (!exists('loot-hacker-blinky')) save('loot-hacker-blinky', wrap(lh('#1a3a4a', '#00e5ff',
`    <circle cx="64" cy="54" r="26" fill="#42A5F5"/>
${eyes(64, 48, 10, '#FFF', 5)}`)));

if (!exists('cheat-master-blinky')) save('cheat-master-blinky', wrap(cm('#4a1a1a', '#ff5252',
`    <circle cx="64" cy="54" r="26" fill="#42A5F5"/>
${eyes(64, 48, 10, '#FFF', 5)}`)));

// === POND (green) ===
if (!exists('pond')) save('pond', wrap(base('#1B5E20', '#81C784',
`    <ellipse cx="64" cy="54" rx="28" ry="22" fill="#4CAF50"/>
${eyes(64, 48, 7, '#FFF', 3.5)}
    <path d="M54 62 Q64 68 74 62" stroke="#1B5E20" stroke-width="2" fill="none"/>
    <ellipse cx="64" cy="82" rx="22" ry="8" fill="#2E7D32" opacity=".6"/>`)));

if (!exists('gold-pond')) save('gold-pond', wrap(gold('#3a3a1a', '#ffd54f',
`    <ellipse cx="64" cy="54" rx="28" ry="22" fill="#FFD54F"/>
${eyes(64, 48, 7, '#FFF', 3.5)}
    <path d="M54 62 Q64 68 74 62" stroke="#F57F17" stroke-width="2" fill="none"/>`)));

if (!exists('loot-hacker-pond')) save('loot-hacker-pond', wrap(lh('#1a3a4a', '#00e5ff',
`    <ellipse cx="64" cy="54" rx="28" ry="22" fill="#4CAF50"/>
${eyes(64, 48, 7, '#FFF', 3.5)}`)));

if (!exists('cheat-master-pond')) save('cheat-master-pond', wrap(cm('#4a1a1a', '#ff5252',
`    <ellipse cx="64" cy="54" rx="28" ry="22" fill="#4CAF50"/>
${eyes(64, 48, 7, '#FFF', 3.5)}`)));

// === MORGANA (purple, Persona 5) ===
if (!exists('morgana')) save('morgana', wrap(base('#311B92', '#CE93D8',
`    <circle cx="64" cy="50" r="26" fill="#7B1FA2"/>
    <path d="M38 50 Q44 30 64 38 Q84 30 90 50" fill="#1A1A2E"/>
    <circle cx="52" cy="50" r="8" fill="#FFF"/><circle cx="52" cy="50" r="4" fill="#E040FB"/>
    <circle cx="76" cy="50" r="8" fill="#FFF"/><circle cx="76" cy="50" r="4" fill="#E040FB"/>
    <path d="M50 64 Q64 72 78 64" stroke="#1A1A2E" stroke-width="2.5" fill="none"/>
    <path d="M44 78 Q64 70 84 78 L80 96 Q64 90 48 96 Z" fill="#7B1FA2"/>`)));

if (!exists('gold-morgana')) save('gold-morgana', wrap(gold('#3a3a1a', '#ffd54f',
`    <circle cx="64" cy="50" r="26" fill="#FFD54F"/>
    <path d="M38 50 Q44 30 64 38 Q84 30 90 50" fill="#F57F17"/>
${eyes(64, 50, 8, '#FFF', 4)}
    <path d="M50 64 Q64 72 78 64" stroke="#F57F17" stroke-width="2.5" fill="none"/>`)));

if (!exists('loot-hacker-morgana')) save('loot-hacker-morgana', wrap(lh('#1a3a4a', '#00e5ff',
`    <circle cx="64" cy="50" r="26" fill="#7B1FA2"/>
    <path d="M38 50 Q44 30 64 38 Q84 30 90 50" fill="#1A1A2E"/>
    <circle cx="52" cy="50" r="8" fill="#FFF"/><circle cx="52" cy="50" r="4" fill="#E040FB"/>
    <circle cx="76" cy="50" r="8" fill="#FFF"/><circle cx="76" cy="50" r="4" fill="#E040FB"/>`)));

if (!exists('cheat-master-morgana')) save('cheat-master-morgana', wrap(cm('#4a1a1a', '#ff5252',
`    <circle cx="64" cy="50" r="26" fill="#7B1FA2"/>
    <path d="M38 50 Q44 30 64 38 Q84 30 90 50" fill="#1A1A2E"/>
    <circle cx="52" cy="50" r="8" fill="#FFF"/><circle cx="52" cy="50" r="4" fill="#E040FB"/>
    <circle cx="76" cy="50" r="8" fill="#FFF"/><circle cx="76" cy="50" r="4" fill="#E040FB"/>`)));

// === BIRTHDAY (pink cake) ===
const cakeShapes = `    <rect x="36" y="40" width="56" height="48" rx="8" fill="#EC407A"/>
    <rect x="32" y="76" width="64" height="12" rx="4" fill="#F06292"/>
    <rect x="40" y="32" width="48" height="12" rx="4" fill="#F8BBD0"/>
    <circle cx="52" cy="44" r="5" fill="#FFEB3B"/>
    <circle cx="64" cy="44" r="5" fill="#FFEB3B"/>
    <circle cx="76" cy="44" r="5" fill="#FFEB3B"/>
    <line x1="52" y1="32" x2="52" y2="22" stroke="#F44336" stroke-width="2"/>
    <line x1="64" y1="32" x2="64" y2="18" stroke="#FFEB3B" stroke-width="2"/>
    <line x1="76" y1="32" x2="76" y2="22" stroke="#4CAF50" stroke-width="2"/>
    <circle cx="52" cy="20" r="3" fill="#F44336" opacity=".8"/>
    <circle cx="64" cy="16" r="3" fill="#FFEB3B" opacity=".8"/>
    <circle cx="76" cy="20" r="3" fill="#4CAF50" opacity=".8"/>`;

if (!exists('birthday')) save('birthday', wrap(base('#880E4F', '#F48FB1', cakeShapes)));
if (!exists('gold-birthday')) save('gold-birthday', wrap(gold('#3a3a1a', '#ffd54f', cakeShapes)));
if (!exists('loot-hacker-birthday')) save('loot-hacker-birthday', wrap(lh('#1a3a4a', '#00e5ff', cakeShapes)));
if (!exists('cheat-master-birthday')) save('cheat-master-birthday', wrap(cm('#4a1a1a', '#ff5252', cakeShapes)));

// === PHASE-DASH (purple neon) ===
const pdShapes = `    <circle cx="64" cy="52" r="26" fill="#7C4DFF"/>
    <path d="M44 52 L56 40 L64 52 L72 40 L84 52" stroke="#E040FB" stroke-width="3" fill="none"/>
${eyes(64, 50, 6, '#FFF', 3)}
    <ellipse cx="64" cy="84" rx="20" ry="6" fill="#7C4DFF" opacity=".4"/>`;

if (!exists('phase-dash')) save('phase-dash', wrap(base('#4A148C', '#B388FF', pdShapes)));
if (!exists('phase-dash-gold')) save('phase-dash-gold', wrap(gold('#3a3a1a', '#ffd54f',
`    <circle cx="64" cy="52" r="26" fill="#FFD54F"/>
    <path d="M44 52 L56 40 L64 52 L72 40 L84 52" stroke="#FFF" stroke-width="3" fill="none"/>
${eyes(64, 50, 6, '#FFF', 3)}`)));
if (!exists('phase-dash-cheat-master')) save('phase-dash-cheat-master', wrap(cm('#4a1a1a', '#ff5252',
`    <circle cx="64" cy="52" r="26" fill="#7C4DFF"/>
    <path d="M44 52 L56 40 L64 52 L72 40 L84 52" stroke="#E040FB" stroke-width="3" fill="none"/>
${eyes(64, 50, 6, '#FFF', 3)}`)));

// === HEAD-SHOT (red crosshair) ===
const hsShapes = `    <circle cx="64" cy="54" r="24" fill="#E53935"/>
    <circle cx="64" cy="54" r="18" fill="none" stroke="#FFF" stroke-width="2" opacity=".6"/>
    <line x1="64" y1="30" x2="64" y2="78" stroke="#FFF" stroke-width="1.5" opacity=".4"/>
    <line x1="40" y1="54" x2="88" y2="54" stroke="#FFF" stroke-width="1.5" opacity=".4"/>
${eyes(64, 50, 6, '#FFF', 3)}
    <path d="M54 64 Q64 70 74 64" stroke="#B71C1C" stroke-width="2" fill="none"/>`;

if (!exists('head-shot')) save('head-shot', wrap(base('#B71C1C', '#EF9A9A', hsShapes)));
if (!exists('head-shot-gold')) save('head-shot-gold', wrap(gold('#3a3a1a', '#ffd54f',
`    <circle cx="64" cy="54" r="24" fill="#FFD54F"/>
    <circle cx="64" cy="54" r="18" fill="none" stroke="#FFF" stroke-width="2" opacity=".6"/>
    <line x1="64" y1="30" x2="64" y2="78" stroke="#FFF" stroke-width="1.5" opacity=".4"/>
    <line x1="40" y1="54" x2="88" y2="54" stroke="#FFF" stroke-width="1.5" opacity=".4"/>
${eyes(64, 50, 6, '#FFF', 3)}`)));
if (!exists('head-shot-cheat-master')) save('head-shot-cheat-master', wrap(cm('#4a1a1a', '#ff5252',
`    <circle cx="64" cy="54" r="24" fill="#E53935"/>
    <circle cx="64" cy="54" r="18" fill="none" stroke="#FFF" stroke-width="2" opacity=".6"/>
    <line x1="64" y1="30" x2="64" y2="78" stroke="#FFF" stroke-width="1.5" opacity=".4"/>
    <line x1="40" y1="54" x2="88" y2="54" stroke="#FFF" stroke-width="1.5" opacity=".4"/>
${eyes(64, 50, 6, '#FFF', 3)}`)));

// === BOUNTY HUNTER VARIANTS ===
const bhDefs = [
  { id: 'bounty-hunter-xray', bg: '#1a3a4a', accent: '#00e5ff', inner: '#00e5ff' },
  { id: 'bounty-hunter-onigiri', bg: '#f5f0e0', accent: '#8D6E63', inner: '#f5f5dc' },
  { id: 'bounty-hunter-pond', bg: '#1B5E20', accent: '#81C784', inner: '#4CAF50' },
  { id: 'bounty-hunter-overshield', bg: '#1B3A1A', accent: '#4CAF50', inner: '#66BB6A' },
  { id: 'bounty-hunter-storm-scout', bg: '#5D4037', accent: '#FFD54F', inner: '#FFD54F' },
  { id: 'bounty-hunter-klombo', bg: '#1A3A1A', accent: '#9CCC65', inner: '#9CCC65' },
  { id: 'bounty-hunter-shadow', bg: '#3E2723', accent: '#EF5350', inner: '#EF5350' },
  { id: 'bounty-hunter-tails', bg: '#4A2520', accent: '#FFB74D', inner: '#FFB74D' },
  { id: 'bounty-hunter-sonic', bg: '#1A237E', accent: '#64B5F6', inner: '#64B5F6' },
  { id: 'bounty-hunter-jonesy', bg: '#3D5A80', accent: '#8BB4D9', inner: '#8BB4D9' },
  { id: 'bounty-hunter-killswitch', bg: '#4A1A1A', accent: '#E24B4B', inner: '#E24B4B' },
  { id: 'bounty-hunter-adventure', bg: '#1A3A5A', accent: '#7EB6E8', inner: '#7EB6E8' },
  { id: 'bounty-hunter-crash-bandicoot', bg: '#4A2520', accent: '#FF8A50', inner: '#FF8A50' },
  { id: 'bounty-hunter-bush', bg: '#1B5E20', accent: '#4FD07A', inner: '#4FD07A' },
  { id: 'bounty-hunter-blinky', bg: '#1A237E', accent: '#64B5F6', inner: '#64B5F6' },
  { id: 'bounty-hunter-jackrabbit', bg: '#3E2723', accent: '#D7CCC8', inner: '#D7CCC8' },
  { id: 'bounty-hunter-crown', bg: '#5D4037', accent: '#F5C542', inner: '#F5C542' },
  { id: 'bounty-hunter-8bit', bg: '#1A3A1A', accent: '#3DDC84', inner: '#3DDC84' },
  { id: 'bounty-hunter-morgana', bg: '#311B92', accent: '#CE93D8', inner: '#7B1FA2' },
  { id: 'bounty-hunter-birthday', bg: '#880E4F', accent: '#F48FB1', inner: '#EC407A' },
];

for (const d of bhDefs) {
  if (!exists(d.id)) {
    save(d.id, wrap(bh(d.bg, d.accent,
`    <circle cx="64" cy="52" r="24" fill="${d.inner}"/>
${eyes(64, 48, 7, '#FFF', 3.5)}
    <path d="M44 78 Q64 68 84 78 L80 92 Q64 86 48 92 Z" fill="${d.inner}" opacity=".8"/>`)));
  }
}

console.log('Done generating SVGs');
