import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import WomenApparel from '@/sections/WomenApparel'
import MenApparel from '@/sections/MenApparel'
import Supplements from '@/sections/Supplements'
import Equipments from '@/sections/Equipments'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/menApparel',
      name: 'menApparel',
      component: MenApparel
    },
    {
      path: '/womenApparel',
      name: 'womenApparel',
      component: WomenApparel
    },
    {
      path: '/supplements',
      name: 'supplements',
      component: Supplements
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: Equipments
    }
  ]
})
