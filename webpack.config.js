const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './src/index.tsx',
	target: 'web',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtraPlugin.loader,
					{
						loader: 'css-loader',
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new MiniCssExtraPlugin({
			filename: 'style.css',
		}),
	],

	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},
	devServer: {
		port: 3000,
		contentBase: './',
		historyApiFallback: true,
		open: true,
		liveReload: true,
		hot: true,
	},
	watch: true,
};
