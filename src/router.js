import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// base: process.env.BASE_URL,
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'indexSon' },
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: 'index',
          name: 'indexSon',
          component: () => import('./views/Index/sonindex.vue')
        },
        {
          path: 'nong',
          name: 'nong',
          component: () => import('./views/Index/nong.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/Index/about.vue')
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   component: () => import('./views/Editor')
    // },
    {
      path: '*',
      name: '404',
      component: () => import('./views/None.vue')
    }
  ]
})
