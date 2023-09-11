import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-white dark:bg-dark shadow-xl shadow-gray-900 border-t border-gray-900 py-5 text-white text-center">
			<p>© {currentYear}, Alpha Amadou Diallo. Tous Droits Réservés.</p>
		</footer>
	);
};

export default Footer;
