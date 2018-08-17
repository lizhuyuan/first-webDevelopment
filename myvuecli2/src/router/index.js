import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {/*components，单页面多路由的效果要加s,*/
        default:HelloWorld,/*default单页面的名称，下面是多路由的名称*/
        left:hi1,
        right:hi2/*这后面的值要跟APP.VUE里面的router-view的name一样*/
      }
    },
    {
      path: '/lizhu',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:hi2,
        right:hi1/*这后面的值要跟APP.VUE里面的router-view的name一样*/
      }
    }
  ]
})
