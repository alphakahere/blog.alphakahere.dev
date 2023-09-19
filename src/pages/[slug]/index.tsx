import Image from "next/image";
import React from "react";
import Avatar from "../../assets/avatar.png";
import Layout from "@/components/Layout";
import { client, urlFor } from "../../lib/client";
import { Post } from "@/lib/type";
import { PortableText } from "@portabletext/react";
import PortableSerializers from "@/components/PortableTextComponent";
import { FaShare } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import SocialShare from "@/components/SocialShare";

const Page = ({ post }: { post: Post }) => {
	const { title, mainImage, body, estimatedReadingTime, tags, publishedAt, source, demo } =
		post;
	return (
		<Layout>
			<div>
				<div className="text-darkText dark:text-white">
					<div className="mb-3">
						<h1 className="text-xl lg:text-2xl 2xl:text-3xl text-center mb-2 font-semibold">
							{title}
						</h1>
						<ul className="flex flex-wrap space-x-2 justify-center mt-2">
							{tags?.map((tag, i) => (
								<li
									className="text-sm text-gray-500 dark:text-gray-400"
									key={i}
								>
									#{tag}
								</li>
							))}
						</ul>
					</div>
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center space-x-3">
							<div className="w-14 h-14 bg-gradient-to-tr from-sky-300 via-fuchsia-500 to-purple-500 rounded-full">
								<Image
									src={Avatar}
									alt="avatar"
									width={150}
									height={150}
									className="w-14 h-14 rounded-full"
								/>
							</div>
							<div>
								<h3>@alphakahere</h3>
								<p className="text-gray-500 dark:text-gray-400">
									{formatDate(publishedAt)}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
							<h5>{estimatedReadingTime} mins</h5>

							<div className="group relative flex justify-center">
								<button className="flex items-center gap-1">
									<FaShare /> Partager
								</button>
								<SocialShare title={title} />
							</div>
						</div>
					</div>
					<div className="mb-8">
						<Image
							className="rounded-lg w-full lg:max-h-[60vh] object-cover mb-4"
							src={urlFor(mainImage).url()}
							alt="project"
							width={200}
							height={500}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						<div className="flex items-center justify-center mb-3 gap-3">
							<a
								href={source}
								className="text-white font-semibold bg-blue-500  px-5 py-2 rounded-lg transition duration-300 ease-in hover:bg-blue-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								Code
							</a>
							<a
								href={demo}
								className="text-white font-semibold bg-blue-500  px-5 py-2 rounded-lg transition duration-300 ease-in hover:bg-blue-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								Demo
							</a>
						</div>
					</div>

					<div className="text-lg leading-8 mb-2 font-normal text-darkText dark:text-cGray">
						<PortableText value={body} components={PortableSerializers} />
					</div>
				</div>
			</div>
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
	const query = `*[_type == "post" && slug.current == '${slug}'][0]{slug, mainImage, title,body,publishedAt,source, demo, "tags": tags[]->title,"estimatedReadingTime": round(length(pt::text(body)) / 5 / 300 ) }`;
	const postsQuery = '*[_type == "post"]';

	const post = await client.fetch(query);
	const posts = await client.fetch(postsQuery);

	return {
		props: { posts, post },
	};
};

export default Page;
