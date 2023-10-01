import React, { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { Preahvihear } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { data } from "../../data";

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
			<title>Blog alphakahere.dev</title>
			<meta name="description" content={data.about} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<meta
				property="og:image"
				name="og:image"
				content="https://i.imgur.com/eYYY31Z.png"
			/>
			<meta
				property="twitter:image"
				name="twitter:image"
				content="https://i.imgur.com/eYYY31Z.png"
			/>
			<meta property="og:image:alt" content="Blog aldev banner" />
			<meta property="twitter:image:alt" content="Blog aldev banner" />
		</Head>
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: "linear", duration: 1.5 }}
			className={`bg-white dark:bg-dark ${preahvihear.className}`}
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
