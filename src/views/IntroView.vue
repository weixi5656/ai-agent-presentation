<template>
  <div class="intro-view">
    <div class="hero">
      <div class="hero-badge">
        <span class="tag">🚀 企业技术分享</span>
      </div>
      <h1 class="hero-title">
        <span class="title-gradient">AI智能体实践</span>
      </h1>
      <p class="hero-subtitle">从概念到落地 · 探索智能体的无限可能</p>
      <div class="hero-meta">
        <div class="meta-item">
          <span class="meta-icon">📅</span>
          <span>2025年4月</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">⏱️</span>
          <span>约45分钟</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">🎯</span>
          <span>技术实践</span>
        </div>
      </div>
    </div>
    
    <div class="overview">
      <h2 class="section-title">分享大纲</h2>
      <div class="overview-grid">
        <div 
          v-for="(item, index) in sections" 
          :key="index"
          class="overview-card glass-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="$router.push(item.path)"
        >
          <div class="card-number">0{{ index + 1 }}</div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
          <div class="card-arrow">→</div>
        </div>
      </div>
    </div>
    
    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">6</div>
        <div class="stat-label">核心模块</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">3</div>
        <div class="stat-label">实践案例</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">∞</div>
        <div class="stat-label">可能性</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    path: '/concepts',
    title: 'AI智能体概念',
    desc: '什么是AI智能体？核心特征与应用场景解析'
  },
  {
    path: '/openclaw',
    title: 'OpenClaw原理',
    desc: '开源智能体框架的架构设计与工作机制'
  },
  {
    path: '/demo',
    title: '实践演示',
    desc: '现场演示多智能体协作与任务自动化'
  },
  {
    path: '/esp32',
    title: 'ESP32机器人',
    desc: '边缘计算与AI智能体的硬件实践'
  },
  {
    path: '/future',
    title: '未来展望',
    desc: 'AI智能体发展趋势与企业应用前景'
  },
]
</script>

<style scoped>
.intro-view {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 60px 0 80px;
}

.hero-badge {
  margin-bottom: 24px;
}

.hero-title {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 14px;
}

.meta-icon {
  font-size: 16px;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-primary);
}

.overview {
  margin-bottom: 80px;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.overview-card {
  padding: 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: cardEnter 0.6s ease forwards;
  opacity: 0;
}

.card-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 16px;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.card-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-arrow {
  position: absolute;
  bottom: 24px;
  right: 24px;
  font-size: 24px;
  color: var(--primary);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.overview-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

.stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 60px 0;
  border-top: 1px solid var(--border);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 64px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 42px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .hero-meta {
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .stats {
    flex-direction: column;
    gap: 40px;
  }
  
  .stat-number {
    font-size: 48px;
  }
}
</style>
