/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				firago: ["Firago", "sans-serif"],
				"firago-medium": ["Firago", "sans-serif"],
				fredoka: ["Fredoka", "cursive"],
			},
			fontWeight: {
				normal: "400",
				medium: "500",
			},
			colors: {
				yellow: "#F7BC30",
				orange: "#FB5607",
				pink: "#FF006E",
				blue: "#3A86FF",
				darkBlack: "#212529",
				lightBlack: "#343A40",
				mediumYellow: "#FFBE0B",
				lightPink: "#FF66A8",
				lightYellow: "#FFD86D",
				orangeBrown: "#FD9A6A",
				white: "#FFFFFF",
				red: "#FA4D4D",
				green: "#08A508",
				lila: "#8338EC",
			},
		},
	},
	plugins: [],
}

export default tailwindConfig;
