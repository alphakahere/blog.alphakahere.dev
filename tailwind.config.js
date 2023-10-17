/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#000",
				darkText: "#2B2C34",
				cGray: "#ced2d9",
			},
		},
	},
	plugins: [],
};
