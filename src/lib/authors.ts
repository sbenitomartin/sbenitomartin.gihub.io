import { base } from '$app/paths';

export const authors = [
	{
		id: 1,
        name: "Sergio Benito",
        image: "{base}/img/authors/sergioportrait-1.jpg".replaceAll("{base}", base),
		slug: 'sergio-benito',
		metaDescription: "I like writing and doing street photography, and I´d like to post some of that.",
		htmlDescription:
		`
			I like writing and doing street photography, and I´d like to post some of that. You can also follow me on <a class="link-underlined" href="https://www.instagram.com/sergi0bm/" target="_blank">instagram</a>
		`
	}
];
