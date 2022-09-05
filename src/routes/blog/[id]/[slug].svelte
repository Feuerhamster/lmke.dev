<script lang="ts">
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";

	import type { IDirectusArticle } from "$models/directus";
	import { getDirectusImageUrl } from "$lib/utils";

	export let article: IDirectusArticle;

	$: wallpaperId = article.wallpaper_image?.id ?? article.preview_image?.id;
	$: formattedDate = new Date(article.date_updated ?? article.date_created).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit" });
	$: formattedTopics = article.topics.map((t) => t.topic.name).join(", ");
	$: formattedAuthor = article.user_created.first_name + " " + article.user_created.last_name;
</script>

<Hero wallpaper={ getDirectusImageUrl(wallpaperId, { quality: 70 }) }>
	<TitleFont> { article.title } </TitleFont>
	<p> { article.description } </p>
</Hero>

<div class="limited-page">
	<div class="user">
		<img src={ getDirectusImageUrl(article.user_created.avatar.id, { quality: 70 }) } alt="user avatar" />
		<p class="name"> { formattedAuthor } </p>
		<p class="meta"> { formattedDate } - { formattedTopics } </p>
	</div>

	<article>
		{@html article.content}
	</article>
</div>

<style lang="scss">
	@import "../../../scss/mixins.scss";
	@import "../../../scss/defaults.scss";

	.limited-page {
		@include limited-page;
		gap: 30px;

		.user {
			display: grid;
			grid-template-areas:
			"image name"
			"image meta";
			grid-template-columns: 70px 1fr;
			column-gap: 18px;
			row-gap: 0;

			img {
				max-height: 70px;
				border-radius: 50%;
				grid-area: image;
			}
			
			.name {
				grid-area: name;
			}

			.meta {
				color: rgba($color-text, 0.5);
				grid-area: meta;
			}
		}
	}
</style>