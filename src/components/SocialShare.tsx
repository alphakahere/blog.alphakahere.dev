"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";
import { BASE_URL } from "@/lib/constants";
import toast from "react-hot-toast";
import { Link, Share2 } from "lucide-react";

const SocialShare = ({ title }: { title: string }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const ref = useRef(null);

	const router = useRouter();
	const SOCIAL_SHARE_URL = BASE_URL + router.asPath;
	const quote = `Félicitations à @alphakahere pour cet excellent article sur ${title}. Partageons la connaissance !`;

	const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);


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
				<Share2 size={20} /> Partager
			</button>
			{isOpen && (
				<div
					className="absolute top-6 right-0 transition-all rounded-lg bg-slate-100 shadow-xl text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-sm w-60"
					ref={ref}
				>
					<button
						className="flex gap-2 items-center text-sm mb-3 border-b border-slate-200 dark:border-slate-700 w-full p-3"
						onClick={onCopy}
					>
						<Link />
						Copier le lien
					</button>
					<div className="flex flex-col space-y-3 p-3">
						<TwitterShareButton
							url={SOCIAL_SHARE_URL}
							title={quote}
							hashtags={["alphakahere"]}
						>
							<div className="flex gap-2 items-center text-sm">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
								Partager sur Twitter
							</div>
						</TwitterShareButton>
						<LinkedinShareButton
							url={SOCIAL_SHARE_URL}
							title={quote}
							source="alphakahere"
						>
							<div className="flex gap-2 items-center text-sm">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
								Partager sur Linkedin
							</div>
						</LinkedinShareButton>
						<FacebookShareButton
							url={SOCIAL_SHARE_URL}
							quote={quote}
							hashtag="#alphakahere"
						>
							<div className="flex gap-2 items-center text-sm">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
								Partager sur Facebook
							</div>
						</FacebookShareButton>
					</div>
				</div>
			)}
		</>
	);
};

export default SocialShare;
