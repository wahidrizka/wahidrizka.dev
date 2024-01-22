import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,js,ts,tsx}"],
	theme: {
		extend: {},
		darkMode: ["class", '[data-color-mode="dark"'],
	},
	plugins: [],
};
export default config;
