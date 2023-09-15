import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleModeButton from "./ToggleModeButton";
import illustration from "../assets/illustration.png";
import { data } from "../../data";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="pt-2 bg-light dark:bg-dark relative  2xl:min-h-[60vh] overflow-x-hidden header border-b dark:border-gray-900 pb-10">
			<div className="w-24 h-24 lg:w-96 lg:h-96 rounded-full absolute bg-blue-600 left-1/2 -translate-x-1/2 top-0 lg:top-[-300px] blur-3xl" />
			<div className="app-container">
				<Navbar />
				<div className="flex flex-col items-center space-y-10 md:flex-row-reverse gap-10">
					<div className="md:w-1/3  justify-center hidden md:flex">
						<Image src={illustration} alt="avatar" className="w-full" />
					</div>
					<div className="flex flex-col md:w-2/3">
						<div className="flex flex-col space-y-6 mb-10">
							<h3 className="text-base text-darkText dark:text-white font-bold">
								&#128075; Hi, Je suis Alpha Amadou Diallo
							</h3>
							<h1 className="text-xl leading-7 font-bold lg:text-3xl lg:leading-10">
								<strong className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-blue-500">
									Dévoloppeur web
								</strong>{" "}
							</h1>
							<div className="text-base font-normal leading-7 lg:text-lg lg:leading-8">
								<p className="text-darkText dark:text-gray-100 mb-2">
									Passionné de code, de design, de partage et
									également de nocode.
								</p>
								<p className="text-darkText dark:text-gray-100">
									Bienvenue sur mon blog, ici je vous partage
									mes expériences, des astuces, des tutoriels et
									des articles sur le développement web mais le
									plus souvent nous aborderons des sujets liés à
									React et à son écosystème.
								</p>
							</div>
						</div>
						<div>
							<ul className="flex gap-5 mb-10">
								{data.socials.map((item) => (
									<li key={item.title} className="list-none">
										<a
											href={item.url}
											target="_blank"
											className="transition-all ease-in duration-300 text-darkText dark:text-white opacity-80 hover:opacity-100"
										>
											<item.icon fontSize={20} />
										</a>
									</li>
								))}
							</ul>
							<div>
								<a
									href="mailto:hello@alphakahere.dev"
									className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-blue-800"
								>
									<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
									<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-700 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
									<span className="relative text-white font-medium">
										Contactez-moi
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export const SmallHeader = () => {
	const { theme } = useTheme();
	return (
		<header className="text-white bg-gradient-to-b from-violet-500 to-blue-500 w-full">
			<div className="app-container">
				<nav className="flex items-center justify-between py-1">
					<div>
						<Link
							href="/"
							className="text-white text-3xl leading-6"
							data-theme={theme}
						>
							alphakahere.blog
						</Link>
					</div>
					<div>
						<ToggleModeButton />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
