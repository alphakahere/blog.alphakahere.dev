import React from "react";
import SocialConnect from "./SocialConnect";
import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-slate-50 dark:bg-slate-900 shadow-xl shadow-gray-900 border-t border-slate-100 dark:border-slate-800 py-6 text-slate-600 dark:text-slate-300 text-center relative ">
			<div className="flex flex-col md:flex-row justify-between items-center app-container gap-3">
				<p>© {currentYear}. Tous Droits Réservés.</p>
				<SocialConnect size={20} />
				<div className="flex items-center gap-1">
					<p>Développé avec passion</p>
					<Heart className="inline-block text-red-500" size={20} />{" "}
					par
					<Link
						href="https://www.alphakahere.dev/fr"
						className="hover:underline underline-offset-4 text-slate-900 dark:text-slate-300"
					>
						alphakahere
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
