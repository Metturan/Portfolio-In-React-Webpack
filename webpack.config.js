var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/components/app.js',
	output: {
		path: __dirname+'dist',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
				{test: /\.scss$/, use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
					// publicPath: '/dist'
				})
			},
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: "babel-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: ["file-loader?name=[path][name].[ext]"]
			}
		]
	},
	devServer: {
		// contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project',
			minify: {
				collapseWhitespace: false
			},
			hash: true,
			template: './src/index.ejs', 
		}),
		new ExtractTextPlugin({
			filename: "app.css",
			disable: false,
			allChunks: true
		})
	]
};