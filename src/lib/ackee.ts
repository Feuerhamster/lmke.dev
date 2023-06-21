import { browser } from "$app/environment";
import * as ackeeTracker from "ackee-tracker";

let instance: ackeeTracker.AckeeInstance;

async function onNavigate(path: string, server: string, domainId: string, detailed: boolean) {
	if (browser && server) {
		if (!instance) {
			instance = ackeeTracker.create(server, { detailed });
		}

		let attributes = ackeeTracker.attributes(detailed);
		attributes.siteLocation = window.location.origin + path;
		instance.record(domainId, attributes);
	}
}

export default onNavigate;
