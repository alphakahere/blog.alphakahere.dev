import ListPost from "@/components/ListPost";
import Layout from "@/components/Layout";
import { Post } from "@/lib/type";
import { averageReadingSpeed } from "@/lib/constants";
import { client } from "@/lib/client";

export default function Home({ posts }: { posts: Post[] }) {
	return (
		<Layout>
			<h1 className="text-darkText dark:text-white text-xl leading-7 font-bold lg:text-2xl lg:leading-10 mb-3">
				Tutoriels et articles
			</h1>
			<ListPost posts={posts} />
		</Layout>
	);
}

export const getServerSideProps = async () => {
	const query = `*[_type == "post" && isPublished == true] | order(publishedAt desc){slug, mainImage, title, except,publishedAt, "tags": tags[]->title,"estimatedReadingTime": round(length(pt::text(body)) / 5 / ${averageReadingSpeed} ) }`;
	const posts = await client.fetch(query);
	return {
		props: { posts },
	};
};
