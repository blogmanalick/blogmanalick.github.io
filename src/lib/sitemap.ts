import type { SitemapItem } from '@astrojs/sitemap';
import { LANG_BASE_PATH, LANG_EN, LANG_ES, LANG_PT, LOCALE, SUPPORTED_LAGS, type LangKey } from './lang';
import { SITE_URL } from '../consts';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function getPostUrl(lang: LangKey, slug: string): string {
	const basePath = LANG_BASE_PATH[lang];
	return `${basePath}posts/${slug}/`;
}

// Cache de posts com langLinks, inicializado na primeira chamada
let postsCache: Map<string, Record<string, string>> | null = null;

function initializePostsCache(): Map<string, Record<string, string>> {
	if (postsCache) return postsCache;
	
	const cache = new Map<string, Record<string, string>>();
	const contentDir = join(process.cwd(), 'src/content/blog');
	
	// Função recursiva para ler arquivos
	function readDirRecursive(dir: string): void {
		try {
			const entries = readdirSync(dir, { withFileTypes: true });
			
			for (const entry of entries) {
				const fullPath = join(dir, entry.name);
				
				if (entry.isDirectory()) {
					readDirRecursive(fullPath);
				} else if (entry.isFile() && entry.name.endsWith('.md')) {
					const content = readFileSync(fullPath, 'utf-8');
					
					// Extrai o frontmatter
					const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
					if (!frontmatterMatch) continue;
					
					const frontmatter = frontmatterMatch[1];
					
					// Extrai langLinks usando regex
					const langLinksMatch = frontmatter.match(/^langLinks:\s*\n((?:\s+[a-z]+:\s+[^\n]+\n?)+)/m);
					if (!langLinksMatch) continue;
					
					const langLinksBlock = langLinksMatch[1];
					const langLinksMap: Record<string, string> = {};
					
					// Parseia cada linha de langLink
					for (const line of langLinksBlock.split('\n')) {
						const match = line.match(/^\s+([a-z]+):\s+['"]?([^'"]+)['"]?/);
						if (match) {
							const [, langKey, slug] = match;
							langLinksMap[langKey] = slug.trim();
						}
					}
					
					// Adiciona entrada para cada slug encontrado nos langLinks
					for (const langSlug of Object.values(langLinksMap)) {
						if (langSlug) {
							cache.set(langSlug, langLinksMap);
						}
					}
				}
			}
		} catch (error) {
			// Se o diretório não existir, continua
			if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
				console.error(`Erro ao ler posts:`, error);
			}
		}
	}
	
	// Lê todos os diretórios de idioma
	for (const lang of SUPPORTED_LAGS) {
		const langDir = join(contentDir, lang);
		readDirRecursive(langDir);
	}
	
	postsCache = cache;
	return cache;
}

export async function serializeSitemapItem(item: SitemapItem): Promise<SitemapItem | undefined> {
	const url = new URL(item.url);
	const pathname = url.pathname;

	// Se não for um post, retorna o item sem modificações (já tem hreflang das páginas index)
	if (!pathname.includes('/posts/')) {
		return item;
	}

	// Extrai o slug do post da URL
	const postsMatch = pathname.match(/\/posts\/([^\/]+)/);
	if (!postsMatch) return item;

	const slug = postsMatch[1];
	
	// Inicializa o cache de posts (será feito apenas uma vez)
	const cache = initializePostsCache();
	const langLinks = cache.get(slug);
	
	if (!langLinks) return item;

	// Cria os links alternativos baseados nos langLinks
	const links = [];
	
	const langMap: Record<string, LangKey> = {
		[LANG_PT]: LANG_PT,
		[LANG_EN]: LANG_EN,
		[LANG_ES]: LANG_ES,
	};

	for (const [langKey, langSlug] of Object.entries(langLinks)) {
		if (!langSlug) continue;
		const lang = langMap[langKey];
		if (!lang) continue;
		
		const langUrl = getPostUrl(lang, langSlug);
		const fullUrl = new URL(langUrl, SITE_URL).toString();
		
		links.push({
			url: fullUrl,
			lang: LOCALE[lang],
		});
	}

	// Adiciona os links ao item
	if (links.length > 0) {
		item.links = links.map((link) => ({
			url: link.url,
			lang: link.lang,
		}));
	}

	return item;
}
