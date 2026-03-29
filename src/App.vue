<template>
  <div class="app">
    <!-- 滚动进度条 -->
    <div class="scroll-progress"></div>
    
    <!-- 极光背景效果 -->
    <div class="aurora-container">
      <div class="aurora-orb aurora-orb-1 parallax-layer parallax-layer-1"></div>
      <div class="aurora-orb aurora-orb-2 parallax-layer parallax-layer-2"></div>
      <div class="aurora-orb aurora-orb-3 parallax-layer parallax-layer-3"></div>
      <div class="aurora-overlay"></div>
    </div>
    
    <!-- 左侧页标导航 -->
    <nav class="left-nav">
      <div class="nav-brand">
        <span class="logo">🤖</span>
        <span class="brand-text">AI智能体案例分享</span>
      </div>
      
      <div class="nav-progress">
        <span class="progress-text">{{ currentFloor + 1 }} / {{ floors.length }}</span>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ height: progress + '%' }"></div>
        </div>
      </div>
      
      <div class="nav-dots">
        <div 
          v-for="(floor, index) in floors" 
          :key="floor.id"
          class="nav-dot"
          :class="{ active: currentFloor === index }"
          @click="scrollToFloor(index)"
          :title="floor.title"
        >
          <div class="dot-label">{{ floor.title }}</div>
        </div>
      </div>
    </nav>
    
    <!-- 主内容 - 苹果官网风格滚动 -->
    <main class="main" ref="mainContent">
      <div class="floors-container">
        <div 
          v-for="(floor, index) in floors" 
          :key="floor.id"
          :id="floor.id"
          class="floor"
          :class="{ 
            active: currentFloor === index,
            'prev-floor': currentFloor > index,
            'next-floor': currentFloor < index,
            'animate-on-scroll': true
          }"
          :style="{ 
            height: floorHeight + 'px',
            '--floor-index': index
          }"
          ref="floorElements"
        >
          <div class="floor-content">
            <component :is="floor.component" />
          </div>
        </div>
      </div>
      
      <!-- 滚动提示 -->
      <div class="scroll-indicator scroll-hint" v-if="currentFloor < floors.length - 1">
        <div class="arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>向下滚动继续</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import ScrollController from './utils/scrollController.js'
import PerformanceOptimizer from './utils/performanceOptimizer.js'
import './utils/animations.css'
import './utils/enhancedAnimations.css'

// 导入所有页面组件
import IntroView from './views/IntroView.vue'
import AgendaView from './views/AgendaView.vue'
import ConceptView from './views/ConceptView.vue'
import DevCaseView from './views/DevCaseView.vue'
import OpenClawArchitectureView from './views/OpenClawArchitectureView.vue'
import OllamaView from './views/OllamaView.vue'
import OpenClawPracticeView from './views/OpenClawPracticeView.vue'
import ClawTeamView from './views/ClawTeamView.vue'
import PracticeView from './views/PracticeView.vue'
import ESP32CaseView from './views/ESP32CaseView.vue'
import TrendView from './views/TrendView.vue'

const mainContent = ref(null)
const currentFloor = ref(0)
const floorElements = ref([])
let scrollController = null
let performanceOptimizer = null

// 楼层定义
const floors = [
  { id: 'intro', title: '封面', component: IntroView },
  { id: 'agenda', title: '议程', component: AgendaView },
  { id: 'concept', title: '认知与原理', component: ConceptView },
  { id: 'dev-case', title: '研发场景', component: DevCaseView },
  { id: 'openclaw-architecture', title: 'OpenClaw架构', component: OpenClawArchitectureView },
  { id: 'ollama', title: 'Ollama本地部署', component: OllamaView },
  { id: 'openclaw-practice', title: 'OpenClaw实操', component: OpenClawPracticeView },
  { id: 'clawteam', title: 'ClawTeam协作', component: ClawTeamView },
  { id: 'practice', title: '提示词工程', component: PracticeView },
  { id: 'esp32-case', title: '端侧实践', component: ESP32CaseView },
  { id: 'trend', title: '趋势展望', component: TrendView },
]

// 楼层高度 - 视口高度
const floorHeight = computed(() => {
  return window.innerHeight
})

const progress = computed(() => {
  return ((currentFloor.value + 1) / floors.length) * 100
})

// 滚动到指定楼层
const scrollToFloor = (index) => {
  if (scrollController && index >= 0 && index < floors.length) {
    scrollController.scrollToSection(index)
  }
}

// 处理section变化
const onSectionChange = (event) => {
  const { sectionIndex } = event.detail
  currentFloor.value = sectionIndex
  
  // 触发楼层动画
  nextTick(() => {
    const floorElement = floorElements.value[sectionIndex]
    if (floorElement) {
      floorElement.classList.add('animated')
      
      // 延迟触发内部元素动画
      setTimeout(() => {
        const animatedElements = floorElement.querySelectorAll('.animate-on-scroll')
        animatedElements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animated')
          }, i * 100)
        })
      }, 300)
    }
  })
}

// 处理滚动动画完成
const onAnimationComplete = () => {
  // 可以在这里添加额外的动画完成逻辑
  console.log('滚动动画完成')
}

// 初始化性能优化器
const initPerformanceOptimizer = () => {
  try {
    performanceOptimizer = new PerformanceOptimizer()
    console.log('性能优化器初始化成功')
  } catch (error) {
    console.warn('性能优化器初始化失败:', error)
  }
}

// 初始化滚动控制器
const initScrollController = () => {
  scrollController = new ScrollController({
    scrollThreshold: 30,
    scrollCooldown: 800,
    snapDuration: 600,
    parallaxFactor: 0.5
  })
  
  scrollController.setTotalSections(floors.length)
  
  // 监听section变化
  window.addEventListener('sectionchange', onSectionChange)
  
  // 监听动画完成
  window.addEventListener('scrollanimationcomplete', onAnimationComplete)
  
  // 注册视差元素
  nextTick(() => {
    const parallaxOrbs = document.querySelectorAll('.aurora-orb')
    parallaxOrbs.forEach((orb, index) => {
      scrollController.registerParallaxElement(orb, {
        factor: 0.2 + index * 0.1,
        direction: 'vertical',
        offset: index * 50
      })
    })
    
    // 注册动画元素
    floorElements.value.forEach((floor, index) => {
      if (floor) {
        scrollController.registerAnimatedElement(floor, {
          animation: 'fadeInUp',
          threshold: 0.3,
          delay: index * 100,
          duration: 800,
          once: false
        })
        
        // 注册楼层内部动画元素
        const innerElements = floor.querySelectorAll('.timeline-card, .glass-card, .card-enter')
        innerElements.forEach((el, elIndex) => {
          scrollController.registerAnimatedElement(el, {
            animation: 'fadeInUp',
            threshold: 0.5,
            delay: elIndex * 150,
            duration: 600,
            once: true
          })
        })
      }
    })
  })
}

// 初始化
onMounted(() => {
  // 设置初始滚动位置
  window.scrollTo(0, 0)
  
  // 初始化滚动控制器
  initScrollController()
  
  // 初始化性能优化器
  initPerformanceOptimizer()
  
  // 设置初始动画
  nextTick(() => {
    // 添加初始动画
    setTimeout(() => {
      const firstFloor = document.getElementById('intro')
      if (firstFloor) {
        firstFloor.classList.add('animated', 'revealed')
      }
    }, 500)
  })
})

onUnmounted(() => {
  if (scrollController) {
    scrollController.destroy()
  }
  
  if (performanceOptimizer) {
    performanceOptimizer.destroy()
  }
  
  window.removeEventListener('sectionchange', onSectionChange)
  window.removeEventListener('scrollanimationcomplete', onAnimationComplete)
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* 滚动进度条 */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform-origin: 0 0;
  transform: scaleX(var(--scroll-progress, 0));
  z-index: 1000;
  transition: transform 0.1s linear;
}

/* 左侧导航 - 更窄的现代设计 */
.left-nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 160px; /* 进一步缩窄到160px */
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-right: 1px solid rgba(0, 102, 255, 0.08);
  box-shadow: 2px 0 16px rgba(0, 102, 255, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  padding: 0 4px;
  text-align: center;
}

.logo {
  font-size: 24px;
  animation: float 3s ease-in-out infinite;
  margin-bottom: 4px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

.brand-text {
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.nav-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.progress-text {
  font-size: 11px;
  font-weight: 600;
  color: var(--primary);
  opacity: 0.8;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.progress-bar {
  width: 2px;
  height: 120px;
  background: rgba(0, 102, 255, 0.08);
  border-radius: 1px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, var(--secondary) 0%, var(--primary) 100%);
  border-radius: 1px;
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-dots {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

.nav-dots::-webkit-scrollbar {
  width: 2px;
}

.nav-dots::-webkit-scrollbar-track {
  background: rgba(0, 102, 255, 0.04);
  border-radius: 1px;
}

.nav-dots::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 1px;
  opacity: 0.2;
}

.nav-dot {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 102, 255, 0.08);
  min-height: 36px;
}

.nav-dot:hover {
  background: rgba(0, 102, 255, 0.04);
  transform: translateX(3px);
  border-color: rgba(0, 102, 255, 0.15);
}

.nav-dot:hover .dot-label {
  color: var(--primary);
}

.nav-dot.active {
  background: rgba(0, 102, 255, 0.08);
  border-color: var(--primary);
  transform: translateX(4px);
}

.nav-dot.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 50%;
  background: var(--primary);
  border-radius: 0 1px 1px 0;
}

.nav-dot.active .dot-label {
  color: var(--primary);
  font-weight: 600;
}

.nav-dot::after {
  content: '';
  position: absolute;
  left: 12px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--border);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-dot.active::after {
  background: var(--primary);
  box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.15);
  transform: scale(1.15);
}

.nav-dot:hover::after {
  background: var(--primary-light);
  transform: scale(1.08);
}

.dot-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}

/* 主内容 - 苹果官网风格 */
.main {
  margin-left: 160px; /* 对应左侧导航宽度 */
  position: relative;
  z-index: 10;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.main::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.floors-container {
  display: flex;
  flex-direction: column;
}

.floor {
  height: 100vh;
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.floor.animated {
  opacity: 1;
  transform: translateY(0);
}

/* 楼层状态样式 */
.floor.prev-floor {
  opacity: 0.3;
  transform: translateY(-30px) scale(0.95);
}

.floor.next-floor {
  opacity: 0.3;
  transform: translateY(30px) scale(0.95);
}

.floor.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  z-index: 2;
}

.floor-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}

/* 滚动提示 */
.scroll-indicator {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  opacity: 0;
  animation: fadeInDown 1s ease-out 1.5s forwards;
  pointer-events: none;
}

.scroll-indicator .arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 500;
}

.scroll-indicator svg {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 极光背景 */
.aurora-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.aurora-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: float-orb 25s ease-in-out infinite;
}

.aurora-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  top: 20%;
  left: 30%;
  animation-delay: 0s;
}

.aurora-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
  top: 50%;
  right: 20%;
  animation-delay: 5s;
}

.aurora-orb-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
  bottom: 20%;
  left: 20%;
  animation-delay: 10s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -20px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 30px) scale(0.9);
  }
  75% {
    transform: translate(20px, 20px) scale(1.05);
  }
}

.aurora-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(255, 255, 255, 0.8) 100%);
  pointer-events: none;
}

/* 视差层 */
.parallax-layer {
  will-change: transform;
}

.parallax-layer-1 {
  transform: translateZ(-2px) scale(3);
}

.parallax-layer-2 {
  transform: translateZ(-1px) scale(2);
}

.parallax-layer-3 {
  transform: translateZ(0) scale(1);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .left-nav {
    width: 140px;
    padding: 20px 10px;
  }
  
  .main {
    margin-left: 140px;
  }
  
  .floor {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .left-nav {
    width: 50px;
    padding: 16px 6px;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .left-nav:hover,
  .left-nav:active {
    transform: translateX(0);
  }
  
  .main {
    margin-left: 0;
  }
  
  .nav-brand .brand-text {
    display: none;
  }
  
  .nav-dot .dot-label {
    display: none;
  }
  
  .nav-dot {
    padding: 10px;
    justify-content: center;
    min-height: 32px;
  }
  
  .nav-dot::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .nav-dot:hover::after,
  .nav-dot.active::after {
    transform: translateX(-50%) scale(1.15);
  }
  
  .nav-dot:hover,
  .nav-dot.active {
    transform: translateY(-3px);
  }
  
  .floor {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .floor {
    padding: 15px;
  }
  
  .progress-bar {
    height: 120px;
  }
}
</style>