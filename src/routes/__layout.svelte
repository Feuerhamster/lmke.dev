<script lang="ts">
	import "@fontsource/atkinson-hyperlegible";
	import Navbar from "$components/layout/navbar.svelte"
</script>

<div class="app">
	<Navbar />
	<slot></slot>
</div>

<style lang="scss">
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