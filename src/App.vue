<template>
  <div class="app">
    <!-- 背景效果 -->
    <div class="tech-grid"></div>
    <div class="glow-orb glow-orb-1"></div>
    <div class="glow-orb glow-orb-2"></div>
    
    <!-- 侧边导航 -->
    <nav class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="sidebar-toggle" @click="sidebarCollapsed = !sidebarCollapsed">
        {{ sidebarCollapsed ? '→' : '←' }}
      </div>
      <div class="nav-items">
        <div 
          v-for="(route, index) in routes" 
          :key="route.path"
          class="nav-item"
          :class="{ active: currentIndex === index }"
          @click="$router.push(route.path)"
        >
          <span class="nav-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="nav-title" v-show="!sidebarCollapsed">{{ route.title }}</span>
        </div>
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
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="nav-controls">
        <button 
          v-if="currentIndex > 0" 
          class="nav-btn"
          @click="prev"
        >
          ← 上一页
        </button>
        <span class="page-indicator">{{ currentIndex + 1 }} / {{ routes.length }}</span>
        <button 
          v-if="currentIndex < routes.length - 1" 
          class="nav-btn primary"
          @click="next"
        >
          下一页 →
        </button>
      </div>
    </footer>
    
    <!-- 键盘提示 -->
    <div class="keyboard-hint" v-if="showHint">
      <span>按空格键或方向键翻页</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const sidebarCollapsed = ref(false)
const showHint = ref(true)

const routes = [
  { path: '/intro', title: '封面' },
  { path: '/agenda', title: '议程' },
  { path: '/concept', title: 'AI智能体本质' },
  { path: '/principle', title: '核心原理' },
  { path: '/openclaw-principle', title: 'OpenClaw架构' },
  { path: '/openclaw-practice', title: 'OpenClaw实操' },
  { path: '/clawteam', title: 'ClawTeam协作' },
  { path: '/dev-case', title: '研发场景' },
  { path: '/esp32-case', title: 'ESP32实践' },
  { path: '/practice', title: '最佳实践' },
  { path: '/trend', title: '趋势展望' },
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

const handleKeydown = (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault()
    next()
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    prev()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  setTimeout(() => {
    showHint.value = false
  }, 5000)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  position: relative;
  background: var(--bg-primary);
}

/* 背景效果 */
.tech-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image: 
    linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.glow-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
}

.glow-orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
  top: -200px;
  right: -200px;
}

.glow-orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
  bottom: -150px;
  left: -150px;
}

/* 侧边导航 */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid var(--border);
  z-index: 100;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-toggle {
  position: absolute;
  right: 10px;
  top: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}

.sidebar-toggle:hover {
  background: var(--bg-tertiary);
}

.nav-items {
  padding: 80px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item:hover {
  background: var(--bg-tertiary);
}

.nav-item.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
}

.nav-number {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
  min-width: 24px;
}

.nav-item.active .nav-number {
  opacity: 1;
}

.nav-title {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}

/* 主内容区 */
.main {
  flex: 1;
  margin-left: 240px;
  padding: 40px 60px 120px;
  position: relative;
  z-index: 10;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
}

.sidebar.collapsed + .main {
  margin-left: 60px;
}

/* 底部导航 */
.footer {
  position: fixed;
  bottom: 0;
  left: 240px;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  padding: 16px 40px;
  transition: left 0.3s ease;
}

.sidebar.collapsed ~ .footer {
  left: 60px;
}

.progress-bar {
  height: 3px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  margin-bottom: 16px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-btn {
  padding: 10px 20px;
  border: 1px solid var(--border);
  background: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.nav-btn.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border: none;
}

.nav-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
}

.page-indicator {
  font-size: 14px;
  color: var(--text-muted);
  font-weight: 500;
}

/* 键盘提示 */
.keyboard-hint {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  z-index: 200;
  animation: fadeInOut 5s ease forwards;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
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

@media (max-width: 1024px) {
  .sidebar {
    width: 60px;
  }
  
  .sidebar .nav-title {
    display: none;
  }
  
  .main {
    margin-left: 60px;
    padding: 20px 30px 100px;
  }
  
  .footer {
    left: 60px;
    padding: 12px 20px;
  }
}
</style>
