<script lang="ts">
	import FullProjectItem from "$components/fullProjectItem.svelte";
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	import pageMeta from "$lib/pageMeta";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	const { projects } = data;

	const pageMetaModified = {
		description: "Lena's Projekte.&#x0A;Websites, Apps, PWA's, Software und mehr.",
		title: pageMeta.title + " - " + "Projekte"
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
</svelte:head>

<Hero size="small">
	<TitleFont>Meine Projekte</TitleFont>
	<p>Websites, Apps, PWA's, Software und mehr</p>
</Hero>

<div class="limited-page">
	<section>
		{#each projects as project}
			<FullProjectItem {project} />
		{/each}
	</section>
</div>

<style lang="scss">
	@use "../../scss/defaults.scss" as *;
	@use "../../scss/mixins.scss" as *;

	.limited-page {
		margin-top: -2rem;
		@include limited-page;

		section {
			gap: 3rem;

			:global(.article-item) {
				padding-left: 1.8rem;
			}
		}
	}
</style>
