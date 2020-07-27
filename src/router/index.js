import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: resolve => require(['@/Login.vue'], resolve)
  },
  {
    path: '/andmin',
    name: 'andmin',
    component: resolve => require(['@/views/Andmin.vue'], resolve)
  },
  {
    path: '/examine',
    name: 'examine',
    component: resolve => require(['@/views/examine/Examine.vue'], resolve)
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: resolve => require(['@/views/examine/Particulars.vue'], resolve)
  },
  {
    path: '/jilu',
    name: 'jilu',
    component: resolve => require(['@/views/weizhang/jilu.vue'], resolve)
  }

]

const router = new VueRouter({
  routes
})

export default router
