<script lang="ts">
	import type { IDirectusSkill } from "$models/directus";

	export let skill: IDirectusSkill;
</script>

<span class="skill">
	{skill.name}
</span>

<style lang="scss">
	@use "../scss/defaults" as *;
	@use "sass:color";

	.skill {
		padding: 3px 18px;
		border: 2px solid grey;
		border-radius: 32px;

		border-color: $color-pink;
		color: color.change($color-pink, $whiteness: 82%);

		/*&.level-1 {
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
		}*/
	}
</style>
