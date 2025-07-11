<script lang="ts">
	export let dark: boolean = false;
	export let blur: boolean = false;
</script>

<span class="label" class:dark class:blur>
	<slot />
</span>

<style lang="scss">
	@use "../scss/defaults.scss" as *;

	.label {
		background-color: rgba($color-text, 0.1);
		color: $color-text-accent-lighter;
		border: 1px solid $color-border;
		padding: 0px 12px;
		border-radius: 32px;
		display: inline-block;

		&.blur {
			backdrop-filter: blur(12px);
			-webkit-backdrop-filter: blur(12px);
			/* Force hardware acceleration */
			transform: translate3d(0, 0, 0);
		}

		&.dark {
			background: $color-background-transparency;
			color: inherit;
		}

		&:last-child {
			margin: 0;
		}
	}
</style>
