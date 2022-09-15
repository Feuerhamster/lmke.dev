<script lang="ts">
	import FullProjectItem from "$components/fullProjectItem.svelte";
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	import type { IDirectusProject } from "$models/directus";
	import pageMeta from "$content/pageMeta";

	export let projects: IDirectusProject[] = [];

	const pageMetaModified = {
		description: "Lena's Projekte.&#x0A;Websites, Apps, PWA's, Software und mehr.",
		title: pageMeta.title + " - " + "Projekte"
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
	@import "../../scss/defaults.scss";
	@import "../../scss/mixins.scss";

	.limited-page {
		@include limited-page;
		margin-top: -2rem;

		section {
			width: initial;
			gap: 2.2rem;

			:global(.article-item) {
				padding-left: 1.8rem;
			}
		}
	}

	:global(.hero) {
		:global(.spacer) {
			opacity: 0.5;
		}
	}
</style>