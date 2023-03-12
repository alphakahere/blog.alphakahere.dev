import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleModeButton from "./ToggleModeButton";

const Header = () => {
	const { theme } = useTheme();
	return (
		<header className="bg-dark text-white h-[60vh] pt-3">
			<div className="app-container pt-10">
				<nav className="flex items-center justify-between mb-24">
					<div>
						<Link
							href="/"
							className="text-gradient-theme text-3xl leading-6"
							data-theme={theme}
						>
							alphakahere.blog
						</Link>
					</div>
					<div>
						<ToggleModeButton />
					</div>
				</nav>
				<div className="flex flex-col items-center space-y-8 lg:flex-row-reverse lg:mt-32">
					<div className="lg:w-1/3 flex justify-center">
						<Image
							src="https://i.pravatar.cc/300"
							alt="avatar"
							width={100}
							height={100}
							className="rounded-full w-44 h-44 border-4 border-violet-500"
						/>
					</div>
					<div className="lg:w-2/3">
						<div className="flex flex-col space-y-3">
							<h3 className="text-base font-normal text-slate-300">
								Hi, Je suis Alpha Amadou Diallo
							</h3>
							<h1 className="text-white text-xl leading-7 font-bold lg:text-3xl lg:leading-10">
								Dévoloppeur web |{" "}
								<strong className="text-gradient-theme">
									ReactJS
								</strong>{" "}
								, Laravel
							</h1>
							<p className="opacity-80">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Saepe animi soluta quo impedit repellendus
								repellat fuga maiores eos, atque dolorum aut odit,
								minima quisquam amet itaque quasi dolorem placeat
								quae.
							</p>
							<div className="pt-10">
								<button className="bg-blue-700 px-3 py-2 rounded-3xl font-medium hover:bg-blue-800 transition-all ease-in duration-300">
									Contactez-moi
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
