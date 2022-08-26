<script lang="ts">
	import PersonalCard from "$components/personalCard.svelte";
import ProjectItem from "$components/projectItem.svelte";
import ProjectsCollection from "$components/projectsCollection.svelte";
	import Skills from "$components/skillsCollection.svelte";
	import type { IDirectusAboutMe, IDirectusProject, IDirectusSkill } from "$models/directus";

	export let aboutMe: IDirectusAboutMe;
	export let skills: IDirectusSkill[];
	export let projects: IDirectusProject[];

	let personalCard = {
		image: aboutMe.picture,
		name: aboutMe.name,
		subtitle: aboutMe.subtitle,
		github_link: aboutMe.github_link,
		email: aboutMe.email
	}
</script>

<div class="colored-hero">
	<PersonalCard {...personalCard} />
</div>

<div class="limited-page">
	<section class="row">
		<section>
			<h2>Über mich</h2>
			<p>
				{@html aboutMe.about_me}
			</p>
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
</div>

<style lang="scss">
	.colored-hero {
		padding: 10% 5% 15% 5%;
		background-color:hsla(0,100%,50%,1);
		background-image:
		radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
		radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
		radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
		radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
		radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
		radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
		radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);

		position: relative;
		z-index: 1;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			height: 100%;
			background: rgb(0,0,0);
			background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(26,24,49,1) 90%, rgba(26,24,49,1) 100%);
		}
		
		:global(*) {
			z-index: 3;
		}
	}
	
	.limited-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 120px;
		padding: 18px 18px 60px 18px;

		h2 {
			font-size: 1.6em;
		}
		
		& > section {
			max-width: 1200px;
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