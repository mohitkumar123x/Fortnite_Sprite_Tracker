// @ts-check
import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = 'https://fortnitespritetracking.com';

function isErrorPage(page) {
  return /\/404\/?$/.test(page) || /\/500\/?$/.test(page);
}

/** Copy Astro’s sitemap-0.xml to /sitemap.xml for the common crawler URL. */
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
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !isErrorPage(page),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (path === '/sprites' || path === '/seasons' || path === '/compare' || path === '/faq') {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (path === '/about' || path === '/privacy' || path === '/terms' || path === '/contact') {
          item.changefreq = 'yearly';
          item.priority = 0.4;
        } else {
          item.changefreq = 'weekly';
          item.priority = 0.6;
        }
        return item;
      },
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
    sitemapXmlAlias(),
  ],
});
