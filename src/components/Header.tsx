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
		<header className="text-white">
			<div className="banner pt-4 h-[80vh] sm:h-[70vh] lg:h-[60vh]">
				<div className="banner-overlay">
					<div className="app-container">
						<nav className="flex items-center justify-between mb-16">
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
							<div className="lg:w-1/3 flex justify-center">
								<div className="w-48 h-48  bg-gradient-to-tr from-sky-300 via-fuchsia-500 to-purple-500 rounded-full hover:from-pink-400 hover:via-fuchsia-600 hover:to-purple-500 transition-all ease-linear duration-500">
									<Image
										src={Avatar}
										alt="avatar"
										width={100}
										height={100}
										className="w-48 h-48 rounded-full"
									/>
								</div>
							</div>
							<div className="lg:w-2/3">
								<div className="flex flex-col space-y-3 mb-10">
									<h3 className="text-base text-white font-bold">
										&#128075; Hi, Je suis Alpha Amadou
										Diallo
									</h3>
									<h1 className="text-white text-xl leading-7 font-bold lg:text-3xl lg:leading-10">
										Dévoloppeur web |{" "}
										<strong className="text-gradient-theme">
											ReactJS, Laravel
										</strong>{" "}
									</h1>
									<p className="text-gray-50">
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
													className="w-9 h-9 bg-gradient rounded-full flex items-center justify-center text-lg hover:bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-500 transition-all ease-in duration-300"
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
			</div>
		</header>
	);
};

export const SmallHeader = () => {
	const { theme } = useTheme();
	return (
		<header className="text-white bg-gradient fixed top-0 left-0 w-full">
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
