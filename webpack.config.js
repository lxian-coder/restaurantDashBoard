const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname,  'main.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react', "@babel/preset-env",
                    "@babel/preset-typescript"]
                  }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp3)$/i,
                use: 
                  {
                    loader: 'file-loader', 
            },
        },
            {  // 关于sass 的设置，
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  "css-loader",
                  // Translates CSS into CommonJS
                 // "postcss-loader",  // css-loader  改成 postcss-loader  可以自动加上-webkit 增加兼容性
                  // Compiles Sass to CSS
                //  "sass-loader"
                ],
          }
        ]},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'  //  for react router
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new CleanWebpackPlugin(),  // 自动清理改变bundle 文件后，多余出来的老文件
    ],
    devServer: {
        contentBase: './dist',  // live server
        historyApiFallback: true,  // for react router
        port:9000,
      // 解决 react router 没法刷新的问题
      historyApiFallback: true,
      contentBase: ':/',
      hot: true
      },
  
}