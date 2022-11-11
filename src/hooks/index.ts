import type { GetSession } from "@sveltejs/kit"

import "dotenv/config";

const config = {
	directus_url_public: process.env["DIRECTUS_URL_PUBLIC"],

	og_image: process.env["OG_IMAGE"],

	ackee_server: process.env["ACKEE_SERVER"],
	ackee_domainId: process.env["ACKEE_DOMAIN_ID"],
	ackee_detailed: process.env["ACKEE_DETAILED"] ? (process.env["ACKEE_DETAILED"] === "true") : false,
}

export const getSession: GetSession = (request) => {
	
	return {
		...config
	}
}