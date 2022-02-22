import axios from 'axios'



const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 600000 // 请求超时时间
})

service.interceptors.request.use(config=>{
  config.headers.secret =window.sessionStorage.getItem("secret")
  return config;
})

export default service
