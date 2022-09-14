<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusArticle } from "$models/directus";
	import Label from "./label.svelte";

	export let article: IDirectusArticle;

	$: formattedDate = new Date(article.date_published ?? article.date_created).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit" });
	$: formattedAuthor = article.user_created.first_name + " " + article.user_created.last_name;
</script>

<a class="article-item" href="/blog/{ article.id }/{ article.slug }">

	<img src={ getDirectusImageUrl(article.preview_image.id, { quality: 80, width: 210, height: 150, fit: "cover" }) } alt="preview" />

	<div class="info">
		<h3> { article.title } </h3>
		<p> { article.description } </p>
		<p class="meta">
			{#each article.topics as topic}
				<Label> { topic.topic.name } </Label>
			{/each}

			<span>
				{ formattedDate } von { formattedAuthor }
			</span>
		</p>
	</div>

</a>


<style lang="scss">
	@import "../scss/defaults.scss";

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
				gap: 6px;
			}
		}
	}
</style>