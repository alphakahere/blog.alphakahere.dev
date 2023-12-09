import Image from "next/image";
import React from "react";
import Avatar from "../../assets/avatar.png";
import Layout from "@/components/Layout";
import { client, urlFor } from "../../lib/client";
import { Comment, Post } from "@/lib/type";
import { PortableText } from "@portabletext/react";
import PortableSerializers from "@/components/PortableTextComponent";
import { formatDate } from "@/lib/utils";
import SocialShare from "@/components/SocialShare";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import ListPost from "@/components/ListPost";
import Head from "next/head";
import { BASE_URL, averageReadingSpeed } from "@/lib/constants";
import { useRouter } from "next/router";
import Comments from "@/components/Comments";

type Props = {
	post: Post & { related: Post[] };
	comments: Comment[];
};

const Page = ({ post, comments }: Props) => {
	const {
		title,
		mainImage,
		body,
		estimatedReadingTime,
		tags,
		publishedAt,
		source,
		demo,
		except,
		_id,
	} = post;
	const { related } = post;
	const router = useRouter();
	const ogUrl = BASE_URL + router.asPath;
	console.log({ post, comments });
	return (
		<Layout>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta property="og:description" content={except} />
				<meta
					property="og:image"
					content={urlFor(mainImage).url()}
				/>
				<meta property="og:url" content={ogUrl} />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={except} />
				<meta
					property="twitter:image"
					name="twitter:image"
					content={urlFor(mainImage).url()}
				/>
				<meta property="og:type" content="article" />
			</Head>
			<section className="mb-16">
				<div className="text-darkText dark:text-white">
					<div className="mb-3">
						<h1 className="text-xl lg:text-2xl 2xl:text-3xl text-center mb-2 font-semibold">
							{title}
						</h1>
						<ul className="flex flex-wrap space-x-2 justify-center mt-2">
							{tags?.map((tag, i) => (
								<Link
									href={`/tags/${tag}`}
									className="text-sm text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-700"
									key={i}
								>
									#{tag}
								</Link>
							))}
						</ul>
					</div>
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center space-x-3">
							<div className="w-14 h-14 bg-gradient-to-tr from-sky-300 via-fuchsia-500 to-purple-500 dark:from-sky-300 dark:via-blue-500 dark:to-cyan-400 rounded-full">
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

							<div className="relative flex justify-center">
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
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
						/>
						<div className="flex items-center justify-center mb-3 gap-3">
							{source && (
								<a
									href={source}
									className="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							)}
							{demo && (
								<a
									href={demo}
									className="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									Demo
								</a>
							)}
						</div>
					</div>

					<div className="text-lg leading-8 mb-2 font-normal text-darkText dark:text-cGray">
						<PortableText
							value={body}
							components={PortableSerializers}
						/>
					</div>
				</div>
			</section>
			<Comments postId={_id} comments={comments} />
			<section className="border-t border-gray-300 dark:border-gray-900 pt-10">
				<ListPost posts={related} />
			</section>
			<Toaster position="top-center" />
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

export const getStaticProps = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const query = `*[_type == "post" && slug.current == '${slug}'][0]{
		_id,
		slug,
		except, 
		mainImage, 
		title,
		body,
		publishedAt,
		source, 
		demo, 
		"tags": tags[]->title, 
		"estimatedReadingTime": round(length(pt::text(body)) / 5 / ${averageReadingSpeed} ),
		"related": *[_type == "post"  && slug.current != '${slug}' && isPublished == true && count(tags[@._ref in ^.^.tags[]._ref]) > 0]| order(publishedAt desc)[0..2]{
			slug, 
			mainImage, 
			title, 
			except,
			publishedAt, 
			"tags": tags[]->title,
			"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ) 
			}
		}`;

	const post = await client.fetch(query);
	const postId = post._id;

	const commentsQuery = `*[_type == "comment" && post._ref == '${postId}'] {
		_id,
		name,
		message,
		_createdAt
	  }`;
	const comments = await client.fetch(commentsQuery);

	return {
		props: { post, comments },
		revalidate: 10,
	};
};

export default Page;
