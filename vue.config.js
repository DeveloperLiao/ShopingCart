const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  // 项目进行打包后,代码是进过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
  // 有了map就可以像未加密的代码一样，准确的输出是那一行那一列有错
  // 所以该文件如果项目不需要是可以去除掉
  productionSourceMap: false,
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
