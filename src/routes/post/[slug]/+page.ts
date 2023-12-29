import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts';
import { authors } from '$lib/authors';

export function load({ params }: any) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	let author = authors.find((author) => author.name === post.author)
	let authorSlug = '#'

	if (author) 
		authorSlug = author.slug

	return {
		content: post.content,
		title: post.title,
		subtitle: post.subtitle,
		author: post.author,
		authorSlug: authorSlug,
		date: post.date
	}
}
