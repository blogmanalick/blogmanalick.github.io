import type { LangKey } from './lang';
import { getCollection } from 'astro:content';

export async function getBlogPostPaths(lang: LangKey) {
	const contentPath = `${lang}/`;
	const posts = await getCollection('blog', ({ id }) => id.startsWith(contentPath));
	
	return posts.map((post) => {
		const slug = post.id.replace(contentPath, '');
		return {
			params: { slug },
			props: { post },
		};
	});
}

