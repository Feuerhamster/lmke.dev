<script lang="ts">
	import type { IDirectusFriend } from "$models/directus";
	import { ExternalLink } from "lucide-svelte";
	import BoxedLink from "./boxedLink.svelte";

	export let friend: IDirectusFriend;
</script>

<div class="friend-item">
	<img src={friend.image_url} alt="friend" />

	<h3>
		{friend.name}
	</h3>

	<p>
		{friend.activity}
	</p>

	<div class="links">
		{#if friend.link_web}
			<BoxedLink href={friend.link_web} newTab noopener light aria-label="Website Link">
				<ExternalLink />
			</BoxedLink>
		{/if}

		{#if friend.link_gh}
			<BoxedLink href={friend.link_gh} newTab noopener light aria-label="GitHub Link">
				<img src="/images/github.svg" alt="GitHub" />
			</BoxedLink>
		{/if}
	</div>
</div>

<style lang="scss">
	@use "../scss/defaults" as *;
	@use "../scss/mixins" as *;

	.friend-item {
		display: grid;
		row-gap: 6px;
		column-gap: 18px;

		grid-template-columns: 1fr;
		grid-template-rows: 180px;
		justify-items: center;

		grid-template-areas:
			"image"
			"name"
			"activity"
			"links";

		img {
			border-radius: $default-image-border-radius;
			max-height: 180px;
			grid-area: image;
		}

		h3 {
			display: flex;
			font-size: 1.2rem;
			grid-area: name;
		}

		p {
			grid-area: activity;
		}

		.links {
			display: flex;
			grid-area: links;
			gap: 8px;

			a {
				display: flex;
				gap: 10px;
				color: $color-text;
				font-size: 0.85rem;
			}
		}

		@include media-mobile() {
			grid-template-rows: auto;
			grid-template-columns: 120px 1fr;
			justify-items: start;
			grid-template-areas:
				"image name"
				"image activity"
				"image links";
		}
	}
</style>
