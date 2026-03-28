import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const routes = [
  { path: '/', redirect: '/intro' },
  { path: '/intro', component: () => import('./views/IntroView.vue') },
  { path: '/agenda', component: () => import('./views/AgendaView.vue') },
  { path: '/concept', component: () => import('./views/ConceptView.vue') },
  { path: '/principle', component: () => import('./views/PrincipleView.vue') },
  { path: '/dev-case', component: () => import('./views/DevCaseView.vue') },
  { path: '/openclaw-architecture', component: () => import('./views/OpenClawArchitectureView.vue') },
  { path: '/openclaw-practice', component: () => import('./views/OpenClawPracticeView.vue') },
  { path: '/clawteam', component: () => import('./views/ClawTeamView.vue') },
  { path: '/practice', component: () => import('./views/PracticeView.vue') },
  { path: '/esp32-case', component: () => import('./views/ESP32CaseView.vue') },
  { path: '/trend', component: () => import('./views/TrendView.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
