module.exports = {
		content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
		theme: {
			extend: {
				colors: {
					'background': '#252525',
					'footer-background': '#1b1b1b',
					'primary-gray': '#8a8a8d',
					'primary-blue': '#346094',
					'accent-orange': '#d57e00',
					'accent-sky-blue': '#99caea',
					'accent-purple': '#853175',
					'accent-yellow': '#f4c300',
					'accent-green': '#4b8b2a',
				},
				fontFamily: {
					montserrat: ['Montserrat', 'sans-serif'],
				},
			},
		},
		plugins: [],
		safelist: [
			'bg-accent-purple',
			'bg-accent-green',
			'text-accent-sky-blue'
		]
	};