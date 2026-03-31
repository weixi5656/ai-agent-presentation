<template>
  <div class="agenda-view">
    <h1 class="page-title">分享议程与收益</h1>

    <div class="timeline-container">
      <div class="timeline-path"></div>
      
      <div class="timeline-item" v-for="(item, index) in agenda" :key="'agenda-'+index" :class="index % 2 === 0 ? 'item-left' : 'item-right'">
        <div class="timeline-node">
          <span class="node-number">{{ index + 1 }}</span>
        </div>
        
        <div class="timeline-card agenda-card">
          <div class="card-header">
            <h3>{{ item.title }}</h3>
          </div>
          <p class="card-desc">{{ item.desc }}</p>
          
          <div class="benefit-tag" v-if="benefits[index]">
            <span class="benefit-icon">{{ benefits[index].icon }}</span>
            <span class="benefit-text">{{ benefits[index].text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const agenda = [
  { title: '1. AI智能体核心概念', desc: '厘清本质，构建完整认知体系：涵盖与传统智能体核心差异及六大核心能力。' },
  { title: '2. OpenClaw开源智能体深度解析', desc: '从环境搭建到运行原理全维度拆解：包含 Ollama 本地部署、分层架构及数据流转。' },
  { title: '3. 智能体提示词工程实战', desc: '提效降本的核心技巧与标准化模版：深度解析 8 类常用模版与 Token 优化实用技巧。' },
  { title: '4. AI智能体主流落地应用场景', desc: '从代码开发到物理世界的全场景覆盖：聚焦 Vibe Coding、多智能体协同及具身智能。' },
  { title: '5. 核心总结与行业未来展望', desc: '总结落地经验，展望行业新范式：GaaS、编码平权及 Harness Engineering 岗位崛起。' },
]

const benefits = [
  { icon: '🧠', text: '建立从 AIGC 到 Agent 的核心认知闭环' },
  { icon: '🛠️', text: '掌握消费级显卡部署私有化智能体的实战方案' },
  { icon: '📝', text: '获得 8 套可直接复用的标准化智能体提示词模版' },
  { icon: '🚀', text: '理解 Vibe Coding 与多智能体协作如何重塑交付效率' },
  { icon: '🌐', text: '洞察 AI 智能体引领的行业变革与职业发展新机遇' },
]
</script>

<style scoped>
.agenda-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

.page-title {
  font-size: 34px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.timeline-container {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
}

.timeline-path {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  width: 4px;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 170, 0.3) 50%, rgba(0, 102, 255, 0.1) 100%);
  border-radius: 4px;
}

.timeline-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: flex-start;
  padding: 0 0 0 80px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-node {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: white;
  border: 3px solid var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-node {
  transform: translate(-50%, -50%) scale(1.15);
  background: var(--primary);
  border-color: rgba(255, 255, 255, 0.8);
}

.timeline-item:hover .node-number {
  color: white;
}

.node-number {
  font-weight: 800;
  font-size: 15px;
  color: var(--primary);
  transition: color 0.3s ease;
}

.timeline-card {
  width: 800px;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 18px 24px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0;
}

.timeline-item:hover .timeline-card {
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.3);
  transform: translateY(-2px);
}

.timeline-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  border-width: 10px 10px 10px 0;
  border-style: solid;
  border-color: transparent white transparent transparent;
  filter: drop-shadow(-2px 0 1px rgba(0, 102, 255, 0.05));
}

.card-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
}

.card-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 12px;
}

.benefit-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(0, 102, 255, 0.05));
  border-radius: 6px;
  border-left: 3px solid var(--secondary);
}

.benefit-icon {
  font-size: 14px;
}

.benefit-text {
  font-size: 12px;
  color: var(--text-primary);
  font-weight: 600;
}

@media (max-width: 968px) {
  .timeline-container {
    padding-bottom: 20px;
    width: 100%;
  }

  .timeline-path {
    left: 20px;
  }
  
  .timeline-item {
    padding: 0 0 0 50px;
  }
  
  .timeline-node {
    left: 20px;
  }
  
  .timeline-card {
    width: 100%;
  }
}
</style>
