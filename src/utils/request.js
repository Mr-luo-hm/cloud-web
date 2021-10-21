import axios from 'axios'

const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 600000 // 请求超时时间
})

export default service
