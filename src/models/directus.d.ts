import type { ID } from "@directus/sdk";

export interface IDirectusAboutMe {
	picture: string;
	name: string;
	subtitle: string;
	github_link: string;
	email: string;
	about_me: string;
}

export interface IDirectusSkill {
	name: string;
	level: string;
}

export interface IDirectusProject {
	logo: string;
	title: string;
	description: string;
	link: string;
	link_source: string;
	discontinued: boolean;
}