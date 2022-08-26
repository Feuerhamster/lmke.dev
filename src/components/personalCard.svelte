<script lang="ts">
	import GitHubIcon from "lucide-icons-svelte/github.svelte"
	import MailIcon from "lucide-icons-svelte/mail.svelte"
	
	export let image: string;
	export let name: string;
	export let subtitle: string;
	export let github_link: string;
	export let email: string;

	$: github_name = new URL(github_link).pathname;
</script>

<div class="personal-card">
	<img src={ image } alt="myself" />
	<div>
		<h1>
			<span>Hey, ich bin</span>
			<b>{ name }</b>
			<span>{ subtitle }</span>
		</h1>
		
		<a href={ github_link} target="_blank">
			<GitHubIcon /> { github_name }
		</a>
		<a href={ "mailto:" + email }>
			<MailIcon /> { email }
		</a>
	</div>
</div>

<style lang="scss">
	@import "../scss/defaults";
	@import "../scss/mixins";
	
	.personal-card {
		display: flex;
		gap: 30px;
		
		img {
			border-radius: $default-image-border-radius;
			height: 280px;
			box-shadow: $default-image-box-shadow;
		}
		
		div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
			
			h1 {
				display: flex;
				flex-direction: column;
				font-weight: normal;
				font-size: 1em;
				gap: 5px;
				
				b {
					font-size: 1.5em;
				}
			}
			
			
			a {
				display: flex;
				justify-content: center;
				gap: 10px;
				color: $color-text;
				text-decoration: none;
				
				@include underline(
					$color: $color-text,
					$height: 2px,
					$offset: -2px
				);
				
				&:hover:after {
					width: 100%!important;
					opacity: 1!important;
				}
				
				:global(.lucide) {
					max-height: 1.2em;
					max-width: 1.2em;
				}
			}
			
		}
	}
</style>