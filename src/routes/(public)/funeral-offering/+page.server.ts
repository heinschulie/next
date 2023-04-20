import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'Funeral offering',
			image: '',
			description: '',
			author: 'BrightRock',
			date: new Date().toDateString(),
			url: '/funeral-offering'
		}
	};
};
