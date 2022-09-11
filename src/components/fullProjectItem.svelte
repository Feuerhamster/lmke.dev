<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusProject } from "$models/directus";

	export let project: IDirectusProject;
</script>

<article class="full-project-item">

	<img src={ getDirectusImageUrl(project.logo, { quality: 80, width: 120, height: 120, fit: "cover" }) } alt="logo" />

	<div class="info">
		<h3> { project.title } </h3>
		<p> { project.description } </p>
		{#if project.discontinued}
			<p class="discontinued">
				Projekt eingestellt
			</p>
		{/if}
		
		{#if project.link}
			<p>
				Link: <a href={ project.link }> { new URL(project.link).hostname } </a>
			</p>
		{/if}

		{#if project.link_source}
			<p>
				GitHub: <a href={ project.link_source }> { new URL(project.link_source).pathname } </a>
			</p>
		{/if}

		<p>
			{ project.full_description }
		</p>
	</div>

</article>


<style lang="scss">
	@import "../scss/defaults.scss";

	.full-project-item {
		display: grid;
		grid-template-columns: 120px 1fr;
		grid-template-areas: "image info";
		gap: 24px;
		text-decoration: none;
		color: $color-text;

		img {
			grid-area: image;
			border-radius: $default-image-border-radius;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 6px;
			grid-area: info;
			font-size: 0.85rem;

			.discontinued {
				color: $color-pink;
			}

			h3 {
				font-size: 1.4rem;
			}

			.meta {
				color: rgba($color-text, 0.5);
			}
		}
	}
</style>