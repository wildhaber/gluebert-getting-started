const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENTRY_POINTS = {
    // Set your app's entry point
    app: [
        'babel-polyfill', // polyfills necessary if you want to support not so modern browsers
        './src/app.js', // your app's entry point
    ],
};

module.exports = {
    entry: ENTRY_POINTS,
    module: {
        rules: [

            // Enable babel.js
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },

            // Enable multiple template engines
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },

            // Loader for fonts if you use Webfonts
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader?name=[hash].[ext]',
                },
            },

            // Style-Loader for Sass
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true,
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: 'postcss-loader',
                            },
                            {
                                loader: 'sass-loader',
                            },
                        ],
                    },
                ),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            ignoreOrder: false,
        }),
        new CopyWebpackPlugin([{
            from: `src/index.html`,
        }]),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].js',

        // define output folder
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/',
    },
};