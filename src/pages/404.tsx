import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Page404 = () => (
	<Layout>
		<div className="flex flex-col items-center justify-center min-h-[60vh] space-y-5 text-slate-600 dark:text-white">
			<h3 className="font-bold  text-2xl leading-10">Oups!</h3>
			<h1 className="text-9xl font-extrabold">
				4<span className="text-blue-500">0</span>4
			</h1>
			<p className="text-xl font-medium">
				La page que vous cherchez est introuvable.Retournez à la{" "}
				<Link href="/" className="text-blue-500 underline underline-offset-4">
					page d&#39;accueil
				</Link>{" "}
				pour continuer votre navigation
			</p>
		</div>
	</Layout>
);

export default Page404;
