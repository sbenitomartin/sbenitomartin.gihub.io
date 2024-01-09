import { posts } from '$lib/posts';
import { authors } from '$lib/authors';
import { isValidMonth, isValidYear, stringToDate } from '$lib/utils';
import { error } from '@sveltejs/kit';

/* Needed to prerender all entries not only the ones referenced by a link */
export function entries() {
	var _postMap = posts.map((post) => {
		var date = stringToDate(post.date);
		return {
			year: date.getFullYear().toString(),
			month: date.toLocaleDateString("en-US", { month: '2-digit' })
		}
	})

	// Remove duplicates
	var _result = _postMap.filter((value, index) => {
		const _value = JSON.stringify(value);
		return index === _postMap.findIndex(obj => {
			return JSON.stringify(obj) === _value;
		});
	});

	return _result;
}

export function load({ params }: any) {
	//If params.month and params.year are not valid -> redirect to /blog or throw error
	if (!isValidMonth(params.month) || !isValidYear(params.year)) {
		throw error(404, '');
	}

	// if (!isValidMonth(params.month) || !isValidYear(params.year) && browser) {
	// 	goto(base + '/blog');
	// }

	posts.sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.file < b.file) ? 1 : -1) : -1);

	return {
		//Return only the ones in the selected year and month
		posts: posts.filter((post) => post.visible == true && stringToDate(post.date).getFullYear().toString() == params.year && stringToDate(post.date).toLocaleDateString("en-US", { month: '2-digit' }) == params.month).map((post) => {
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
				preview: post.preview
			}
		}),
		year: params.year,
		month: stringToDate('2000' + params.month + '01').toLocaleDateString("en-US", { month: 'long' })
	}
}
