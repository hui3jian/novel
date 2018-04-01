// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from  'vue'
import App      from  './App'
import router   from  './router'
import MuseUi   from  'muse-ui'
import store    from  './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import "@/assets/iconfont/iconfont.css"
import '@/assets/css/style.css'
import '@/assets/css/animate.min.css'
import 'swiper/dist/css/swiper.css'
import "@/assets/iconfont/iconfont.js"


Vue.use(MuseUi);
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

