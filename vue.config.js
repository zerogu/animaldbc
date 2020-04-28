const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/animaldtc/' : '/',
  runtimeCompiler: true,
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        ws: true,
        changeOrigin: true,
      },
    }

  },
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/variables.scss"`
      },
      scss: {
        prependData: `@import "@/assets/css/variables.scss";`
      },
    }
  }
}
