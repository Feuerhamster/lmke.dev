<script lang="ts">
import { getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusArticle } from "$models/directus";

	export let article: IDirectusArticle;

	$: formattedDate = new Date(article.date_updated).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit" });
	$: formattedTopics = article.topics.map((t) => t.topic.name).join(", ");
</script>

<a class="article-item" href="/blog/{ article.id }">

	<img src={ getDirectusImageUrl(article.preview_image.id, { quality: 80, width: 200, height: 140, fit: "cover" }) } alt="preview" />

	<div class="info">
		<h3> { article.title } </h3>
		<p> { article.description } </p>
		<p class="meta"> { formattedDate } - { formattedTopics } </p>
	</div>

</a>


<style lang="scss">
	@import "../scss/defaults.scss";

	.article-item {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-template-areas: "image info";
		gap: 18px;
		text-decoration: none;
		color: $color-text;

		img {
			grid-area: image;
			border-radius: $default-image-border-radius;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 12px;
			grid-area: info;
			font-size: 0.85em;

			h3 {
				font-size: 1.4em;
			}

			.meta {
				color: rgba($color-text, 0.5);
			}
		}
	}
</style>