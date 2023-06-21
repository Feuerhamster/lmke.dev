
import type { LayoutLoad } from "./$types";
import ackee from "$lib/ackee";
import { setOGImage } from "$lib/pageMeta";
import { env } from "$env/dynamic/public"
import type { IDirectusImage } from "$models/directus";

export const load: LayoutLoad = async ({ url, fetch }) => {
	
	let res = await fetch("/wallpaper");
	let data = await res.json();

	ackee(url.pathname, env.PUBLIC_ACKEE_SERVER, env.PUBLIC_ACKEE_DOMAIN_ID, env.PUBLIC_ACKEE_DETAILED === "true");
	setOGImage(env.PUBLIC_OG_IMAGE);

	return {
		wallpaper: data.wallpaper as IDirectusImage
	}
}
