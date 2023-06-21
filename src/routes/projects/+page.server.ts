import GQLProjectsQuery from "$graphql/projects.gql?raw";
import { graphql } from "$lib/directus";
import type { IDirectusProject } from "$models/directus";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
	let data = await graphql(GQLProjectsQuery);

	return {
		projects: data.lmke_projects as IDirectusProject[]
	}
}