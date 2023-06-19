import { json } from '@sveltejs/kit';
import { facebook, twitter, linkedIn } from './data.js';
const responseMap: Record<string, string> = { facebook, twitter, linkedIn };
export async function GET({ url }) {
	try {
		return json(responseMap[url.searchParams.get('platform')!], { status: 200 });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
