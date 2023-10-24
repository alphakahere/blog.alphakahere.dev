import React from "react";
import SocialConnect from "./SocialConnect";
import { data } from "../../data";

const About = () => {
	return (
		<div className="app-container mt-10 xl:mt-14">
			<div className="flex flex-col items-center space-y-10 gap-10">
				<div className="flex flex-col lg:w-2/3">
					<div className="flex flex-col space-y-6 mb-10 items-center text-center">
						<h3 className="text-base text-darkText dark:text-white font-bold">
							&#128075; Hi, Je suis Alpha Amadou
							Diallo
						</h3>
						<h1 className="leading-10 font-bold text-2xl md:text-4xl xl:text-5xl">
							<strong className="text-violet-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500">
								Développeur web à Volkeno
							</strong>{" "}
						</h1>
						<div className="text-base font-normal leading-7 lg:text-lg lg:leading-8">
							<p className="text-darkText dark:text-gray-100 mb-2">
								Passionné de code, de design, de
								partage et également de nocode.
							</p>
							<p className="text-darkText dark:text-gray-100">
								{data.about}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<SocialConnect size={24} />
						<div className="mt-10">
							<a
								href="mailto:hello@alphakahere.dev"
								className="text-white font-semibold  px-5 py-2 rounded-full transition duration-300 ease-in bg-violet-600 hover:bg-violet-700 dark:bg-blue-600 dark:hover:bg-blue-700"
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
