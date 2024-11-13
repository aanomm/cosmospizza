/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Add cosmospizza brand colors here after sampling from website
			},
			fontFamily: {
				// Add custom fonts if needed
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-motion')
	],
}
