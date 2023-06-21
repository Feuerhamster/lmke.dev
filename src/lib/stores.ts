import type { IDirectusImage } from "$models/directus";
import { writable } from "svelte/store";

export const currentWallpaper = writable<IDirectusImage>(undefined);
