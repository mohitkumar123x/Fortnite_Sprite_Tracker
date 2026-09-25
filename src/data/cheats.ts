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
  // ============================================================
  // NEW / RECENT ADMIN PANEL CODES
  // ============================================================

  {
    id: 'almostScaringSeason',
    code: 'AlmostScaringSeason',
    title: '2 Cheat Code Locator',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2x Extraction Accelerator
  {
    id: '9YEARS',
    code: '9YEARS',
    title: '9th Birthday Sprite Spray',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },
  // IGN reports that this code appears to be bugged currently.
  {
    id: 'magicisreal',
    code: 'MagicIsReal',
    title: '5,000 Sprite Dust',
    note: "(Requires Bastian's Story Quest)",
    category: 'item',
   color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 2x Extraction Accelerator
  {
    id: 'nocturneop55n1',
    code: 'NocturneOp55N1',
    title: '2 Extraction Accelerators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 5,000 Sprite Dust
  {
    id: 'blinkyinkypinkyclyde',
    code: 'BlinkyInkyPinkyClyde',
    title: '5,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 2x Llama Supply Drop
  {
    id: 'destinyawaits',
    code: 'DestinyAwaits',
    title: '2 Llama Supply Drops',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2x Cheat Code Locator
  {
    id: 'chatfindmeanothercode',
    code: 'ChatFindMeAnotherCode',
    title: '2 Cheat Code Locators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2,000 Sprite Dust
  {
    id: 'playtolevelup',
    code: 'PlayToLevelUp',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: Wrixel's Hero Portrait Spray
  {
    id: 'sayh12wr1x3l',
    code: 'SayH12WR1X3L',
    title: "Wrixel's Hero Portrait Spray",
    category: 'cosmetic',
    color: '#ff79c6',
    iconType: 'screen',
  },

  // Reward: 2x Extraction Accelerator
  {
    id: 'beamemeup',
    code: 'BeamMeUp',
    title: '2 Extraction Accelerators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 5,000 Sprite Dust
  {
    id: 'dustinthewind',
    code: 'DustInTheWind',
    title: '5,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 5,000 Sprite Dust
  {
    id: 'whereisthedustytree',
    code: 'WhereIsTheDustyTree',
    title: '5,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: Temporarily transforms you into a toilet
  {
    id: 'brb',
    code: 'BRB',
    title: 'Toilet Transformation',
    note: '(Temporary lobby effect)',
    category: 'fun',
    color: '#8be9fd',
    iconType: 'brick',
  },

  // Reward: Temporarily transforms you into an arcade machine
  {
    id: 'insertcointocontinue',
    code: 'InsertCoinToContinue',
    title: 'Arcade Machine Transformation',
    note: '(Temporary lobby effect)',
    category: 'fun',
    color: '#8be9fd',
    iconType: 'brick',
  },

  // Reward: 2x Extraction Accelerator
  {
    id: 'chatwheredoyoufindthekey',
    code: 'ChatWhereDoYouFindTheKey',
    title: '2 Extraction Accelerators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2x Cheat Code Locator
  {
    id: 'invalidcheat',
    code: 'InvalidCheat',
    title: '2 Cheat Code Locators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward:
  // - 5,000 Sprite Dust
  // - Void Master Geno Skin Edit Style
  // - Void Conduits of Power Back Bling Edit Style
  // Requirement: Complete Geno's Story quests first
  {
    id: 'yourthoughtsaremine',
    code: 'YourThoughtsAreMine',
    title: '5,000 Sprite Dust + Geno Cosmetic Edit Styles',
    note: "(Requires Geno's Story quests)",
    category: 'cosmetic',
    color: '#ff79c6',
    iconType: 'screen',
  },

  // Reward: Gold Jonesy Sprite
  {
    id: 'jonesyisgolden',
    code: 'JonesyIsGolden',
    title: 'Gold Jonesy Sprite',
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },

  // ============================================================
  // EARLIER ACTIVE ADMIN PANEL CODES
  // ============================================================

  // Reward: Cheat Master Bush Sprite
  // Requirement: Complete Wrixel (Ziggy)'s Story quests
  {
    id: 'gatherandcraft',
    code: 'GatherAndCraft',
    combo: '↑ ↑ ↓ ↓ ← → B A',
    dustCost: 400,
    title: 'Cheat Master Bush Sprite',
    note: "(Requires Wrixel (Ziggy)'s Story quests)",
    category: 'sprite',
    color: '#36d399',
    iconType: 'sprite',
  },

  // Reward: Cheat Master Jonesy Sprite
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

  // Reward: Cheat Master Sonic Sprite
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

  // Reward: Cheat Master Tails Sprite
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

  // Reward: Cheat Master 8-Bit Sprite
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

  // Reward: Cheat Master Adventure Sprite
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

  // Reward: 40,000 XP
  {
    id: 'override-xp',
    code: 'OverrideXP',
    combo: '↑ ↑ ↓ ↓ ← → ← →',
    title: '40,000 XP',
    category: 'xp',
    color: '#f1fa8c',
    iconType: 'xp',
  },

  // Reward: 1x Llama Supply Drop + 5x Portable Extractor
  {
    id: 'o2override',
    code: 'O2Override',
    combo: '↑ ↑ ✕ ✕ □ ○',
    title: '1 Llama Supply Drop + 5 Portable Extractors',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2x Extraction Accelerator
  {
    id: 'takeyourheart',
    code: 'TakeYourHeart',
    combo: 'L2 R2 ← → L1 R1',
    dustCost: 600,
    title: '2 Extraction Accelerators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2x Cheat Code Locator
  {
    id: 'survivethenight',
    code: 'SurviveTheNight',
    combo: '↑ ↓ ↑ ↓ □ △',
    title: '2 Cheat Code Locators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2x Cheat Code Locator
  {
    id: 'finditchat',
    code: 'FindItChat',
    combo: '← → ← → △ ○',
    title: '2 Cheat Code Locators',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 4x Spicy Taco
  {
    id: 'perfectorder',
    code: 'PerfectOrder',
    combo: '↓ ↓ ↑ ↑ ✕ ✕',
    title: '4 Spicy Tacos',
    category: 'item',
    color: '#36d399',
    iconType: 'item',
  },

  // Reward: 2,000 Sprite Dust
  {
    id: 'h0p0nvc',
    code: 'H0p0nVC',
    combo: 'R1 L1 R2 L2 ↑ ↓',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 2,000 Sprite Dust
  {
    id: 'magilume',
    code: 'Magilume',
    combo: 'L1 R1 L2 R2 △ ○',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 2,000 Sprite Dust
  {
    id: 'chispambo',
    code: 'Chispambo',
    combo: '← → ← → ✕ □ ✕ □',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 2,000 Sprite Dust
  {
    id: 'abgestaubt',
    code: 'abgestaubt',
    combo: '↑ → ↓ ← L1 R1',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: 2,000 Sprite Dust
  {
    id: 'perlimpinpin',
    code: 'Perlimpinpin',
    combo: '△ ✕ □ ○ L2 R2',
    title: '2,000 Sprite Dust',
    category: 'dust',
    color: '#bd93f9',
    iconType: 'dust',
  },

  // Reward: Block Party Loading Screen
  {
    id: 'reachyourimpossible',
    code: 'REACHYOURIMPOSSIBLE',
    combo: '↑ ← ↓ → △ □',
    title: 'Block Party Loading Screen',
    category: 'cosmetic',
    color: '#ff79c6',
    iconType: 'screen',
  },

  // Reward: Override Ready Loading Screen
  {
    id: 'bemorealien',
    code: 'BeMoreAlien',
    combo: 'L1 L2 R1 R2 ← →',
    title: 'Override Ready Loading Screen',
    category: 'cosmetic',
    color: '#ff79c6',
    iconType: 'screen',
  },

  // Reward: Temporarily transforms you into a Tetris block
  {
    id: 'letsblockandroll',
    code: 'LetsBlockAndRoll',
    combo: '← ↓ → ↑ B A',
    title: 'Tetris Block Transformation',
    note: '(Temporary lobby effect)',
    category: 'fun',
    color: '#8be9fd',
    iconType: 'brick',
  },

  // Reward: Temporarily transforms you into a Tetris block
  {
    id: 'dontblockme',
    code: 'DontBlockMe',
    combo: '→ ↓ ← ↑ A B',
    title: 'Tetris Block Transformation',
    note: '(Temporary lobby effect)',
    category: 'fun',
    color: '#8be9fd',
    iconType: 'brick',
  },
];

const cheatTranslations: Record<Locale, Record<string, { title?: string; note?: string }>> = {
  en: {},

  es: {
    '9YEARS': {
      title: 'Spray de Sprite del 9.º aniversario',
    },
    'almostScaringSeason': {
      title: '2 localizadores de códigos de trampa',
    },
    'magicisreal': {
      title: '5.000 de Polvo de Sprite',
      note: '(Requiere la misión de historia de Bastian)',
    },
    'nocturneop55n1': {
      title: '2 Aceleradores de extracción',
    },
    'blinkyinkypinkyclyde': {
      title: '5.000 de Polvo de Sprite',
    },
    'destinyawaits': {
      title: '2 suministros de Llama',
    },
    'chatfindmeanothercode': {
      title: '2 localizadores de códigos de trampa',
    },
    'playtolevelup': {
      title: '2.000 de Polvo de Sprite',
    },
    'sayh12wr1x3l': {
      title: 'Retrato de héroe de Wrixel',
    },
    'beamemeup': {
      title: '2 Aceleradores de extracción',
    },
    'dustinthewind': {
      title: '5.000 de Polvo de Sprite',
    },
    'whereisthedustytree': {
      title: '5.000 de Polvo de Sprite',
    },
    'brb': {
      title: 'Transformación en baño',
      note: '(Efecto temporal en el lobby)',
    },
    'insertcointocontinue': {
      title: 'Transformación en máquina arcade',
      note: '(Efecto temporal en el lobby)',
    },
    'chatwheredoyoufindthekey': {
      title: '2 Aceleradores de extracción',
    },
    'invalidcheat': {
      title: '2 localizadores de códigos de trampa',
    },
    'yourthoughtsaremine': {
      title: '5.000 de Polvo de Sprite + estilos cosméticos de Geno',
      note: '(Requiere completar las misiones de historia de Geno)',
    },
    'jonesyisgolden': {
      title: 'Sprite Jonesy Dorado',
    },
    'gatherandcraft': {
      title: 'Sprite Arbusto Maestro de Trucos',
      note: '(Requiere Wrixel (Ziggy) para comenzar la misión)',
    },
    'play4all': {
      title: 'Sprite Jonesy Maestro de Trucos',
    },
    'gottagofast': {
      title: 'Sprite Sonic Maestro de Trucos',
    },
    'iwannaflyhigh': {
      title: 'Sprite Tails Maestro de Trucos',
    },
    '8bitblast': {
      title: 'Sprite 8-Bit Maestro de Trucos',
    },
    'born2play': {
      title: 'Sprite Adventure Maestro de Trucos',
    },
    'override-xp': {
      title: '40.000 XP',
    },
    'o2override': {
      title: '1 suministro de Llama + 5 Extractores Portátiles',
    },
    'takeyourheart': {
      title: '2 Aceleradores de extracción',
    },
    'survivethenight': {
      title: '2 localizadores de códigos de trampa',
    },
    'finditchat': {
      title: '2 localizadores de códigos de trampa',
    },
    'perfectorder': {
      title: '4 tacos picantes',
    },
    'h0p0nvc': {
      title: '2.000 de Polvo de Sprite',
    },
    'magilume': {
      title: '2.000 de Polvo de Sprite',
    },
    'chispambo': {
      title: '2.000 de Polvo de Sprite',
    },
    'abgestaubt': {
      title: '2.000 de Polvo de Sprite',
    },
    'perlimpinpin': {
      title: '2.000 de Polvo de Sprite',
    },
    'reachyourimpossible': {
      title: 'Pantalla de carga Block Party',
    },
    'bemorealien': {
      title: 'Pantalla de carga Override Ready',
    },
    'letsblockandroll': {
      title: 'Transformación en Tetrimino',
      note: '(Efecto temporal en el lobby)',
    },
    'dontblockme': {
      title: 'Transformación en Tetrimino',
      note: '(Efecto temporal en el lobby)',
    },
  },

  pt: {
    '9YEARS': {
      title: 'Spray de Sprite do 9º aniversário',
    },
    'almostScaringSeason': {
      title: '2 Localizadores de Códigos de Trapaça',
    },
    'magicisreal': {
      title: '5.000 Pó de Sprite',
      note: '(Requer a missão de história do Bastian)',
    },
    'nocturneop55n1': {
      title: '2 Aceleradores de Extração',
    },
    'blinkyinkypinkyclyde': {
      title: '5.000 Pó de Sprite',
    },
    'destinyawaits': {
      title: '2 Suprimentos de Lhama',
    },
    'chatfindmeanothercode': {
      title: '2 Localizadores de Códigos de Trapaça',
    },
    'playtolevelup': {
      title: '2.000 Pó de Sprite',
    },
    'sayh12wr1x3l': {
      title: 'Retrato de Herói do Wrixel',
    },
    'beamemeup': {
      title: '2 Aceleradores de Extração',
    },
    'dustinthewind': {
      title: '5.000 Pó de Sprite',
    },
    'whereisthedustytree': {
      title: '5.000 Pó de Sprite',
    },
    'brb': {
      title: 'Transformação em banheiro',
      note: '(Efeito temporário no lobby)',
    },
    'insertcointocontinue': {
      title: 'Transformação em máquina de arcade',
      note: '(Efeito temporário no lobby)',
    },
    'chatwheredoyoufindthekey': {
      title: '2 Aceleradores de Extração',
    },
    'invalidcheat': {
      title: '2 Localizadores de Códigos de Trapaça',
    },
    'yourthoughtsaremine': {
      title: '5.000 Pó de Sprite + estilos cosméticos do Geno',
      note: '(Requer as missões de história do Geno)',
    },
    'jonesyisgolden': {
      title: 'Sprite Jonesy Dourado',
    },
    'gatherandcraft': {
      title: 'Sprite Arbusto Mestre de Trapaça',
      note: '(Requer Wrixel (Ziggy) para iniciar a missão)',
    },
    'play4all': {
      title: 'Sprite Jonesy Mestre de Trapaça',
    },
    'gottagofast': {
      title: 'Sprite Sonic Mestre de Trapaça',
    },
    'iwannaflyhigh': {
      title: 'Sprite Tails Mestre de Trapaça',
    },
    '8bitblast': {
      title: 'Sprite 8-Bit Mestre de Trapaça',
    },
    'born2play': {
      title: 'Sprite Adventure Mestre de Trapaça',
    },
    'override-xp': {
      title: '40.000 XP',
    },
    'o2override': {
      title: '1 Suprimento de Lhama + 5 Extratores Portáteis',
    },
    'takeyourheart': {
      title: '2 Aceleradores de Extração',
    },
    'survivethenight': {
      title: '2 Localizadores de Códigos de Trapaça',
    },
    'finditchat': {
      title: '2 Localizadores de Códigos de Trapaça',
    },
    'perfectorder': {
      title: '4 Tacos Picantes',
    },
    'h0p0nvc': {
      title: '2.000 Pó de Sprite',
    },
    'magilume': {
      title: '2.000 Pó de Sprite',
    },
    'chispambo': {
      title: '2.000 Pó de Sprite',
    },
    'abgestaubt': {
      title: '2.000 Pó de Sprite',
    },
    'perlimpinpin': {
      title: '2.000 Pó de Sprite',
    },
    'reachyourimpossible': {
      title: 'Tela de Carregamento Block Party',
    },
    'bemorealien': {
      title: 'Tela de Carregamento Override Ready',
    },
    'letsblockandroll': {
      title: 'Transformação em Tetrimino',
      note: '(Efeito temporário no lobby)',
    },
    'dontblockme': {
      title: 'Transformação em Tetrimino',
      note: '(Efeito temporário no lobby)',
    },
  },

  fr: {
    '9YEARS': {
      title: 'Spray Sprite du 9e anniversaire',
    },
    'almostScaringSeason': {
      title: '2 localisateurs de codes de triche',
    },
    'magicisreal': {
      title: '5 000 poussières de Sprite',
      note: '(Nécessite la quête d’histoire de Bastian)',
    },
    'nocturneop55n1': {
      title: '2 accélérateurs d’extraction',
    },
    'blinkyinkypinkyclyde': {
      title: '5 000 poussières de Sprite',
    },
    'destinyawaits': {
      title: '2 ravitaillements de Llama',
    },
    'chatfindmeanothercode': {
      title: '2 localisateurs de codes de triche',
    },
    'playtolevelup': {
      title: '2 000 poussières de Sprite',
    },
    'sayh12wr1x3l': {
      title: 'Portrait de héros de Wrixel',
    },
    'beamemeup': {
      title: '2 accélérateurs d’extraction',
    },
    'dustinthewind': {
      title: '5 000 poussières de Sprite',
    },
    'whereisthedustytree': {
      title: '5 000 poussières de Sprite',
    },
    'brb': {
      title: 'Transformation en toilettes',
      note: '(Effet temporaire dans le lobby)',
    },
    'insertcointocontinue': {
      title: 'Transformation en borne d’arcade',
      note: '(Effet temporaire dans le lobby)',
    },
    'chatwheredoyoufindthekey': {
      title: '2 accélérateurs d’extraction',
    },
    'invalidcheat': {
      title: '2 localisateurs de codes de triche',
    },
    'yourthoughtsaremine': {
      title: '5 000 poussières de Sprite + styles cosmétiques de Geno',
      note: '(Nécessite de progresser dans les quêtes d’histoire de Geno)',
    },
    'jonesyisgolden': {
      title: 'Sprite Jonesy doré',
    },
    'gatherandcraft': {
      title: 'Sprite Buisson Maître des triches',
      note: '(Nécessite Wrixel (Ziggy) pour commencer la quête)',
    },
    'play4all': {
      title: 'Sprite Jonesy, Maître des triches',
    },
    'gottagofast': {
      title: 'Sprite Sonic, Maître des triches',
    },
    'iwannaflyhigh': {
      title: 'Sprite Tails, Maître des triches',
    },
    '8bitblast': {
      title: 'Sprite 8-Bit, Maître des triches',
    },
    'born2play': {
      title: 'Sprite Adventure, Maître des triches',
    },
    'override-xp': {
      title: '40 000 XP',
    },
    'o2override': {
      title: '1 ravitaillement de Llama + 5 extracteurs portables',
    },
    'takeyourheart': {
      title: '2 accélérateurs d’extraction',
    },
    'survivethenight': {
      title: '2 localisateurs de codes de triche',
    },
    'finditchat': {
      title: '2 localisateurs de codes de triche',
    },
    'perfectorder': {
      title: '4 tacos épicés',
    },
    'h0p0nvc': {
      title: '2 000 poussières de Sprite',
    },
    'magilume': {
      title: '2 000 poussières de Sprite',
    },
    'chispambo': {
      title: '2 000 poussières de Sprite',
    },
    'abgestaubt': {
      title: '2 000 poussières de Sprite',
    },
    'perlimpinpin': {
      title: '2 000 poussières de Sprite',
    },
    'reachyourimpossible': {
      title: 'Écran de chargement Block Party',
    },
    'bemorealien': {
      title: 'Écran de chargement Override Ready',
    },
    'letsblockandroll': {
      title: 'Transformation en Tetrimino',
      note: '(Effet temporaire dans le lobby)',
    },
    'dontblockme': {
      title: 'Transformation en Tetrimino',
      note: '(Effet temporaire dans le lobby)',
    },
  },
  de: {
    '9YEARS': {
      title: 'Sprite-Spray zum 9. Geburtstag',
    },
    'almostScaringSeason': {
      title: '2 Cheat-Code-Locators',
    },
    'magicisreal': {
      title: '5.000 Sprite-Staub',
      note: '(Erfordert Bastians Story-Quest)',
    },
    'nocturneop55n1': {
      title: '2 Extraktionsbeschleuniger',
    },
    'blinkyinkypinkyclyde': {
      title: '5.000 Sprite-Staub',
    },
    'destinyawaits': {
      title: '2 Llama-Versorgungslieferungen',
    },
    'chatfindmeanothercode': {
      title: '2 Cheat-Code-Locators',
    },
    'playtolevelup': {
      title: '2.000 Sprite-Staub',
    },
    'sayh12wr1x3l': {
      title: 'Wrixels Heldenporträt-Spray',
    },
    'beamemeup': {
      title: '2 Extraktionsbeschleuniger',
    },
    'dustinthewind': {
      title: '5.000 Sprite-Staub',
    },
    'whereisthedustytree': {
      title: '5.000 Sprite-Staub',
    },
    'brb': {
      title: 'Toilettenverwandlung',
      note: '(Temporärer Effekt in der Lobby)',
    },
    'insertcointocontinue': {
      title: 'Verwandlung in einen Arcade-Automaten',
      note: '(Temporärer Effekt in der Lobby)',
    },
    'chatwheredoyoufindthekey': {
      title: '2 Extraktionsbeschleuniger',
    },
    'invalidcheat': {
      title: '2 Cheat-Code-Locators',
    },
    'yourthoughtsaremine': {
      title: '5.000 Sprite-Staub + kosmetische Geno-Stile',
      note: '(Erfordert Fortschritt in Genos Story-Quests)',
    },
    'jonesyisgolden': {
      title: 'Goldener Jonesy-Sprite',
    },
    'gatherandcraft': {
      title: 'Cheat-Meister-Busch-Sprite',
      note: '(Erfordert Wrixel (Ziggy), um die Quest zu starten)',
    },
    'play4all': {
      title: 'Cheat-Meister-Jonesy-Sprite',
    },
    'gottagofast': {
      title: 'Cheat-Meister-Sonic-Sprite',
    },
    'iwannaflyhigh': {
      title: 'Cheat-Meister-Tails-Sprite',
    },
    '8bitblast': {
      title: 'Cheat-Meister-8-Bit-Sprite',
    },
    'born2play': {
      title: 'Cheat-Meister-Adventure-Sprite',
    },
    'override-xp': {
      title: '40.000 EP',
    },
    'o2override': {
      title: '1 Llama-Versorgungslieferung + 5 tragbare Extraktoren',
    },
    'takeyourheart': {
      title: '2 Extraktionsbeschleuniger',
    },
    'survivethenight': {
      title: '2 Cheat-Code-Locators',
    },
    'finditchat': {
      title: '2 Cheat-Code-Locators',
    },
    'perfectorder': {
      title: '4 scharfe Tacos',
    },
    'h0p0nvc': {
      title: '2.000 Sprite-Staub',
    },
    'magilume': {
      title: '2.000 Sprite-Staub',
    },
    'chispambo': {
      title: '2.000 Sprite-Staub',
    },
    'abgestaubt': {
      title: '2.000 Sprite-Staub',
    },
    'perlimpinpin': {
      title: '2.000 Sprite-Staub',
    },
    'reachyourimpossible': {
      title: 'Block Party-Ladebildschirm',
    },
    'bemorealien': {
      title: 'Override Ready-Ladebildschirm',
    },
    'letsblockandroll': {
      title: 'Tetrimino-Verwandlung',
      note: '(Temporärer Effekt in der Lobby)',
    },
    'dontblockme': {
      title: 'Tetrimino-Verwandlung',
      note: '(Temporärer Effekt in der Lobby)',
    },
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
  } catch { }
}
