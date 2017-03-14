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
	resolve: {
    	extensions: ['.js', '.jsx']
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
				{from: './src/less', to:path.join(__dirname,'dist/style')},
				{from: './src/images', to:path.join(__dirname,'dist/images')}
			]
		)
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			},
			{ 
				test: /\.css$/, 
				loader: ['style-loader', 'css-loader']
			},
			{
		      test: /\.(jpg|JPG|png)$/,
		      loader: "url-loader?limit=250000",
		      exclude: /node_modules/ 
		    }
		]
	}
};
module.exports = config;