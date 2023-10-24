import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { Post } from "@/lib/type";
import { urlFor } from "@/lib/client";

const PostItem = ({ post }: { post: Post }) => {
	const { title, mainImage, except, slug, tags, estimatedReadingTime } =
		post;
	return (
		<article className="border bg-slate border-gray-300 hover:border-gray-400 shadow-sm dark:border-gray-700 hover:dark:border-gray-800 rounded-lg transition-all ease-out duration-300">
			<Link
				href={`/${slug.current}`}
				className="rounded-lg text-dark dark:text-white"
			>
				<div className="w-full mb-4 relative">
					<Image
						className="rounded-t-lg w-full object-cover max-h-52"
						src={urlFor(mainImage).url()}
						alt={title}
						width={200}
						height={200}
						loading="lazy"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="p-3">
					<div className="flex items-center justify-between  text-sm mb-2 text-gray-600 dark:text-gray-400">
						<ul className="flex space-x-1 ">
							{tags?.slice(0, 3)?.map((tag, i) => (
								<li className="text-sm" key={i}>
									#{tag}
								</li>
							))}
						</ul>
						<div className="flex items-center gap-2">
							<FiClock />
							<span>
								{estimatedReadingTime} mins
							</span>
						</div>
					</div>
					<div className="mt-3 ">
						<h3 className="text-lg font-semibold leading-7 text-darkText dark:text-white">
							{title}
						</h3>
						<div className="mt-2">
							<p className="text-base text-gray-600 font-normal  dark:text-gray-300">
								{except}
							</p>
						</div>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default PostItem;
