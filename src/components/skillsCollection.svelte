<script lang="ts">
	import type { IDirectusSkill } from "$models/directus";
	import SkillItem from "./skillItem.svelte";

	export let skills: IDirectusSkill[] = [];
</script>

<div class="skills">
	{#each skills as skill}
		<SkillItem {skill} />
	{/each}
</div>

<style lang="scss">
	@use "../scss/defaults" as *;

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
</style>
