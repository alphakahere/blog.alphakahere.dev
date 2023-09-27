import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import About from "./About";

const Header = () => {
	const router = useRouter();
	if (router.asPath === "/") {
		return (
			<header className="pt-2 bg-gray-100 dark:bg-dark relative  2xl:min-h-[60vh] overflow-x-hidden header border-b border-gray-200 dark:border-gray-900 pb-10">
				<div className="w-24 h-24 lg:w-96 lg:h-96 rounded-full absolute bg-violet-200 dark:bg-blue-600 left-1/2 -translate-x-1/2 top-0 lg:top-[-300px] blur-3xl" />
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
