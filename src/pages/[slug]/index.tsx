import Footer from "@/components/Footer";
import { SmallHeader } from "@/components/Header";
import Image from "next/image";
import React from "react";
import Avatar from "../../assets/avatar.png";
import Layout from "@/components/Layout";
import { client, urlFor } from "../../lib/client";
import { Post } from "@/lib/type";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Highlight, themes } from "prism-react-renderer";

// `components` object you'll pass to PortableText
const components: Partial<PortableTextComponents | any> = {
	myCodeField: ({ value }: { value: { code: string } }) => (
		<pre>
			<code>{value.code}</code>
		</pre>
	),
	types: {
		codeBlock: (node: { value: { code: string; filename: string; language: string } }) => {
			const { language, filename, code } = node.value;
			console.log({ node });

			return (
				<div className="bg-gray-900">
					<div className="flex justify-between ">
						<p className="opacity-70">{filename}</p>
						<p>
							language: <span className="opacity-70">{language}</span>
						</p>
					</div>
					<Highlight
						theme={themes.vsDark}
						code={code}
						language={language ?? "jsx"}
					>
						{({ style, tokens, getLineProps, getTokenProps }) => (
							<pre
								style={style}
								className="p-2 rounded overflow-x-auto"
							>
								{tokens.map((line, i) => (
									<div key={i} {...getLineProps({ line })}>
										{line.map((token, key) => (
											<span
												key={key}
												{...getTokenProps({
													token,
												})}
											/>
										))}
									</div>
								))}
							</pre>
						)}
					</Highlight>
				</div>
			);
		},
	},

	block: {
		// @ts-ignore
		h1: ({ children }) => (
			<h1 className="text-3xl font-bold mb-3 leading-10">#{children}</h1>
		),
	},

	marks: {
		code: ({ children }: { children: any }) => (
			<pre className="bg-gray-700 p-3 rounded">
				<code>{children}</code>
			</pre>
		),
	},
};

const page = ({ post }: { post: Post }) => {
	const { title, mainImage, body, estimatedReadingTime, tags } = post;
	// console.log({ post });
	return (
		<Layout>
			<SmallHeader />
			<div className="app-container pt-5">
				<div className="text-black dark:text-white mt-32">
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
							<h3 className="text-white">Alpha Amadou Diallo</h3>
						</div>
						<div>
							<h5>{estimatedReadingTime} mins</h5>
						</div>
					</div>
					<div className="mb-3">
						<Image
							className="rounded-lg w-full h-[70vh] sm:h-[70vh] lg:h-[60vh] object-cover"
							src={urlFor(mainImage).url()}
							alt="project"
							width={200}
							height={500}
						/>
						<ul className="flex flex-wrap space-x-2 justify-center mt-2">
							{tags?.map((tag, i) => (
								<li className="text-sm" key={i}>
									#{tag}
								</li>
							))}
						</ul>
					</div>

					<div className="text-lg leading-8 mb-2 font-normal">
						<PortableText value={body} components={components} />
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
	const query = `*[_type == "post" && slug.current == '${slug}'][0]{slug, mainImage, title,body, Except, "tags": tags[]->title,"estimatedReadingTime": round(length(pt::text(body)) / 5 / 300 ) }`;
	const postsQuery = '*[_type == "post"]';

	const post = await client.fetch(query);
	const posts = await client.fetch(postsQuery);

	console.log(post);

	return {
		props: { posts, post },
	};
};

export default page;
