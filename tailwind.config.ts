import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx,json}",
		"./public/**/*.html",
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;

