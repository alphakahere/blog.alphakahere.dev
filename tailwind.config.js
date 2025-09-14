/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"slate-50": "oklch(98.4% 0.003 247.858)",
				"slate-900": "oklch(12.9% 0.042 264.695)",
			},
		},
	},
	plugins: [],
};
