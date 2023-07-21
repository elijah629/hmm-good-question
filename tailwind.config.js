/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	daisyui: {
		themes: [
			{
				dark: {
					"primary": "#ffffff",
					"secondary": "#dddddd",
					"accent": "#07BEB8",
					"neutral": "#1A1A1A",
					"base-100": "#000000",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272"
				}
			}
		]
	},
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")]
};
