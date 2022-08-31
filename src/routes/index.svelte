<script lang="ts">
	import ArticleItem from "$components/articleItem.svelte";
	import FriendsCollection from "$components/friendsCollection.svelte";
	import Hero from "$components/layout/hero.svelte";
	import PersonalCard from "$components/personalCard.svelte";
	import ProjectsCollection from "$components/projectsCollection.svelte";
	import Skills from "$components/skillsCollection.svelte";
	import type { IDirectusAboutMe, IDirectusArticle, IDirectusArticleTopic, IDirectusFriend, IDirectusProject, IDirectusSkill } from "$models/directus";

	export let aboutMe: IDirectusAboutMe;
	export let skills: IDirectusSkill[];
	export let projects: IDirectusProject[];
	export let friends: IDirectusFriend[];
	export let articleTopics: IDirectusArticleTopic[];
	export let newestArticle: IDirectusArticle;

	$: formattedTopics = articleTopics.map((t) => t.name);

	let personalCard = {
		image: aboutMe.picture,
		name: aboutMe.name,
		subtitle: aboutMe.subtitle,
		github_link: aboutMe.github_link,
		email: aboutMe.email
	}
</script>

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
			<Skills { skills } />
		</section>
	</section>

	<section>
		<h2>
			<span class="blue">»</span>
			Meine Projekte
		</h2>
		<ProjectsCollection { projects } />
	</section>

	<section>
		<h2>
			<span class="green">»</span>
			Meine Freunde
		</h2>
		<FriendsCollection { friends } />
	</section>

	<section>
		<h2>
			<span class="pink">»</span>
			Mein persönlicher Blog
		</h2>
		<p>
			{@html formattedTopics.join(`<span class="spacer"> | </span>`) }
		</p>
		<ArticleItem article={ newestArticle } />

		<a href="/blog">Mehr Blogartikel ansehen</a>
	</section>
</div>

<style lang="scss">
	@import "../scss/defaults.scss";
	
	.limited-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 120px;
		padding: 18px 18px 60px 18px;

		h2 {
			font-size: 1.6em;

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
				padding-left: 34px;
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

		a {
			color: $color-text;
			&[href="/blog"] {
				font-size: 0.85em;
			}
		}

		& > section {
			max-width: 1200px;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			gap: 30px;

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