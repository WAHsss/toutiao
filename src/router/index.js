import Vue from 'vue'
import VueRouter from 'vue-router'
import Channel from 'pages/channel/Channel'
import NewsList from 'pages/channel/NewsList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Channel,
    redirect: '/channel/recommend',
    children : [
      {
        path : '/channel/:pageRouter',
        component : NewsList
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
