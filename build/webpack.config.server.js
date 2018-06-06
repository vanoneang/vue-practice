const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const ExtractPlugin = require('extract-text-webpack-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin') // vue的服务端渲染插件

let config

config = merge(baseConfig, {
  target: 'node', // 运行环境
  entry: path.join(__dirname, '../client/server-entry.js'), // 服务端入口
  devtool: '#source-map',
  output: {
    libraryTarget: 'commonjs2', // 用module.exports输出
    filename: 'server-entry.js', // 模块加载的，不需要缓存
    path: path.join(__dirname, '../server-build') // 输出到server-build
  },
  externals: Object.keys(require('../package.json').dependencies), // 不要打包里面的文件，node端不需要require那么多
  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: ([
    new ExtractPlugin('styles.[contentHash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ])
})

module.exports = config
