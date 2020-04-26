import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#fa7268',
        secondary: '#999999',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
}

export default new Vuetify(opts)