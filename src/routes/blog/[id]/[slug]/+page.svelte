<script lang="ts">
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	// @ts-ignore
	import Giscus from "@giscus/svelte";
	import pageMeta from "$lib/pageMeta";

	import { formatToRelativeTime, getDirectusImageUrl } from "$lib/utils";
	import { page } from "$app/state";
	import Label from "$components/label.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	const { article } = data;

	$: wallpaperId = article.wallpaper_image?.id ?? article.preview_image?.id;
	$: hasWallpaperImage = !!article.wallpaper_image?.id;
	$: formattedPublishedDate = new Date(article.date_published).toLocaleDateString("de-DE", {
		year: "numeric",
		month: "long",
		day: "2-digit"
	});
	$: formattedUpdatedDate = new Date(article.date_updated).toLocaleDateString("de-DE", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	});
	$: formattedAuthor = article.user_created.first_name + " " + article.user_created.last_name;

	const relativeTime = formatToRelativeTime(article.date_published);
	const relativeTimeUpdated = formatToRelativeTime(article.date_updated);
</script>

<Hero
	wallpaper={hasWallpaperImage ? getDirectusImageUrl(wallpaperId, { quality: 70 }) : undefined}
	size={hasWallpaperImage ? "big" : undefined}
>
	<TitleFont style="font-size: 1.8rem">{article.title}</TitleFont>
	<p>{article.description}</p>
</Hero>

<svelte:head>
	<title>{article.title} - {pageMeta.title}</title>
	<meta name="description" content={article.description} />
	<meta property="og:title" content={article.title} />
	<meta property="og:description" content={article.description} />
	<meta
		property="og:image"
		content={getDirectusImageUrl(article.preview_image.id, {
			quality: 80,
			width: 1280,
			height: 720,
			fit: "cover"
		})}
	/>
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="de_DE" />
	<meta property="og:site_name" content={pageMeta.title} />
	<meta
		property="article:published_time"
		content={new Date(article.date_published).toISOString()}
	/>
	<meta property="article:modified_time" content={new Date(article.date_updated).toISOString()} />
	<meta property="article:author" content={page.url.href} />
	{#each article.topics as topic}
		<meta property="article:tag" content={topic.topic.name} />
	{/each}

	{#if article.noindex || article.private}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<div class="limited-page">
	<div class="user">
		<img
			src={getDirectusImageUrl(article.user_created.avatar.id, { quality: 70 })}
			alt="user avatar"
		/>
		<p class="name">{formattedAuthor}</p>
		<p class="meta">
			<span class="published">
				<b>{formattedPublishedDate}</b> - {relativeTime}
			</span>
			{#each article.topics as topic}
				<Label>{topic.topic.name}</Label>
			{/each}
		</p>
	</div>

	<article>
		{@html article.content}
	</article>

	<div class="article-meta">
		<p>
			<b>Zuletzt bearbeitet:</b>
			<span> {formattedUpdatedDate} ({relativeTimeUpdated}) </span>
		</p>
		{#if article.preview_image?.source}
			<p>
				<b>Vorschaubild Quelle:</b>
				<a href={article.preview_image.source} target="_blank" rel="noopener">
					{article.preview_image.source}
				</a>
			</p>
		{/if}
		{#if article.wallpaper_image?.source}
			<p>
				<b>Hintergrundbild Quelle:</b>
				<a href={article.wallpaper_image.source} target="_blank" rel="noopener">
					{article.wallpaper_image.source}
				</a>
			</p>
		{/if}
	</div>

	<div class="comment-box">
		{#if !article.disable_comments && !article.private}
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
				theme="{page.url.origin}/giscus.css"
				lang="de"
				loading="lazy"
			/>
		{:else}
			<p class="comments-disabled">[ Kommentare deaktiviert ]</p>
		{/if}
	</div>
</div>

<style lang="scss">
	@use "../../../../scss/mixins.scss" as *;
	@use "../../../../scss/defaults.scss" as *;

	.limited-page {
		gap: 30px;
		@include limited-page;

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
				font-weight: bold;
			}

			.meta {
				color: rgba($color-text, 0.8);
				grid-area: meta;
				display: flex;
				flex-wrap: wrap;
				align-items: flex-start;
				gap: 6px;

				.published {
					margin-right: 0.4rem;
				}
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
			color: $color-text-accent;

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

	:global(.limited-page > article) {
		@include formatted-content;
	}
</style>
