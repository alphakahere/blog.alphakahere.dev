import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "g3qciuuu",
	dataset: "production",
	apiVersion: "2023-09-10",
	useCdn: true,
	token: "sk0cqECj9pbdGYqgxWpFooxFvGFSTwFVWkU8Qm0EPTGBZoeuCKx8ysXtj6RjMoMSEUEj1fw5zz0eLQiDNsrNV5r3KmwhTVplaTO2bqEInCheQAmruEh4Ew4K40s4Fo55WGtYBWa20FqF9UxuqVZLUITxaW1CTtHFxJdRFNgDzIB1VWatj3aq",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
