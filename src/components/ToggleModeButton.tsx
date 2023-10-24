"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ToggleModeButton = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	return (
		<button
			onClick={() =>
				theme == "dark" ? setTheme("light") : setTheme("dark")
			}
			className="text-black text-opacity-60  dark:"
		>
			{currentTheme === "dark" ? (
				<BsSun fontSize={24} className="text-gray-100" />
			) : (
				<BsMoonFill fontSize={24} className="text-dark" />
			)}
		</button>
	);
};

export default ToggleModeButton;
