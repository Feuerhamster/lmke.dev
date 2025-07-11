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
		padding: 4px 16px;
		border-radius: 32px;

		color: inherit;

		border: 1px solid $color-border;

		background: linear-gradient(90deg, $color-background-transparency-light, #ffffff0d);

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
