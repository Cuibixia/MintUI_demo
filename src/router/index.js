import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/view/index'
import HomePage from '@/view/HomePage'
import MyInfo from '@/view/myInfo'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      component: Home,
      children:[
        { path: 'homePage',component: HomePage},
        { path: 'myInfo',component: MyInfo}
      ]
    }
    
  ]
})
