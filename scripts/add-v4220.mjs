import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "..", "src", "data", "sprites.json");
const sprites = JSON.parse(readFileSync(file, "utf8"));

const launched = "17-sept-2026";
const patch = "v42.20 update on September 17";

const bh = {
  ability:
    "Chance to find Sprites when eliminating opponents. Only gains Sprite XP from eliminations, unless Sprite has special XP rules.",
  levelNotes: "Only levels through eliminations.",
};

const newSprites = [];

newSprites.push({
  id: "crash-bandicoot",
  name: "Crash Bandicoot",
  seasonId: "c7-s4",
  rarity: "legendary",
  ability:
    "Active \u2013 Jump in Air: Triggers a whirlwind attack that damages and knocks back nearby enemies. Damage increases and the cooldown decreases with each level up.",
  findNotes: `Added in ${patch}. Spotted near high and mountainous areas.`,
  levelNotes: "Damage increases and the cooldown decreases with each level up.",
  new: true,
  launchedAt: launched,
  variants: [
    { id: "normal", label: "Normal", dustCost: 400 },
    { id: "gold", label: "Gold", dustCost: 800, bonus: "3\u00d7 elimination XP" },
    { id: "cheat-master", label: "Cheat Master", dustCost: 900, bonus: "Button Mash" },
  ],
  available: true,
});

newSprites.push({
  id: "blinky",
  name: "Blinky",
  seasonId: "c7-s4",
  rarity: "legendary",
  ability:
    "Found in the world at nighttime. Grants a temporary cloak when you take damage. Cloak duration increases with each level up.",
  findNotes: `Added in ${patch}. Pac-Man collab sprite \u2014 found at nighttime.`,
  levelNotes: "Cloak duration increases with each level up.",
  new: true,
  launchedAt: launched,
  variants: [
    { id: "normal", label: "Normal", dustCost: 400 },
    { id: "gold", label: "Gold", dustCost: 800, bonus: "3\u00d7 elimination XP" },
    { id: "cheat-master", label: "Cheat Master", dustCost: 900, bonus: "Button Mash" },
  ],
  available: true,
});

newSprites.push({
  id: "pond",
  name: "Pond",
  seasonId: "c7-s4",
  rarity: "legendary",
  ability:
    "Active \u2013 Jump Shortly After Landing: Triggers a Super Jump if charges are available. Charges regenerate over time. Super Jump strength increases and the cooldown decreases with each level up.",
  findNotes: `Added in ${patch}. Community creation challenge winner.`,
  levelNotes: "Super Jump strength increases and the cooldown decreases with each level up.",
  new: true,
  launchedAt: launched,
  variants: [
    { id: "normal", label: "Normal", dustCost: 400 },
    { id: "gold", label: "Gold", dustCost: 800, bonus: "3\u00d7 elimination XP" },
    { id: "cheat-master", label: "Cheat Master", dustCost: 900, bonus: "Button Mash" },
  ],
  available: true,
});

newSprites.push({
  id: "morgana",
  name: "Morgana",
  seasonId: "c7-s4",
  rarity: "mythic",
  ability:
    "Increases the effectiveness of healing items. Healing effectiveness increases with each level up.",
  findNotes: `Added in ${patch} (available next week). Persona 5 collab sprite.`,
  levelNotes: "Healing effectiveness increases with each level up.",
  new: true,
  launchedAt: launched,
  variants: [
    { id: "normal", label: "Normal", dustCost: 600 },
    { id: "gold", label: "Gold", dustCost: 1200, bonus: "3\u00d7 elimination XP" },
    { id: "cheat-master", label: "Cheat Master", dustCost: 1400, bonus: "Button Mash" },
  ],
  available: false,
});

newSprites.push({
  id: "birthday",
  name: "Birthday",
  seasonId: "c7-s4",
  rarity: "mythic",
  ability:
    "Spotted near high and mountainous areas. Opening chests has a chance to spawn a piece of cake, while eliminations can spawn cake at maximum level. The chance of spawning cake increases with each level up.",
  findNotes: `Added in ${patch} (available September 26). Fortnite 9th birthday event sprite.`,
  levelNotes: "The chance of spawning cake increases with each level up.",
  new: true,
  launchedAt: launched,
  variants: [
    { id: "normal", label: "Normal", dustCost: 600 },
    { id: "gold", label: "Gold", dustCost: 1200, bonus: "3\u00d7 elimination XP" },
    { id: "cheat-master", label: "Cheat Master", dustCost: 1400, bonus: "Button Mash" },
  ],
  available: false,
});

const goldVariants = [
  { baseId: "crash-bandicoot", name: "Crash Bandicoot", rarity: "legendary", available: true },
  { baseId: "blinky", name: "Blinky", rarity: "legendary", available: true },
  { baseId: "pond", name: "Pond", rarity: "legendary", available: true },
  { baseId: "morgana", name: "Morgana", rarity: "mythic", available: false },
  { baseId: "birthday", name: "Birthday", rarity: "mythic", available: false },
];

for (const g of goldVariants) {
  newSprites.push({
    id: `gold-${g.baseId}`,
    name: `Gold ${g.name}`,
    seasonId: "c7-s4",
    rarity: g.rarity,
    ability: `Gold variant of ${g.name} Sprite.`,
    findNotes: `Added in ${patch}.`,
    levelNotes: `Gold variant \u2014 ${g.name} level bonuses apply.`,
    new: true,
    launchedAt: launched,
    variants: [{ id: "gold", label: "Gold", bonus: "3\u00d7 elimination XP" }],
    available: g.available,
  });
}

const lootHackerVariants = [
  { baseId: "crash-bandicoot", name: "Crash Bandicoot", rarity: "legendary", available: true },
  { baseId: "blinky", name: "Blinky", rarity: "legendary", available: true },
  { baseId: "pond", name: "Pond", rarity: "legendary", available: true },
  { baseId: "morgana", name: "Morgana", rarity: "mythic", available: false },
  { baseId: "birthday", name: "Birthday", rarity: "mythic", available: false },
];

for (const lh of lootHackerVariants) {
  newSprites.push({
    id: `loot-hacker-${lh.baseId}`,
    name: `Loot Hacker ${lh.name}`,
    seasonId: "c7-s4",
    rarity: lh.rarity,
    ability: `Loot Hacker variant of ${lh.name} Sprite.`,
    findNotes: `Added in ${patch}. Found in high and mountainous areas.`,
    levelNotes: `Loot Hacker variant \u2014 ${lh.name} level bonuses apply.`,
    new: true,
    launchedAt: launched,
    variants: [{ id: "loot-hacker", label: "Loot Hacker" }],
    available: lh.available,
  });
}

const cheatMasterVariants = [
  { baseId: "crash-bandicoot", name: "Crash Bandicoot", rarity: "legendary", available: true },
  { baseId: "blinky", name: "Blinky", rarity: "legendary", available: true },
  { baseId: "pond", name: "Pond", rarity: "legendary", available: true },
  { baseId: "morgana", name: "Morgana", rarity: "mythic", available: false },
  { baseId: "birthday", name: "Birthday", rarity: "mythic", available: false },
];

for (const cm of cheatMasterVariants) {
  newSprites.push({
    id: `cheat-master-${cm.baseId}`,
    name: `Cheat Master ${cm.name}`,
    seasonId: "c7-s4",
    rarity: cm.rarity,
    ability: `Cheat Master variant of ${cm.name} Sprite.`,
    findNotes: `Added in ${patch}.`,
    levelNotes: `Cheat Master variant \u2014 ${cm.name} level bonuses apply.`,
    new: true,
    launchedAt: launched,
    variants: [{ id: "cheat-master", label: "Cheat Master", bonus: "Button Mash" }],
    available: cm.available,
  });
}

const bountyHunterVariants = [
  { baseId: "xray", name: "X-Ray", rarity: "legendary", available: true },
  { baseId: "onigiri", name: "Onigiri", rarity: "rare", available: true },
  { baseId: "pond", name: "Pond", rarity: "legendary", available: true },
  { baseId: "overshield", name: "Overshield", rarity: "rare", available: true },
  { baseId: "storm-scout", name: "Storm Scout", rarity: "rare", available: true },
  { baseId: "klombo", name: "Klombo", rarity: "mythic", available: true },
  { baseId: "shadow", name: "Shadow", rarity: "epic", available: true },
  { baseId: "tails", name: "Tails", rarity: "epic", available: true },
  { baseId: "sonic", name: "Sonic", rarity: "epic", available: true },
  { baseId: "jonesy", name: "Jonesy", rarity: "rare", available: true },
  { baseId: "killswitch", name: "Killswitch", rarity: "epic", available: true },
  { baseId: "adventure", name: "Adventure", rarity: "rare", available: true },
  { baseId: "crash-bandicoot", name: "Crash Bandicoot", rarity: "legendary", available: true },
  { baseId: "bush", name: "Bush", rarity: "rare", available: true },
  { baseId: "blinky", name: "Blinky", rarity: "legendary", available: true },
  { baseId: "jackrabbit", name: "Jackrabbit", rarity: "legendary", available: true },
  { baseId: "crown", name: "Crown", rarity: "mythic", available: true },
  { baseId: "8bit", name: "8-Bit", rarity: "rare", available: true },
  { baseId: "morgana", name: "Morgana", rarity: "mythic", available: false },
  { baseId: "birthday", name: "Birthday", rarity: "mythic", available: false },
];

for (const b of bountyHunterVariants) {
  newSprites.push({
    id: `bounty-hunter-${b.baseId}`,
    name: `Bounty Hunter ${b.name}`,
    seasonId: "c7-s4",
    rarity: b.rarity,
    ability: bh.ability,
    findNotes: `Added in ${patch}.`,
    levelNotes: bh.levelNotes,
    new: true,
    launchedAt: launched,
    variants: [{ id: "bounty-hunter", label: "Bounty Hunter" }],
    available: b.available,
  });
}

sprites.push(...newSprites);
writeFileSync(file, JSON.stringify(sprites, null, 2) + "\n", "utf8");
console.log(`Added ${newSprites.length} sprites. Total: ${sprites.length}`);
