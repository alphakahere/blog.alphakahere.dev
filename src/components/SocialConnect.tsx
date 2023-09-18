import React from "react";
import { data } from "../../data";

const SocialConnect = ({ size }: { size: number }) => {
	return (
		<ul className="flex gap-5">
			{data.socials.map((item) => (
				<li key={item.title} className="list-none">
					<a
						href={item.url}
						target="_blank"
						className="transition-all ease-in duration-300 text-darkText dark:text-white opacity-80 hover:opacity-100"
					>
						<item.icon fontSize={size} />
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialConnect;
