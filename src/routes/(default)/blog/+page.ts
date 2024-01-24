import { posts } from '$lib/posts';
import { authors } from '$lib/authors';

export function load() {
	return {
		posts: posts.filter((post) => post.visible).map((post) => {
			let author = authors.find((author) => author.name === post.author)
			let authorSlug = '#'

			if (author) 
				authorSlug = author.slug

			return {
				slug: post.slug,
				title: post.title,
				subtitle: post.subtitle,
				author: post.author,
				authorSlug: authorSlug,
				date: post.date,
				preview: post.htmlPreview
			}
		})
	}
}
