import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: "g3qciuuu",
	dataset: "production",
	apiVersion: "2023-09-20",
	useCdn: true,
	token: process.env.SANITY_STUDIO_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
