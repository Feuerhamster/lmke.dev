<script>
	import PersonalCard from "$components/personalCard.svelte";
	import personalCardInformation from "$content/demo-personal-card.json";
	
	import AboutMe from "$content/about-me.md";
</script>

<div class="colored-hero">
	<PersonalCard data={personalCardInformation} />
</div>

<div class="row">
	<div>
		<h2>Über mich</h2>
		<p>
			<AboutMe />
		</p>
	</div>
	
	<div>
		<h2>Das kann ich</h2>
	</div>
</div>

<style lang="scss">
	.colored-hero {
		padding: 15% 5% 20% 5%;
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
	
	.row {
		display: flex;
		justify-content: space-around;
		
		* {
			max-width: 480px;
		}
	}
</style>