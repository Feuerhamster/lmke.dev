import { graphql } from "$lib/directus";
import type { PageServerLoad } from "./$types";
import type {
	IDirectusAboutMe,
	IDirectusArticle,
	IDirectusArticleTopic,
	IDirectusFriend,
	IDirectusProject,
	IDirectusSkill
} from "$models/directus";

import IndexGQLQuery from "$graphql/index.gql?raw";

export const load: PageServerLoad = async () => {
	const data = await graphql(IndexGQLQuery);

	return {
		aboutMe: data.lmke_dev as IDirectusAboutMe,
		skills: data.lmke_skills as IDirectusSkill[],
		projects: data.lmke_projects as IDirectusProject[],
		friends: data.lmke_friends as IDirectusFriend[],
		articleTopics: data.lmke_article_topics as IDirectusArticleTopic[],
		newestArticle: data.lmke_articles[0] as IDirectusArticle
	};
};
