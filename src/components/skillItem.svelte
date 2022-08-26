<script lang="ts">
	import type { IDirectusSkill } from "$models/directus";

	export let skill: IDirectusSkill;
</script>

<span class="skill level-{skill.level}">
	{ skill.name }
</span>

<style lang="scss">
	@import "../scss/defaults";

	.skill {
		padding: 3px 18px;
		border: 2px solid grey;
		border-radius: 32px;

		&.level-1 {
			border-color: $color-blue;
			color: $color-blue;
		}

		&.level-2 {
			border-color: $color-orange;
			color: $color-orange;
		}

		&.level-3 {
			border-color: $color-green;
			color: $color-green;
		}
	}
</style>