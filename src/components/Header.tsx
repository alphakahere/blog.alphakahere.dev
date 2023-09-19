import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import SocialConnect from "./SocialConnect";

const Header = () => {
	const router = useRouter();
	if (router.asPath === "/") {
		return (
			<header className="pt-2 bg-gray-100 dark:bg-dark relative  2xl:min-h-[60vh] overflow-x-hidden header border-b border-gray-300 dark:border-gray-900 pb-10">
				<div className="w-24 h-24 lg:w-96 lg:h-96 rounded-full absolute bg-blue-300 dark:bg-violet-900 left-1/2 -translate-x-1/2 top-0 lg:top-[-300px] blur-3xl" />
				<Navbar />
				<div className="app-container mt-10 xl:mt-14">
					<div className="flex flex-col items-center space-y-10 gap-10">
						<div className="flex flex-col lg:w-2/3">
							<div className="flex flex-col space-y-6 mb-10 items-center text-center">
								<h3 className="text-base text-darkText dark:text-white font-bold">
									&#128075; Hi, Je suis Alpha Amadou Diallo
								</h3>
								<h1 className="leading-10 font-bold text-2xl md:text-4xl ">
									<strong className="text-blue-500 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-violet-600 dark:via-blue-600 dark:to-blue-500">
										Dévoloppeur web à Volkeno
									</strong>{" "}
								</h1>
								<div className="text-base font-normal leading-7 lg:text-lg lg:leading-8">
									<p className="text-darkText dark:text-gray-100 mb-2">
										Passionné de code, de design, de partage
										et également de nocode.
									</p>
									<p className="text-darkText dark:text-gray-100">
										Bienvenue sur mon blog, ici je vous
										partage mes expériences, mes astuces,
										des tutoriels, des articles et également
										des projets sur le développement web
										mais le plus souvent nous aborderons des
										sujets liés à React et à son écosystème.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center">
								{/* Socials medias */}
								<SocialConnect size={24} />
								<div className="mt-10">
									<a
										href="mailto:hello@alphakahere.dev"
										className="text-white font-semibold bg-blue-500  px-5 py-2 rounded-full transition duration-300 ease-in hover:bg-blue-600"
									>
										Contactez-moi
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
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
