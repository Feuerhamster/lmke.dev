<script lang="ts">
	import FullProjectItem from "$components/fullProjectItem.svelte";
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";
	import type { IDirectusProject } from "$models/directus";

	export let projects: IDirectusProject[] = [];
</script>
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
		gap: 36px;
		margin-top: -2rem;

		section {
			width: initial;

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