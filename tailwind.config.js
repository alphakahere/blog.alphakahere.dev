/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#0D1224",
				dark: "#000",
				// dark: "#111010",
				darkText: "#2B2C34",
				cGray: "#ced2d9",
			},
			padding: {
				"1px": "1px",
			},
		},
		// container: {
		// 	padding: {
		// 		DEFAULT: "1rem",
		// 		sm: "2rem",
		// 		lg: "4rem",
		// 		xl: "5rem",
		// 		"2xl": "6rem",
		// 	},
		// },
	},
	plugins: [],
};
