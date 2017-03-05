var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {

	entry: [
		'./src/js/index'
	],

	output:{
		path:path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},

	devServer :{
		port:9090,
		hot: true
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
				warnings:true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlPlugin({
			template:'./src/html/index.html'
		}),
		new CopyWebpackPlugin(
			[
				{from: './src/less', to:path.join(__dirname,'dist/style')}
			]
		)
	],

	module: {
		loaders: [
			{
				test: '/\.jsx?$/',
				loader: 'babel',
				include: path.join(__dirname, 'src'),
				query: {
					presets: ['es2015', 'react']
				}
			}	
		]
	}
};
module.exports = config;