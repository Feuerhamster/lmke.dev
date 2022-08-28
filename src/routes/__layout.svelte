<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";
	
	export const load: Load = async ({ fetch }) => {
		let res = await fetch("/wallpaper")
		let data = await res.json();

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

	export let wallpaper: IDirectusImage;

	$currentWallpaper = wallpaper;
</script>

<div class="app">
	<Navbar />
	<slot></slot>
	<Footer />
</div>

<style lang="scss">
	@import "../scss/reset";
	@import "../scss/defaults";
	
	:global * {
		box-sizing: border-box;
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
	}
</style>