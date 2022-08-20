module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true //此处配置意思为全局引入jquery，详情可查看文档
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 允许调用 new 操作符有首字母小写或首字母大写的函数。
    newIsCap: false
  }
}
