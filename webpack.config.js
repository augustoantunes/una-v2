const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    entry: './src/app.js',
    mode:'development',
    watch: true,
    output: {
        filename: 'main.js',
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]

    },
    watchOptions: {
        ignored: ['**/node_modules'],
      },
};