import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const routes = [
  { path: '/', redirect: '/intro' },
  { path: '/intro', component: () => import('./views/IntroView.vue') },
  { path: '/concepts', component: () => import('./views/ConceptsView.vue') },
  { path: '/openclaw', component: () => import('./views/OpenClawView.vue') },
  { path: '/demo', component: () => import('./views/DemoView.vue') },
  { path: '/esp32', component: () => import('./views/ESP32View.vue') },
  { path: '/future', component: () => import('./views/FutureView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
