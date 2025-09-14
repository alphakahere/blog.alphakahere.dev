import React from "react";
import SocialConnect from "./SocialConnect";
import Image from "next/image";

const About = () => {
	return (
		<div className="app-container mt-6 sm:mt-8 lg:mt-10 xl:mt-14">
			<div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-10">
				<div className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 border-4 border-blue-500 rounded-full overflow-hidden bg-white flex-shrink-0">
					<Image
						src="/avatar.png"
						width={192}
						height={192}
						alt="avatar"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="flex flex-col lg:w-2/3 text-center lg:text-left">
					<div className="flex flex-col space-y-4 sm:space-y-6 mb-8 sm:mb-10 items-center lg:items-start">
						<h1 className="leading-tight font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-blue-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
							Alpha Amadou Diallo
						</h1>
						<p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl">
							Hey ! 👋 Je suis développeur fullstack passionné par le
							développement des solutions webs. Ici, je partage mes
							découvertes sur React, Next.js et les technologies
							modernes à travers des articles et tutoriels pratiques.
						</p>
					</div>
					<div className="flex flex-col items-center lg:items-start">
						<SocialConnect size={20} />
						<div className="mt-6 sm:mt-8 lg:mt-10">
							<a
								href="mailto:hello@alphakahere.dev"
								className="text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded transition duration-300 ease-in bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base"
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
