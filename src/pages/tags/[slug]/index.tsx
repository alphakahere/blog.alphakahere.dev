import Layout from "@/components/Layout";
import ListPost from "@/components/ListPost";
import { client } from "@/lib/client";
import { averageReadingSpeed } from "@/lib/constants";
import { Post } from "@/lib/type";
import Head from "next/head";
import React from "react";

const page = ({ posts, slug }: { posts: Post[]; slug: string }) => {
	return (
		<Layout>
			<Head>
				<title>{`Liste des tutoriels ${slug}`}</title>
			</Head>
			<h1 className="text-darkText dark:text-white text-xl leading-7 font-bold lg:text-2xl lg:leading-10 mb-5">
				Liste des tutoriels pour{" "}
				<span className="uppercase text-blue-500">{slug}</span>
			</h1>
			<ListPost posts={posts} />
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "post" && isPublished == true] {
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
	const query = `*[_type == "post" && isPublished == true && references(*[_type == "tag" && title == '${slug}']._id)]| order(publishedAt desc){slug, mainImage, title, except,publishedAt, "tags": tags[]->title,"estimatedReadingTime": round(length(pt::text(body)) / 5 / ${averageReadingSpeed} ) }`;
	const posts = await client.fetch(query);

	return {
		props: { posts, slug },
	};
};

export default page;
