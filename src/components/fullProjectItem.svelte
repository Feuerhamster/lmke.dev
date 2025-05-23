<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusProject } from "$models/directus";
	import Label from "./label.svelte";

	export let project: IDirectusProject;
</script>

<article class="full-project-item">
	<img
		src={getDirectusImageUrl(project.logo.id, {
			quality: 80,
			width: 120,
			height: 120,
			fit: "cover"
		})}
		alt="logo"
	/>

	<div class="info">
		<h3>{project.title}</h3>
		<h4>{project.description}</h4>

		<p class="gap">
			{#each project.technologies as t}
				<Label>{t.skill.name}</Label>
			{/each}
		</p>

		{#if project.discontinued}
			<p class="discontinued">
				<b>Projekt eingestellt/beendet</b>
			</p>
		{/if}

		{#if project.link}
			<p>
				Link: <a href={project.link} target="_blank" rel="noopener">
					{new URL(project.link).hostname}
				</a>
			</p>
		{/if}

		{#if project.link_source}
			<p>
				GitHub: <a href={project.link_source} target="_blank" rel="noopener">
					{new URL(project.link_source).pathname.substring(1)}
				</a>
			</p>
		{/if}

		<p>
			{project.full_description}
		</p>
	</div>
</article>

<style lang="scss">
	@use "../scss/defaults" as *;
	@use "../scss/mixins" as *;

	.full-project-item {
		display: grid;
		grid-template-columns: 120px 1fr;
		grid-template-areas: "image info";
		gap: 24px;
		text-decoration: none;
		color: $color-text;

		@include media-mobile() {
			grid-template-columns: 1fr;
			grid-template-areas:
				"image"
				"info";
		}

		img {
			grid-area: image;
			border-radius: $default-image-border-radius;
			margin-top: 0.4rem;
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

			h4 {
				font-size: 1.15rem;
				font-weight: normal;
			}

			p.gap {
				display: flex;
				flex-wrap: wrap;
				gap: 6px;
			}
		}
	}
</style>
