<span class="label">
	<slot />
</span>

<style lang="scss">
	@import "../scss/defaults.scss";

	.label {
		background-color: rgba($color-text, 0.1);
		color: $color-text-accent-lighter;
		padding: 0px 6px;
		border-radius: 5px;
		display: inline-block;

		&:last-child {
			margin: 0;
		}
	}
</style>
