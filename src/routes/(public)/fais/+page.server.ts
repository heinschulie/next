import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'fais',
			image: '',
			description: '',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/fais'
		}
	};
};
