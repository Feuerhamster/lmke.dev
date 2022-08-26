<script lang="ts">
	import NavLink from "$components/navLink.svelte";
</script>

<div class="navbar">
	<h1>
		lmke<span>.dev</span>
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
		backdrop-filter: blur(10px);
		
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 3;
		
		display: flex;
		justify-content: space-around;
		
		padding: 8px;
		
		h1 {
			margin: 0;
			font-size: 1.5em;
			font-weight: bold;
			letter-spacing: 2px;
			
			span {
				font-weight: normal;
			}
		}
		
		nav {
			display: flex;
			gap: 20px;
			align-items: center;
		}
	}
</style>