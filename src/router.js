import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// base: process.env.BASE_URL,
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./views/index/Editor.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/None.vue')
    }
  ]
})
