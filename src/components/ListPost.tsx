import React from "react";
import PostItem from "./PostItem";

const ListPost = () => {
	return (
		<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			{[...Array(12)].map((item, i) => (
				<PostItem i={i} key={i} />
			))}
		</div>
	);
};

export default ListPost;
