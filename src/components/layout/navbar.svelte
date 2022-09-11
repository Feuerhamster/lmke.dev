<script lang="ts">
	import NavLink from "$components/navLink.svelte";
	import { page } from "$app/stores";

	let pageMapping = {
		blog: "Blog",
		projects: "Projekte"
	};

	$: currentPath = $page.url.pathname.substring(1).split("/")[0];
</script>

<div class="navbar">
	<h1>
		<b>lmke</b>.dev
		<span class="absolute">
			{#if pageMapping[currentPath]}
				<span class="slash">/</span>
				{ pageMapping[currentPath] }
			{/if}
		</span>
	</h1>
	<nav>
		<NavLink href="/">Über mich</NavLink>
		<NavLink href="/projects">Projekte</NavLink>
		<NavLink href="/blog">Blog</NavLink>
	</nav>
</div>

<style lang="scss">
	@import "../../scss/defaults";
	
	.navbar {
		background: $color-background-transparency;
		backdrop-filter: blur(12px);
		/* Force hardware acceleration */
		transform: translate3d(0, 0, 0);
		
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		
		display: flex;
		justify-content: space-around;
		
		padding: 8px;
		
		h1 {
			margin: 0;
			font-size: 1.5rem;
			font-weight: bold;
			letter-spacing: 2px;
			font-weight: normal;
			position: relative;

			.absolute {
				position: absolute;
				display: flex;
				gap: 8px;
				left: 145px;
				top: 0;
			}

			.slash {
				opacity: 0.5;
			}
		}
		
		nav {
			display: flex;
			gap: 20px;
			align-items: center;
		}
	}
</style>