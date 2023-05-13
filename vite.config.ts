import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import path from 'path';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
