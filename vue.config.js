// eslint-disable-next-line @typescript-eslint/no-var-requires
const px2rem = require("postcss-px2rem");

module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [px2rem({remUnit: 37.5})]
      },
      less: {
        javascriptEnabled: true
      }
    }
  }
};
