import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-black py-5 text-white text-center">
			<p>© {currentYear}, Alpha Amadou Diallo. Tous Droits Réservés.</p>
		</footer>
	);
};

export default Footer;
