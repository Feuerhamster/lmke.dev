import directus from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {

	let projects = await directus.items("lmke_projects").readByQuery({
		fields: [
			"*",
			"technologies.skill.name"
		]
	});

	return {
		body: {
			projects: projects.data
		}
	}
}