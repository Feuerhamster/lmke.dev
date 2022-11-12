import { graphql } from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";
import GQLWallpaperQuery from "$graphql/wallpaper.gql?raw";

import "dotenv/config";

export const get: RequestHandler = async () => {

	let data = await graphql(GQLWallpaperQuery, { dir: process.env["DIRECTUS_WALLPAPER_DIR"] }, true);

	let wallpapers = data.files;

	// Select random wallpaper
	let index = Math.floor(Math.random() * wallpapers.length);

	return {
		headers: {
			"Cache-Control": "no-cache"
		},
		body: {
			wallpaper: wallpapers[index]
		}
	}
}