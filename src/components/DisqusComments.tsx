import { BASE_URL } from "@/lib/constants";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({
	identifier,
	title,
}: {
	identifier: string;
	title: string;
}) => {
	const disqusShortname = "VOTRE_SHORTNAME_DISQUS";
	const disqusConfig = {
		url: BASE_URL,
		identifier,
		title,
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
