import Layout from "@/components/Layout";
import { client } from "@/lib/client";
import { Post } from "@/lib/type";
import React from "react";

const page = ({ posts, post }: { posts: Post[]; post: Post }) => {
	console.log({ posts, post });
	return <Layout>index</Layout>;
};

export const getStaticPaths = async () => {
	const query = `*[_type == "post"] {
	  slug {
		current
	  }
	}
	`;

	const posts = await client.fetch(query);

	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}));
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
	const query = `*[_type == "post" && slug.current == '${slug}'][0]{slug, mainImage, title,body,publishedAt,source, demo, tags,"estimatedReadingTime": round(length(pt::text(body)) / 5 / 300 ) }`;
	const postsQuery = `*[_type == "post"]{...,'relatedPosts': *[_type == 'post' &amp;&amp; ^.category._ref match category._ref]}`;

	const post = await client.fetch(query);
	const posts = await client.fetch(postsQuery);

	return {
		props: { posts, post },
	};
};

export default page;
