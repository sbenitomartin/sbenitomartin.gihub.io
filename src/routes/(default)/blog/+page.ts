import { posts } from '$lib/posts';
import { authors } from '$lib/authors';

export function load() {
	posts.sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.file < b.file) ? 1 : -1) : -1 );

	return {
		posts: posts.filter((post) => post.visible == true).map((post) => {
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
