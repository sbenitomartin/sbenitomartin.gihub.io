import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { sitemapWrapAdapter } from "sveltekit-static-sitemap";

// TODO const ducplicated in constants module
const site_url = "https://sergiobenito.me";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		prerender: {
			origin: site_url,
			// If dynamic post and fixed special post have same name/slug (year and month don't count), will not throw an error, and the fixed special will prevail
			handleEntryGeneratorMismatch: 'warn'
			
			// handleHttpError: ({ path, referrer, message }) => {
			// 	return;
			// }
		},
		// In most deployment environments, the server will check if the sitemap.xml file exists as a static asset or a prerendered route first, and only if this is not the case, the SvelteKit server will be invoked, throwing an 404.
		// Sadly this doesn't seem to be the case for the preview server, so the sitemap will not show up when using npm run preview.
		adapter: sitemapWrapAdapter(adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		})),
		paths: { 
			// relative: false,
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH 
		}
	},
};

export default config;
