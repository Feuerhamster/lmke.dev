<script lang="ts">
	import type { IDirectusProject } from "$models/directus";

	export let project: IDirectusProject;
</script>

<div class="project-item">
	<img src={ project.logo } alt="logo" />

	<div class="info">
		<h3>
			{ project.title }
		</h3>

		<p>
			{@html project.description}
		</p>
	</div>

	<div class="links">
		{#if project.link}
			<a href={ project.link } target="_blank">
				{ new URL(project.link).hostname }
			</a>
		{/if}

		{#if project.link_source}
			<a href={ project.link_source } target="_blank">Quellcode</a>
		{/if}

		{#if project.discontinued}
			<span class="discontinued" title="Dieses Projekt wird nicht mehr weitergeführt">[Stillgelegt]</span>
		{/if}
	</div>
</div>

<style lang="scss">
	@import "../scss/defaults";
	@import "../scss/mixins";

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
				font-size: 1.2em;
				margin: 0;
			}

			p {
				font-size: 0.85em;
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
				font-size: 0.85em;
			}

			.discontinued {
				color: $color-pink;
				font-size: 0.85em;
			}
		}
	}
</style>