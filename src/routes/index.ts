import directus, { convertAssetURL } from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
	let aboutMeRes = await directus.items("lmke_dev").readByQuery();
	let skillsRes = await directus.items("skills").readByQuery();
	let projectsRes = await directus.items("projects").readByQuery();

	let aboutMe = aboutMeRes.data as any;
	aboutMe.picture = convertAssetURL(aboutMe.picture);
	aboutMe.about_me = aboutMe.about_me.replace(/\n/g, "<br />");

	let projects = projectsRes.data.map((p: any) => ({...p, logo: convertAssetURL(p.logo)}));

	return {
		body: {
			aboutMe,
			skills: skillsRes.data,
			projects
		}
	}
}