import { BASE_URL } from "@/lib/constants";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({
	identifier,
	title,
}: {
	identifier: string;
	title: string;
}) => {
	const disqusShortname = "blog-alphakahere-dev";
	const disqusConfig = {
		url: BASE_URL,
		identifier,
		title,
		sso: {
			width: "800",
			height: "200",
		},
	};

	return (
		<div>
			<DiscussionEmbed
				shortname={disqusShortname}
				config={disqusConfig}
			/>
		</div>
	);
};

export default DisqusComments;
