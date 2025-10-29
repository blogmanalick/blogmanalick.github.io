import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files from pt-br (default), en, and es directories
	loader: glob({
		base: './src/content/blog',
		pattern: '{pt-br,en,es}/**/*.{md,mdx}',
	}),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			langLinks: z.object({
				pt: z.string().optional(),
				en: z.string().optional(),
				es: z.string().optional(),
			}).optional(),
			bluesky: z.string().url().optional(),
		}),
});

export const collections = { blog };
