import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { Post } from "@/lib/type";
import { urlFor } from "../lib/client";

const PostItem = ({ post, i }: { post: Post; i: number }) => {
	const { title, mainImage, Except, slug } = post;
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
							<li className="text-sm">#react</li>
							<li className="text-sm">#redux</li>
						</ul>
						<div className="flex items-center gap-2">
							<FiClock />
							<span>3 mins</span>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-medium leading-8 text-opacity-80 transition-all ease-linear duration-300 hover:text-opacity-100">
							{title}
						</h3>
						<p>{Except}</p>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default PostItem;
