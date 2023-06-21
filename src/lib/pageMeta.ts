import { getDirectusImageUrl } from "$lib/utils";

let og_image = null;

export function setOGImage(id: string) {
	og_image = getDirectusImageUrl(id, { quality: 90, width: 280, height: 280 });
}

export default {
	title: "lmke.dev",
	description:
		"Lena's persönliche Webseite. Hier präsentiere ich Projekte, einen Blog, Freunde und mich selbst.",
	og_image
};
