import Head from "next/head";
import ListPost from "@/components/ListPost";
import Layout from "@/components/Layout";
import { client } from "../lib/client";
import { Post } from "@/lib/type";

export default function Home({ posts }: { posts: Post[] }) {
	return (
		<>
			<Head>
				<title>alphakahere Dev Blog</title>
				<meta
					name="description"
					content="Bienvenue sur mon blog, où je vous partage mes
								expériences, mes astuces, des tutoriels, des
								articles et également des projets sur le
								développement web"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<h1 className="text-darkText dark:text-white text-xl leading-7 font-bold lg:text-2xl lg:leading-10 mb-3">
					Tutoriels et articles
				</h1>
				<ListPost posts={posts} />
			</Layout>
		</>
	);
}

export const getServerSideProps = async () => {
	const query =
		'*[_type == "post" && isPublished == true] | order(publishedAt desc){slug, mainImage, title, except,publishedAt, "tags": tags[]->title,"estimatedReadingTime": round(length(pt::text(body)) / 5 / 300 ) }';
	const posts = await client.fetch(query);

	return {
		props: { posts },
	};
};
