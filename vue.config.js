const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  outputDir: 'docs',
  runtimeCompiler: true,
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    // public: 'aries.bilibili.co',
    overlay: {
      warnings: true,
      errors: true
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
