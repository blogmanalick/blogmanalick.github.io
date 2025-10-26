// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [mdx(), sitemap()],
	i18n: {
		locales: ['pt-br', 'en', 'es'],
		defaultLocale: 'pt-br',
		routing: {
			prefixDefaultLocale: false,
		},
		fallback: {
			en: 'pt-br',
			es: 'pt-br',
		},
	},
});
