import { posts } from '$lib/posts';
import { authors } from '$lib/authors';
import { isValidYear, stringToDate } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { base } from '$app/paths';

/* Needed to prerender all entries not only the ones referenced by a link */
export function entries() {
	let _postMap = posts.map((post) => {
		let date = stringToDate(post.date);
		return {
			year: date.getFullYear().toString()
		}
	})

	// Remove duplicates
	let _result = _postMap.filter((value, index) => {
		const _value = JSON.stringify(value);
		return index === _postMap.findIndex(obj => {
			return JSON.stringify(obj) === _value;
		});
	});

	return _result;
}

export function load({ params }: any) {
	//If params.year is not valid -> redirect to /blog or throw error
	if (!isValidYear(params.year)) {
		// Retrocompatibility because posts used to be under /blog or /post; Check if the value of year is a valid slug, and if so, redirect to the full post url
		let _possiblePosts = posts.filter((post) => post.slug === params.year);

		if (_possiblePosts.length !== 1) {
			throw error(404, ''); 
		} else {
			let post = _possiblePosts[0];
			if (browser) {
				goto(base + '/blog/' + stringToDate(post.date).getFullYear().toString() + '/' + stringToDate(post.date).toLocaleDateString("en-US", { month: '2-digit'}) + '/' + post.slug);
			}
		}

		return {
			posts: [],
			year: null
		}
	} else {
		posts.sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.file < b.file) ? 1 : -1) : -1 );

		return {
			//Return only the ones in the selected year
			posts: posts.filter((post) => post.visible && stringToDate(post.date).getFullYear().toString() == params.year).map((post) => {
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
			}),
			year: params.year
		}
	}
}
