import type { ID } from "@directus/sdk";

export interface IDirectusAboutMe {
	id: ID
	picture: ID;
	name: string;
	subtitle: string;
	github_link: string;
	email: string;
	about_me: string;
}

export interface IDirectusSkill {
	id: ID
	name: string;
}

export interface IDirectusProject {
	id: ID
	logo: ID;
	title: string;
	description: string;
	link: string;
	link_source: string;
	discontinued: boolean;
}

export interface IDirectusFriend {
	id: ID
	name: string;
	image_url: string;
	activity: string;
	link_web: string;
	link_gh: string;
}

export interface IDirectusArticle {
	id: ID;
	status: string;
	date_created: string;
	date_updated: string;
	user_created: string;
	user_updated: string;
	title: string;
	topics: IDirectusArticleTopics[];
	description: string;
	content: string;
}

export interface IDirectusArticleTopics {
	id: ID;
	name: string;
}

export interface IDirectusImage {
	id: ID;
	title: string;
	description: string;
}

export type DirectusCollections = {
	lmke_dev: IDirectusAboutMe;
	skills: IDirectusSkill;
	lmke_projects: IDirectusProject;
	friends: IDirectusFriend;
	lmke_articles: IDirectusArticle;
}