import type { BR_POST } from '$lib/models';
import type { PageServerLoad } from './$types';
import { staticFetch } from '$lib/services/api';
import searchdata from '$lib/services/search.json';

export const load: PageServerLoad = async () => {
	const { posts } = await staticFetch(searchdata as unknown as BR_POST[], ['news'], 30);

	return {
		posts,
		meta: {
			title: 'news',
			image: '',
			description: 'Browse our news articles.',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/news'
		}
	};
};
