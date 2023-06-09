import type { BR_POST } from '$lib/models';
import type { PageServerLoad } from './$types';
import { staticFetch } from '$lib/services/api';
import searchdata from '$lib/services/search.json';

export const load: PageServerLoad = async () => {
	const { posts } = await staticFetch(
		searchdata as unknown as BR_POST[],
		['our-rugby-partners'],
		30
	);

	return {
		posts,
		meta: {
			title: 'Rugby partnerships',
			image: 'https://spiffy-sprinkles-88adaf.netlify.app/rugby_partnerships_mobile.png',
			description: 'Browse our rugby and partnership articles.',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/rugby-partnerships'
		}
	};
};
