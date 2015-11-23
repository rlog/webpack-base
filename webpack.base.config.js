var webpack = require("webpack");

module.exports = function(env) {
	env = env || 'dev';
	var isDev = env === 'dev';
	var conf = {
		entry: './app/main.jsx',

		output: {
			path: './dist',
      publicPath: "/dist/",
			filename: 'main.js'
		},

		debug: true,

		resolve: {
	    extensions: ['', '.js', '.jsx', '.scss']
	  },

		// externals: [
		// 	/^react(\/.*)?$/,
		// 	/^reflux(\/.*)?$/,
		// 	"superagent"
		// ],
		//
		// plugins: [new webpack.PrefetchPlugin("react")],

		module: {
			loaders: [
				{
					test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|otf)$/,
					loader: 'url-loader?limit=10000'
				},

				{
					test: /\.jsx$/,
					loader: 'react-hot-loader!babel?cacheDirectory=true&presets[]=react,presets[]=es2015,presets[]=react',
					exclude: /(node_modules|bower_components)/
				},

				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader?module!sass-loader'
				}
			]
		}
	};

	return conf;
};
