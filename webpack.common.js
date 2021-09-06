const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'index': './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: { //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true,    //删除空白符与换行符
                html5: true, // 根据HTML5规范解析输入
                preserveLineBreaks: false, // 当标记之间的空格包含换行符时，始终折叠为1换行符（不完全删除它）。必须与collapseWhitespace=true一起使用
                minifyCSS: true, // 压缩文内css
                minifyJS: true, // 压缩文内js
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './assets', to: "assets" },
            ],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    }
};
