"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { FaShare } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SocialShare = ({ title }: { title: string }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const ref = useRef(null);

	const router = useRouter();
	const SOCIAL_SHARE_URL = BASE_URL + router.asPath;
	const quote = `Félicitations à @alphakahere pour cet excellent article sur ${title}. Partageons la connaissance !`;

	const onCopy = () =>
		navigator.clipboard.writeText(SOCIAL_SHARE_URL).then(() => {
			toast("Lien copié avec succès !", {
				style: {
					borderRadius: "10px",
					background: "#333",
					color: "#fff",
					fontSize: "16px",
				},
			});
			toggle();
		});

	const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

	useEffect(() => {
		function handleOutsideClick(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				toggle();
			}
		}
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [toggle]);

	return (
		<>
			<button className="flex items-center gap-1" onClick={toggle}>
				<FaShare /> Partager
			</button>
			{isOpen && (
				<div
					className="absolute top-6 right-0 transition-all rounded bg-gray-200 text-darkText dark:bg-zinc-800 text-sm dark:text-white w-60"
					ref={ref}
				>
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
			)}
		</>
	);
};

export default SocialShare;
