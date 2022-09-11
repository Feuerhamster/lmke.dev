<span class="label">
	<slot />
</span>

<style lang="scss">
	@import "../scss/defaults.scss";

	.label {
		background-color: rgba($color-text, 0.1);
		padding: 0px 6px;
		border-radius: 5px;
		display: inline-block;
		margin-right: 6px;

		&:last-child {
			margin: 0;
		}
	}
</style>