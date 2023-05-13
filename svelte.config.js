import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		
	},
	preprocess: preprocess({
		preserve: ['partytown']
	}),
	vite: {
		plugins: [
			partytownVite({
				// `dest` specifies where files are copied to in production
				dest: path.join(
					process.cwd(),
					'static',
					'~partytown'
				)
			})
		]
	}
};

export default config;
