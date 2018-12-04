import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Count from '@/components/Count'
import TopSubfield from '@/components/TopSubfield'
import Center from '@/components/Center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello 
    },{
      path:'/TopSubfield',
      name:'TopSubfield',
      component:TopSubfield
    },{
      path:'/Center',
      name:'Center',
      component:Center
    }
  ]
})
