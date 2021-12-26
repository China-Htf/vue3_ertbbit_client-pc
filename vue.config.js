const path = require('path')
module.exports = {
  pluginOptions: {
    // vue add style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      /**
       * 哪些文件自动引入，使用绝对路径
       * 需要是 path.join 拼接完整路径
       */
      patterns: [
        path.join(__dirname, './src/assets/styles/mixins.less'),
        path.join(__dirname, './src/assets/styles/variables.less')
      ]
    }
  }
}
