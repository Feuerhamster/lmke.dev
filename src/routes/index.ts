import { graphql } from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

import IndexGQLQuery from "$graphql/index.gql?raw";

export const get: RequestHandler = async () => {
	const data = await graphql(IndexGQLQuery);

	return {
		body: {
			aboutMe: data.lmke_dev,
			skills: data.lmke_skills,
			projects: data.lmke_projects,
			friends: data.lmke_friends,
			articleTopics: data.lmke_article_topics,
			newestArticle: data.lmke_articles[0]
		}
	}
}