const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.main.js',
        clean: true
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
            extensions: ['.js'],
        }
    },
    devServer: {
        port: '3000',
        static: path.resolve(__dirname, 'src'),
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    babelrc: true,
                }
            },
            {
                test: /.scss$/,
                use:  ['style-loader', 'css-loader', 'sass-loader']

            },
            {
                test: /\.jpg$/,
                type: 'asset/resource',
            }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/template.html'),
            filename: "index.html"
        })
    ]
};
