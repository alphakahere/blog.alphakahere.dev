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
		<header className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 fixed top-0 left-0 right-0 z-50">
			<Navbar />
		</header>
	);
};

export default Header;
