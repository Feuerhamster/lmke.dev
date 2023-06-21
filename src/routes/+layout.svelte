<script lang="ts">
	import "@fontsource/atkinson-hyperlegible";
	import Navbar from "$components/layout/navbar.svelte";
	import { currentWallpaper } from "$lib/stores";
	import Footer from "$components/layout/footer.svelte";

	import NProgress from "nprogress";
	import { navigating } from "$app/stores";

	import "nprogress/nprogress.css";
	import type { LayoutData } from "./$types";

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
</script>

<div class="app">
	<Navbar />
	<slot />
	<Footer />
</div>

<style lang="scss">
	@import "../scss/reset";
	@import "../scss/defaults";
	@import "../scss/mixins";

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
		font-family: "Atkinson Hyperlegible", sans-serif;
		color: $color-text;
		font-size: $default-font-size;
		letter-spacing: 1px;

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
