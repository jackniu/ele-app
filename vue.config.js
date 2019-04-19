module.exports = {
  devServer: {
    open: true,
    host: localhost,
    port: 8080,
    https: false,
    hotOnly: false,
    propxy: {
      //配置跨域
      '/api': {
        target: 'https://ele-interface.herokuapp.com/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^api': ''
        }
      }
    },
    before: app => {}
  }
};