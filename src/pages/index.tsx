import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>alphakahere Dev Blog</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={poppins.className}>
				<Header />
			</main>
		</>
	);
}
