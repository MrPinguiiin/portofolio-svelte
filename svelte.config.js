import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	preprocess: vitePreprocess(),

	kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build2',
            assets: 'build2',
            fallback: null,
            precompress: false
        }),
        // Add the following line to support SPA fallback for GitHub Pages
        prerender: {
            default: true
        }
    }

}

export default config;
