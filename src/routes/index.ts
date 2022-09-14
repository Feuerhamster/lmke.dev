import directus, { graphql } from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

import IndexGQLQuery from "../graphql/index.gql?raw";

/*export const get: RequestHandler = async () => {
	let aboutMeReq = directus.items("lmke_dev").readByQuery();
	let skillsReq = directus.items("lmke_skills").readByQuery({
		filter: {
			hidden: {
				_neq: true
			}
		}
	});
	let projectsReq = directus.items("lmke_projects").readByQuery({
		filter: {
			discontinued: {
				_neq: true
			}
		}
	});
	let friendsReq = directus.items("lmke_friends").readByQuery();
	let articleTopicsReq = directus.items("lmke_article_topics").readByQuery({
		fields: ["name"]
	});
	let newestArticleReq = directus.items("lmke_articles").readByQuery({
		limit: 1,
		sort: ["-date_published", "-date_created"],
		fields: [
			"*",
			"topics.topic.name",
			"preview_image.id",
			"preview_image.title",
			"user_created.*",
			"user_created.avatar.id"
		]
	})

	let results = await Promise.all([aboutMeReq, skillsReq, projectsReq, friendsReq, articleTopicsReq, newestArticleReq]);
	let [aboutMeRes, skillsRes, projectsRes, friendsRes, articleTopicsRes, newestArticleRes] = results;

	return {
		body: {
			aboutMe: aboutMeRes.data,
			skills: skillsRes.data,
			projects: projectsRes.data,
			friends: friendsRes.data,
			articleTopics: articleTopicsRes.data,
			newestArticle: newestArticleRes.data[0]
		}
	}
}*/

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