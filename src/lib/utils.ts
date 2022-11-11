import type { ID } from "$models/directus";
import config from "$lib/config";

export function getDirectusImageUrl(id: ID, options: {[key: string]: number|string} = {}) {
	let params = Object.entries(options).map((p) => p[0] + "=" + p[1]).join("&");
	return new URL(`/assets/${id}.jpg${params.length > 0 ? "?" : ""}${params}`, config.directus_url_public).href;
}

export function stripHtml(html: string): string {
	return html.replace(/(<([^>]+)>)/gi, "");
}