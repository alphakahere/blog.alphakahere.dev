import React, { useState, useEffect } from "react";

export function useWindowDimension() {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return {
		width: windowDimensions.width,
		height: windowDimensions.height,
	};
}

export function formatDate(datetime: string) {
	const date = new Date(datetime);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short", // Use 'short' for abbreviated month names
		day: "numeric",
	};

	const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(date);

	return formattedDate;
}
