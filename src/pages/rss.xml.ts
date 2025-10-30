import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { LANG_BASE_PATH, LANG_EN, LANG_ES, LANG_PT, type LangKey } from '../lib/lang';

function getLangFromPostId(postId: string): LangKey {
	if (postId.startsWith(`${LANG_EN}/`)) return LANG_EN;
	if (postId.startsWith(`${LANG_ES}/`)) return LANG_ES;
	return LANG_PT;
}

function getPostUrl(postId: string): string {
	const lang = getLangFromPostId(postId);
	const postSlug = postId.replace(`${lang}/`, '');
	const basePath = lang === LANG_PT ? '' : LANG_BASE_PATH[lang];
	return `${basePath}posts/${postSlug}/`;
}

export async function GET(context: { site: URL }) {
	const posts = await getCollection('blog');
	const sortedPosts = posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: new URL(getPostUrl(post.id), context.site).toString(),
		})),
	});
}

