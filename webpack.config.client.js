const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'/src/client/index.js'),
    output: {
        filename: 'bundle.js',
        path:  path.join(__dirname,'dist'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'/src/client/index.html')
        })
    ],
    devServer: {
        hot:true,
        port: '3001',
        overlay:true,//打包出错时 在浏览器端显示
    }
}