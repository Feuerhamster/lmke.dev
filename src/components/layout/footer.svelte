<script lang="ts">
	import { currentWallpaper } from "$lib/stores";
</script>

<footer>
	<p>
		© { new Date().getFullYear() } Lena Emme
	</p>

	<p>
		<a href="https://unsplash.com/photos/{$currentWallpaper.title}" rel="noopener" target="_blank">Wallpaper</a> from <a href="https://unsplash.com" rel="noopener" target="_blank">Unsplash</a>
	</p>
</footer>

<style lang="scss">
	@import "../../scss/defaults";

	footer {
		display: flex;
		justify-content: space-around;

		background-color: rgba(0, 0, 0, 0.3);
		padding: 12px;
		color: rgba($color-text, 0.4);
		font-size: 0.85em;

		a {
			color: inherit;
		}
	}
</style>