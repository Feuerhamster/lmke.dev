<script lang="ts">
	import { page } from "$app/state";
	export let href: string;
</script>

<a {href} class:active={page.url.pathname == href}>
	<slot />
</a>

<style lang="scss">
	@use "../scss/defaults" as *;
	@use "../scss/mixins" as *;

	a {
		text-decoration: none;
		color: $color-text;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		@include underline($color: $color-text, $height: 2px, $offset: -2px);

		&:hover:after,
		&.active:after {
			width: 100% !important;
			opacity: 1 !important;
		}
	}
</style>
