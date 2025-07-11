import type { ID } from "$models/directus";
import { env } from "$env/dynamic/public";
import dayjs from "dayjs";
import "dayjs/locale/de";
import relative from "dayjs/plugin/relativeTime";

dayjs.extend(relative);

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

export function formatToRelativeTime(date: string) {
	return dayjs(date).locale("de").fromNow();
}

export function capitalizeFirstLetter(val: string) {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function formatToSlug(text: string) {
	return Array.from(text.matchAll(/[a-z0-9äöüß]+/gi), (el) => el[0].toLowerCase()).join("-");
}
