import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    meta: { requiredAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {

    const user = auth.currentUser
    console.log(user)
    if (!user) {
      next({
        path: '/Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
