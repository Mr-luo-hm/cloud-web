import Vue from 'vue'
import App from './App'
import router from "./router/index";
import '@/assets/css/global.css'
import '@/assets/font/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

// axios.defaults.baseURL='http://192.168.1.99:20003'

// 请求拦截器
axios.interceptors.request.use(config=>{
  console.log(window.sessionStorage.getItem('token'))
  config.headers.Authorization =window.sessionStorage.getItem("token")
  // console.log(config)
  return config;
})
Vue.prototype.$http=axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
