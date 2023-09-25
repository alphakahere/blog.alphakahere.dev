import React, { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { Preahvihear } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const preahvihear = Preahvihear({ subsets: ["latin"], weight: ["400"] });

type Props = {
	children: ReactNode;
};

const variants = {
	hidden: { opacity: 0.9 },
	enter: { opacity: 1 },
	exit: { opacity: 0.9 },
};

const Layout = ({ children }: Props): JSX.Element => (
	<>
		<Head>
			<title>alphakahere Dev Blog</title>
			<meta
				name="description"
				content="Bienvenue sur mon blog, où je vous partage mes
								expériences, mes astuces, des tutoriels, des
								articles et également des projets sur le
								développement web"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: "linear", duration: 1.5 }}
			className={`bg-gray-100 dark:bg-dark ${preahvihear.className}`}
		>
			<Header />
			<main className="overflow-x-hidden app-container  min-h-[86vh] py-14">
				{children}
				<Analytics />
			</main>
			<Footer />
		</motion.div>
	</>
);

export default Layout;
