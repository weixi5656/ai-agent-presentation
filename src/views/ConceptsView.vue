<template>
  <div class="concepts-view">
    <h1 class="page-title">AI智能体概念</h1>
    
    <div class="concept-section">
      <div class="concept-header">
        <span class="concept-icon">🤖</span>
        <h2>什么是AI智能体？</h2>
      </div>
      <div class="concept-content">
        <p class="concept-text">
          AI智能体（AI Agent）是一种能够<strong>感知环境、自主决策、执行动作</strong>的人工智能系统。
          与传统AI不同，智能体具有<strong>目标导向性</strong>和<strong>持续学习能力</strong>。
        </p>
        <div class="feature-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="concept-section">
      <div class="concept-header">
        <span class="concept-icon">⚡</span>
        <h2>智能体 vs 传统AI</h2>
      </div>
      <div class="comparison-table">
        <div class="table-header">
          <div class="table-cell">维度</div>
          <div class="table-cell">传统AI</div>
          <div class="table-cell highlight">AI智能体</div>
        </div>
        <div class="table-row" v-for="(row, index) in comparisons" :key="index">
          <div class="table-cell label">{{ row.dimension }}</div>
          <div class="table-cell">{{ row.traditional }}</div>
          <div class="table-cell highlight">{{ row.agent }}</div>
        </div>
      </div>
    </div>
    
    <div class="concept-section">
      <div class="concept-header">
        <span class="concept-icon">🏢</span>
        <h2>企业应用场景</h2>
      </div>
      <div class="scenario-grid">
        <div class="scenario-card glass-card" v-for="(scenario, index) in scenarios" :key="index">
          <div class="scenario-visual">
            <div class="scenario-animation" :class="`animation-${index + 1}`">
              <span v-for="n in 3" :key="n" class="dot"></span>
            </div>
          </div>
          <h3>{{ scenario.title }}</h3>
          <p>{{ scenario.desc }}</p>
          <div class="scenario-tags">
            <span class="tag" v-for="tag in scenario.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="concept-section">
      <div class="concept-header">
        <span class="concept-icon">🔧</span>
        <h2>智能体架构组件</h2>
      </div>
      <div class="architecture-diagram">
        <div class="arch-layer" v-for="(layer, index) in architecture" :key="index">
          <div class="arch-label">{{ layer.name }}</div>
          <div class="arch-components">
            <div class="arch-component" v-for="comp in layer.components" :key="comp">
              {{ comp }}
            </div>
          </div>
        </div>
        <div class="arch-arrows">
          <span>↑ 感知</span>
          <span>↓ 执行</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { icon: '👁️', title: '感知能力', desc: '通过传感器/API获取环境信息' },
  { icon: '🧠', title: '推理决策', desc: '基于LLM进行逻辑推理和规划' },
  { icon: '🎯', title: '目标导向', desc: '围绕明确目标自主执行任务' },
  { icon: '🔄', title: '持续学习', desc: '从交互中积累经验优化行为' },
  { icon: '🛠️', title: '工具使用', desc: '调用外部工具和API完成复杂任务' },
  { icon: '👥', title: '协作能力', desc: '多智能体协同完成复杂目标' },
]

const comparisons = [
  { dimension: '交互方式', traditional: '单次问答', agent: '持续对话+自主执行' },
  { dimension: '任务处理', traditional: '需要明确指令', agent: '可分解复杂目标' },
  { dimension: '记忆能力', traditional: '无状态', agent: '长期记忆+上下文' },
  { dimension: '工具使用', traditional: '有限或没有', agent: '主动调用多种工具' },
  { dimension: '适应性', traditional: '固定行为', agent: '动态调整策略' },
  { dimension: '自主性', traditional: '被动响应', agent: '主动规划和执行' },
]

const scenarios = [
  { 
    title: '智能客服', 
    desc: '7×24小时自动响应，理解复杂意图，主动解决问题',
    tags: ['NLP', '知识库', '情感分析']
  },
  { 
    title: '代码助手', 
    desc: '理解需求、编写代码、调试测试、文档生成',
    tags: ['代码生成', '自动化', 'DevOps']
  },
  { 
    title: '数据分析', 
    desc: '自动收集数据、清洗处理、生成洞察、可视化报告',
    tags: ['BI', '自动化', '决策支持']
  },
  { 
    title: '流程自动化', 
    desc: '跨系统操作、审批流转、异常处理、进度追踪',
    tags: ['RPA', '工作流', '集成']
  },
]

const architecture = [
  { name: '交互层', components: ['用户界面', 'API接口', '消息队列'] },
  { name: '认知层', components: ['LLM引擎', '推理规划', '记忆管理'] },
  { name: '工具层', components: ['代码执行', 'API调用', '文件操作'] },
  { name: '数据层', components: ['知识库', '日志存储', '配置管理'] },
]
</script>

<style scoped>
.concepts-view {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.concept-section {
  margin-bottom: 80px;
}

.concept-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.concept-icon {
  font-size: 36px;
}

.concept-header h2 {
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
}

.concept-text {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.concept-text strong {
  color: var(--primary);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: white;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.feature-card p {
  font-size: 14px;
  color: var(--text-secondary);
}

.comparison-table {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr;
}

.table-header {
  background: var(--bg-tertiary);
  font-weight: 600;
  color: var(--text-primary);
}

.table-row {
  border-top: 1px solid var(--border);
}

.table-cell {
  padding: 20px 24px;
  font-size: 15px;
}

.table-cell.highlight {
  background: rgba(0, 102, 255, 0.05);
  color: var(--primary);
  font-weight: 500;
}

.table-cell.label {
  font-weight: 500;
  color: var(--text-primary);
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.scenario-card {
  padding: 32px;
}

.scenario-visual {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.scenario-animation {
  display: flex;
  gap: 12px;
}

.scenario-animation .dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  animation: pulse 1.5s ease infinite;
}

.scenario-animation .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.scenario-animation .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.scenario-card h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
}

.scenario-card p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.scenario-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.architecture-diagram {
  background: white;
  border-radius: var(--radius-lg);
  padding: 40px;
  border: 1px solid var(--border);
  position: relative;
}

.arch-layer {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: var(--bg-tertiary);
  border-radius: var(--radius);
  margin-bottom: 16px;
}

.arch-layer:last-child {
  margin-bottom: 0;
}

.arch-label {
  width: 100px;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
}

.arch-components {
  display: flex;
  gap: 12px;
  flex: 1;
}

.arch-component {
  flex: 1;
  padding: 16px 20px;
  background: white;
  border-radius: var(--radius-sm);
  text-align: center;
  font-size: 14px;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.arch-component:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.arch-arrows {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 80px;
  font-size: 12px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-table {
    font-size: 13px;
  }
  
  .table-cell {
    padding: 12px;
  }
  
  .scenario-grid {
    grid-template-columns: 1fr;
  }
  
  .arch-layer {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .arch-components {
    flex-wrap: wrap;
    width: 100%;
  }
  
  .arch-component {
    flex: 1 1 calc(50% - 6px);
  }
  
  .arch-arrows {
    display: none;
  }
}
</style>
