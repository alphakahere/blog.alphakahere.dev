import React from "react";
import SocialConnect from "./SocialConnect";
import { BsFillHeartFill } from "react-icons/bs";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-white dark:bg-dark shadow-xl shadow-gray-900 border-t border-gray-200 dark:border-gray-900 py-6 text-darkText dark:text-white text-center relative ">
			<div className="flex justify-between items-center app-container">
				<p>© {currentYear}. Tous Droits Réservés.</p>
				<SocialConnect size={20} />
				<div className="flex items-center gap-1">
					<p>Built with passion</p>
					<BsFillHeartFill className="inline-block text-pink-500" /> by
					<a href="">alphakahere</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
