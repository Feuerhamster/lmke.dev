import type { LayoutLoad } from "./$types";
import { setOGImage } from "$lib/pageMeta";
import { env } from "$env/dynamic/public";
import type { IDirectusImage } from "$models/directus";

export const load: LayoutLoad = async ({ fetch }) => {
	let res = await fetch("/wallpaper");
	let data = await res.json();

	setOGImage(env.PUBLIC_OG_IMAGE);

	return {
		wallpaper: data.wallpaper as IDirectusImage
	};
};
