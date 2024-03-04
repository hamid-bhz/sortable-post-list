/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary, 37 255 144) / <alpha-value>)', // #25ff90
				secondary: 'rgb(var(--color-secondary, 99 87 177) / <alpha-value>)' // #6357b1
			}
		}
	},
	plugins: []
}
