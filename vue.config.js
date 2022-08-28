const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 添加代理
    proxy: 'http://gmall-h5-api.atguigu.cn',
    port: 8080
  },
  configureWebpack: {
    //支持jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      }),
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  }
})
