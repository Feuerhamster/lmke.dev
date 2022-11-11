<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";
	import ackee from "$lib/ackee";
	import { populateConfig } from "$lib/config";
	import { setOGImage } from "$content/pageMeta";
	
	let configLoaded = false;

	export const load: Load = async ({ url, fetch, session }) => {
		if (!configLoaded) {
			populateConfig(session);
			configLoaded = true;
		}
		
		let res = await fetch("/wallpaper");
		let data = await res.json();

		ackee(url.pathname, session.ackee_server, session.ackee_domainId, session.ackee_detailed);
		setOGImage(session.og_image);

		return {
			props: {
				wallpaper: data.wallpaper
			}
		}
	}
</script>

<script lang="ts">
	import "@fontsource/atkinson-hyperlegible";
	import Navbar from "$components/layout/navbar.svelte";
	import type { IDirectusImage } from "$models/directus";
	import { currentWallpaper } from "$lib/stores";
	import Footer from "$components/layout/footer.svelte";

	import NProgress from "nprogress";
	import { navigating } from "$app/stores";

	import "nprogress/nprogress.css";

	export let wallpaper: IDirectusImage;

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
	<slot></slot>
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