import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts';
import { authors } from '$lib/authors';
import { stringToDate } from '$lib/utils.js';

/* Needed to prerender all entries not only the ones referenced by a link */
export function entries() {
	return posts.filter((post) => post.visible && !post.customHtml).map((post) => {
		let date = stringToDate(post.date);
		return {
			year: date.getFullYear().toString(),
			month: date.toLocaleDateString("en-US", { month: '2-digit'}),
			slug: post.slug
		}
	})
}

export function load({ params }: any) {	
	// Check if year, month, and slug are correct, if not throw error
	const post = posts.find((post) => post.slug === params.slug && stringToDate(post.date).getFullYear().toString() === params.year && stringToDate(post.date).toLocaleDateString("en-US", { month: '2-digit'}) === params.month);
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
		date: post.date,
		description: post.metaDescription
	}
}
