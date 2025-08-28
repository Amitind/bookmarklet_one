// run npx tailwindcss-cli build tailwind.css -o public/style.css

import { lime, gray, blue } from 'tailwindcss/colors';
export const content = ['./src/**/*.{html,md,njk,json,js}', '.eleventy.js'];
export const theme = {
	extend: {
		boxShadow: {
			custom: '.3rem .3rem 0 0 rgba(0,0,0,1)',
		},
		colors: {
			primary: blue,
			bg: gray,
		},
	},
	fontFamily: {
		sans: ['Inter', 'sans-serif'],
		heading: ['Poppins', 'sans-serif'],
	},
};
export const screens = {
	sm: '640px',
	// => @media (min-width: 640px) { ... }
	md: '768px',
	// => @media (min-width: 768px) { ... }
	lg: '1024px',
	// => @media (min-width: 1024px) { ... }
	xl: '1280px',
	// => @media (min-width: 1280px) { ... }
	// disbaled 2xl for now
	// '2xl': '1536px',
	// => @media (min-width: 1536px) { ... }
};
export const plugins = [
	// require('@tailwindcss/typography'),
];
