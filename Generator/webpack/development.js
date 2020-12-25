const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcDir = path.join(__dirname, './../../src');

const client = {
    name: 'client',
    mode: 'development',
    target: 'web',
    entry: ['webpack-hot-middleware/client?name=client&reload=true', `${srcDir}/render/client.js`],
    output: {
        filename: 'client.js',
        publicPath: '/dist',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules[\\\/])/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-proposal-object-rest-spread",
                                ["@babel/plugin-proposal-decorators", {"legacy": true}],
                                ["@babel/plugin-proposal-class-properties", {"loose": true}]
                            ]
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'css-hot-loader?cssModule=true',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                sourceMap: true,
                                outputStyle: 'compressed',
                            }

                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new Dotenv({systemvars: true}),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

const server = {
    name: 'server',
    mode: 'development',
    target: 'node',
    entry: ['webpack-hot-middleware/client?name=server&reload=true', `${srcDir}/render/server.js`],
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules[\\\/])/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-proposal-object-rest-spread",
                                ["@babel/plugin-proposal-decorators", {"legacy": true}],
                                ["@babel/plugin-proposal-class-properties", {"loose": true}]
                            ]
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: 'ignore-loader'
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}


module.exports = [client, server];
