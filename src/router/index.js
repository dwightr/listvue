import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listing from '@/components/Listing.vue'
import Detail from '@/components/Detail.vue'
import Cart from '@/components/Cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/listing',
    },
    {
      path: '/listing',
      component: Listing,
    },
    {
      path: '/listing/:id',
      component: Detail,
      props: true,
    },
    {
      path: '/cart',
      component: Cart,
    },
  ]
})
