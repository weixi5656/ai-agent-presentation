<template>
  <div class="intro-view">
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-gradient">AI 智能体技术实践</span>
        </h1>
        <p class="hero-subtitle">从原理到应用场景落地</p>
        <p class="hero-desc">解锁研发全流程提效新范式 · 探索技术落地无限可能</p>
        <div class="hero-cta">
          <button class="cta-btn" @click="$router.push('/agenda')">
            开始分享 →
          </button>
        </div>
      </div>
      <div class="hero-hint">
        <span>按空格键或方向键翻页</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.intro-view {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  text-align: center;
  max-width: 900px;
  padding: 40px;
}

.hero-content {
  margin-bottom: 60px;
}

.hero-title {
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -2px;
  line-height: 1.1;
}

.title-gradient {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 36px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.hero-cta {
  margin-top: 40px;
}

.cta-btn {
  padding: 18px 48px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 102, 255, 0.4);
}

.hero-hint {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 42px;
  }
  
  .hero-subtitle {
    font-size: 24px;
  }
  
  .hero-desc {
    font-size: 16px;
  }
}
</style>
