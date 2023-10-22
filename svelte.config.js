import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				return;
			}
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
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
