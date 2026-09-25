import type { Locale } from '../lib/i18n';
import { spriteText as de } from './spriteText.de';
import { spriteText as es } from './spriteText.es';
import { spriteText as pt } from './spriteText.pt';
import { spriteText as fr } from './spriteText.fr';

export interface SpriteTextBundle {
  ability: Record<string, string>;
  levelNotes: Record<string, string>;
  findNotes: Record<string, string>;
  location: Record<string, string>;
}

export const spriteTextTranslations: Record<Locale, SpriteTextBundle> = {
  en: { ability: {}, levelNotes: {}, findNotes: {}, location: {} },
  de,
  es,
  pt,
  fr,
};
