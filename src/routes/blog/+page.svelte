<script lang="ts">
	import ArticleItem from "$components/articleItem.svelte";
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";

	import { Rss } from "lucide-svelte";
	import pageMeta from "$lib/pageMeta";
	import type { PageServerData } from "./$types";
	import BoxedLink from "$components/boxedLink.svelte";

	export let data: PageServerData;

	const { articles, topics, page, totalPages } = data;

	const formattedTopics = topics?.map((t) => t.name);

	const pageMetaModified = {
		description: "Lena's persönlicher Blog.&#x0A;&#x0A;Themen: " + formattedTopics?.join(", "),
		title: pageMeta.title + " - " + "Blog"
	};
</script>

<svelte:head>
	<title>{pageMetaModified.title}</title>
	<meta name="description" content={pageMetaModified.description} />
	<meta property="og:title" content={pageMetaModified.title} />
	<meta property="og:description" content={pageMetaModified.description} />
	<meta property="og:image" content={pageMeta.og_image} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="de_DE" />
	<meta property="og:site_name" content={pageMeta.title} />
	<meta name="robots" content="noindex" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="lmke.dev Blog RSS Feed"
		href="/blog/rss.xml"
	/>
</svelte:head>

<Hero size="small">
	<TitleFont>Mein persönlicher Blog</TitleFont>
	<p class="topics">
		{@html formattedTopics?.join(`<span class="spacer"> | </span>`)}
	</p>
</Hero>

<div class="limited-page">
	<section>
		{#if !articles || articles.length < 1}
			<h3>Keine Artikel vorhanden</h3>
		{:else}
			{#each articles as article}
				<ArticleItem {article} />
			{/each}
		{/if}
	</section>

	{#if page !== undefined && totalPages !== undefined}
		<section>
			<p class="paging">
				<a href="?page={page - 1}" data-disabled={!(page > 1)}>Zurück</a>

				<span>Seite <b> {page} </b> von <b> {totalPages} </b></span>

				<a href="?page={page + 1}" data-disabled={!(page < totalPages)}>Weiter</a>
			</p>
		</section>
	{/if}

	<section class="rss">
		<BoxedLink href={"/blog/rss.xml"} newTab light>
			<Rss />
			RSS Feed
		</BoxedLink>
	</section>
</div>

<style lang="scss">
	@use "../../scss/defaults.scss" as *;
	@use "../../scss/mixins.scss" as *;

	.limited-page {
		gap: 24px;
		margin-top: -2rem;

		@include limited-page;

		section {
			width: initial;

			.paging {
				display: flex;
				gap: 0.6rem;
			}

			a[data-disabled="true"] {
				pointer-events: none;
				color: $color-text;
				opacity: 0.4;
				cursor: not-allowed;
			}

			&.rss {
				color: $color-orange;
			}
		}
	}

	:global(.hero) {
		:global(.spacer) {
			opacity: 0.5;
		}
	}
</style>
