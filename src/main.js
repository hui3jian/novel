// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUi from 'muse-ui'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import "@/assets/iconfont/iconfont.css"
import '@/assets/css/style.css'
import '@/assets/css/animate.min.css'

Vue.use(MuseUi);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

