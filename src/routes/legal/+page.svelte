<script lang="ts">
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	import pageMeta from "$lib/pageMeta";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	const { legal } = data;

	const pageMetaModified = {
		description: "Impressum und Datenschutz",
		title: pageMeta.title + " - " + "Rechtliches"
	};
</script>

<svelte:head>
	<title>{pageMetaModified.title}</title>
	<meta name="description" content={pageMetaModified.description} />
	<meta property="og:title" content={pageMetaModified.title} />
	<meta property="og:description" content={pageMetaModified.description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="de_DE" />
	<meta property="og:site_name" content={pageMeta.title} />
	<meta name="robots" content="noindex" />
</svelte:head>

<Hero size="small">
	<TitleFont>Rechtliches</TitleFont>
	<p class="topics">Impressum und Datenschutz</p>
</Hero>

<div class="limited-page">
	<section>
		{@html legal}
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
			width: 100%;
			max-width: 800px;
			gap: 24px;
		}
	}

	:global(.limited-page > section) {
		@include formatted-content;
	}
</style>
