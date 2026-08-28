import type { Locale } from '../lib/i18n';

export type CheatCategory = 'sprite' | 'xp' | 'dust' | 'item' | 'cosmetic' | 'fun';

export type CheatCodeItem = {
  id: string;
  code: string;
  combo?: string;
  title: string;
  category: CheatCategory;
  color: string;
  note?: string;
  dustCost?: number;
  iconType: 'sprite' | 'xp' | 'dust' | 'item' | 'screen' | 'brick';
};

export const CHEAT_CODES: CheatCodeItem[] = [
  {
    id: 'play4all',
    code: 'Play4All',
    combo: '↓ ↑ ↓ ↑ A B A B',
    dustCost: 400,
    title: 'Cheat Master Jonesy Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'gottagofast',
    code: 'GottaGoFast',
    combo: 'R1 R2 L1 L2 ← ↓ → ↑',
    dustCost: 600,
    title: 'Cheat Master Sonic Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'iwannaflyhigh',
    code: 'IWannaFlyHigh',
    combo: '✕ ✕ ↑ ↑ R1 L1',
    dustCost: 600,
    title: 'Cheat Master Tails Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: '8bitblast',
    code: '8BitBlast',
    combo: 'B A B A ↑ → ↓ ←',
    dustCost: 400,
    title: 'Cheat Master 8-Bit Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'born2play',
    code: 'Born2Play',
    combo: '→ ← → ← △ □ △ □',
    dustCost: 400,
    title: 'Cheat Master Adventure Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'gatherandcraft',
    code: 'GatherAndCraft',
    combo: '↑ ↑ ↓ ↓ ← → B A',
    dustCost: 400,
    title: 'Cheat Master Bush Sprite',
    note: '(Requires Quest In-Game)',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'shadowreload',
    code: 'ShadowReload',
    combo: 'L2 R2 ← → L1 R1',
    dustCost: 600,
    title: 'Cheat Master Shadow Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'jackrabbitjump',
    code: 'JackJump',
    combo: '↑ ↑ ✕ ✕ □ ○ ← →',
    dustCost: 900,
    title: 'Cheat Master Jackrabbit Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'klombofeast',
    code: 'KlomboFeast',
    combo: '△ ○ ✕ □ ↑ ↓ ← →',
    dustCost: 1400,
    title: 'Cheat Master Klombo Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'crownroyale',
    code: 'CrownRoyale',
    combo: '↑ ↓ ↑ ↓ □ △ ○ ✕',
    dustCost: 1400,
    title: 'Cheat Master Crown Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'killswitchaim',
    code: 'KillswitchAim',
    combo: 'L2 ← R2 → L1 ↑ R1 ↓',
    dustCost: 600,
    title: 'Cheat Master Killswitch Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },
  {
    id: 'overridexp',
    code: 'OverrideXP',
    combo: '↑ ↑ ↓ ↓ ← → ← →',
    title: '40,000 XP',
    category: 'xp',
    color: '#f1fa8c',
    iconType: 'xp',
  },
  {
    id: 'magilume',
    code: 'Magilume',
    combo: 'L1 R1 L2 R2 △ ○',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },
  {
    id: 'chispambo',
    code: 'Chispambo',
    combo: '← → ← → ✕ □ ✕ □',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },
  {
    id: 'abgestaubt',
    code: 'Abgestaubt',
    combo: '↑ → ↓ ← L1 R1',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },
  {
    id: 'perlimpinpin',
    code: 'PerlimPinPin',
    combo: '△ ✕ □ ○ L2 R2',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },
  {
    id: 'h0p0nvc',
    code: 'H0p0nVC',
    combo: 'R1 L1 R2 L2 ↑ ↓',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },
  {
    id: '02override',
    code: '02Override',
    combo: '↑ ↑ ✕ ✕ □ ○',
    title: '1 Llama Supply Drop & 1 Portable Extractor',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },
  {
    id: 'takeyourheart',
    code: 'TakeYourHeart',
    combo: 'L2 R2 ← → L1 R1',
    title: '2 Extraction Accelerators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },
  {
    id: 'survivethenight',
    code: 'SurviveTheNight',
    combo: '↑ ↓ ↑ ↓ □ △',
    title: '2 Cheat Code Locators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },
  {
    id: 'finditchat',
    code: 'FindItChat',
    combo: '← → ← → △ ○',
    title: '2 Cheat Code Locators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },
  {
    id: 'perfectorder',
    code: 'PerfectOrder',
    combo: '↓ ↓ ↑ ↑ ✕ ✕',
    title: '4 Spicy Tacos',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },
  {
    id: 'bemorealien',
    code: 'BeMoreAlien',
    combo: 'L1 L2 R1 R2 ← →',
    title: 'Override Ready Loading Screen',
    category: 'cosmetic',
    color: '#ff79c6',
    iconType: 'screen',
  },
  {
    id: 'reachyourimpossible',
    code: 'ReachYourImpossible',
    combo: '↑ ← ↓ → △ □',
    title: 'Block Party Loading Screen',
    category: 'cosmetic',
    color: '#ff79c6',
    iconType: 'screen',
  },
  {
    id: 'letsblockandroll',
    code: 'LetsBlockAndRoll',
    combo: '← ↓ → ↑ B A',
    title: 'Turns you into a Tetrimino',
    category: 'fun',
    color: '#8be9fd',
    iconType: 'brick',
  },
  {
    id: 'dontblockme',
    code: 'DontBlockMe',
    combo: '→ ↓ ← ↑ A B',
    title: 'Turns you into a Tetrimino',
    category: 'fun',
    color: '#8be9fd',
    iconType: 'brick',
  },
];

const cheatTranslations: Record<Locale, Record<string, { title?: string; note?: string }>> = {
  en: {},
  es: {
    play4all: { title: 'Sprite Jonesy Maestro de Trucos' },
    gottagofast: { title: 'Sprite Sonic Maestro de Trucos' },
    iwannaflyhigh: { title: 'Sprite Tails Maestro de Trucos' },
    '8bitblast': { title: 'Sprite 8-Bit Maestro de Trucos' },
    born2play: { title: 'Sprite Aventura Maestro de Trucos' },
    gatherandcraft: { title: 'Sprite Arbusto Maestro de Trucos', note: '(Requiere misión en el juego)' },
    shadowreload: { title: 'Sprite Shadow Maestro de Trucos' },
    jackrabbitjump: { title: 'Sprite Jackrabbit Maestro de Trucos' },
    klombofeast: { title: 'Sprite Klombo Maestro de Trucos' },
    crownroyale: { title: 'Sprite Corona Maestro de Trucos' },
    killswitchaim: { title: 'Sprite Killswitch Maestro de Trucos' },
    overridexp: { title: '40.000 XP' },
    magilume: { title: '2.000 Polvo de Sprite' },
    chispambo: { title: '2.000 Polvo de Sprite' },
    abgestaubt: { title: '2.000 Polvo de Sprite' },
    perlimpinpin: { title: '2.000 Polvo de Sprite' },
    h0p0nvc: { title: '2.000 Polvo de Sprite' },
    '02override': { title: '1 Entrega de Llama y 1 Extractor Portátil' },
    takeyourheart: { title: '2 Aceleradores de Extracción' },
    survivethenight: { title: '2 Localizadores de Trucos' },
    finditchat: { title: '2 Localizadores de Trucos' },
    perfectorder: { title: '4 Tacos Picantes' },
    bemorealien: { title: 'Pantalla de Carga Override Ready' },
    reachyourimpossible: { title: 'Pantalla de Carga Block Party' },
    letsblockandroll: { title: 'Te transforma en un Tetrimino' },
    dontblockme: { title: 'Te transforma en un Tetrimino' },
  },
  pt: {
    play4all: { title: 'Sprite Jonesy Mestre de Trapaça' },
    gottagofast: { title: 'Sprite Sonic Mestre de Trapaça' },
    iwannaflyhigh: { title: 'Sprite Tails Mestre de Trapaça' },
    '8bitblast': { title: 'Sprite 8-Bit Mestre de Trapaça' },
    born2play: { title: 'Sprite Aventura Mestre de Trapaça' },
    gatherandcraft: { title: 'Sprite Arbusto Mestre de Trapaça', note: '(Requer missão no jogo)' },
    shadowreload: { title: 'Sprite Shadow Mestre de Trapaça' },
    jackrabbitjump: { title: 'Sprite Jackrabbit Mestre de Trapaça' },
    klombofeast: { title: 'Sprite Klombo Mestre de Trapaça' },
    crownroyale: { title: 'Sprite Coroa Mestre de Trapaça' },
    killswitchaim: { title: 'Sprite Killswitch Mestre de Trapaça' },
    overridexp: { title: '40.000 XP' },
    magilume: { title: '2.000 Pó de Sprite' },
    chispambo: { title: '2.000 Pó de Sprite' },
    abgestaubt: { title: '2.000 Pó de Sprite' },
    perlimpinpin: { title: '2.000 Pó de Sprite' },
    h0p0nvc: { title: '2.000 Pó de Sprite' },
    '02override': { title: '1 Suprimento de Lhama e 1 Extrator Portátil' },
    takeyourheart: { title: '2 Aceleradores de Extração' },
    survivethenight: { title: '2 Localizadores de Códigos' },
    finditchat: { title: '2 Localizadores de Códigos' },
    perfectorder: { title: '4 Tacos Apimentados' },
    bemorealien: { title: 'Tela de Carregamento Override Ready' },
    reachyourimpossible: { title: 'Tela de Carregamento Block Party' },
    letsblockandroll: { title: 'Transforma você em um Tetrimino' },
    dontblockme: { title: 'Transforma você em um Tetrimino' },
  },
};

export function getLocalizedCheats(locale: Locale = 'en'): CheatCodeItem[] {
  const trans = cheatTranslations[locale] ?? {};
  return CHEAT_CODES.map((item) => {
    const tItem = trans[item.id];
    return {
      ...item,
      title: tItem?.title ?? item.title,
      note: tItem?.note ?? item.note,
    };
  });
}

export const CHEAT_STORAGE_KEY = 'fst:claimed_cheats';

export function getClaimedCheats(): string[] {
  try {
    const raw = localStorage.getItem(CHEAT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function saveClaimedCheats(ids: string[]): void {
  try {
    localStorage.setItem(CHEAT_STORAGE_KEY, JSON.stringify(ids));
  } catch {}
}
