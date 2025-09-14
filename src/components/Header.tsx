import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import About from "./About";

const Header = () => {
	const router = useRouter();
	if (router.asPath === "/") {
		return (
			<header className="pt-2 bg-slate-50 dark:bg-slate-900 relative  2xl:min-h-[60vh] overflow-x-hidden header  pb-10 border-b border-slate-100 dark:border-slate-800">
				<Navbar />
				<About />
			</header>
		);
	}
	return (
		<header className="text-white bg-gray-100 dark:bg-dark border-b border-gray-300 dark:border-gray-900">
			<Navbar />
		</header>
	);
};

export default Header;
