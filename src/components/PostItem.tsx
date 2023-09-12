import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { Post } from "@/lib/type";
import { urlFor } from "../lib/client";

const PostItem = ({ post, i }: { post: Post; i: number }) => {
	const { title, mainImage, Except, slug, tags, estimatedReadingTime } = post;
	return (
		<Link href={`/${slug.current}`} className="rounded-lg p-1px text-dark dark:text-white">
			<article className="border bg-slate border-slate dark:border-gray-700 dark:bg-dark4 rounded-lg">
				<div className="w-full mb-4">
					<Image
						className="rounded-t-lg w-full h-60 object-cover"
						src={urlFor(mainImage).url()}
						alt={title}
						width={200}
						height={200}
						loading="lazy"
					/>
				</div>
				<div className="p-3">
					<div className="flex items-center justify-between  text-sm mb-2 text-gray-600 dark:text-gray-400">
						<ul className="flex space-x-1 ">
							{tags?.map((tag, i) => (
								<li className="text-sm" key={i}>
									#{tag}
								</li>
							))}
						</ul>
						<div className="flex items-center gap-2">
							<FiClock />
							<span>{estimatedReadingTime} mins</span>
						</div>
					</div>
					<div className="mt-3">
						<h3 className="text-lg font-semibold leading-8 text-opacity-80 transition-all ease-linear duration-300 hover:text-opacity-100">
							{title}
						</h3>
						<div className="mt-2">
							<p className="text-base text-white text-opacity-70">
								{Except}
							</p>
						</div>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default PostItem;
