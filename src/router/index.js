import Vue from "vue";
import Router from "vue-router";
import login from "@/components/content/Login.vue";
import Home from "../views/Home";

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: login},
    {path: '/home', component: Home},
  ]
})

// 路由控制守卫
router.beforeEach((to, from, next) => {
  // to 要去哪里
  // from 来源
  // next 放行
  // next() next('/login') 强制跳转
  if (to.path === '/login') return next();
  const token = window.sessionStorage.getItem('secret');
  if (!token) return next('/login')
  next()
})



export default router

