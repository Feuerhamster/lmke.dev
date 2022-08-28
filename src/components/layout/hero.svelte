<script lang="ts">
	import { currentWallpaper } from "$lib/stores";
import { getDirectusImageUrl } from "$lib/utils";
</script>

<div class="hero" style="background-image: url({ getDirectusImageUrl($currentWallpaper.id, { quality: 70 }) })">
	<slot></slot>
</div>

<style lang="scss">
	.hero {
		padding: 10% 5% 15% 5%;
		background-color:#403c62;
		/*background-image:
		radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
		radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
		radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
		radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
		radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
		radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
		radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);*/
		background-size: cover;
		background-repeat: no-repeat;
		/*background-image: url("https://source.unsplash.com/1600x900/?colorful,background,wallpaper,colors");*/

		position: relative;
		z-index: 1;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			height: 100%;
			background: rgb(0,0,0);
			background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(26,24,49,1) 90%, rgba(26,24,49,1) 100%);
		}
		
		:global(*) {
			z-index: 3;
		}
	}
</style>