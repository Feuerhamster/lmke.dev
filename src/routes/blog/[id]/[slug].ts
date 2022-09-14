import directus from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params }) => {

	let article = await directus.items("lmke_articles").readOne(params.id, {
		fields: [
			"*",
			"topics.topic.name",
			"wallpaper_image.id",
			"wallpaper_image.source",
			"preview_image.id",
			"preview_image.source",
			"user_created.*",
			"user_created.avatar.id"
		]
	});

	return {
		body: {
			article
		}
	}
}