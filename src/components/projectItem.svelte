<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusProject } from "$models/directus";

	export let project: IDirectusProject;
</script>

<div class="project-item">
	<img
		src={getDirectusImageUrl(project.logo.id, { quality: 90, height: 90, width: 90 })}
		alt="logo"
	/>

	<div class="info">
		<h3>
			{project.title}
		</h3>

		<p>
			{@html project.description}
		</p>
	</div>

	<div class="links">
		{#if project.link}
			<a href={project.link} target="_blank" rel="noopener">
				{new URL(project.link).hostname}
			</a>
		{/if}

		{#if project.link_source}
			<a href={project.link_source} target="_blank" rel="noopener">Quellcode</a>
		{/if}

		{#if project.discontinued}
			<span class="discontinued" title="Dieses Projekt wird nicht mehr weitergeführt"
				>[Stillgelegt]</span
			>
		{/if}
	</div>
</div>

<style lang="scss">
	@use "../scss/defaults" as *;

	.project-item {
		display: grid;
		row-gap: 6px;
		column-gap: 18px;
		grid-template-rows: auto;
		grid-template-columns: 90px 1fr;
		grid-template-areas:
			"image info"
			"links links";
		justify-items: stretch;
		max-width: 370px;

		img {
			border-radius: $default-image-border-radius;
			grid-area: image;
		}

		.info {
			grid-area: info;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			h3 {
				display: flex;
				font-size: 1.2rem;
			}

			p {
				font-size: 0.85rem;
			}
		}

		.links {
			display: flex;
			gap: 8px;
			grid-area: links;

			a {
				display: flex;
				gap: 10px;
				color: $color-text;
				font-size: 0.85rem;
			}

			.discontinued {
				color: $color-pink;
				font-size: 0.85rem;
			}
		}
	}
</style>
