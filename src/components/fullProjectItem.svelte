<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusProject } from "$models/directus";
	import { ExternalLink } from "lucide-svelte";
	import BoxedLink from "./boxedLink.svelte";
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
		class="logo"
		alt="logo"
	/>

	<div class="info">
		<hgroup>
			<h3>{project.title}</h3>
			<h4>{project.description}</h4>
		</hgroup>

		{#if project.discontinued}
			<p class="discontinued">
				<b>Projekt eingestellt/beendet</b>
			</p>
		{/if}

		<div class="links">
			{#if project.link}
				<BoxedLink href={project.link} newTab noopener light>
					<ExternalLink />
					{new URL(project.link).hostname}
				</BoxedLink>
			{/if}

			{#if project.link_source}
				<BoxedLink href={project.link_source} newTab noopener light>
					<img src="/images/github.svg" alt="GitHub" />
					{new URL(project.link_source).pathname.substring(1)}
				</BoxedLink>
			{/if}
		</div>

		<p>
			{project.full_description}
		</p>

		<p class="gap">
			{#each project.technologies as t}
				<Label>{t.skill.name}</Label>
			{/each}
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

		img.logo {
			grid-area: image;
			border-radius: $default-image-border-radius;
			margin-top: 0.4rem;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 8px;
			grid-area: info;
			font-size: 0.85rem;

			.discontinued {
				color: $color-pink;
			}

			h3 {
				font-size: 1.6rem;
			}

			h4 {
				font-size: 1.2rem;
				font-weight: normal;
			}

			.links {
				display: flex;
				gap: 0.4rem;
			}

			p.gap {
				display: flex;
				flex-wrap: wrap;
				gap: 6px;
			}
		}
	}
</style>
