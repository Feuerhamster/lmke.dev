<script lang="ts">
	import { formatToSlug, getDirectusImageUrl } from "$lib/utils";

	import type { IDirectusProject } from "$models/directus";

	export let project: IDirectusProject;
</script>

<a class="project-item" href={"/projects#" + formatToSlug(project.title)}>
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
</a>

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
		text-decoration: none;
		color: inherit;

		&:hover {
			.info {
				h3 {
					text-decoration: underline;
				}
			}
		}

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
