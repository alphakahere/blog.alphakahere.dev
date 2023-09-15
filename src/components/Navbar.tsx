import Link from "next/link";
import React from "react";
import ToggleModeButton from "./ToggleModeButton";
import { useTheme } from "next-themes";

const Navbar = () => {
	const { theme } = useTheme();
	return (
		<nav className="flex items-center justify-between 2xl:mb-14">
			<div>
				<Link href="/" className="text-darkText dark:text-white text-xl leading-8 font-medium md:text-2xl xl:text-3xl" data-theme={theme}>
					alphakahere.blog
				</Link>
			</div>
			<div>
				<ToggleModeButton />
			</div>
		</nav>
	);
};

export default Navbar;
