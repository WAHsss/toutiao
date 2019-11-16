// vue.config.js
const path = require('path');
module.exports = {
  chainWebpack : config => {
    config.resolve.alias
      .set('assets' , path.resolve(__dirname , './src/assets'))
      .set('pages' , path.resolve(__dirname , './src/pages'))
      .set('component' , path.resolve(__dirname , './src/component'))
      .set('util' , path.resolve(__dirname , './src/util'))
  }
}