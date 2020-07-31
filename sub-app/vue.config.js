/*
 * @Author: jinglin.tan
 * @Date: 2020-07-31 16:57:23
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-31 16:57:32
 * @Description: vue config
 */

/*
 * @Author: jinglin.tan
 * @Date: 2020-07-29 15:21:52
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-31 14:06:01
 * @Description: vue-cli 3 config file
 */ 
const dev = process.env.NODE_ENV === "development";
const path = require('path')

const { name } = require('./package.json')
module.exports = {
  runtimeCompiler: true,
  publicPath: '//localhost:8082',
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, 'src')
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}