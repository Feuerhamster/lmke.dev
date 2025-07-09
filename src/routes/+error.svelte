<script lang="ts">
	import ArticleItem from "$components/articleItem.svelte";
	import Hero from "$components/layout/hero.svelte";
	import TitleFont from "$components/titleFont.svelte";

	import { page } from "$app/state";
</script>

<Hero size="small">
	<TitleFont>Fehler</TitleFont>
</Hero>

<div class="limited-page">
	{#if page.error?.message}
		<h2>{page.error.message}</h2>
	{/if}
</div>

<style lang="scss">
	@use "../scss/defaults.scss" as *;
	@use "../scss/mixins.scss" as *;

	.limited-page {
		gap: 24px;

		h2,
		p {
			text-align: center;
		}

		@include limited-page;
	}
</style>
