<script lang="ts">
	import type { IDirectusFriend } from "$models/directus";
	import FriendItem from "./friendItem.svelte";

	export let friends: IDirectusFriend[] = [];
</script>

<!--
	Auto grid/fit Bilder nebeneinander oder untereinander und an Bildschirmgröße anpassen
	https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
-->

<div class="friends-collection">
	{#each friends as friend}
		<FriendItem {friend} />
	{/each}
</div>

<style lang="scss">
	@import "../scss/defaults";
	@import "../scss/mixins";

	.friends-collection {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		grid-template-columns: 1fr 1fr 1fr;
		flex-wrap: wrap;
	}

	/*@include media-mobile() {
		.friends-collection {
			display: grid;
			grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

			gap: 8px;
		}
	}*/
</style>
