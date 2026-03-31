<template>
  <div class="app-scroller">
    <!-- 极光背景效果 -->
    <div class="aurora-container">
      <div class="aurora-orb aurora-orb-1"></div>
      <div class="aurora-orb aurora-orb-2"></div>
      <div class="aurora-orb aurora-orb-3"></div>
      <div class="aurora-overlay"></div>
    </div>
    
    <!-- 顶部极简毛玻璃导航 -->
    <nav class="apple-nav" :class="{ 'scrolled': isScrolled }">
      <div class="nav-brand">
        <span class="logo">🤖</span>
        <span class="brand-text">AI Agent Presentation</span>
      </div>
      <div class="nav-links">
        <a 
          v-for="(section, index) in sections" 
          :key="index"
          @click="scrollToSection(section.id)"
          :class="{ active: currentSection === section.id }"
        >
          {{ section.title }}
        </a>
      </div>
    </nav>
    
    <!-- 主内容区：各视图垂直堆叠 -->
    <main class="main-content" ref="mainContent">
      <section id="intro"><IntroView /></section>
      <section id="agenda"><AgendaView /></section>
      <section id="concept"><ConceptView /></section>
      <section id="ollama"><OllamaView /></section>
      <section id="architecture"><OpenClawArchitectureView /></section>
      <section id="practice"><PracticeView /></section>
      <section id="dev-case"><DevCaseView /></section>
      <section id="clawteam"><ClawTeamView /></section>
      <section id="esp32-case"><ESP32CaseView /></section>
      <section id="trend"><TrendView /></section>
      <section id="challenges"><ChallengesView /></section>
      <section id="summary"><SummaryView /></section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Import all views
import IntroView from './views/IntroView.vue'
import AgendaView from './views/AgendaView.vue'
import ConceptView from './views/ConceptView.vue'
import OllamaView from './views/OllamaView.vue'
import OpenClawArchitectureView from './views/OpenClawArchitectureView.vue'
import OpenClawPracticeView from './views/OpenClawPracticeView.vue'
import PracticeView from './views/PracticeView.vue'
import DevCaseView from './views/DevCaseView.vue'
import ClawTeamView from './views/ClawTeamView.vue'
import ESP32CaseView from './views/ESP32CaseView.vue'
import SummaryView from './views/SummaryView.vue'
import TrendView from './views/TrendView.vue'
import ChallengesView from './views/ChallengesView.vue'

const isScrolled = ref(false)
const currentSection = ref('intro')

const sections = [
  { id: 'intro', title: '概述' },
  { id: 'agenda', title: '议程' },
  { id: 'concept', title: '核心概念' },
  { id: 'ollama', title: '本地部署' },
  { id: 'architecture', title: '分层架构' },
  { id: 'practice', title: '提示词实战' },
  { id: 'dev-case', title: '智能编程' },
  { id: 'clawteam', title: '多智能体' },
  { id: 'esp32-case', title: '具身智能' },
  { id: 'trend', title: '未来展望' },
  { id: 'challenges', title: '安全治理' },
  { id: 'summary', title: '核心总结' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Track current section
  const sectionElements = document.querySelectorAll('main.main-content > section')
  let currentId = 'intro'
  
  sectionElements.forEach(sec => {
    const rect = sec.getBoundingClientRect()
    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
      currentId = sec.id
    }
  })
  currentSection.value = currentId
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 60, // offset for navbar
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Create fade/slide animations for all sections
  const childSections = document.querySelectorAll('main.main-content > section')
  childSections.forEach((sec, i) => {
    // Skip intro for immediate render
    if (i === 0) return 
    
    gsap.from(sec, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sec,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
.app-scroller {
  min-height: 100vh;
  position: relative;
}

/* 极简毛玻璃导航 */
.apple-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.apple-nav.scrolled {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  font-size: 24px;
}

.brand-text {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  font-weight: 500;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--primary);
}

/* 核心内容区：各 section 独占高度与大留白 */
.main-content {
  position: relative;
  z-index: 10;
  padding-top: 60px; /* offset for nav */
}

section {
  min-height: 100vh;
  padding: 120px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

@media (max-width: 768px) {
  .apple-nav {
    padding: 0 16px;
  }
  .brand-text {
    font-size: 16px;
  }
  .nav-links {
    display: none; /* hide for now */
  }
  section {
    padding: 80px 16px; /* more compact for mobile */
    min-height: auto;
  }
}
</style>
