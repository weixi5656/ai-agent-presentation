<template>
  <div class="app">
    <!-- 极光背景效果 -->
    <div class="aurora-container">
      <div class="aurora-orb aurora-orb-1"></div>
      <div class="aurora-orb aurora-orb-2"></div>
      <div class="aurora-orb aurora-orb-3"></div>
      <div class="aurora-overlay"></div>
    </div>
    
    <!-- 顶部导航 -->
    <nav class="nav">
      <div class="nav-brand">
        <span class="logo">🤖</span>
        <span class="brand-text">AI智能体案例分享</span>
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
          :title="route.title"
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
  { path: '/intro', title: '封面' },
  { path: '/agenda', title: '议程' },
  { path: '/concept', title: '认知与原理' },
  { path: '/dev-case', title: '研发场景' },
  { path: '/openclaw-architecture', title: 'OpenClaw架构' },
  { path: '/openclaw-practice', title: 'OpenClaw实操' },
  { path: '/clawteam', title: 'ClawTeam协作' },
  { path: '/practice', title: '提示词工程' },
  { path: '/esp32-case', title: '端侧实践' },
  { path: '/trend', title: '趋势展望' },
]

const currentIndex = computed(() => {
  return routes.findIndex(r => r.path === route.path)
})

const progress = computed(() => {
  return ((currentIndex.value + 1) / routes.length) * 100
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const next = () => {
  if (currentIndex.value < routes.length - 1) {
    router.push(routes[currentIndex.value + 1].path)
    scrollToTop()
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    router.push(routes[currentIndex.value - 1].path)
    scrollToTop()
  }
}

const restart = () => {
  router.push('/intro')
  scrollToTop()
}


</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}



/* 顶部导航 */
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
  background: rgba(255, 255, 255, 0.9);
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
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
  transition: width 0.3s ease;
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

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot:hover {
  background: var(--primary-light);
}

.nav-dot.active {
  background: var(--primary);
  box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.2);
}

/* 主内容 */
.main {
  flex: 1;
  padding: 100px 40px 120px;
  position: relative;
  z-index: 10;
}

/* 底部导航 */
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.spacer {
  flex: 1;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  box-shadow: 0 4px 14px rgba(0, 102, 255, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: white;
  border-color: var(--primary);
}

/* 页面过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .nav {
    padding: 16px 20px;
  }
  
  .nav-progress {
    display: none;
  }
  
  .nav-dots {
    gap: 8px;
  }
  
  .nav-dot {
    width: 10px;
    height: 10px;
  }
  
  .main {
    padding: 80px 20px 100px;
  }
  
  .footer {
    padding: 16px 20px;
  }
}
</style>
