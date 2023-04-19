import type { BR_POST } from '$lib/models';

const base = 'https://changeexchange.studio/wp-json/wp/v2';

export function api(method: string, resource: string, data?: Record<string, unknown>) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}

export async function staticFetch(
	body: BR_POST[],
	categories: string[] = [],
	per_page = 4,
	selection = 'UNION'
) {
	const isValid = (post: BR_POST, cat: string) => {
		let valid;
		if (cat === 'article') {
			valid = !post.categories.includes('video') && !post.categories.includes('podcast');
		} else {
			valid = post.categories.includes(cat);
		}

		// console.log(`filter ${post.heading} / ${cat}: `, post.categories.join(' '), valid);
		return valid;
	};

	const posts = body
		.filter((post) =>
			!!categories.length
				? selection === 'UNION'
					? categories.some((cat) => isValid(post, cat))
					: categories.every((cat) => isValid(post, cat))
				: true
		)
		.slice(0, per_page);

	return { posts };
}

export async function staticFetchSingle(body: BR_POST[], slug: string) {
	return body.find((post) => post.slug === slug) as BR_POST;
}

export async function staticFetchSpecified(body: BR_POST[], slugs: string[]) {
	const posts = body.filter((post) =>
		!!slugs.length ? slugs.some((slug) => post.slug === slug) : false
	);

	return { posts };
}
