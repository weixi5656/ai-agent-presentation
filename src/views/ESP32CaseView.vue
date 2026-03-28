<template>
  <div class="esp32-case-view">
    <h1 class="page-title">进阶拓展：ESP32 端侧智能体开发实践</h1>
    
    <div class="value-section">
      <div class="value-card">
        <h2>案例核心价值</h2>
        <p>突破纯软件智能体局限，实现「端侧感知-云端智能体规划-端侧执行」的完整闭环，拓展AI智能体在嵌入式、物联网、端侧AI场景的落地思路</p>
      </div>
    </div>
    
    <div class="content-grid">
      <div class="demo-section">
        <h2 class="section-title">成品效果演示</h2>
        <div class="features-list">
          <div class="feature-item" v-for="(feature, index) in features" :key="index">
            <span class="feature-check">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>
      
      <div class="tech-section">
        <h2 class="section-title">核心开发流程与技术实现</h2>
        <div class="tech-cards">
          <div class="tech-card" v-for="(tech, index) in techs" :key="index">
            <h3>{{ tech.title }}</h3>
            <ul>
              <li v-for="item in tech.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  '语音唤醒',
  '自然语言交互',
  '端侧数据采集',
  '云端智能体任务规划',
  '执行结果反馈'
]

const techs = [
  {
    title: '硬件方案',
    items: ['ESP32核心板', '语音采集模块', '陀螺仪', '触控模块', '通信模块']
  },
  {
    title: '核心技术点',
    items: ['低功耗适配', '串口通信', 'MQTT协议对接', '智能体API接入', '离线语音识别优化']
  },
  {
    title: '开发流程',
    items: ['环境搭建', '端侧基础功能开发', '云端OpenClaw对接', '端云协同逻辑开发', '联调优化']
  }
]
</script>

<style scoped>
.esp32-case-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value-section {
  margin-bottom: 50px;
}

.value-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.value-card h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.value-card p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-primary);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border-radius: 10px;
  border: 1px solid var(--border);
}

.feature-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.tech-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--border);
}

.tech-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--primary);
}

.tech-card ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-card li {
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-secondary);
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
