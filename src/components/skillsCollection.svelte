<script lang="ts">
	import type { IDirectusSkill } from "$models/directus";
	import SkillItem from "./skillItem.svelte";

	export let skills: IDirectusSkill[] = [];
</script>

<div class="skills-wrapper">

	<div class="skills">
		{#each skills as skill}
			<SkillItem { skill } />
		{/each}
	</div>

	<!--<div class="legend">
		<span class="level-1">Grundlagen</span>
		<span class="level-2">Fortgeschritten</span>
		<span class="level-3">Profi</span>
	</div>-->

</div>

<style lang="scss">
	@import "../scss/defaults";

	.skills-wrapper {
		display: flex;
		flex-direction: column;
		gap: 18px;

		.skills {
			display: flex;
			flex-wrap: wrap;
			gap: 12px;
		}

		.legend {
			display: flex;
			gap: 12px;
			font-style: italic;
			opacity: 0.7;
			user-select: none;

			.level-1 {
				color: $color-blue;
			}
			.level-2 {
				color: $color-orange;
			}
			.level-3 {
				color: $color-green;
			}
		}
	}
</style>