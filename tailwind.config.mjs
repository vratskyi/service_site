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
			...require("daisyui/src/theming/themes").black,
			primary: "#FF865B",
			secondary: "#FD6F9C",
			accent: "#A57EE8",
			success: "#ADDFAD",
			"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
			"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
			"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			"--animation-btn": "0.25s", // duration of animation when you click on button
			"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			"--border-btn": "1px", // border width of buttons
			"--tab-border": "1px", // border width of tabs
			"--tab-radius": "0.5rem", // border radius of tabs
		  },
		  codeForgeLight: {
			...require("daisyui/src/theming/themes").wireframe,
			primary: "#FF865B",
			secondary: "#FD6F9C",
			accent: "#A57EE8",
			success: "#ADDFAD",
			"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
			"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
			"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			"--animation-btn": "0.25s", // duration of animation when you click on button
			"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			"--border-btn": "1px", // border width of buttons
			"--tab-border": "1px", // border width of tabs
			"--tab-radius": "0.5rem", // border radius of tabs
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
  