<script lang="ts">
	import ArticleItem from "$components/articleItem.svelte";
	import FriendsCollection from "$components/friendsCollection.svelte";
	import Hero from "$components/layout/hero.svelte";
	import PersonalCard from "$components/personalCard.svelte";
	import ProjectsCollection from "$components/projectsCollection.svelte";
	import Skills from "$components/skillsCollection.svelte";
	import pageMeta from "$lib/pageMeta";
	import { stripHtml } from "$lib/utils";

	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	const { aboutMe, skills, projects, friends, articleTopics, newestArticle } = data;

	$: formattedTopics = articleTopics.map((t) => t.name);

	let personalCard = {
		image: aboutMe.picture,
		name: aboutMe.name,
		subtitle: aboutMe.subtitle,
		github_link: aboutMe.github_link,
		email: aboutMe.email,
		linkedin_link: aboutMe.linkedin_link,
		mastodon_link: aboutMe.mastodon_link
	};

	const metaDescription = stripHtml(aboutMe.about_me);
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:title" content={pageMeta.title} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={pageMeta.og_image} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="de_DE" />
	<meta property="og:site_name" content={pageMeta.title} />
</svelte:head>

<Hero>
	<PersonalCard {...personalCard} />
</Hero>

<div class="limited-page">
	<section class="row">
		<section>
			<h2>
				<span class="orange">»</span>
				Über mich
			</h2>
			<div class="about-me">
				{@html aboutMe.about_me}
			</div>
		</section>

		<section>
			<h2>
				<span class="orange">»</span>
				Meine Skills
			</h2>
			<Skills {skills} />
		</section>
	</section>

	<section>
		<h2>
			<span class="blue">»</span>
			Meine Projekte
		</h2>
		<ProjectsCollection {projects} />
		<a href="/projects" class="sublink">Mehr Projekte und Details ansehen</a>
	</section>

	<section>
		<h2>
			<span class="green">»</span>
			Meine Freunde
		</h2>
		<FriendsCollection {friends} />
	</section>

	{#if newestArticle}
		<section>
			<h2>
				<span class="pink">»</span>
				Mein persönlicher Blog
			</h2>
			<p>
				{@html formattedTopics.join(`<span class="spacer"> | </span>`)}
			</p>

			<ArticleItem article={newestArticle} />

			<a href="/blog" class="sublink">Mehr Blogartikel ansehen</a>
		</section>
	{/if}
</div>

<style lang="scss">
	@use "../scss/defaults.scss" as *;
	@use "../scss/mixins.scss" as *;

	.limited-page {
		gap: 120px;
		@include limited-page;

		@include media-mobile() {
			gap: 60px;
		}

		h2 {
			font-size: 1.7rem;

			@include media-mobile() {
				font-size: 1.5rem;
			}

			span {
				&.orange {
					color: $color-orange;
				}
				&.blue {
					color: $color-blue;
				}
				&.green {
					color: $color-green;
				}
				&.pink {
					color: $color-pink;
				}
			}
		}

		section {
			& > :global(*:not(h2):not(section)) {
				padding-left: 1.9rem;

				@include media-mobile() {
					padding-left: 0.2rem;
				}
			}
		}

		.about-me {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}

		:global(.spacer) {
			opacity: 0.5;
		}

		a.sublink {
			font-size: 1rem;
		}

		& > section {
			&.row {
				flex-direction: row;
				gap: 60px;
				justify-content: center;

				section {
					display: flex;
					flex-direction: column;
					max-width: 570px;
					gap: 24px;
				}
			}
		}
	}
</style>
