<script lang="ts">
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	import Giscus from "@giscus/svelte";

	import type { IDirectusArticle } from "$models/directus";
	import { getDirectusImageUrl } from "$lib/utils";
	import { page } from "$app/stores";
	import Label from "$components/label.svelte";

	export let article: IDirectusArticle;

	$: wallpaperId = article.wallpaper_image?.id ?? article.preview_image?.id;
	$: formattedPublishedDate = new Date(article.date_published ?? article.date_created).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit" });
	$: formattedUpdatedDate = new Date(article.date_updated).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" });
	$: formattedAuthor = article.user_created.first_name + " " + article.user_created.last_name;
</script>

<Hero wallpaper={ getDirectusImageUrl(wallpaperId, { quality: 70 }) } size="big">
	<TitleFont> { article.title } </TitleFont>
	<p> { article.description } </p>
</Hero>

<svelte:head>
	<title> { article.title } - lmke.dev/Blog</title>
	<meta name="description" content={ article.description } />
	<meta property="og:title" content={ article.title } />
	<meta property="og:description" content={ article.description } />
	<meta property="og:image" content={ getDirectusImageUrl(article.preview_image.id, { quality: 80, width: 200, height: 140, fit: "cover" }) }/>
</svelte:head>

<div class="limited-page">
	<div class="user">
		<img src={ getDirectusImageUrl(article.user_created.avatar.id, { quality: 70 }) } alt="user avatar" />
		<p class="name"> { formattedAuthor } </p>
		<p class="meta">
			<span> { formattedPublishedDate } </span>
			{#each article.topics as topic}
				<Label> { topic.topic.name } </Label>
			{/each}
		</p>
	</div>

	<article>
		{@html article.content}
	</article>

	<div class="article-meta">
		<p>
			<b>Zuletzt bearbeitet:</b>
			<span> { formattedUpdatedDate } </span>
		</p>
		{#if article.preview_image?.source}
			<p>
				<b>Vorschaubild Quelle:</b>
				<a href={article.preview_image.source} target="_blank" rel="noopener"> { article.preview_image.source } </a>
			</p>
		{/if}
		{#if article.wallpaper_image?.source}
			<p>
				<b>Hintergrundbild Quelle:</b>
				<a href={article.wallpaper_image.source} target="_blank" rel="noopener"> { article.wallpaper_image.source } </a>
			</p>
		{/if}
	</div>

	<div class="comment-box">

		{#if !article.disable_comments}
			<Giscus
				id="comments"
				repo="Feuerhamster/lmke.dev"
				repoId="R_kgDOHYL4Qg"
				category="Comments"
				categoryId="DIC_kwDOHYL4Qs4CRXzl"
				mapping="og:title"
				strict="0"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="top"
				theme="{$page.url.origin}/giscus.css"
				lang="de"
				loading="lazy"
			/>
		{:else}
			<p class="comments-disabled">
				[ Kommentare deaktiviert ]
			</p>
		{/if}
	</div>
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
				display: flex;
				align-items: flex-start;
				gap: 6px;
			}
		}

		.comment-box {
			display: flex;
			align-items: center;

			:global(#comments) {
				max-width: 720px;
			}
		}

		.article-meta {
			gap: 6px;
			font-size: 0.85rem;
			color: rgba($color-text, 0.5);

			a {
				opacity: 0.8;
			}
		}

		.comments-disabled {
			color: $color-orange;
			opacity: 0.6;
			display: flex;
			align-items: center;
			gap: 6px;
			user-select: none;
		}
	}
</style>