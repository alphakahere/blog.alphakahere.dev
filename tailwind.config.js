/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#09010F",
				// dark: "#121212",
				// dark: "#070616",
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
