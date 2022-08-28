import directus from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
	let wallpapersRes = await directus.items("directus_files").readByQuery({
		fields: ["id", "title", "description"],
		filter: {
			folder: {
				_eq: process.env.DIRECTUS_WALLPAPER_DIR
			}
		}
	});

	let wallpapers = wallpapersRes.data;

	// Select random wallpaper
	let index = Math.floor(Math.random() * wallpapers.length);

	return {
		body: {
			wallpaper: wallpapers[index]
		}
	}
}