import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import library from '../views/library.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/library',
    component : library,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
