const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const client = {
    name: 'client',
    mode: 'development',
    target: 'web',
    entry: ['webpack-hot-middleware/client?name=client&reload=true', `./src/render/client.js`],
    output: {
        globalObject: 'this',
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
                    "babel-loader",
                    "eslint-loader"
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'css-hot-loader?cssModule=true',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public',
                        },
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
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new Dotenv({systemvars: true}),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

const server = {
    name: 'server',
    mode: 'development',
    target: 'node',
    entry: ['webpack-hot-middleware/client?name=server&reload=true', `./src/render/server.js`],
    output: {
        filename: 'server.js',
        globalObject: 'this',
        libraryTarget: 'commonjs2',
        publicPath: '/dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules[\\\/])/,
                use: [
                    "babel-loader",
                    "eslint-loader"
                ]
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
