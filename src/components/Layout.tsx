import React, { ReactNode } from "react";
import { motion } from "framer-motion";

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
		<motion.main
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: "linear", duration: 1.5 }}
			className="dark:bg-dark min-h-screen"
		>
			{children}
		</motion.main>
	</div>
);

export default Layout;
