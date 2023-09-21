import React from "react";
import PostItem from "./PostItem";
import { Post } from "@/lib/type";

const ListPost = ({ posts }: { posts: Post[] }) => {
	if(posts?.length > 0){
		return (
			<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
				{posts.map((item, i) => (
					<PostItem key={item.slug.current} post={item} />
				))}
			</div>
		);
	}
	return <p className="text-center text-2xl pt-20">Aucune donnée trouvée !</p>
};

export default ListPost;
