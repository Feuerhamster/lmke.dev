<h1 {...$$props}>
	<slot />
</h1>

<style lang="scss">
	@import "../scss/defaults";
	@import "../scss/mixins";

	h1 {
		letter-spacing: 5px;
		font-size: 2.4rem;
		margin: 0;
		text-shadow: $default-text-shadow;

		@include media-mobile() {
			letter-spacing: 2px;
			font-size: 1.6rem;
		}
	}
</style>
