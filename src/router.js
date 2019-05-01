import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'xiaoming',
          name: 'xiaoming',
          component: () => import('./views/Xiaoming.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/try',
      name: 'try',
      component: () => import('./views/try/Try.vue')
    }
  ]
})
