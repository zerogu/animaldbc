import Vue from 'vue'
import axios from 'axios'
import {throwErr} from '../utils' //utils 捕捉服务端http状态码的方法

const service = axios.create({
  withCredentials: true //允许携带cookie
})

//过滤请求
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data)
    } else if (response.data.code === -101) { //未登录
      window.location.href = 'https://dashboard-mng.bilibili.co/login.html?caller=cdb-profit';
      // return Promise.reject(response.data)
    } else {
      response.data.message ? Vue.prototype.$message.error(response.data.message) : Vue.prototype.$message.error(response.data.code)
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error && error.response) {
      let res = {}
      res.code = error.response.status
      res.msg = throwErr(error.response.status, error.response) //throwErr 捕捉服务端的http状态码
      Vue.prototype.$message.error(res.msg)
      return Promise.reject(res)
    }
    Vue.prototype.$message.error('发生错误')
    return Promise.reject(error)
  }
)
const http = {
  async get(url, data) {
    let res = await service.get(url, {params: data})
    return res.data
  },
  async post(url, data) {
    let res = await service.post(url, data);
    return res.data
  }
}

export default http
