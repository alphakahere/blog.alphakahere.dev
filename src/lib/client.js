import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { NEXT_PUBLIC_SANITY_TOKEN } from "./constants";

export const client = sanityClient({
	projectId: "g3qciuuu",
	dataset: "production",
	apiVersion: "2023-09-10",
	useCdn: true,
	token: NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
