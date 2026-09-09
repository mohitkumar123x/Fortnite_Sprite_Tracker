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

export const HOME_TITLE = 'Fortnite Sprite Tracker | Free Online Checklist, Chart & Collection Tracker';

export const HOME_DESCRIPTION =
  'Track every Fortnite Sprite: mark Owned, star Mastered, hunt missing variants, and share your collection online.';
