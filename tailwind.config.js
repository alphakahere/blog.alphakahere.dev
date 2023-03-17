/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#070616",
				dark2: "#03001C",
				dark3: "#001427",
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
