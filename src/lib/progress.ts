import type { CatalogEntry, ProgressStore, SeasonProgress, Sprite } from './types';
import { RARITY_ORDER, variantKey } from './types';

export const STORAGE_KEY = 'fst:v1';

export function emptyProgress(): SeasonProgress {
  return { owned: [], mastered: [] };
}

export function emptyStore(): ProgressStore {
  return { seasons: {} };
}

export function buildCatalog(sprites: Sprite[]): CatalogEntry[] {
  return sprites.flatMap((sprite) =>
    sprite.variants.map((variant) => ({
      key: variantKey(sprite.id, variant.id),
      spriteId: sprite.id,
      spriteName: sprite.name,
      rarity: sprite.rarity,
      variantId: variant.id,
      variantLabel: variant.label,
      dustCost: variant.dustCost,
      bonus: variant.bonus,
    })),
  );
}

export function normalizeProgress(raw: SeasonProgress | undefined): SeasonProgress {
  if (!raw) return emptyProgress();
  const owned = Array.from(new Set(raw.owned ?? []));
  const mastered = Array.from(new Set(raw.mastered ?? [])).filter((key) => owned.includes(key));
  return { owned, mastered };
}

export function toggleOwned(progress: SeasonProgress, key: string): SeasonProgress {
  const owned = new Set(progress.owned);
  const mastered = new Set(progress.mastered);
  if (owned.has(key)) {
    owned.delete(key);
    mastered.delete(key);
  } else {
    owned.add(key);
  }
  return { owned: [...owned], mastered: [...mastered] };
}

export function toggleMastered(progress: SeasonProgress, key: string): SeasonProgress {
  const owned = new Set(progress.owned);
  const mastered = new Set(progress.mastered);
  if (mastered.has(key)) {
    mastered.delete(key);
  } else {
    owned.add(key);
    mastered.add(key);
  }
  return { owned: [...owned], mastered: [...mastered] };
}

export function huntList(catalog: CatalogEntry[], progress: SeasonProgress): CatalogEntry[] {
  const owned = new Set(progress.owned);
  return catalog
    .filter((entry) => !owned.has(entry.key))
    .sort((a, b) => RARITY_ORDER[b.rarity] - RARITY_ORDER[a.rarity] || a.spriteName.localeCompare(b.spriteName));
}

export function compareProgress(
  catalog: CatalogEntry[],
  a: SeasonProgress,
  b: SeasonProgress,
): { onlyA: CatalogEntry[]; onlyB: CatalogEntry[]; both: CatalogEntry[]; neither: CatalogEntry[] } {
  const setA = new Set(a.owned);
  const setB = new Set(b.owned);
  const onlyA: CatalogEntry[] = [];
  const onlyB: CatalogEntry[] = [];
  const both: CatalogEntry[] = [];
  const neither: CatalogEntry[] = [];
  for (const entry of catalog) {
    const inA = setA.has(entry.key);
    const inB = setB.has(entry.key);
    if (inA && inB) both.push(entry);
    else if (inA) onlyA.push(entry);
    else if (inB) onlyB.push(entry);
    else neither.push(entry);
  }
  return { onlyA, onlyB, both, neither };
}
