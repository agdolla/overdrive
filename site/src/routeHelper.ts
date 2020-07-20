import type { ComponentDoc } from '../componentDoc';

const pagesContext = require.context(
	'../../packages/overdrive/lib/components',
	true,
	/\.docs\.tsx$/,
	'sync',
);

const pages = new Map();

for (const page of pagesContext.keys()) {
	const pageDoc = pagesContext(page)?.default;
	if (pageDoc) {
		const slug = (pageDoc.name as string)
			.toLowerCase()
			.replace(/[\s]+|[^\w\-]+/g, '-');

		pages.set(slug, pageDoc);
	}
}

export const getComponentDoc = (slug: string): ComponentDoc | undefined =>
	pages.get(slug);

export const getAllRoutes = () => [...pages.keys()];
