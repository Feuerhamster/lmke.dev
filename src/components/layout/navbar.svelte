<script lang="ts">
	import NavLink from "$components/navLink.svelte";
	import { page } from "$app/stores";
	import MenuIcon from "lucide-icons-svelte/menu.svelte";

	let pageMapping = {
		blog: "Blog",
		projects: "Projekte"
	};

	$: currentPath = $page.url.pathname.substring(1).split("/")[0];

	// toggles toe mobile nav menu
	let expand = false;
	function toggleNav() { expand = !expand }
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
	<nav on:click={ toggleNav } class:expand>
		<NavLink href="/">Über mich</NavLink>
		<NavLink href="/projects">Projekte</NavLink>
		<NavLink href="/blog">Blog</NavLink>
	</nav>
	<button on:click={ toggleNav }>
		<MenuIcon />
	</button>
</div>

<style lang="scss">
	@import "../../scss/defaults";
	@import "../../scss/mixins";
	
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
				left: 7rem;
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

		button {
			background: none;
			border: none;
			color: $color-text;
			display: none;
			align-items: center;
			outline: 0;

			:global(svg) {
				height: 1.6rem;
				width: 1.6rem;
			}
		}

		@include media-mobile() {
			justify-content: space-between;

			nav {
				background: $color-background-transparency;
				backdrop-filter: blur(12px);
				/* Force hardware acceleration */
				transform: translate3d(0, 0, 0);
				display: none;
				flex-direction: column;
				position: absolute;
				top: 56.5px;
				left: 0;
				width: 100%;
				padding: 18px 0;

				&.expand {
					display: flex;
				}
			}

			button {
				display: flex;
			}
		}
	}
</style>