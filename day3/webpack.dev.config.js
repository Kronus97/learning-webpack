const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, './dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
        publicPath: '',
    },
    mode: 'development',
    devServer: {
        contentBase: DIST_DIR,
        index: 'index.html',
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                            outputPath: 'static/',
                        },
                    },
                ],
            },
            {
                test: /\.(svg)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Second day of webpack',
            filename: 'index.html',
            meta: {
                description: 'This is my progress with webpack on the second day',
            },
            template: 'index.html',
        }),
    ],
}
