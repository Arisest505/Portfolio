import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Project from '@/pages/Project.vue'
import Experience from '@/pages/Experience.vue' // 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience // 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
