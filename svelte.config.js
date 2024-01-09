import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		prerender: {
			// If dynamic post and fixed special post have same name/slug (year and month don't count), will not throw an error, and the fixed special will prevail
			handleEntryGeneratorMismatch: 'warn'
			
			// handleHttpError: ({ path, referrer, message }) => {
			// 	return;
			// }
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: { 
			// relative: false,
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH 
		}
	},
};

export default config;
