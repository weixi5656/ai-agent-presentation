<template>
  <div class="trend-view">
    <h1 class="page-title">AI智能体前沿趋势与技术展望</h1>
    
    <div class="timeline">
      <div class="trend-item" v-for="(trend, index) in trends" :key="index">
        <div class="trend-marker">
          <div class="trend-dot"></div>
          <div class="trend-line" v-if="index < trends.length - 1"></div>
        </div>
        <div class="trend-content">
          <div class="trend-number">趋势 {{ index + 1 }}</div>
          <h2>{{ trend.title }}</h2>
          <p>{{ trend.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const trends = [
  {
    title: '研发全流程端到端智能体',
    desc: '从需求提出到线上部署的全链路自动化落地，替代传统碎片化研发工具'
  },
  {
    title: '端云协同智能体规模化落地',
    desc: '端侧负责感知与执行，云端负责复杂推理与规划，兼顾性能、安全与成本'
  },
  {
    title: '多智能体协作模式持续进化',
    desc: '模拟真实研发团队的协作模式，实现更复杂的项目级任务自主落地'
  },
  {
    title: '开源智能体框架生态持续完善',
    desc: '轻量化、可定制、易部署的开源方案成为主流，研发门槛持续降低'
  },
  {
    title: '智能体可解释性与安全性持续升级',
    desc: '满足企业级研发场景的合规与管控要求，实现可追溯、可管控、可复核'
  }
]
</script>

<style scoped>
.trend-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.trend-item {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.trend-marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trend-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: 4px solid white;
  box-shadow: 0 0 0 4px var(--primary);
  z-index: 1;
}

.trend-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  margin-top: 8px;
  min-height: 60px;
}

.trend-content {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.trend-content:hover {
  border-color: var(--primary);
  transform: translateX(10px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.trend-number {
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
}

.trend-content h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.trend-content p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}
</style>
