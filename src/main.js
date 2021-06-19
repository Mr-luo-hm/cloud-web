import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import './assets/font/iconfont.css'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios
/*请求根路径*/
axios.defaults.baseURL = "http://192.168.1.99:20003"


new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  render: h => h(App)
}).$mount('#app')
