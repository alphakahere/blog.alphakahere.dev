import React from "react";
import CardItem from "./CardItem";

const ListCard = () => {
	return (
		<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			{[...Array(12)].map((item, i) => (
				<CardItem i={i} key={i} />
			))}
		</div>
	);
};

export default ListCard;
