import type { RequestHandler } from "@sveltejs/kit";
import GQLProjectsQuery from "$graphql/projects.gql?raw";
import { graphql } from "$lib/directus";

export const get: RequestHandler = async () => {

	let data = await graphql(GQLProjectsQuery);

	return {
		body: {
			projects: data.lmke_projects
		}
	}
}