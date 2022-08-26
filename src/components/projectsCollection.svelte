<script lang="ts">
	import type { IDirectusProject } from "$models/directus";
	import ProjectItem from "./projectItem.svelte";

	export let projects: IDirectusProject[] = [];
</script>

<div class="projects-collection">

	{#each projects as project}
		<ProjectItem {project} />
	{/each}

</div>

<style lang="scss">
	@import "../scss/defaults";

	.projects-collection {
		display: grid;
		gap: 24px;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>