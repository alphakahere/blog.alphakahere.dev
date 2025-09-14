"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ToggleModeButton = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	return (
		<button
			onClick={() =>
				theme == "dark" ? setTheme("light") : setTheme("dark")
			}
			className="bg-slate-200 dark:bg-slate-800 rounded-full p-3 transition-all ease-in duration-300"
		>
			{currentTheme === "dark" ? (
				<Sun className="text-yellow-400" size={24} />
			) : (
					<Moon className="text-slate-900" size={24} />
			)}
		</button>
	);
};

export default ToggleModeButton;
