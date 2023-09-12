import Footer from "@/components/Footer";
import { SmallHeader } from "@/components/Header";
import Image from "next/image";
import React from "react";
import Avatar from "../../assets/avatar.png";
import Layout from "@/components/Layout";
import { client, urlFor } from "../../lib/client";
import { Post } from "@/lib/type";
import { PortableText } from "@portabletext/react";

const page = ({ post }: { post: Post }) => {
	const { title, mainImage, content } = post;
	return (
		<Layout>
			<SmallHeader />
			<div className="app-container">
				<div className="text-black dark:text-white">
					<h1 className="text-5xl text-center mb-3 font-medium">{title}</h1>
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center space-x-3">
							<div className="w-14 h-14  bg-gradient-to-tr from-sky-300 via-fuchsia-500 to-purple-500 rounded-full hover:from-pink-400 hover:via-fuchsia-600 hover:to-purple-500 transition-all ease-linear duration-500">
								<Image
									src={Avatar}
									alt="avatar"
									width={100}
									height={100}
									className="w-14 h-14 rounded-full"
								/>
							</div>
							<h3 className="text-gradient-theme">
								Alpha Amadou Diallo
							</h3>
						</div>
						<div>
							<h5>6 mins</h5>
						</div>
					</div>
					<div className="mb-3">
						<Image
							className="rounded-lg w-full h-[80vh] sm:h-[70vh] lg:h-[60vh] object-fill"
							src={urlFor(mainImage).url()}
							alt="project"
							width={200}
							height={500}
						/>
					</div>

					<div className="text-lg leading-8 mb-2 font-normal">
						<PortableText value={content} />
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
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
	const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
	const postsQuery = '*[_type == "post"]';

	const post = await client.fetch(query);
	const posts = await client.fetch(postsQuery);

	console.log(post);

	return {
		props: { posts, post },
	};
};

export default page;
