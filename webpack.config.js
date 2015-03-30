module.exports = {
	entry: [
        'webpack/hot/dev-server',
        './app/main.jsx'
    ],

	output: {
		path: './build',
		filename: 'main.js'
	},

    externals: {
        "react": "React"
    },

	module: {
		loaders: [
			{test: /\.jsx$/, loader: 'jsx-loader?harmony'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
		]
	}
};
