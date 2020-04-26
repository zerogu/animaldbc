import Vue from 'vue'
import store from '../store/'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Message from '@/components/message'

moment.locale('zh-cn')

Vue.prototype['$moment'] = moment;
Vue.prototype.$message = Message;
