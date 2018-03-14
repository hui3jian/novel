import Vue        from    'vue'
import Router     from    'vue-router'
import Index      from    '@/page/index'
import Home       from    '@/page/index/index'
import Login      from    '@/page/login/login'
import Logout     from    '@/page/login/logout'
import Search     from    '@/page/search/search'
import Attention  from    '@/page/attention/index'
import Recommend  from    '@/page/recommend/index'
import Square     from    '@/page/square/index'
import User       from    '@/page/user/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        { path: '/home',        component:Home },
        { path: '/like',        component:Home },
        { path: '/recommend',   component:Recommend },
        { path: '/square',      component:Square },
        { path: '/user',        component:User },
      ]
    },
    { path: '/login',     name: 'login',      component: Login },
    { path: '/logout',    name: 'logout',     component: Logout },
    { path: '/search',    name: 'search',     component: Search },
    { path: '/attention', name: 'attention',  component: Attention },
  ]
})
