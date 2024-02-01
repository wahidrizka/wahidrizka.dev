import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{js,js,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				pixels: ["Pixelify Sans", "sans-serif"],
			},
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
				primaryShadow: colors.slate[800],
				primaryShadowDark: colors.slate[200],
			},
		},
		screens: {
			xs: "320px",
			sm: "544px",
			md: "768px",
			lg: "1012px",
			xl: "1280px",
			"2xl": "1400px",
		},
	},
	plugins: [],
};
export default config;
