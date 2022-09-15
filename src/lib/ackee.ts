import { browser } from "$app/env";
import * as ackeeTracker from "ackee-tracker";

let instance: ackeeTracker.AckeeInstance;

async function onNavigate(path: string) {
	if (browser && import.meta.env.VITE_ACKEE_SERVER) {
		const detailed: boolean = import.meta.env.VITE_ACKEE_DETAILED === "true" ?? false;

		if (!instance) {
			instance = ackeeTracker.create(
				import.meta.env.VITE_ACKEE_SERVER,
				{ detailed }
			);
		}

		let attributes = ackeeTracker.attributes(detailed);
		attributes.siteLocation = window.location.origin + path;
		instance.record(import.meta.env.VITE_ACKEE_DOMAIN_ID, attributes);
	}
}

export default onNavigate;