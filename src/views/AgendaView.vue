<template>
  <div class="agenda-view">
    <h1 class="page-title">分享议程与核心收益</h1>
    
    <div class="intro-section">
      <p class="intro-text">
        讲听得懂、用得上、能复刻的AI智能体实践
      </p>
    </div>
    
    <div class="content-grid">
      <div class="agenda-section">
        <h2 class="section-title">📋 本次分享核心议程</h2>
        <div class="agenda-list">
          <div class="agenda-item" v-for="(item, index) in agenda" :key="index">
            <div class="agenda-number">{{ index + 1 }}</div>
            <div class="agenda-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="benefits-section">
        <h2 class="section-title">🎯 听完你将获得</h2>
        <div class="benefits-list">
          <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
            <div class="benefit-icon">✓</div>
            <p>{{ benefit }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const agenda = [
  { title: '认知篇', desc: 'AI智能体的本质与核心原理' },
  { title: '场景篇', desc: '研发高频场景案例' },
  { title: '实践篇', desc: 'OpenClaw/ClawTeam上手实战 + 提示词优化 + 提效省Token技巧' },
  { title: '拓展篇', desc: '端侧智能体ESP32开发实践' },
  { title: '展望篇', desc: '前沿技术趋势' },
]

const benefits = [
  '搞懂AI智能体的底层架构与工作机制',
  '上手流行开源智能体，轻松成为"养虾"人',
  '开箱即用的智能体提示词模板，提效降本的工程化方法',
  'AI智能体的应用思路，Demo编码',
]
</script>

<style scoped>
.agenda-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro-section {
  text-align: center;
  margin-bottom: 50px;
}

.intro-text {
  font-size: 20px;
  color: var(--text-secondary);
  font-style: italic;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.agenda-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.agenda-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.agenda-item:hover {
  border-color: var(--primary);
  transform: translateX(5px);
}

.agenda-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.agenda-content h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--primary);
}

.agenda-content p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.benefit-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(0, 102, 255, 0.05));
  border-radius: 10px;
  border-left: 4px solid var(--secondary);
}

.benefit-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.benefit-item p {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.5;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
