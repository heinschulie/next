import type { BR_POST } from '$lib/models';
import type { PageServerLoad } from './$types';
import { staticFetch } from '$lib/services/api';
import searchdata from '$lib/services/search.json';

export const load: PageServerLoad = async () => {
	const { posts } = await staticFetch(
		searchdata as unknown as BR_POST[],
		['news', 'press-releases', 'just-for-you'],
		16
	);

	return {
		posts,
		meta: {
			title: 'media-centre',
			image: '',
			description: 'Browse our articles and media.',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/media-centre'
		}
	};
};
