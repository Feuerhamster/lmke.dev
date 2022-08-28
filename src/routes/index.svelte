<script lang="ts">
	import FriendsCollection from "$components/friendsCollection.svelte";
	import Hero from "$components/layout/hero.svelte";
	import PersonalCard from "$components/personalCard.svelte";
	import ProjectsCollection from "$components/projectsCollection.svelte";
	import Skills from "$components/skillsCollection.svelte";
	import type { IDirectusAboutMe, IDirectusArticleTopics, IDirectusFriend, IDirectusProject, IDirectusSkill } from "$models/directus";

	export let aboutMe: IDirectusAboutMe;
	export let skills: IDirectusSkill[];
	export let projects: IDirectusProject[];
	export let friends: IDirectusFriend[];
	export let articleTopics: IDirectusArticleTopics[];

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
			<h2>Über mich</h2>
			<div class="about-me">
				{@html aboutMe.about_me}
			</div>
		</section>
		
		<section>
			<h2>Meine Skills</h2>
			<Skills { skills } />
		</section>
	</section>

	<section>
		<h2>Meine Projekte</h2>
		<ProjectsCollection { projects } />
	</section>

	<section>
		<h2>Meine Freunde</h2>
		<FriendsCollection { friends } />
	</section>

	<section>
		<h2>Mein persönlicher Blog</h2>
		<p>
			{@html formattedTopics.join(`<span class="spacer"> | </span>`) }
		</p>
	</section>
</div>

<style lang="scss">
	
	.limited-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 120px;
		padding: 18px 18px 60px 18px;

		h2 {
			font-size: 1.6em;
		}

		section {
			& > :global(*:not(h2)) {
				padding-left: 12px;
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