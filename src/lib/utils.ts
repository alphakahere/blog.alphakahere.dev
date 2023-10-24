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

	const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
		date
	);

	return formattedDate;
}

export function checkIfImageUrl(url: string) {
	const fileExtension = url.split(".").pop()?.toLowerCase();
	const imageExtensions = [
		"jpg",
		"jpeg",
		"png",
		"gif",
		"bmp",
		"tiff",
		"webp",
		"heic",
	];

	if (fileExtension && imageExtensions.includes(fileExtension)) {
		return true;
	}
	return false;
}

export function checkIfLinkContainsEmbed(link: string): boolean {
	const pattern = /embed/;
	return pattern.test(link);
}
