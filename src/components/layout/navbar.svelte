<script lang="ts">
	import NavLink from "$components/navLink.svelte";
	import { page } from "$app/state";
	import { MenuIcon } from "lucide-svelte";

	let pageMapping = {
		blog: "Blog",
		projects: "Projekte",
		legal: "Rechtliches"
	};

	$: currentPath = page.url.pathname.substring(1).split("/")[0] as keyof typeof pageMapping;

	// toggles toe mobile nav menu
	let expand = false;
	function toggleNav() {
		expand = !expand;
	}
</script>

<div class="navbar">
	<h1>
		<a href="/">
			<b>lmke</b>.dev
		</a>

		<span class="absolute">
			{#if pageMapping[currentPath]}
				<span class="slash">/</span>
				{pageMapping[currentPath]}
			{/if}
		</span>
	</h1>
	<!--
		Div.navbar muss in mobile expanden wenn das menü aufgeklappt ist. Nav kein pos absolute und kein filter.
		Wenn mobile: Von flex auf grid
	-->
	<nav on:click={toggleNav} class:expand on:keypress>
		<NavLink href="/">Über mich</NavLink>
		<NavLink href="/projects">Projekte</NavLink>
		<NavLink href="/blog">Blog</NavLink>
	</nav>
	<button on:click={toggleNav}>
		<MenuIcon />
	</button>
</div>

<style lang="scss">
	@use "../../scss/defaults" as *;
	@use "../../scss/mixins" as *;

	.navbar {
		background: $color-background-transparency;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
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

			a {
				color: inherit;
				text-decoration: none;
			}

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
			display: grid;
			grid-template-columns: 1fr;

			grid-template-areas:
				"title toggle"
				"nav nav";

			h1 {
				grid-area: title;
			}

			nav {
				display: none;
				justify-content: center;
				top: 56.5px;
				left: 0;
				width: 100%;
				padding: 18px 0;
				grid-area: nav;

				&.expand {
					display: flex;
				}
			}

			button {
				display: flex;
				grid-area: toggle;
			}
		}
	}

	@supports not (backdrop-filter: blur(12px)) {
		.navbar {
			background: $color-background;
		}
	}
</style>
