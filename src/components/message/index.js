import Message from './Message.vue'
import Vue from 'vue'

const v = new Vue({
  render(createElement) {
    return createElement(Message)
  }
})

v.$mount()
document.body.appendChild(v.$el)

const index = v.$children[0]

function info(msg) {
  index.info(msg)
}

function error(msg) {
  index.error(msg)
}

function warning(msg) {
  index.warning(msg)
}

function success(msg) {
  index.success(msg)
}
export default {
  info,
  success,
  warning,
  error
}