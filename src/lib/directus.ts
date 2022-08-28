import type { DirectusCollections } from "$models/directus";
import { Directus, type ID } from "@directus/sdk";

import "dotenv/config";

const directus = new Directus<DirectusCollections>(process.env.DIRECTUS_URL);
await directus.auth.static(process.env.DIRECTUS_TOKEN);

export default directus;