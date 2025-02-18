import type { DocSearchClientOptions } from "@astrojs/starlight-docsearch";

export default {
	appId: "D32WIYFTUF",
	apiKey: "5cec275adc19dd3bc17617f7d9cf312a",
	indexName: "prod_devdocs",
	insights: true,
	// Replace URL with the current origin so search
	// can be used in local development and previews.
	transformItems(items) {
		return items.map((item) => {
			const path = new URL(item.url).pathname;
			const url = new URL(path, window.origin);

			return {
				...item,
				url: url.toString(),
			};
		});
	},
} satisfies DocSearchClientOptions;
