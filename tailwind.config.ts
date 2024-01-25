import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{js,js,ts,tsx}"],
	theme: {
		extend: {},
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
