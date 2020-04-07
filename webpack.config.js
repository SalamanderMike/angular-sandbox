const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'public', 'src','index.js'),
	output: {
		path: path.join(__dirname, 'public', 'dist'),
		filename: 'vendor.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js/,
				use: [
				{ loader: 'babel-loader',
					options: { presets: ['@babel/preset-env'] }
				}]
			},
		]
	}
}
