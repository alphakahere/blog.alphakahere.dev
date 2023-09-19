import React from "react";
import PostItem from "./PostItem";
import { Post } from "@/lib/type";

const ListPost = ({ posts }: { posts: Post[] }) => {
	return (
		<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			{posts.map((item, i) => (
				<PostItem i={i} key={i} post={item} />
			))}
		</div>
	);
};

export default ListPost;
