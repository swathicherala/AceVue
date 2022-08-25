import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView'
import ServicesView from '../components/ServicesView'
import AboutView from '../components/AboutView'
import ContactView from '../components/ContactView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/service',
    name: 'service',
    component: ServicesView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
