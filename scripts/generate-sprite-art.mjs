import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.cwd(), 'public', 'sprites');
mkdirSync(out, { recursive: true });

const motionCss = `
    .el { transform-box: fill-box; transform-origin: center; }
    .bob { animation: bob 2.8s ease-in-out infinite; }
    .sway { animation: sway 3.2s ease-in-out infinite; }
    .sway-slow { animation: sway 4.4s ease-in-out infinite; }
    .pulse { animation: pulse 2.4s ease-in-out infinite; }
    .spin { animation: spin 12s linear infinite; }
    .spin-rev { animation: spin 16s linear infinite reverse; }
    .dash { animation: dash 1.6s ease-in-out infinite; }
    .wag { animation: wag 1.1s ease-in-out infinite; }
    .wag-opp { animation: wag 1.1s ease-in-out infinite reverse; }
    .twitch { animation: twitch 2.6s ease-in-out infinite; }
    .twitch-d { animation: twitch 2.6s ease-in-out infinite; animation-delay: .18s; }
    .flicker { animation: flicker 1.4s ease-in-out infinite; }
    .wave { animation: wave 2.2s ease-in-out infinite; }
    .floaty { animation: floaty 3.6s ease-in-out infinite; }
    .blink { animation: blink 3.8s steps(1, end) infinite; }
    .spark { animation: spark 2s ease-in-out infinite; }
    .flash { animation: flash 2.8s ease-in-out infinite; }
    .swim { animation: swim 2.4s ease-in-out infinite; }
    .drip { animation: drip 2.6s ease-in-out infinite; }
    .halo { opacity: .14; animation: halo 2.8s ease-in-out infinite; pointer-events: none; }
    @keyframes halo { 0%,100% { opacity: .14; } 50% { opacity: .32; } }
    @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    @keyframes sway { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
    @keyframes pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.08); opacity: .85; } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes dash { 0%,100% { transform: translateX(-3px); } 50% { transform: translateX(4px); } }
    @keyframes wag { 0%,100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
    @keyframes twitch { 0%,86%,100% { transform: rotate(0); } 90% { transform: rotate(-8deg); } 94% { transform: rotate(6deg); } }
    @keyframes flicker { 0%,100% { transform: scaleY(1) translateY(0); } 40% { transform: scaleY(1.08) translateY(-2px); } 70% { transform: scaleY(.96) translateY(1px); } }
    @keyframes wave { 0%,100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
    @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    @keyframes blink { 0%,92%,100% { transform: scaleY(1); } 94%,96% { transform: scaleY(.12); } }
    @keyframes spark { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.25); opacity: .7; } }
    @keyframes flash { 0%,72%,100% { opacity: 1; } 78% { opacity: .35; } 84% { opacity: 1; } }
    @keyframes swim { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-3px) rotate(2deg); } }
    @keyframes drip { 0%,100% { transform: translateY(0) scaleY(1); } 50% { transform: translateY(4px) scaleY(1.04); } }
    @media (prefers-reduced-motion: reduce) {
      .el, .halo { animation: none !important; }
    }
`;

function frame(bg, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none" aria-hidden="true">
  <style>${motionCss}</style>
  <rect width="128" height="128" rx="28" fill="${bg}"/>
  <ellipse class="halo" cx="64" cy="42" rx="42" ry="28" fill="#ffffff"/>
  ${body}
</svg>
`;
}

const art = {
  bush: frame(
    '#1F6B3A',
    `<g class="el bob">
       <ellipse cx="64" cy="78" rx="36" ry="26" fill="#2F9A52"/>
       <ellipse class="el sway-slow" cx="46" cy="58" rx="22" ry="20" fill="#3CB86A"/>
       <ellipse class="el sway" cx="82" cy="56" rx="24" ry="22" fill="#2E8B4F"/>
       <ellipse cx="64" cy="48" rx="20" ry="18" fill="#4FD07A"/>
       <circle class="el spark" cx="52" cy="70" r="4" fill="#C43B4B"/>
       <circle class="el spark" cx="74" cy="76" r="3.5" fill="#C43B4B"/>
     </g>`,
  ),
  adventure: frame(
    '#2B5C8A',
    `<g class="el bob">
       <path d="M22 96 L64 36 L106 96 Z" fill="#E8D5B0"/>
       <path d="M46 96 L64 52 L82 96 Z" fill="#C4A574"/>
       <rect x="60" y="28" width="8" height="22" rx="2" fill="#F4F0EA"/>
       <path class="el sway" d="M68 30 L92 38 L68 46 Z" fill="#E24B4B"/>
     </g>`,
  ),
  '8-bit': frame(
    '#1A1A2E',
    `<g class="el bob">
       <rect x="32" y="32" width="64" height="64" fill="#3DDC84"/>
       <rect class="el blink" x="44" y="48" width="10" height="10" fill="#1A1A2E"/>
       <rect class="el blink" x="74" y="48" width="10" height="10" fill="#1A1A2E"/>
       <rect x="48" y="72" width="32" height="8" fill="#1A1A2E"/>
       <rect x="40" y="72" width="8" height="8" fill="#1A1A2E"/>
       <rect x="80" y="72" width="8" height="8" fill="#1A1A2E"/>
     </g>`,
  ),
  jonesy: frame(
    '#3D5A80',
    `<g class="el bob">
       <circle cx="64" cy="54" r="22" fill="#F2C9A0"/>
       <path class="el sway-slow" d="M42 48 Q64 28 86 48 L80 42 Q64 34 48 42 Z" fill="#3A2A1C"/>
       <rect x="48" y="76" width="32" height="28" rx="8" fill="#4A7C59"/>
       <circle class="el blink" cx="56" cy="52" r="3" fill="#1A1A1A"/>
       <circle class="el blink" cx="72" cy="52" r="3" fill="#1A1A1A"/>
     </g>`,
  ),
  killswitch: frame(
    '#2A2A32',
    `<g class="el spin">
       <circle cx="64" cy="64" r="34" stroke="#E8E8E8" stroke-width="6"/>
       <path d="M64 30 V44 M64 84 V98 M30 64 H44 M84 64 H98" stroke="#E8E8E8" stroke-width="6" stroke-linecap="round"/>
     </g>
     <circle class="el pulse" cx="64" cy="64" r="8" fill="#E24B4B"/>`,
  ),
  sonic: frame(
    '#1565C0',
    `<g class="el dash">
       <path d="M28 70 L58 40 L58 54 L100 54 L100 86 L58 86 L58 100 Z" fill="#F4F0EA"/>
       <path d="M28 86 L52 64 L52 74 L88 74 L88 98 L52 98 L52 108 Z" fill="#90CAF9" opacity="0.85"/>
     </g>`,
  ),
  tails: frame(
    '#E07A2F',
    `<g transform="rotate(-28 46 72)"><ellipse class="el wag" cx="46" cy="72" rx="16" ry="32" fill="#FFD54A"/></g>
     <g transform="rotate(28 82 72)"><ellipse class="el wag-opp" cx="82" cy="72" rx="16" ry="32" fill="#FFD54A"/></g>
     <g class="el bob">
       <circle cx="64" cy="52" r="20" fill="#F4F0EA"/>
       <circle class="el blink" cx="58" cy="50" r="3" fill="#1A1A1A"/>
       <circle class="el blink" cx="70" cy="50" r="3" fill="#1A1A1A"/>
     </g>`,
  ),
  shadow: frame(
    '#141418',
    `<circle cx="64" cy="64" r="30" fill="#2A2A32"/>
     <path class="el pulse" d="M34 64 A30 30 0 0 1 94 64" stroke="#C62828" stroke-width="10" fill="none" stroke-linecap="round"/>
     <circle class="el spark" cx="64" cy="64" r="8" fill="#E8E8E8"/>`,
  ),
  jackrabbit: frame(
    '#6D4C41',
    `<ellipse class="el twitch" cx="46" cy="36" rx="10" ry="28" fill="#D7CCC8"/>
     <ellipse class="el twitch-d" cx="82" cy="36" rx="10" ry="28" fill="#D7CCC8"/>
     <g class="el bob">
       <circle cx="64" cy="74" r="26" fill="#EFEBE9"/>
       <circle class="el blink" cx="56" cy="72" r="4" fill="#1A1A1A"/>
       <circle class="el blink" cx="72" cy="72" r="4" fill="#1A1A1A"/>
       <ellipse cx="64" cy="86" rx="6" ry="4" fill="#A1887F"/>
     </g>`,
  ),
  crown: frame(
    '#5D4037',
    `<g class="el bob">
       <path d="M24 84 L32 44 L52 68 L64 36 L76 68 L96 44 L104 84 Z" fill="#F5C542"/>
       <rect x="24" y="80" width="80" height="14" rx="3" fill="#E6B422"/>
       <circle class="el spark" cx="64" cy="36" r="6" fill="#80DEEA"/>
     </g>`,
  ),
  klombo: frame(
    '#3E6B4F',
    `<g class="el bob">
       <ellipse cx="64" cy="78" rx="38" ry="28" fill="#7CB342"/>
       <circle cx="64" cy="54" r="24" fill="#9CCC65"/>
       <circle class="el blink" cx="56" cy="52" r="4" fill="#1A1A1A"/>
       <circle class="el blink" cx="74" cy="52" r="4" fill="#1A1A1A"/>
       <path class="el twitch" d="M48 36 L52 22 L58 36 M70 36 L76 20 L80 36" stroke="#558B2F" stroke-width="5" stroke-linecap="round"/>
     </g>`,
  ),
  's3-batman': frame(
    '#12121A',
    `<path class="el sway" d="M28 86 Q64 28 100 86 Q64 70 28 86 Z" fill="#3A3A48"/>
     <circle class="el bob" cx="64" cy="40" r="14" fill="#F4E7C3"/>`,
  ),
  's3-air': frame(
    '#4FC3F7',
    `<path class="el floaty" d="M28 72 C44 44 56 92 80 56 C92 40 108 52 100 72 C120 78 110 96 88 90 C76 108 44 100 40 84 C20 88 18 72 28 72 Z" fill="#E3F2FD"/>`,
  ),
  's3-aura': frame(
    '#7E57C2',
    `<circle class="el spin" cx="64" cy="64" r="36" stroke="#E1BEE7" stroke-width="6"/>
     <circle class="el spin-rev" cx="64" cy="64" r="24" stroke="#CE93D8" stroke-width="6"/>
     <circle class="el pulse" cx="64" cy="64" r="12" fill="#F3E5F5"/>`,
  ),
  's3-earth': frame(
    '#6D4C41',
    `<g class="el bob">
       <path d="M20 96 L44 52 L64 72 L86 40 L108 96 Z" fill="#A1887F"/>
       <path d="M44 96 L64 68 L84 96 Z" fill="#8D6E63"/>
       <circle class="el spark" cx="86" cy="40" r="8" fill="#81C784"/>
     </g>`,
  ),
  's3-fire': frame(
    '#BF360C',
    `<path class="el flicker" d="M64 28 C86 52 96 68 96 82 C96 102 82 112 64 112 C46 112 32 102 32 82 C32 68 42 52 64 28 Z" fill="#FF8A50"/>
     <path class="el flicker" d="M64 52 C76 68 80 78 80 88 C80 98 73 104 64 104 C55 104 48 98 48 88 C48 78 52 68 64 52 Z" fill="#FFD54F"/>`,
  ),
  's3-water': frame(
    '#0277BD',
    `<path class="el drip" d="M64 24 C64 24 96 68 96 86 C96 104 82 114 64 114 C46 114 32 104 32 86 C32 68 64 24 64 24 Z" fill="#81D4FA"/>
     <path class="el wave" d="M28 92 C44 84 56 100 76 88 C88 82 104 90 108 98" stroke="#E1F5FE" stroke-width="6" fill="none" stroke-linecap="round"/>`,
  ),
  's3-ghost': frame(
    '#263238',
    `<g class="el floaty">
       <path d="M40 56 C40 36 52 24 64 24 C76 24 88 36 88 56 L88 100 L76 90 L64 100 L52 90 L40 100 Z" fill="#F5F7FA" stroke="#90A4AE" stroke-width="3"/>
       <circle class="el blink" cx="54" cy="56" r="5" fill="#1A237E"/>
       <circle class="el blink" cx="74" cy="56" r="5" fill="#1A237E"/>
     </g>`,
  ),
  's3-llama': frame(
    '#8D6E63',
    `<g class="el bob">
       <ellipse cx="64" cy="88" rx="28" ry="22" fill="#D7CCC8"/>
       <rect x="56" y="40" width="16" height="36" rx="8" fill="#D7CCC8"/>
       <circle cx="64" cy="36" r="14" fill="#EFEBE9"/>
       <path class="el twitch" d="M52 28 L48 16 L58 28 M76 28 L80 16 L70 28" fill="#D7CCC8"/>
       <circle class="el blink" cx="58" cy="36" r="2.5" fill="#1A1A1A"/>
       <circle class="el blink" cx="70" cy="36" r="2.5" fill="#1A1A1A"/>
     </g>`,
  ),
  's3-peeky-peely': frame(
    '#F9A825',
    `<g class="el sway-slow">
       <path d="M44 28 C70 20 96 40 92 78 C88 108 56 118 40 96 C28 78 28 40 44 28 Z" fill="#FDD835"/>
       <path d="M48 36 C66 30 84 46 80 76 C76 98 58 106 48 90" fill="#FFF59D"/>
     </g>`,
  ),
  's3-zero-point': frame(
    '#1A237E',
    `<path class="el spin" d="M64 18 L78 50 L112 64 L78 78 L64 110 L50 78 L16 64 L50 50 Z" fill="#7C4DFF"/>
     <circle class="el pulse" cx="64" cy="64" r="14" fill="#E8EAF6"/>`,
  ),
  's3-storm-scout': frame(
    '#37474F',
    `<g class="el floaty">
       <ellipse cx="58" cy="56" rx="28" ry="18" fill="#90A4AE"/>
       <ellipse cx="80" cy="60" rx="22" ry="16" fill="#B0BEC5"/>
     </g>
     <path class="el flash" d="M60 76 L52 96 L66 96 L58 114 L84 86 L70 86 L78 76 Z" fill="#FFD54F"/>`,
  ),
  's3-fishy': frame(
    '#0288D1',
    `<g class="el swim">
       <ellipse cx="60" cy="64" rx="32" ry="22" fill="#4FC3F7"/>
       <path class="el wag" d="M92 64 L114 44 L114 84 Z" fill="#29B6F6"/>
       <circle class="el blink" cx="44" cy="60" r="5" fill="#0D47A1"/>
       <path d="M36 72 C48 80 60 80 72 72" stroke="#0277BD" stroke-width="3" fill="none"/>
     </g>`,
  ),
  's3-demon': frame(
    '#4A148C',
    `<g class="el bob">
       <circle cx="64" cy="72" r="28" fill="#CE93D8"/>
       <path class="el twitch" d="M42 56 L36 24 L54 48 M86 56 L92 24 L74 48" fill="#7B1FA2"/>
       <circle class="el blink" cx="54" cy="70" r="4" fill="#1A1A1A"/>
       <circle class="el blink" cx="74" cy="70" r="4" fill="#1A1A1A"/>
       <path d="M54 86 Q64 94 74 86" stroke="#4A148C" stroke-width="3" fill="none"/>
     </g>`,
  ),
  's3-king': frame(
    '#4E342E',
    `<g class="el bob">
       <circle cx="64" cy="72" r="26" fill="#FFCC80"/>
       <path class="el sway" d="M36 52 L44 28 L56 46 L64 24 L72 46 L84 28 L92 52 Z" fill="#FFD54F"/>
       <circle class="el blink" cx="56" cy="70" r="3" fill="#1A1A1A"/>
       <circle class="el blink" cx="72" cy="70" r="3" fill="#1A1A1A"/>
     </g>`,
  ),
};

for (const [id, svg] of Object.entries(art)) {
  writeFileSync(join(out, `${id}.svg`), svg);
}

console.log(`Wrote ${Object.keys(art).length} original sprite diagrams to public/sprites`);
