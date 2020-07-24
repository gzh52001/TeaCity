const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    // 入口
    entry:'./src/index.js',

    // 出口
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].[hash:5].bundle.js'
    },

    // 服务器
    devServer:{
        contentBase:path.join(__dirname,'./public/'),
        // 外部可访问
        // host:0.0.0.0
        port:3001,
        hot:true,
        compress:true

    },

    // 加载器
    module:{
        rules:[
            {
                // 匹配规则
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy:true}],
                            ['@babel/plugin-proposal-class-properties',{loose:true}],
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|ico)$/,
                use:['file-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|ico)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },

    // 插件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'public/index.html'),
            minify: false
        })
    ]
}