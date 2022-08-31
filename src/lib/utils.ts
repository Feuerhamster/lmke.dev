import type { ID } from "@directus/sdk";

export function getDirectusImageUrl(id: ID, options: {[key: string]: number|string} = {}) {
	let params = Object.entries(options).map((p) => p[0] + "=" + p[1]).join("&");
	return new URL(`/assets/${id}?${params}`, import.meta.env.VITE_DIRECTUS_URL_PUBLIC).href;
}