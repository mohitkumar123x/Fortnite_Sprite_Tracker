import { readdirSync, readFileSync } from 'fs';
import type { Sprite, SpriteVariant } from './types';

interface C7S4Variant {
  id: string;
  spriteId: string;
  mainSpriteName: string;
  variant: string;
  seasonId: string;
  chapter: number;
  season: number;
  seasonName: string;
  rarity: string;
  ability: { name: string; type: string; description: string };
  progression: { maxLevel: number; levelNotes: string; levels: unknown[] };
  acquisition: { dustCost: number; findNotes: string; locations: string[]; methods: string[] };
  variantInfo: { name: string; effect: string };
  release: { patch: string; addedAt: string; status: string; available: boolean };
  collection: { trackable: boolean; owned: boolean; mastered: boolean; masteryLevel: number; maxMasteryLevel: number };
  metadata: { tags: string[]; searchKeywords: string[] };
}

function loadC7S4Sprites(): Sprite[] {
  const dir = 'src/data/C7S4_SPRITES';
  const files = readdirSync(dir).filter(f => f.endsWith('.json'));
  const sprites: Sprite[] = [];

  for (const file of files) {
    const entries: C7S4Variant[] = JSON.parse(readFileSync(`${dir}/${file}`, 'utf8'));

    // Group variants by spriteId
    const variantsBySprite = new Map<string, C7S4Variant[]>();
    for (const entry of entries) {
      const sid = entry.spriteId;
      if (!variantsBySprite.has(sid)) variantsBySprite.set(sid, []);
      variantsBySprite.get(sid)!.push(entry);
    }

    for (const [spriteId, variantEntries] of variantsBySprite) {
      const base = variantEntries[0];
      let spriteIdShort = spriteId.replace('s4-', '');
      if (spriteIdShort === 'x-ray') spriteIdShort = 'xray';

      // Create a separate Sprite entry for each variant
      for (const e of variantEntries) {
        let entryId = spriteIdShort;
        if (e.variant === 'gold') entryId = 'gold-' + spriteIdShort;
        else if (e.variant === 'cheat-master') entryId = 'cheat-master-' + spriteIdShort;
        else if (e.variant === 'loot-hacker') entryId = 'loot-hacker-' + spriteIdShort;
        else if (e.variant === 'bounty-hunter') entryId = 'bounty-hunter-' + spriteIdShort;

        // Fix special ID mappings
        if (entryId === 'loot-hacker-8-bit') entryId = 'loot-hacker-8bit';
        if (entryId === 'bounty-hunter-8-bit') entryId = 'bounty-hunter-8bit';
        if (entryId === 'gold-8-bit') entryId = 'gold-8bit';
        if (entryId === 'cheat-master-8-bit') entryId = 'cheat-master-8bit';
        if (entryId === 'loot-hacker-bush') entryId = 'loot-hacker-bushranger';

        const variant: SpriteVariant = {
          id: e.variant,
          label: e.variantInfo.name,
        };
        if (e.acquisition.dustCost) variant.dustCost = e.acquisition.dustCost;
        if (e.variantInfo.effect && e.variant !== 'normal') variant.bonus = e.variantInfo.effect;

        const sprite: Sprite = {
          id: entryId,
          name: e.variant === 'normal' ? base.mainSpriteName : e.mainSpriteName + ' ' + e.variantInfo.name,
          seasonId: 'c7-s4',
          rarity: e.rarity as Sprite['rarity'],
          ability: e.ability.description,
          findNotes: e.acquisition.findNotes,
          levelNotes: e.progression.levelNotes || undefined,
          variants: [variant],
          available: e.release.available,
          new: e.release.status === 'new',
          launchedAt: e.release.addedAt || undefined,
        };

        sprites.push(sprite);
      }
    }
  }

  return sprites;
}

export const c7s4Sprites = loadC7S4Sprites();
