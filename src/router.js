import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/Login',
    component: Login
  }, {
    path: '/',
    redirect: '/Login'
  }, {
    path: '/Home',
    component: Home
  }]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})
export default router
