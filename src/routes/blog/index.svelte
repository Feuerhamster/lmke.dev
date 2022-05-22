<script>

import TitleFont from "$components/titleFont.svelte";

</script>
<div class="colored-hero">
	<TitleFont>Blog</TitleFont>
</div>

<style lang="scss">
	.colored-hero {
		padding: 10% 2% 15% 2%;
		background-image: url("https://images.unsplash.com/photo-1515165616480-efd71925068f?fm=jpg&auto=format&fit=crop&w=1170");
		background-repeat: no-repeat;
		background-size: cover;

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