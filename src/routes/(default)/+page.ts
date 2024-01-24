import { posts } from '$lib/posts';

export function load() {
	let items = posts.filter((post) => post.visible).map((post) => {
		return {
			slug: post.slug
		}
	})

	let result = items[Math.floor(Math.random()*items.length)]

	return {
		slug: result.slug
	}
}
