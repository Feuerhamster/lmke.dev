<script lang="ts">
	import "@fontsource/fira-sans/400.css";
	import "@fontsource/fira-sans/700.css";

	import Navbar from "$components/layout/navbar.svelte";
	import { currentWallpaper } from "$lib/stores";
	import Footer from "$components/layout/footer.svelte";

	import NProgress from "nprogress";
	import { navigating } from "$app/stores";

	import "nprogress/nprogress.css";
	import type { LayoutData } from "./$types";
	import { browser, dev } from "$app/environment";
	import { env } from "$env/dynamic/public";

	export let data: LayoutData;

	const { wallpaper } = data;

	$currentWallpaper = wallpaper;

	NProgress.configure({
		minimum: 0.1,
		trickleSpeed: 100,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	if (dev && browser) {
		localStorage.setItem("umami.disabled", "1");
	}
</script>

<svelte:head>
	{#if env.PUBLIC_UMAMI_SRC}
		<script defer src={env.PUBLIC_UMAMI_SRC} data-website-id={env.PUBLIC_UMAMI_WEBSITE_ID}>
		</script>
	{/if}
	<link rel="me" href="https://chaos.social/@lmke" />
</svelte:head>

<div class="app">
	<Navbar />
	<slot />
	<Footer />
</div>

<style lang="scss">
	@use "../scss/reset" as *;
	@use "../scss/defaults" as *;
	@use "../scss/mixins" as *;

	:global(html) {
		font-size: $default-font-size;

		@include media-mobile() {
			font-size: $default-font-size-mobile;
		}
	}

	:global(body) {
		margin: 0;
		background-color: $color-background;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		font-family: "Fira Sans", sans-serif;
		color: $color-text;
		font-size: $default-font-size;
		letter-spacing: 0.012rem;

		@include media-mobile() {
			font-size: $default-font-size-mobile;
		}
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	:global(a) {
		color: $color-blue;
	}

	:global(#nprogress .bar) {
		background: $color-pink;
		height: 3px;
	}
	:global(#nprogress .peg) {
		box-shadow: 0 0 10px $color-pink, 0 0 5px $color-pink;
	}
</style>
