import type { ID } from "@directus/sdk";

export interface IDirectusAboutMe {
	id: string;
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