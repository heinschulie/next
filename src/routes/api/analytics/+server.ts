import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const platform = url.searchParams.get('platform');

	console.log('FLYING AROUND THE HOUSE: ', platform);

	let newUrl = '';
	switch (platform) {
		case 'facebook': {
			newUrl = 'https://connect.facebook.net/en_US/fbevents.js';
			break;
		}
		default: {
			newUrl = url;
		}
	}

	// return fetch(newUrl);

	try {
		const res = await fetch(newUrl);
		console.log('I HAVE YOUR GOOD CLOTHES IN THE CAR: ', res);

		return res;
	} catch (error) {
		return json({ error }, { status: 500 });
	}

	// const posts = await res.json();
	// console.log('ALL MY FINGERNAILS ARE PAINTED: ', posts);

	// return json(posts, { status: 200 });
}
