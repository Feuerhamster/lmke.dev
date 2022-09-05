import directus from "$lib/directus";
import type { IDirectusArticle } from "$models/directus";
import type { RequestHandler } from "@sveltejs/kit";
import { getDirectusImageUrl } from "$lib/utils";

function generateFeed(articles: IDirectusArticle[]) {
	const imageSettings = { quality: 70, width: 480, height: 270, format: "jpg", fit: "outside" };

	return `<?xml version="1.0" encoding="utf-8"?>
	<rss version="2.0">
		<channel>
			<title>lmke.dev Blog</title>
			<description>Mein persönlicher Blog</description>
			<link>https://lmke.dev/blog</link>
			<language>de-DE</language>
			<copyright>Copyright ${new Date().getFullYear()}</copyright>
			<generator>sveltekit</generator>
			${
				articles.map((article) => `
					<item>
						<title>${ article.title }</title>
						<link>https://lmke.dev/blog/${ article.slug }-${ article.id }</link>
						<guid isPermaLink="true">https://lmke.dev/blog/${ article.slug }-${ article.id }</guid>
						<author>${ article.user_created.first_name } ${ article.user_created.last_name }</author>
						<pubDate>${new Date(article.date_updated ?? article.date_created).toUTCString()}</pubDate>
						<description>${ article.description }</description>
						${
							article.topics.map((topic) => `<category>${ topic.topic.name }</category>`)
						}
						<enclosure type="image/jpeg" url="${ getDirectusImageUrl(article.preview_image.id, imageSettings) }"></enclosure>
					</item>
				`)
			}
		</channel>
	</rss>`
}

export const get: RequestHandler = async () => {
	let latestArticles = await directus.items("lmke_articles").readByQuery({
		limit: 20,
		sort: ["-date_updated"],
		fields: [
			"*",
			"topics.topic.name",
			"wallpaper_image.id",
			"wallpaper_image.title",
			"preview_image.id",
			"preview_image.title",
			"user_created.*",
			"user_created.avatar.id"
		]
	});

	return {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml",
		},
		body: generateFeed(latestArticles.data),
	}
}