import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
       {path:'/',redirect:'/index'},
        {
          path:"/index",
          name:'index',
          component:()=>import("@/views/lnIndex")
        },
        {
          path:"/classify",
          name:'classify',
          component:()=>import("@/views/classify")
        },
        {
          path:"/find",
          name:'find',
          component:()=>import("@/views/find"),
          
        },
        {
          path:"/car",
          name:'car',
          component:()=>import("@/views/car"),
          children:[
            {path:"/",redirect:'/cItem'},
            {path:"/cItem",
            name:'cItem',
            component:()=>import("@/components/cItem")},
            {
              path:"/carItem",
              name:'carItem',
              component:()=>import("@/components/carItem")
            },
          ]
        },
        {
          path:"/mine",
          name:'mine',
          component:()=>import("@/views/mine")
        },
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import("@/views/search")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login"),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import("@/views/detail"),
    },
    {path: '/error',
      name: 'error',
      component:  () => import("@/components/error")
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.matched.length === 0){
    from.name ? next({
      name:from.name
    }) : next('/error')
  }else{
    next()
  }
})
export default router;