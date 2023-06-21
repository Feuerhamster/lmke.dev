<script lang="ts">
	import { getDirectusImageUrl } from "$lib/utils";
	import type { IDirectusImage } from "$models/directus";

	import GitHubIcon from "lucide-icons-svelte/github.svelte";
	import MailIcon from "lucide-icons-svelte/mail.svelte";

	export let image: IDirectusImage;
	export let name: string;
	export let subtitle: string;
	export let github_link: string;
	export let email: string;

	$: github_name = new URL(github_link).pathname;
</script>

<div class="personal-card">
	<img src={getDirectusImageUrl(image.id, { quality: 90, width: 280, height: 280 })} alt="myself" />
	<div>
		<h1>
			<span>Hey, ich bin</span>
			<b>{name}</b>
			<span>{subtitle}</span>
		</h1>

		<a href={github_link} target="_blank" rel="noopener">
			<GitHubIcon />
			{github_name}
		</a>
		<a href={"mailto:" + email}>
			<MailIcon />
			{email}
		</a>
	</div>
</div>

<style lang="scss">
	@import "../scss/defaults";
	@import "../scss/mixins";

	.personal-card {
		display: flex;
		gap: 30px;
		text-shadow: $default-text-shadow;

		img {
			border-radius: $default-image-border-radius;
			height: 280px;
			width: 280px;
			box-shadow: $default-image-box-shadow;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;

			@include media-mobile() {
				align-items: center;
			}

			h1 {
				display: flex;
				flex-direction: column;
				font-weight: normal;
				font-size: 1rem;
				text-align: left;
				gap: 5px;

				@include media-mobile() {
					text-align: center;
				}

				b {
					font-size: 1.5rem;
				}
			}

			a {
				display: flex;
				justify-content: center;
				gap: 10px;
				color: $color-text;
				text-decoration: none;

				@include underline($color: $color-text, $height: 2px, $offset: -2px);

				&:hover:after {
					width: 100% !important;
					opacity: 1 !important;
				}

				:global(.lucide) {
					max-height: 1.2rem;
					max-width: 1.2rem;
				}
			}
		}

		@include media-mobile() {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
