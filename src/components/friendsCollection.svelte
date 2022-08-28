<script lang="ts">
	import type { IDirectusFriend } from "$models/directus";
	import FriendItem from "./friendItem.svelte";

	export let friends: IDirectusFriend[] = [];
</script>

<div class="projects-collection">

	{#each friends as friend}
		<FriendItem {friend} />
	{/each}

</div>

<style lang="scss">
	@import "../scss/defaults";

	.projects-collection {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>