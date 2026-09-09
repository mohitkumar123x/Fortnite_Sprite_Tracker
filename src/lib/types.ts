export type Rarity = 'rare' | 'epic' | 'legendary' | 'mythic' | 'special';

export type SpriteVariant = {
  id: string;
  label: string;
  dustCost?: number;
  bonus?: string;
};

export type Sprite = {
  id: string;
  name: string;
  seasonId: string;
  rarity: Rarity;
  ability: string;
  findNotes: string;
  levelNotes?: string;
  variants: SpriteVariant[];
  available?: boolean;
  new?: boolean;
  launchedAt?: string;
  summonCost?: number;
  variantCost?: number;
  dropChance?: number;
  location?: string;
};

export type Season = {
  id: string;
  slug: string;
  label: string;
  shortLabel: string;
  isCurrent: boolean;
  datasetVersion: string;
  patchNote: string;
  archiveNote?: string;
};

export type SeasonProgress = {
  owned: string[];
  mastered: string[];
};

export type ProgressStore = {
  seasons: Record<string, SeasonProgress>;
};

export type CatalogEntry = {
  key: string;
  spriteId: string;
  spriteName: string;
  rarity: Rarity;
  ability: string;
  variantId: string;
  variantLabel: string;
  dustCost?: number;
  bonus?: string;
  available: boolean;
  summonCost?: number;
  variantCost?: number;
  dropChance?: number;
  location?: string;
};

export function variantKey(spriteId: string, variantId: string): string {
  return `${spriteId}:${variantId}`;
}

export const RARITY_ORDER: Record<Rarity, number> = {
  mythic: 4,
  legendary: 3,
  epic: 2,
  rare: 1,
  special: 0,
};
