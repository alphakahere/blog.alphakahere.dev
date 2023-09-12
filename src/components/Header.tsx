import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleModeButton from "./ToggleModeButton";
import Avatar from "../assets/avatar.png";
import { data } from "../../data";

const Header = () => {
	const { theme } = useTheme();
	return (
		<header className="shadow-2xl pt-4 bg-white dark:bg-dark relative  min-h-[60vh] overflow-x-hidden header">
			<div className="w-96 h-96 rounded-full absolute bg-blue-600 left-1/2 -translate-x-1/2 top-[-350px] blur-3xl "></div>
			<div className="">
				<div className="app-container">
					<nav className="flex items-center justify-between mb-24">
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
					<div className="flex flex-col items-center space-y-10 lg:flex-row-reverse">
						{/* <div className="lg:w-1/3 flex justify-center">
							<div className="w-36 h-36 lg:w-48 lg:h-48 bg-gradient-to-tr from-sky-300 via-fuchsia-500 to-purple-500 rounded-full hover:from-pink-400 hover:via-fuchsia-600 hover:to-purple-500 transition-all ease-linear duration-500">
								<Image
									src={Avatar}
									alt="avatar"
									width={100}
									height={100}
									className="w-36 h-36 lg:w-48 lg:h-48 rounded-full"
								/>
							</div>
						</div> */}
						<div className="flex flex-col items-center">
							<div className="flex flex-col space-y-6 mb-10 text-center">
								<h3 className="text-base text-dark dark:text-white font-bold">
									&#128075; Hi, Je suis Alpha Amadou Diallo
								</h3>
								<h1 className="text-white text-xl leading-7 font-bold lg:text-3xl lg:leading-10">
									Dévoloppeur web |{" "}
									<strong className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
										ReactJS, Laravel
									</strong>{" "}
								</h1>
								<p className="text-gray-100">
									{`Passionné de technologie, de
										connaissance , d'éducation et de
										partage. Lorem, ipsum dolor sit amet
										consectetur adipisicing elit. Culpa a,
										est debitis at maxime cupiditate! Eaque
										veniam neque ipsam earum dolor. Minus
										enim non nisi deleniti necessitatibus
										amet eius dolor.`}
								</p>
							</div>
							<div>
								<ul className="flex gap-3 mb-10">
									{data.socials.map((item) => (
										<li
											key={item.title}
											className="list-none"
										>
											<a
												href={item.url}
												target="_blank"
												className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all ease-in duration-300"
											>
												<item.icon />
											</a>
										</li>
									))}
								</ul>
								<div>
									<button className="bg-blue-700 px-3 py-2 rounded-3xl font-medium hover:bg-blue-800 transition-all ease-in duration-300">
										Contactez-moi
									</button>
								</div>
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
		<header className="text-white bg-gradient-to-b from-violet-500 to-blue-500 fixed top-0 left-0 w-full">
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
