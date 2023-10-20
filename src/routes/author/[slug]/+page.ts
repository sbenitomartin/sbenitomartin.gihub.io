import { error } from '@sveltejs/kit';
import { authors } from '$lib/authors';

export function load({ params }: any) {
	const author = authors.find((author) => author.slug === params.slug);

	if (!author) throw error(404);

	return {
		author
	};
}
