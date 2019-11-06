module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-px-to-viewport': {
			viewportWidth: 750,
			viewportHeight: 1334,
			unitPrecision: 3,
			viewportUnit: 'vw',
			selectorBlackList: ['.ignore', '.hairlines', /.mdc-/, /.app-/],
			exclude: [],
			minPixelValue: 10,
			mediaQuery: false,
		},
	},
};
