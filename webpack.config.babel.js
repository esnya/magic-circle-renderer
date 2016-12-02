/* eslint import/no-extraneous-dependencies: off */

import FlowtypePlugin from 'flowtype-loader/plugin';
import path from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

const { NODE_ENV } = process.env;
const DEBUG = NODE_ENV === undefined || NODE_ENV === 'development';

export default {
    cache: DEBUG,
    debug: DEBUG,
    devtool: '#source-map',
    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
        port: 8000,
    },
    entry: {
        bundle: './src',
        styles: './src/styles/global.styl',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'flowtype',
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel', 'eslint'],
            },
            {
                test: /\.json?$/,
                loaders: ['json'],
            },
            {
                test: /\.yml?$/,
                loaders: ['json', 'yaml'],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css?modules'],
            },
            {
                test: /\.styl$/,
                exclude: /styles\/global\.styl$/,
                loaders: ['style', 'css?modules', 'stylus'],
            },
            {
                test: /styles\/global\.styl$/,
                loaders: ['style', 'css', 'stylus'],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'public/assets'),
        publicPath: '/assets/',
        filename: DEBUG ? '[name].js' : '[name].min.js',
    },
    plugins: [
        new FlowtypePlugin(),
        new WebpackNotifierPlugin(),
        ...(DEBUG ? [] : [
            new webpack.optimize.UglifyJsPlugin(),
        ]),
    ],
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
        ],
    },
};
