import { graphql } from "$lib/directus";
import type { IDirectusArticle } from "$models/directus";
import type { RequestHandler } from "./$types";
import { getDirectusImageUrl } from "$lib/utils";
import GQLBlogQuery from "$graphql/blog.gql?raw";

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
			${articles.map(
				(article) => `
					<item>
						<title>${article.title}</title>
						<link>https://lmke.dev/blog/${article.id}/${article.slug}</link>
						<guid isPermaLink="true">https://lmke.dev/blog/${article.id}/${article.slug}</guid>
						<author>${article.user_created.first_name} ${article.user_created.last_name}</author>
						<pubDate>${new Date(article.date_published).toUTCString()}</pubDate>
						<description>${article.description}</description>
						${article.topics.map((topic) => `<category>${topic.topic.name}</category>`)}
						<enclosure type="image/jpeg" url="${getDirectusImageUrl(
							article.preview_image.id,
							imageSettings
						).replace(/\&/g, "&amp;")}"></enclosure>
					</item>
				`
			)}
		</channel>
	</rss>`;
}

export const GET: RequestHandler = async () => {
	let data = await graphql(GQLBlogQuery, { limit: 18, page: 1 });

	return new Response(generateFeed(data.lmke_articles), {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml"
		}
	});
};
