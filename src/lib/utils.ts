import type { ID } from "$models/directus";
import { env } from "$env/dynamic/public";

export function getDirectusImageUrl(id: ID, options: { [key: string]: number | string } = {}) {
	let params = Object.entries(options)
		.map((p) => p[0] + "=" + p[1])
		.join("&");
	return new URL(
		`/assets/${id}.jpg${params.length > 0 ? "?" : ""}${params}`,
		env.PUBLIC_DIRECTUS_URL
	).href;
}

export function stripHtml(html: string): string {
	return html.replace(/(<([^>]+)>)/gi, "");
}
