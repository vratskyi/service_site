/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["Switzer", "sans-serif"],
		},
	  },
	},
	plugins: [
	  require("autoprefixer"),
	  require("postcss"),
	  require("cssnano"),
	  require("@tailwindcss/typography"),
	  require("daisyui"),
	],
	daisyui: {
	  themes: [
		{
		  codeForgeBlack: {
			...require("daisyui/src/theming/themes").sunset,
			primary: "#FF865B",
			secondary: "#FD6F9C",
			accent: "#A57EE8",
			success: "#ADDFAD",
		  },
		  codeForgeLight: {
			...require("daisyui/src/theming/themes").light,
			primary: "#FF865B",
			secondary: "#FD6F9C",
			accent: "#A57EE8",
			success: "#ADDFAD",
		  },
		},
	  ],
	  darkTheme: 'codeForgeBlack',
	  lightTheme: 'codeForgeLight',
	  base: true,
	  styled: true,
	  utils: true,
	  prefix: "",
	  logs: true,
	  themeRoot: ":root",
	},
  };
  