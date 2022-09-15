import "dotenv/config";

export async function graphql(query: string, variables?: object, system?: boolean) {
	try {
		let path = `/graphql${ system ? "/system" : "" }`;

		let res = await fetch(new URL(path, process.env.DIRECTUS_URL), {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + process.env.DIRECTUS_TOKEN
			},
			body: JSON.stringify({
				query, variables
			})
		});

		let body = (await res.json());
		
		if(body.errors) {
			throw body.errors;
		}

		return body.data;
	} catch(e) {
		throw e;
	}
}