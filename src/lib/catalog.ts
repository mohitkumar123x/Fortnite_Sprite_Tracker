import seasons from '../data/seasons.json';
import sprites from '../data/sprites.json';
import type { Season, Sprite } from './types';
import { buildCatalog } from './progress';

export const allSeasons = seasons as Season[];
export const allSprites = sprites as Sprite[];

export function getCurrentSeason(): Season {
  return allSeasons.find((s) => s.isCurrent) ?? allSeasons[0];
}

export function getSeasonBySlug(slug: string): Season | undefined {
  return allSeasons.find((s) => s.slug === slug);
}

export function getSeasonById(id: string): Season | undefined {
  return allSeasons.find((s) => s.id === id);
}

export function getSpritesForSeason(seasonId: string): Sprite[] {
  return allSprites.filter((s) => s.seasonId === seasonId);
}

export function getSpriteById(id: string): Sprite | undefined {
  return allSprites.find((s) => s.id === id);
}

export function getCatalogForSeason(seasonId: string) {
  return buildCatalog(getSpritesForSeason(seasonId));
}

export function getPastSeasons(): Season[] {
  return allSeasons.filter((s) => !s.isCurrent);
}
