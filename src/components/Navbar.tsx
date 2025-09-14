import Link from "next/link";
import React from "react";
import ToggleModeButton from "./ToggleModeButton";
import { useTheme } from "next-themes";

const Navbar = () => {
	const { theme } = useTheme();
	return (
		<nav className="py-3">
			<div className="app-container flex items-center justify-between">
				<div>
					<Link
						href="/"
						className="text-slate dark:text-white text-xl leading-8 font-medium md:text-2xl xl:text-3xl"
						data-theme={theme}
					>
						alphakahere.blog
					</Link>
				</div>
				<div>
					<ToggleModeButton />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
