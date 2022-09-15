import { getDirectusImageUrl } from "$lib/utils";

export default {
	title: "lmke.dev",
	description: "Lena's persönliche Webseite. Hier präsentiere ich Projekte, einen Blog, Freunde und mich selbst.",
	og_image: getDirectusImageUrl(import.meta.env.VITE_OG_IMAGE, { quality: 90, width: 280, height: 280 })
}