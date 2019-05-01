import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// import '@/components/biz-common-element/lib/theme-chalk/index.css';
// import bizCommonElement from '@/components/biz-common-element/lib/index.js';
// Vue.use(bizCommonElement);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
