<script lang="ts">
	export let href: string = "";
	export let noopener: boolean = false;
	export let newTab: boolean = false;
	export let light: boolean = false;
</script>

<a {href} rel={noopener ? "noopener" : ""} target={newTab ? "_blank" : ""} class:light>
	<slot />
</a>

<style lang="scss">
	@use "../scss/defaults" as *;
	@use "../scss/mixins" as *;
	@use "sass:color";

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		color: $color-text;
		text-decoration: none;

		background: $color-background-transparency;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		/* Force hardware acceleration */
		transform: translate3d(0, 0, 0);

		border: 1px solid $color-border;
		border-radius: 6px;

		padding: 4px 10px;

		:global(img) {
			max-height: 1.2rem;
			max-width: 1.2rem;
		}

		&.light {
			background: $color-background-transparency-light;
		}

		transition: 0.2s background;

		&.light:hover {
			background: color.change($color-background-transparency-light, $alpha: 8%);
		}

		&:hover {
			background: color.change($color-background-transparency, $alpha: 26%);
		}
	}
</style>
