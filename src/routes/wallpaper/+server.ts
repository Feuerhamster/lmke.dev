import { graphql } from "$lib/directus";
import type { RequestHandler } from './$types';
import GQLWallpaperQuery from "$graphql/wallpaper.gql?raw";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const GET: RequestHandler = async () => {

	let data = await graphql(GQLWallpaperQuery, { dir: env.DIRECTUS_WALLPAPER_DIR }, true);

	let wallpapers = data.files;

	// Select random wallpaper
	let index = Math.floor(Math.random() * wallpapers.length);

	return json({ wallpaper: wallpapers[index] }, {
		headers: {
			"Cache-Control": "no-cache"
		}
	})
}