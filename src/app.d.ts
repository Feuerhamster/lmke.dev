/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	interface Session {
		directus_url_public: string;
		og_image: string;

		ackee_server: string;
		ackee_domainId: string;
		ackee_detailed: boolean;
	}
	// interface Stuff {}
}
