<template>
  <div class="landing-steps-view">
    <h1 class="page-title">团队落地 AI 智能体的实操步骤</h1>
    
    <div class="steps-flow">
      <div class="step-point" v-for="(step, i) in steps" :key="i">
        <div class="step-marker">
          <div class="marker-glow"></div>
          <span class="marker-num">{{ i + 1 }}</span>
        </div>
        
        <div class="step-card glass">
          <div class="step-header">
            <span class="step-icon">{{ step.icon }}</span>
            <h2>{{ step.title }}</h2>
          </div>
          <div class="step-body">
            <p>{{ step.desc }}</p>
            <div class="step-tags">
              <span class="tag" v-for="tag in step.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
        
        <!-- 连接线 -->
        <div class="step-line" v-if="i < steps.length - 1">
          <div class="line-fill"></div>
          <div class="line-arrow">▶</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    icon: '🔍',
    title: '选型适配',
    desc: '根据团队研发场景、技术栈选用适合的智能体。可以从 IDE 插件等轻量化工具入手测试。',
    tags: ['AutoGen', 'CrewAI', 'GitHub Copilot', 'Qoder']
  },
  {
    icon: '🧪',
    title: '小范围试点',
    desc: '选取 1-2 个小型项目或单个研发环节进行试点体验，收集数据反馈并评估提效效果。',
    tags: ['单测生成', '注释排查', '业务逻辑分析']
  },
  {
    icon: '⚙️',
    title: '定制与优化',
    desc: '结合团队编码规范和业务知识库对智能体进行训练，导入历史项目数据提升对齐度。',
    tags: ['知识库 RAG', '微调模型', '协作协议定制']
  },
  {
    icon: '🚀',
    title: '全面推广',
    desc: '组织内部培训并建立使用反馈机制，明确人机协同分工模型，形成全团队协作范式。',
    tags: ['技术宣讲', '经验手册', '人机对齐标准']
  }
]
</script>

<style scoped>
.landing-steps-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.steps-flow {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  padding: 0 40px;
}

.step-point {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-marker {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 20px;
  z-index: 10;
  margin-bottom: 24px;
  box-shadow: 0 8px 16px rgba(0, 102, 255, 0.3);
  position: relative;
}

.marker-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0.6;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
}

.step-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 24px;
  text-align: left;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 102, 255, 0.2);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.step-icon {
  font-size: 24px;
}

.step-header h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.step-body p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.step-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 11px;
  padding: 4px 10px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
}

.step-line {
  position: absolute;
  top: 24px;
  left: calc(50% + 24px);
  width: calc(100% - 48px);
  height: 2px;
  background: none;
  display: flex;
  align-items: center;
  z-index: 1;
}

.line-fill {
  flex: 1;
  height: 100%;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  opacity: 0.2;
}

.line-arrow {
  font-size: 12px;
  color: var(--primary);
  opacity: 0.4;
  margin-left: -6px;
}

@media (max-width: 900px) {
  .steps-flow {
    flex-direction: column;
    padding: 0;
    gap: 40px;
  }
  
  .step-line {
    display: none;
  }
}
</style>
