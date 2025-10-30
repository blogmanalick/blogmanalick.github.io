// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/consts';
import { serializeSitemapItem } from './src/lib/sitemap';

export default defineConfig({
	site: SITE_URL,
	integrations: [
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: 'pt',
				locales: {
					'pt': 'pt-BR',
					'en': 'en',
					'es': 'es',
				},
			},
			namespaces: {
				xhtml: true,
			},
			serialize: serializeSitemapItem,
		}),
	],
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
