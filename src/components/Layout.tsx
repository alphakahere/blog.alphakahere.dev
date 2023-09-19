import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Preahvihear } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

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
	<div>
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: "linear", duration: 1.5 }}
			className={`bg-gray-100 dark:bg-dark ${preahvihear.className}`}
		>
			<Header />
			<main className="overflow-x-hidden app-container  min-h-screen py-14">
				{children}
			</main>
			<Footer />
		</motion.div>
	</div>
);

export default Layout;
