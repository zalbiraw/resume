const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')

let htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'src','index.html'),
})

const config = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: 'app.js'
	},
	mode: process.env.ENVIRONMENT || 'development',
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
			},
			{
				test: /\.woff$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: path.join('..', 'fonts')
					}
				}
			},
			{
				test: /\.png$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: path.join('..', 'images')
					}
				}
			}
		]
	},
	devServer: {
		host: process.env.HOST,
		port: process.env.PORT,
		disableHostCheck: true,
		contentBase: path.join(__dirname, '..', 'public')
	}
}

if ('production' === process.env.ENVIRONMENT) {

	htmlPlugin = new HtmlWebpackPlugin({
		template: path.join(__dirname, 'src','index.html'),
		filename: path.join('..', '..', 'public', 'index.html')
	})

	config.output.path = path.join(__dirname, '..', 'public', 'scripts')
}

config.plugins = [ htmlPlugin ]

module.exports = config
