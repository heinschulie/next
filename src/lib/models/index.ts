import type { WP_REST_API_Post } from 'wp-types';
export interface ACF {
	price: string;
	rating: string;
	apple_link: string;
	google_link: string;
	web_link: string;
	app_developer: string;
	frame: string[];
	type: string[];
	format: string[];
	style: string;
	tone: string[];
	audience: string[];
	geography: string[];
	goal: 'engagement';
	pull_quote: string;
	guest_expert: {
		image: string;
		blurb: string;
		name: string;
	};
	related_posts: any[];
	evergreen: boolean;
	last_reviewed: string;
	download: boolean;
	embed: string;
}

export const CHANGE_SCIENCE = 'change-science';
export const CHANGE_STORIES = 'change-stories';
export const CHANGE_COURSE = 'change-course';
export const CONTENT_STAGING = 'content-staging';

export interface BR_POST {
	ACF: ACF;
	id: number;
	author: string;
	date: string;
	heading: string;
	excerpt: string;
	slug: string;
	content: string;
	categories: string[]; // slugs
	tags: string[]; // slugs
	illustration: string;
	illustrationBackup?: string;
	relatedPosts: string[]; // slugs
	searchString?: string;
}
