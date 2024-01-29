import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{js,js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				linkHover: colors.blue[300],
				linkHoverDark: colors.blue[200],

				// background
				primaryBg: colors.white,
				primaryBgDark: colors.slate[900],
				accentBg: colors.sky[400],

				// foreground
				primaryFg: colors.slate[200],
				primaryFgDark: colors.slate[900],
				accentFg: colors.sky[500],
				accentFgDark: colors.sky[400],

				// border
				primaryBorder: colors.slate[900],
				primaryBorderDark: colors.slate[50],
				accentBorder: colors.sky[400],

				// shadow
				primaryShadow: "rgb(30 41 59 / <alpha-value>)",
			},
		},
		screens: {
			xs: "640px",
			sm: "768px",
			md: "900px",
			lg: "1024px",
			xl: "1100px",
		},
	},
	plugins: [],
};
export default config;
