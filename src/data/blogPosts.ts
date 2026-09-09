import { type Locale, t } from '../lib/i18n';

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
};

const slugs = [
  'v42-10-update',
  'how-to-track-sprites',
  'hunt-mode-guide',
  'compare-lockers',
  'cheat-codes-guide',
  'season-archives',
] as const;

type Slug = (typeof slugs)[number];

const dates: Record<Slug, { datePublished: string; dateModified: string }> = {
  'v42-10-update': { datePublished: '2026-09-04', dateModified: '2026-09-08' },
  'how-to-track-sprites': { datePublished: '2026-08-25', dateModified: '2026-09-03' },
  'hunt-mode-guide': { datePublished: '2026-08-25', dateModified: '2026-09-02' },
  'compare-lockers': { datePublished: '2026-08-25', dateModified: '2026-09-01' },
  'cheat-codes-guide': { datePublished: '2026-08-25', dateModified: '2026-08-30' },
  'season-archives': { datePublished: '2026-08-25', dateModified: '2026-08-28' },
};

const titleKeys: Record<Slug, string> = {
  'v42-10-update': 'blogPost_v42_10_title',
  'how-to-track-sprites': 'blogPost_howToTrack_title',
  'hunt-mode-guide': 'blogPost_huntMode_title',
  'compare-lockers': 'blogPost_compare_title',
  'cheat-codes-guide': 'blogPost_cheatCodes_title',
  'season-archives': 'blogPost_seasonArchives_title',
};

const metaKeys: Record<Slug, string> = {
  'v42-10-update': 'blogPost_v42_10_meta',
  'how-to-track-sprites': 'blogPost_howToTrack_meta',
  'hunt-mode-guide': 'blogPost_huntMode_meta',
  'compare-lockers': 'blogPost_compare_meta',
  'cheat-codes-guide': 'blogPost_cheatCodes_meta',
  'season-archives': 'blogPost_seasonArchives_meta',
};

const excerptKeys: Record<Slug, string> = {
  'v42-10-update': 'blogPost_v42_10_excerpt',
  'how-to-track-sprites': 'blogPost_howToTrack_excerpt',
  'hunt-mode-guide': 'blogPost_huntMode_excerpt',
  'compare-lockers': 'blogPost_compare_excerpt',
  'cheat-codes-guide': 'blogPost_cheatCodes_excerpt',
  'season-archives': 'blogPost_seasonArchives_excerpt',
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return slugs.map((slug) => ({
    slug,
    title: t(locale, titleKeys[slug] as any),
    metaDescription: t(locale, metaKeys[slug] as any),
    excerpt: t(locale, excerptKeys[slug] as any),
    ...dates[slug],
  }));
}

export function getBlogPost(slug: string, locale: Locale): BlogPost | undefined {
  const posts = getBlogPosts(locale);
  return posts.find((p) => p.slug === slug);
}
