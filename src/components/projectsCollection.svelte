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
	@use "../scss/defaults" as *;

	.projects-collection {
		display: flex;
		column-gap: 24px;
		row-gap: 36px;
		flex-wrap: wrap;
	}
</style>
