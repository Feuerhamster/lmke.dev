import type { ID } from "@directus/sdk";

export type ID = string | number;

export interface IDirectusAboutMe {
	id: ID;
	picture: IDirectusImage;
	name: string;
	subtitle: string;
	github_link: string;
	linkedin_link: string;
	mastodon_link: string;
	email: string;
	about_me: string;
}

export interface IDirectusSkill {
	id: ID;
	name: string;
}

export interface IDirectusProject {
	id: ID;
	logo: IDirectusImage;
	title: string;
	description: string;
	link: string;
	link_source: string;
	full_description: string;
	technologies: { skill: IDirectusSkill }[];
	discontinued: boolean;
}

export interface IDirectusFriend {
	id: ID;
	name: string;
	image_url: string;
	activity: string;
	link_web: string;
	link_gh: string;
}

export interface IDirectusPublicUser {
	first_name: string;
	last_name: string;
	avatar: {
		id: ID;
	};
}

export interface IDirectusArticle {
	id: ID;
	slug: string;
	date_created: string;
	date_updated: string;
	date_published: string;
	user_created: IDirectusPublicUser;
	user_updated: string;
	preview_image: IDirectusImage;
	wallpaper_image?: IDirectusImage;
	title: string;
	topics: { topic: IDirectusArticleTopic }[];
	description: string;
	content: string;
	disable_comments: boolean;
	noindex?: boolean;
	private: boolean;
}

export interface IDirectusArticleTopic {
	id: ID;
	name: string;
}

export interface IDirectusImage {
	id: ID;
	title?: string;
	description?: string;
	source?: string;
}
