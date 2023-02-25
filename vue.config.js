const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    'https': true,

  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bug-invaders/'
    : '/'
  ,
  chainWebpack: config => {
    const rules = ['images', 'media'];

    rules.forEach(rule => {
      const ruleConf = config.module.rule(rule);
      ruleConf.type('asset/resource');
    });




  },

})
