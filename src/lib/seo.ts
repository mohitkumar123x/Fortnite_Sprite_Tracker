export const SITE_NAME = 'Fortnite Sprite Tracker';
export const SITE_URL = 'https://fortnitespritetracking.com';
export const CONTACT_EMAIL = 'hello@fortnitespritetracking.com';

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: new URL(item.path, SITE_URL).href,
      })),
    ],
  };
}

export const DEFAULT_KEYWORDS = [
  'fortnite sprite tracker',
  'fortnite sprite tracker chart',
  'fortnite sprite tracker app',
  'new fortnite sprite tracker',
  'fortnite sprite tracker sheet',
  'fortnite sprite tracker updated',
  'fortnite sprite tracker list',
  'fortnite sprite tracker with batman',
  'fortnite sprite tracker new',
  'fortnite sprite tracker gg',
  'fortnite sprite tracker batman',
  'fortnite sprite tracker template',
  'fortnite sprite tracker checklist',
  'fortnite sprite tracker my collection',
  'fortnite sprite tracker website',
  'fortnite sprite tracker printable',
  'fortnite sprite tracker image',
  'fortnite sprite tracker site',
  'fortnite sprite tracker ign',
  'online fortnite sprite tracker',
  'best fortnite sprite tracker',
].join(', ');

export const FR_KEYWORDS = [
  'fortnite sprite tracker',
  'fortnite sprite tracker liste',
  'fortnite sprite tracker graphique',
  'fortnite sprite tracker application',
  'nouveau fortnite sprite tracker',
  'fortnite sprite tracker batman',
  'fortnite sprite tracker checkliste',
  'fortnite sprite tracker collection',
  'fortnite sprite tracker site',
  'fortnite sprite tracker impression',
  'fortnite sprite tracker en ligne',
  'meilleur fortnite sprite tracker',
  'fortnite sprite tracker gratuit',
  'fortnite sprite tracker saison',
  'fortnite sprite tracker variants',
  'fortnite sprite tracker chasse',
].join(', ');

export const HOME_TITLE = 'Fortnite Sprite Tracker | Free Online Checklist, Chart & Collection Tracker';

export const HOME_DESCRIPTION =
  'Use this free Fortnite Sprite Tracker to mark Owned and Mastered sprites, hunt missing variants, share my collection, and keep a printable checklist. Updated online Fortnite Sprite Tracker website with Batman archive.';
