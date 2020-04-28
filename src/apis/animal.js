import http from './index'

export const createPost = (params) => {
  return http.post('/api/create', params) //添加信息
}

