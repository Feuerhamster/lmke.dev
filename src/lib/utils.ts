import type { ID } from "$models/directus";

export function getDirectusImageUrl(id: ID, options: {[key: string]: number|string} = {}) {
	let params = Object.entries(options).map((p) => p[0] + "=" + p[1]).join("&");
	return new URL(`/assets/${id}.jpg${params.length > 0 ? "?" : ""}${params}`, import.meta.env.VITE_DIRECTUS_URL_PUBLIC).href;
}

export function stripHtml(html: string) {
	return html.replace(/(<([^>]+)>)/gi, "");
}