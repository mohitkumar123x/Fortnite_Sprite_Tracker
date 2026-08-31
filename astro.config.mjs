// @ts-check
import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { EnumChangefreq } from 'sitemap';

const site = 'https://fortnitespritetracking.com';

/** @param {string} page */
function isErrorPage(page) {
  return /\/404\/?$/.test(page) || /\/500\/?$/.test(page);
}

/** Copy Astro’s sitemap-0.xml to /sitemap.xml for the common crawler URL.
 * @returns {import('astro').AstroIntegration}
 */
function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        await copyFile(join(outDir, 'sitemap-0.xml'), join(outDir, 'sitemap.xml'));
        logger.info('Wrote sitemap.xml');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !isErrorPage(page),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
        },
      },
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const unprefixed = path.replace(/^\/(es|pt)(?=\/|$)/, '') || '/';
        if (unprefixed === '/') {
          item.changefreq = EnumChangefreq.WEEKLY;
          item.priority = 1.0;
        } else if (
          unprefixed === '/sprites' ||
          unprefixed === '/seasons' ||
          unprefixed === '/compare' ||
          unprefixed === '/cheat-codes' ||
          unprefixed === '/faq' ||
          unprefixed === '/blog' ||
          unprefixed === '/dust-calculator'
        ) {
          item.changefreq = EnumChangefreq.WEEKLY;
          item.priority = 0.8;
        } else if (
          unprefixed === '/about' ||
          unprefixed === '/privacy' ||
          unprefixed === '/terms' ||
          unprefixed === '/contact'
        ) {
          item.changefreq = EnumChangefreq.YEARLY;
          item.priority = 0.4;
        } else {
          item.changefreq = EnumChangefreq.WEEKLY;
          item.priority = 0.6;
        }
        return item;
      },
      namespaces: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
    }),
    sitemapXmlAlias(),
  ],
});
