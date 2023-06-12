//+layout.server.ts
import type { LayoutServerLoad } from '../$types';

export const load = (async (event) => {
	const { url } = event;
	const gtmDebug = url.searchParams.get('gtm_debug');

	return {
		gtmDebug: !!gtmDebug
	};
}) satisfies LayoutServerLoad;
