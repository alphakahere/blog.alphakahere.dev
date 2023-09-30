import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="fr_FR" />
				<meta property="og:url" content="https://blog.alphakahere.dev/" />
				<meta property="og:site_name" content="blog.alphakahere.dev" />
				<meta
					property="og:title"
					name="og:title"
					content="Blog d'un développeur web passionné"
				/>
				<meta
					property="og:image"
					name="og:image"
					content="https://i.imgur.com/eYYY31Z.png"
				/>
				<meta
					property="og:description"
					name="og:description"
					content="Bienvenue sur mon blog, un espace où je partage mes expériences, astuces,  tutoriels, articles et également des projets sur le développement web en général"
				/>
				<meta
					name="twitter:title"
					property="twitter:title"
					content="Blog d'un développeur web passionné"
				/>
				<meta
					property="twitter:description"
					name="twitter:description"
					content="Bienvenue sur mon blog, un espace où je partage mes expériences, astuces,  tutoriels, articles et également des projets sur le développement web en général"
				/>
				<meta
					property="twitter:image"
					name="twitter:image"
					content="https://i.imgur.com/eYYY31Z.png"
				/>
				<meta
					property="twitter:card"
					name="twitter:card"
					content="summary_large_image"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
