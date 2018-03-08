import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import page_store   from './page'
import user_store   from './user'

export default new Vuex.Store({
  modules:{
    page: page_store,
    user: user_store,
  }
})
