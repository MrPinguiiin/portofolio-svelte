import adapter from '@sveltejs/adapter-static';

const config = {
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
};

export default config;
