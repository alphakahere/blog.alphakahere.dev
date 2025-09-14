import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/type";
import { urlFor } from "@/lib/client";
import { Clock } from "lucide-react";

const PostItem = ({ post }: { post: Post }) => {
	const { title, mainImage, except, slug, tags, estimatedReadingTime } =
		post;
	return (
		<article className="bg-slate-50 dark:bg-slate-800 shadow-sm rounded-lg transition-colors">
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
				<div className="p-4 space-y-2">
					<div className="flex items-center justify-between  text-sm mb-2 text-slate-600 dark:text-slate-300">
						<ul className="flex space-x-1 ">
							{tags?.slice(0, 3)?.map((tag, i) => (
								<li className="text-sm" key={i}>
									#{tag}
								</li>
							))}
						</ul>
						<div className="flex items-center gap-2">
							<Clock />
							<span>
								{estimatedReadingTime} mins
							</span>
						</div>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-semibold leading-7 text-slate-600 dark:text-slate-300 line-clamp-1">
							{title}
						</h3>
						<p className="text-base text-slate-600 font-normal  dark:text-slate-300 line-clamp-3">
							{except}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default PostItem;
