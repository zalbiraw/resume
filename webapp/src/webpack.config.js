const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')

let htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'react','index.html'),
})

const config = {
	entry: path.join(__dirname, 'react', 'index.js'),
	output: {
		filename: 'app.js'
	},
	mode: process.env.ENVIRONMENT,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader',
					options: {
						implementation: require('sass')
					}
				}]
			}
		]
	},
	devServer: {
		host: '0.0.0.0',
		port: process.env.WEBAPP_PORT,
		disableHostCheck: true,
		contentBase: path.join(__dirname, '..', 'public')
	}
}

if ('production' === process.env.ENVIRONMENT) {

	htmlPlugin = new HtmlWebpackPlugin({
		template: path.join(__dirname, 'react','index.html'),
		filename: path.join('..', '..', 'public', 'index.html')
	})

	config.output.path = path.join(__dirname, '..', 'public', 'scripts')
}

config.plugins = [ htmlPlugin ]

module.exports = config
