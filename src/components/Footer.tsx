import React from "react";
import SocialConnect from "./SocialConnect";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-gray-100 dark:bg-dark shadow-xl shadow-gray-900 border-t border-gray-300 dark:border-gray-900 py-6 text-darkText dark:text-white text-center relative ">
			<div className="flex flex-col md:flex-row justify-between items-center app-container gap-3">
				<p>© {currentYear}. Tous Droits Réservés.</p>
				<SocialConnect size={20} />
				<div className="flex items-center gap-1">
					<p>Développé avec passion</p>
					<BsFillHeartFill className="inline-block text-pink-600" />{" "}
					par
					<Link
						href="https://www.alphakahere.dev/fr"
						className="hover:underline underline-offset-4"
					>
						alphakahere
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
