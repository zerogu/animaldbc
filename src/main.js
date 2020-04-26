import Vue from 'vue'
import vuetify from '@/global/vuetify'
import './assets/css/app.scss'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './global/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
