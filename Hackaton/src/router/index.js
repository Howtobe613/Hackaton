import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import REGchitel from '../views/RegUchitel.vue'
import REGchenik from '../views/RegUchenik.vue'
import GlavMenu from '../views/GlavMenu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reg/uchitel',
    name: 'ruchitel',
    component: REGchitel
  },
  {
    path: '/reg/uchenik',
    name: 'ruchenik',
    component: REGchenik
  },
  {
    path: '/glavmenu',
    name: 'glavmenu',
    component: GlavMenu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
