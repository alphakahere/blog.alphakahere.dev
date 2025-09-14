import React, { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lato } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
	<>
		<Head>
			<title>Blog alphakahere.dev</title>
			<meta name="description" content="Blog d'un développeur web passionné, ici je partage mes expériences, astuces, tutoriels, articles et également des projets sur le développement web en général" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.png" />
		</Head>
		<div className={`bg-white dark:bg-slate-900 ${lato.className}`}>
			<Header />
			<main className="overflow-x-hidden app-container  min-h-[86vh] py-14">
				{children}
				<Analytics />
				<SpeedInsights />
			</main>
			<Footer />
		</div>
	</>
);

export default Layout;
