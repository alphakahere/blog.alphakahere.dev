import React from "react";
import { BsFacebook, BsLink45Deg, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import { RiWhatsappFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { BASE_URL } from "@/lib/constants";

const SocialShare = ({ title }: { title: string }) => {
	const router = useRouter();
	const SOCIAL_SHARE_URL = BASE_URL + router.asPath;
	const quote = `Félicitations à alphakahere pour cet excellent article sur ${title}. Partageons la connaissance !`;

	const onCopy = () => navigator.clipboard.writeText(SOCIAL_SHARE_URL);
	return (
		<div className="absolute top-6 right-0 scale-0 transition-all rounded bg-gray-200 text-darkText dark:bg-zinc-800 text-sm dark:text-white group-hover:scale-100 w-60">
			<button
				className="flex gap-2 items-center text-sm mb-3 border-b border-gray-300 w-full p-3"
				onClick={onCopy}
			>
				<BsLink45Deg fontSize={20} />
				Copier le lien
			</button>
			<div className="flex flex-col space-y-3 p-3">
				<TwitterShareButton
					url={SOCIAL_SHARE_URL}
					title={quote}
					hashtags={["alphakahere"]}
				>
					<div className="flex gap-2 items-center text-sm">
						<BsTwitter fontSize={20} />
						Partager sur Twitter
					</div>
				</TwitterShareButton>
				<LinkedinShareButton
					url={SOCIAL_SHARE_URL}
					title={quote}
					source="alphakahere"
				>
					<div className="flex gap-2 items-center text-sm">
						<BsLinkedin fontSize={20} />
						Partager sur Linkedin
					</div>
				</LinkedinShareButton>
				<FacebookShareButton
					url={SOCIAL_SHARE_URL}
					quote={quote}
					hashtag="#alphakahere"
				>
					<div className="flex gap-2 items-center text-sm">
						<BsFacebook fontSize={20} />
						Partager sur Facebook
					</div>
				</FacebookShareButton>
				<WhatsappShareButton
					url={SOCIAL_SHARE_URL}
					title={`Hello, je vous invite à participer au financement ${title}`}
				>
					<div className="flex gap-2 items-center text-sm">
						<RiWhatsappFill fontSize={24} />
						Partager sur Whatshap
					</div>
				</WhatsappShareButton>
			</div>
		</div>
	);
};

export default SocialShare;
