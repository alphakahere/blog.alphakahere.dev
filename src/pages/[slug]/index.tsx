import Footer from "@/components/Footer";
import { SmallHeader } from "@/components/Header";
import Image from "next/image";
import React from "react";
import Avatar from "../../assets/avatar.png";
import Layout from "@/components/Layout";
import { client } from "../../lib/client";


const page = () => {
	return (
		<Layout>
			<SmallHeader />
			<div className="app-container mt-20">
				<div className="text-black dark:text-white">
					<h1 className="text-5xl text-center mb-3 font-medium">
						Comment styliser vos composants React
					</h1>
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center space-x-3">
							<div className="w-14 h-14  bg-gradient-to-tr from-sky-300 via-fuchsia-500 to-purple-500 rounded-full hover:from-pink-400 hover:via-fuchsia-600 hover:to-purple-500 transition-all ease-linear duration-500">
								<Image
									src={Avatar}
									alt="avatar"
									width={100}
									height={100}
									className="w-14 h-14 rounded-full"
								/>
							</div>
							<h3 className="text-gradient-theme">
								Alpha Amadou Diallo
							</h3>
						</div>
						<div>
							<h5>6 mins</h5>
						</div>
					</div>
					<div className="mb-3">
						<Image
							className="rounded-lg w-full h-[80vh] sm:h-[70vh] lg:h-[60vh] object-fill"
							src={`https://picsum.photos/300`}
							alt="project"
							width={200}
							height={500}
						/>
					</div>

					<p className="text-lg leading-8 mb-2 font-normal">
						Hello, bienvenue dans ce article dans le quel nous allons parler
						de la manière dont vous pouvez styliser vos composants React.
						C’est quoi React? [React](https://reactjs.org/) est une
						biblothèque javascript open-source qui nous permet de créer des
						interfaces utilisateurs. Elle a été créée par Facebook et est
						maintenue actuellement par Facebook et une communauté de
						développeurs individuels et d’organisations. Hello, bienvenue
						dans ce article dans le quel nous allons parler de la manière
						dont vous pouvez styliser vos composants React. C’est quoi
						React? [React](https://reactjs.org/) est une biblothèque
						javascript open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations. Hello, bienvenue dans ce article
						dans le quel nous allons parler de la manière dont vous pouvez
						styliser vos composants React. C’est quoi React?
						[React](https://reactjs.org/) est une biblothèque javascript
						open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations.
					</p>
					<p className="text-lg leading-8 mb-2 font-normal">
						Hello, bienvenue dans ce article dans le quel nous allons parler
						de la manière dont vous pouvez styliser vos composants React.
						C’est quoi React? [React](https://reactjs.org/) est une
						biblothèque javascript open-source qui nous permet de créer des
						interfaces utilisateurs. Elle a été créée par Facebook et est
						maintenue actuellement par Facebook et une communauté de
						développeurs individuels et d’organisations. Hello, bienvenue
						dans ce article dans le quel nous allons parler de la manière
						dont vous pouvez styliser vos composants React. C’est quoi
						React? [React](https://reactjs.org/) est une biblothèque
						javascript open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations. Hello, bienvenue dans ce article
						dans le quel nous allons parler de la manière dont vous pouvez
						styliser vos composants React. C’est quoi React?
						[React](https://reactjs.org/) est une biblothèque javascript
						open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations.
					</p>
					<p className="text-lg leading-8 mb-2 font-normal">
						Hello, bienvenue dans ce article dans le quel nous allons parler
						de la manière dont vous pouvez styliser vos composants React.
						C’est quoi React? [React](https://reactjs.org/) est une
						biblothèque javascript open-source qui nous permet de créer des
						interfaces utilisateurs. Elle a été créée par Facebook et est
						maintenue actuellement par Facebook et une communauté de
						développeurs individuels et d’organisations. Hello, bienvenue
						dans ce article dans le quel nous allons parler de la manière
						dont vous pouvez styliser vos composants React. C’est quoi
						React? [React](https://reactjs.org/) est une biblothèque
						javascript open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations. Hello, bienvenue dans ce article
						dans le quel nous allons parler de la manière dont vous pouvez
						styliser vos composants React. C’est quoi React?
						[React](https://reactjs.org/) est une biblothèque javascript
						open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations.
					</p>
					<p className="text-lg leading-8 mb-2 font-normal">
						Hello, bienvenue dans ce article dans le quel nous allons parler
						de la manière dont vous pouvez styliser vos composants React.
						C’est quoi React? [React](https://reactjs.org/) est une
						biblothèque javascript open-source qui nous permet de créer des
						interfaces utilisateurs. Elle a été créée par Facebook et est
						maintenue actuellement par Facebook et une communauté de
						développeurs individuels et d’organisations. Hello, bienvenue
						dans ce article dans le quel nous allons parler de la manière
						dont vous pouvez styliser vos composants React. C’est quoi
						React? [React](https://reactjs.org/) est une biblothèque
						javascript open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations. Hello, bienvenue dans ce article
						dans le quel nous allons parler de la manière dont vous pouvez
						styliser vos composants React. C’est quoi React?
						[React](https://reactjs.org/) est une biblothèque javascript
						open-source qui nous permet de créer des interfaces
						utilisateurs. Elle a été créée par Facebook et est maintenue
						actuellement par Facebook et une communauté de développeurs
						individuels et d’organisations.
					</p>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

// export const getStaticPaths = async () => {
// 	const query = `*[_type == "product"] {
// 	  slug {
// 		current
// 	  }
// 	}
// 	`;
  
// 	const products = await client.fetch(query);
  
// 	const paths = products.map((product) => ({
// 	  params: { 
// 		slug: product.slug.current
// 	  }
// 	}));
  
// 	return {
// 	  paths,
// 	  fallback: 'blocking'
// 	}
//   }
  
//   export const getStaticProps = async ({ params: { slug }}) => {
// 	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
// 	const productsQuery = '*[_type == "product"]'
	
// 	const product = await client.fetch(query);
// 	const products = await client.fetch(productsQuery);
  
// 	console.log(product);
  
// 	return {
// 	  props: { products, product }
// 	}
//   }

export default page;
