<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";
	import Duration from "duration-relativetimeformat";

	import type { IDirectusArticle } from "$models/directus";
	import Label from "./label.svelte";

	export let article: IDirectusArticle;

	$: formattedDate = new Date(article.date_published).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit" });
	$: formattedAuthor = article.user_created.first_name + " " + article.user_created.last_name;

	const relativeTime = new Duration("de", { numeric: "always" }).format(new Date(article.date_published));
</script>

<a class="article-item" href="/blog/{ article.id }/{ article.slug }">

	<img src={ getDirectusImageUrl(article.preview_image.id, { quality: 80, width: 420, height: 300, fit: "cover" }) } alt="preview" />

	<div class="info">
		<h3> { article.title } </h3>
		<p> { article.description } </p>
		<p class="meta">
			{#each article.topics as topic}
				<Label> { topic.topic.name } </Label>
			{/each}

			<span>
				{ formattedDate } ({ relativeTime }) von { formattedAuthor }
			</span>
		</p>
	</div>

</a>


<style lang="scss">
	@import "../scss/defaults";
	@import "../scss/mixins";

	.article-item {
		display: grid;
		grid-template-columns: 210px 1fr;
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
			font-size: 0.85rem;

			h3 {
				font-size: 1.2rem;
			}

			.meta {
				color: rgba($color-text, 0.5);
				display: flex;
				flex-wrap: wrap;
				gap: 6px;
			}
		}

		@include media-mobile() {
			grid-template-columns: 1fr;
			grid-template-areas:
			"image"
			"info";
		}
	}
</style>