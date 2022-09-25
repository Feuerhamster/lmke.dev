<script lang="ts">
	import ArticleItem from "$components/articleItem.svelte";
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	import type { IDirectusArticle, IDirectusArticleTopic } from "$models/directus";
	import RSSIcon from "lucide-icons-svelte/rss.svelte";
	import pageMeta from "$content/pageMeta";

	export let articles: IDirectusArticle[] = [];
	export let topics: IDirectusArticleTopic[];
	export let page: number;
	export let totalPages: number;

	const formattedTopics = topics.map((t) => t.name);

	const pageMetaModified = {
		description: "Lena's persönlicher Blog.&#x0A;&#x0A;Themen: " + formattedTopics.join(", "),
		title: pageMeta.title + " - " + "Blog"
	}
</script>

<svelte:head>
	<title>{ pageMetaModified.title }</title>
	<meta name="description" content={ pageMetaModified.description } />
	<meta property="og:title" content={ pageMetaModified.title } />
	<meta property="og:description" content={ pageMetaModified.description } />
	<meta property="og:image" content={ pageMeta.og_image }/>
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="de_DE" />
	<meta property="og:site_name" content={ pageMeta.title } />
</svelte:head>

<Hero size="small">
	<TitleFont>Mein persönlicher Blog</TitleFont>
	<p class="topics">
		{@html formattedTopics.join(`<span class="spacer"> | </span>`) }
	</p>
</Hero>

<div class="limited-page">
	<section>
		{#each articles as article}
			<ArticleItem {article} />
		{/each}
	</section>

	<section>
		<p>
			<a href="?page={ page-1 }" data-disabled={!(page > 1)}>Zurück</a>
			
			<span>Seite <b> { page } </b> von <b> { totalPages } </b></span>

			<a href="?page={ page+1 }" data-disabled={!(page < totalPages)}>Weiter</a>
		</p>
	</section>
	<section>
		<a href="/blog/rss.xml" target="_blank" class="rss">
			<RSSIcon />
			<span>RSS Feed</span>
		</a>
	</section>
</div>

<style lang="scss">
	@import "../../scss/defaults.scss";
	@import "../../scss/mixins.scss";

	.limited-page {
		@include limited-page;
		gap: 24px;
		margin-top: -2rem;

		section {
			width: initial;

			a[data-disabled="true"] {
				pointer-events: none;
				color: $color-text;
				opacity: 0.3;
			}

			a.rss {
				color: $color-orange;
				display: flex;
				align-items: center;
				gap: 6px;
				text-decoration: none;

				:global(.lucide) {
					height: 1rem;
					width: 1rem;
				}
			}
		}
	}

	:global(.hero) {
		:global(.spacer) {
			opacity: 0.5;
		}
	}
</style>