<script lang="ts">
	import type { IDirectusFriend } from "$models/directus";

	export let friend: IDirectusFriend;
</script>

<div class="friend-item">
	<img src={ friend.image_url } alt="friend" />

	<h3>
		{ friend.name }
	</h3>

	<p>
		{ friend.activity }
	</p>

	<div class="links">
		{#if friend.link_web}
			<a href={ friend.link_web } target="_blank">
				{ new URL(friend.link_web).hostname }
			</a>
		{/if}

		{#if friend.link_gh}
			<a href={ friend.link_gh } target="_blank">GitHub</a>
		{/if}
	</div>
</div>

<style lang="scss">
	@import "../scss/defaults";

	.friend-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;

		img {
			border-radius: $default-image-border-radius;
			max-height: 180px;
		}

		h3 {
			display: flex;
			font-size: 1.2em;
		}

		p {
			font-size: 0.85em;
		}

		.info {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		.links {
			display: flex;
			gap: 8px;
			
			a {
				display: flex;
				gap: 10px;
				color: $color-text;
				font-size: 0.85em;
			}
		}
	}
</style>