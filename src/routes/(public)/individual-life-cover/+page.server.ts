import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'individual-life-cover',
			image: '',
			description: '',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/individual-life-cover'
		}
	};
};
