import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'group-risk-cover',
			image: '',
			description: '',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/group-risk-cover'
		}
	};
};
