const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'env', 'react', 'stage-2'],
                },
            },
        ],
    },
    devtool: 'source-map',
    target: 'web',
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(__dirname, 'src', 'index.html'), to: path.join(__dirname, 'build', 'index.html') },
        ]),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        host: '127.0.0.1',
        port: 9000,
    },
};
