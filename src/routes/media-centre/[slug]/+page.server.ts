import type { BR_POST } from '$lib/models';
import type { PageServerLoad } from './$types';
import { staticFetchSingle } from '$lib/services/api';
import searchdata from '$lib/services/search.json';

export const load: PageServerLoad = async ({ params, url }) => {
	const { slug } = params;

	// Note --> temporary error creeping in here.
	if (slug === 'favicon.png') return {};

	const post = await staticFetchSingle(searchdata as unknown as BR_POST[], params.slug);

	return {
		post,
		// stuff: {
		meta: {
			title: post.heading,
			image: post.illustration,
			description: post.excerpt,
			author: post.author,
			date: post.date,
			url: url.pathname
		}
		// }
	};
};
