<template>
  <div class="intro-view">
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-gradient">AI智能体实践分享</span>
        </h1>
        <p class="hero-subtitle">OpenClaw & ClawTeam 从入门到实战</p>
        <p class="hero-desc">养一只属于你的AI龙虾 · 让智能体为你工作</p>
        <div class="hero-tags">
          <span class="tag">🦞 动手实操</span>
          <span class="tag">💻 代码可复刻</span>
          <span class="tag">🚀 即学即用</span>
        </div>
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
  margin-bottom: 40px;
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
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  font-weight: 500;
}

.hero-tags {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.tag {
  padding: 10px 20px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 24px;
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 500;
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
