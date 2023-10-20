import { error } from '@sveltejs/kit';
import { posts } from '../postDB.js';

export function load({ params }: any) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
