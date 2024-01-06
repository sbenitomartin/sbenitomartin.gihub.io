import { error } from '@sveltejs/kit';
import { authors } from '$lib/authors';

/* Needed to prerender all entries not only the ones referenced by a link */
export function entries() {
	return authors.map((author) => {
		return {
			slug: author.slug
		}
	})
}

export function load({ params }: any) {
	const author = authors.find((author) => author.slug === params.slug);

	if (!author) throw error(404);

	return {
		author
	};
}
