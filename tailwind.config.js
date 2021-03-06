/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				'warm-gray': colors.stone,
				cyan: colors.cyan,
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
