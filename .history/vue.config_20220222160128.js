const path = require("path");
const serverAddress = 'http://192.168.1.142:20001'

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@':path.resolve(__dirname, './src'),
      }
    }
  },
  devServer: {
    port: 8001,
    proxy:{
      '^/api': {
        target: serverAddress,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
