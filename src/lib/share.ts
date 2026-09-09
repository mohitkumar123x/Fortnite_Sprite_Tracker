import type { SeasonProgress } from './types';
import { emptyProgress, normalizeProgress } from './progress';

/** Compact URL-safe share payload: seasonId + owned bits + mastered bits over a fixed key order. */
export function encodeShare(seasonId: string, catalogKeys: string[], progress: SeasonProgress): string {
  const owned = new Set(progress.owned);
  const mastered = new Set(progress.mastered);
  const ownedBits = catalogKeys.map((key) => (owned.has(key) ? '1' : '0')).join('');
  const masteredBits = catalogKeys.map((key) => (mastered.has(key) ? '1' : '0')).join('');
  const payload = `${seasonId}|${packBits(ownedBits)}|${packBits(masteredBits)}`;
  return toBase64Url(payload);
}

export function decodeShare(code: string, catalogKeys: string[]): { seasonId: string; progress: SeasonProgress } | null {
  try {
    const payload = fromBase64Url(code.trim());
    const [seasonId, ownedPacked, masteredPacked] = payload.split('|');
    if (!seasonId || ownedPacked === undefined || masteredPacked === undefined) return null;
    const ownedBits = unpackBits(ownedPacked, catalogKeys.length);
    const masteredBits = unpackBits(masteredPacked, catalogKeys.length);
    const owned: string[] = [];
    const mastered: string[] = [];
    catalogKeys.forEach((key, i) => {
      if (ownedBits[i] === '1') owned.push(key);
      if (masteredBits[i] === '1') mastered.push(key);
    });
    return { seasonId, progress: normalizeProgress({ owned, mastered }) };
  } catch {
    return null;
  }
}

export function exportJson(seasonId: string, progress: SeasonProgress): string {
  return JSON.stringify(
    {
      version: 1,
      seasonId,
      owned: progress.owned,
      mastered: progress.mastered,
      exportedAt: new Date().toISOString(),
    },
    null,
    2,
  );
}

export function importJson(raw: string): { seasonId: string; progress: SeasonProgress } | null {
  try {
    const data = JSON.parse(raw) as {
      seasonId?: string;
      owned?: string[];
      mastered?: string[];
    };
    if (!data.seasonId || !Array.isArray(data.owned)) return null;
    return {
      seasonId: data.seasonId,
      progress: normalizeProgress({ owned: data.owned, mastered: data.mastered ?? [] }),
    };
  } catch {
    return null;
  }
}

export function importJsonWithValidation(
  raw: string,
  validKeys: Set<string>,
): { seasonId: string; progress: SeasonProgress } | null {
  try {
    const data = JSON.parse(raw) as {
      seasonId?: string;
      owned?: string[];
      mastered?: string[];
    };
    if (!data.seasonId || !Array.isArray(data.owned)) return null;
    const owned = data.owned.filter((k) => validKeys.has(k));
    const mastered = (data.mastered ?? []).filter((k) => validKeys.has(k) && owned.includes(k));
    return {
      seasonId: data.seasonId,
      progress: normalizeProgress({ owned, mastered }),
    };
  } catch {
    return null;
  }
}

export function missingDiscordText(
  seasonLabel: string,
  missing: { spriteName: string; variantLabel: string }[],
): string {
  if (missing.length === 0) {
    return `Fortnite Sprite Tracker — ${seasonLabel}\nCollection complete.`;
  }
  const lines = missing.map((m) => `• ${m.spriteName} (${m.variantLabel})`);
  return `Fortnite Sprite Tracker — ${seasonLabel}\nMissing (${missing.length}):\n${lines.join('\n')}`;
}

function packBits(bits: string): string {
  const bytes: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    const chunk = bits.slice(i, i + 8).padEnd(8, '0');
    bytes.push(parseInt(chunk, 2));
  }
  return bytes.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function unpackBits(hex: string, length: number): string {
  const bits: string[] = [];
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2) || '00', 16);
    bits.push(byte.toString(2).padStart(8, '0'));
  }
  return bits.join('').slice(0, length).padEnd(length, '0');
}

function toBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(value: string): string {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((value.length + 3) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function parseShareOrEmpty(code: string | null | undefined, catalogKeys: string[]): SeasonProgress {
  if (!code) return emptyProgress();
  const decoded = decodeShare(code, catalogKeys);
  return decoded?.progress ?? emptyProgress();
}
