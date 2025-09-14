import React from "react";
import SocialConnect from "./SocialConnect";
import Image from "next/image";

const About = () => {
	return (
		<div className="app-container mt-10 xl:mt-14">
			<div className="flex flex-col lg:flex-row justify-center  gap-10">
				<div className="h-48 w-48 border-4 border-blue-500 rounded-full overflow-hidden bg-white">
					<Image src="/avatar.png" width={192} height={192} alt="avatar" className="object-cover w-full h-full" />
				</div>
				<div className="flex flex-col lg:w-2/3">
					<div className="flex flex-col space-y-6 mb-10 items-start text-start">
						<h1 className="leading-10 font-bold text-2xl md:text-5xl xl:text-7xl text-blue-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
							Alpha Amadou Diallo
						</h1>
						<p className="text-slate-600 dark:text-slate-300 text-lg lg:text-2xl">
							Hey ! 👋 Je suis développeur fullstack passionné par JavaScript depuis 4+ ans. Ici, je partage mes découvertes sur React, Next.js et les technologies modernes à travers des articles et tutoriels pratiques.
						</p>
					</div>
					<div className="flex flex-col">
						<SocialConnect size={24} />
						<div className="mt-10">
							<a
								href="mailto:hello@alphakahere.dev"
								className="text-white font-semibold  px-6 py-3 rounded transition duration-300 ease-in bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
							>
								Contactez-moi
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
