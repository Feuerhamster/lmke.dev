<script lang="ts">
	import { capitalizeFirstLetter, getDirectusImageUrl } from "$lib/utils";
	import type { IDirectusImage } from "$models/directus";
	import BoxedLink from "./boxedLink.svelte";

	export let image: IDirectusImage;
	export let name: string;
	export let subtitle: string;
	export let github_link: string;
	export let email: string;
	export let linkedin_link: string;
	export let mastodon_link: string;

	const github_name = new URL(github_link).pathname.substring(1);

	const fediUrl = new URL(mastodon_link);
	const mastodon_name = fediUrl.pathname.substring(1) + "@" + fediUrl.hostname;

	const linkedUrl = /in\/(\w+)-(\w+)/.exec(linkedin_link);
	const linkedin_name =
		capitalizeFirstLetter(linkedUrl![1]) + " " + capitalizeFirstLetter(linkedUrl![2]);
</script>

<div class="personal-card">
	<img src={getDirectusImageUrl(image.id, { quality: 90, width: 280, height: 280 })} alt="myself" />
	<div class="profile">
		<h1>
			<span>Hey, ich bin</span>
			<b>{name}</b>
			<span>{subtitle}</span>
		</h1>

		<div class="links">
			<BoxedLink href={github_link} noopener newTab>
				<img src="/images/github.svg" alt="Github" />
				{github_name}
			</BoxedLink>

			<BoxedLink href={"mailto:" + email}>
				<img src="/images/email.png" alt="E-Mail" />
				{email}
			</BoxedLink>

			<BoxedLink href={linkedin_link} newTab>
				<img src="/images/linkedin.svg" alt="LinkedIn" />
				{linkedin_name}
			</BoxedLink>

			<BoxedLink href={mastodon_link} newTab>
				<img src="/images/mastodon.svg" alt="Mastodon" />
				{mastodon_name}
			</BoxedLink>
		</div>
	</div>
</div>

<style lang="scss">
	@use "../scss/defaults" as *;
	@use "../scss/mixins" as *;

	.personal-card {
		display: flex;
		gap: 30px;
		text-shadow: $default-text-shadow;
		margin-left: 6rem;

		img {
			border-radius: $default-image-border-radius;
			height: 260px;
			width: 260px;
			box-shadow: $default-image-box-shadow;
		}

		div.profile {
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

			div.links {
				display: flex;
				flex-wrap: wrap;
				gap: 4px;
				max-width: 500px;
				font-size: 0.9rem;

				@include media-mobile() {
					justify-content: center;
				}
			}
		}

		@include media-mobile() {
			flex-direction: column;
			align-items: center;
			margin: 0;
		}
	}
</style>
