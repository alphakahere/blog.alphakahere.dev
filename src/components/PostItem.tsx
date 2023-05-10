import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";

const PostItem = ({ i }: { i: number }) => {
	return (
		<Link
			href={`/article-title`}
			className="rounded-lg p-1px  hover:scale-105 transition-all ease-out duration-300 text-dark3 dark:text-white"
		>
			<article className="border-2 bg-slate border-slate dark:border-dark3 dark:bg-dark4 rounded-lg p-3 ">
				<div className="w-full mb-4">
					<Image
						className="rounded-lg w-full h-60"
						src={`https://picsum.photos/30${i}`}
						alt="project"
						width={200}
						height={200}
					/>
				</div>
				<div>
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
							Génerique et utilités types en typescript
						</h3>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default PostItem;
