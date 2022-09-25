<script lang="ts">
	import { currentWallpaper } from "$lib/stores";
</script>

<footer>
	<p>
		© { new Date().getFullYear() } Lena Emme
	</p>

	<p>
		<a href={$currentWallpaper.source} rel="noopener" target="_blank">Wallpaper</a> from <a href="https://unsplash.com" rel="noopener" target="_blank">Unsplash</a>
	</p>
</footer>

<style lang="scss">
	@import "../../scss/defaults";
	@import "../../scss/mixins";

	footer {
		display: flex;
		justify-content: space-around;
		gap: 12px;

		background-color: rgba(0, 0, 0, 0.3);
		padding: 12px;
		color: rgba($color-text, 0.4);
		font-size: 0.85rem;
		margin-top: auto;

		a {
			color: inherit;
		}

		@include media-mobile() {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>