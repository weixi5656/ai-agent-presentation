<template>
  <div class="app">
    <!-- 背景效果 -->
    <div class="tech-grid"></div>
    <div class="glow-orb glow-orb-1"></div>
    <div class="glow-orb glow-orb-2"></div>
    <div class="particles">
      <div v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></div>
    </div>
    
    <!-- 导航 -->
    <nav class="nav">
      <div class="nav-brand">
        <span class="logo">🦞</span>
        <span class="brand-text">AI智能体实践</span>
      </div>
      <div class="nav-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <span class="progress-text">{{ currentIndex + 1 }} / {{ routes.length }}</span>
      </div>
      <div class="nav-dots">
        <div 
          v-for="(route, index) in routes" 
          :key="route.path"
          class="nav-dot"
          :class="{ active: currentIndex === index }"
          @click="$router.push(route.path)"
        ></div>
      </div>
    </nav>
    
    <!-- 主内容 -->
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- 底部导航 -->
    <footer class="footer">
      <button 
        v-if="currentIndex > 0" 
        class="btn btn-secondary"
        @click="prev"
      >
        ← 上一页
      </button>
      <div class="spacer"></div>
      <button 
        v-if="currentIndex < routes.length - 1" 
        class="btn btn-primary"
        @click="next"
      >
        下一页 →
      </button>
      <button 
        v-else 
        class="btn btn-primary"
        @click="restart"
      >
        重新开始 ↻
      </button>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const routes = [
  { path: '/intro', title: '引言' },
  { path: '/concepts', title: 'AI智能体概念' },
  { path: '/openclaw', title: 'OpenClaw原理' },
  { path: '/demo', title: '实践演示' },
  { path: '/esp32', title: 'ESP32机器人' },
  { path: '/future', title: '未来展望' },
]

const currentIndex = computed(() => {
  return routes.findIndex(r => r.path === route.path)
})

const progress = computed(() => {
  return ((currentIndex.value + 1) / routes.length) * 100
})

const next = () => {
  if (currentIndex.value < routes.length - 1) {
    router.push(routes[currentIndex.value + 1].path)
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    router.push(routes[currentIndex.value - 1].path)
  }
}

const restart = () => {
  router.push('/intro')
}

const particleStyle = (n) => {
  return {
    left: `${Math.random() * 100}%`,
    animationDelay: `${n * 0.5}s`,
    animationDuration: `${15 + Math.random() * 10}s`
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  font-size: 28px;
}

.brand-text {
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-progress {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  max-width: 300px;
  margin: 0 40px;
}

.progress-bar {
  flex: 1;
}

.progress-text {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
  min-width: 50px;
  text-align: right;
}

.nav-dots {
  display: flex;
  gap: 12px;
}

.main {
  flex: 1;
  padding: 100px 40px 120px;
  position: relative;
  z-index: 10;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.spacer {
  flex: 1;
}

/* 页面过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

@media (max-width: 768px) {
  .nav {
    padding: 16px 20px;
  }
  
  .nav-progress {
    display: none;
  }
  
  .main {
    padding: 80px 20px 100px;
  }
  
  .footer {
    padding: 16px 20px;
  }
}
</style>
