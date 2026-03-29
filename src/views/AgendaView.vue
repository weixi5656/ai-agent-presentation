<template>
  <div class="agenda-view">
    <h1 class="page-title animate-on-scroll delay-100">今天我们一起聊什么？</h1>

    <div class="timeline-container">
      <div class="timeline-path animate-on-scroll delay-200"></div>
      
      <div 
        class="timeline-item animate-on-scroll" 
        v-for="(item, index) in agenda" 
        :key="'agenda-'+index" 
        :class="index % 2 === 0 ? 'item-left' : 'item-right'"
        :style="{ animationDelay: `${300 + index * 100}ms` }"
      >
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
  { title: '认知与原理篇', desc: 'AI Agent 核心概念、执行闭环与组成模块解析' },
  { title: '研发场景篇', desc: '编码、测试、运维、文档与协作等典型落地案例' },
  { title: 'OpenClaw 架构篇', desc: 'Channel、Gateway、Node、Session、Skills、Memory 的协同关系' },
  { title: '本地模型部署篇', desc: 'Ollama 快速上手：私有化部署、模型选型与 OpenClaw 无缝对接' },
  { title: 'OpenClaw 实操篇', desc: '3 步跑通第一个研发智能体，完成从安装到执行的闭环' },
  { title: 'ClawTeam 协作篇', desc: '多智能体如何分工协作，把单助手升级为 AI 团队' },
  { title: '提示词工程篇', desc: '常用提示词框架、Agent 模板与省 Token 方法' },
  { title: '端侧实践篇', desc: 'ESP32 端侧智能体的实现思路与落地价值' },
  { title: '趋势展望篇', desc: 'AI 智能体后续演进方向与实践判断' },
]

const benefits = [
  { icon: '🧠', text: '建立从"对话模型"到"可执行智能体"的认知升级，理解 Agent 执行闭环' },
  { icon: '🛠️', text: '看懂代码、测试、运维、文档等场景的 AI 落地思路，找到自己团队的切入点' },
  { icon: '📌', text: '掌握 OpenClaw 六大核心组件（Channel / Gateway / Node / Session / Skills / Memory）的协同关系' },
  { icon: '🔒', text: '掌握 Ollama 本地部署方法，3步跑通私有化模型，代码数据不出内网，零 Token 成本调试' },
  { icon: '⚡', text: '带走可直接运行的 3 步实操路径，当天即可跑通第一个研发智能体' },
  { icon: '👥', text: '看懂 ClawTeam 多智能体如何分工协作，把单助手升级为 AI 研发团队' },
  { icon: '📦', text: '带走可直接复用的提示词框架（8 种）、省 Token 方法与智能体提示词模板' },
  { icon: '🔌', text: '了解"端侧感知 - 云端规划 - 端侧执行"闭环思路，拓展 AI 落地边界' },
  { icon: '🚀', text: '获得一套可持续演进的 AI 智能体技术判断框架，做有方向感的技术决策' },
]
</script>

<style scoped>
.agenda-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
}

.timeline-path {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 170, 0.3) 50%, rgba(0, 102, 255, 0.1) 100%);
  transform: translateX(-50%);
  border-radius: 4px;
}

.timeline-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.item-left {
  justify-content: flex-end;
  padding-right: 50%;
}

.item-right {
  justify-content: flex-start;
  padding-left: 50%;
}

.timeline-node {
  position: absolute;
  left: 50%;
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
  width: 95%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 16px 20px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.item-left .timeline-card {
  margin-right: 40px;
  transform-origin: right center;
}

.item-right .timeline-card {
  margin-left: 40px;
  transform-origin: left center;
}

.timeline-item:hover .timeline-card {
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.3);
  transform: translateY(-2px);
}

.item-left .timeline-card::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  border-width: 10px 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent transparent white;
  filter: drop-shadow(2px 0 1px rgba(0, 102, 255, 0.05));
}

.item-right .timeline-card::after {
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
  }

  .timeline-path {
    left: 24px;
  }
  
  .item-left, .item-right {
    justify-content: flex-start;
    padding: 0 0 0 60px;
  }
  
  .timeline-node {
    left: 24px;
  }
  
  .timeline-card {
    width: 100%;
  }
  
  .item-left .timeline-card,
  .item-right .timeline-card {
    margin: 0;
  }
  
  .item-left .timeline-card::after,
  .item-right .timeline-card::after {
    left: -10px;
    right: auto;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
}
</style>
