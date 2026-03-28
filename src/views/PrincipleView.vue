<template>
  <div class="principle-view">
    <h1 class="page-title">AI智能体核心原理与工作闭环</h1>
    
    <div class="loop-section">
      <h2 class="section-title">核心工作流程</h2>
      <div class="loop-flow">
        <div class="loop-item" v-for="(item, index) in loopItems" :key="index">
          <div class="loop-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>

      </div>
    </div>
    
    <div class="modules-section">
      <h2 class="section-title">五大核心模块原理解析</h2>
      <div class="modules-grid">
        <div class="module-card" v-for="(module, index) in modules" :key="index">
          <div class="module-header">
            <span class="module-icon">{{ module.icon }}</span>
            <h3>{{ module.title }}</h3>
          </div>
          <p class="module-desc">
            <template v-if="module.hasTips">
              智能体的"大脑引擎"，通过<span class="tip-word" @mouseenter="showTooltip('CoT', $event)" @mouseleave="hideTooltip">思维链（CoT）</span>、<span class="tip-word" @mouseenter="showTooltip('ToT', $event)" @mouseleave="hideTooltip">树状思维（ToT）</span>等技术，将模糊的研发目标拆解为可执行的子任务，制定完整执行路径
            </template>
            <template v-else>{{ module.desc }}</template>
          </p>
          <div class="module-scenario">
            <strong>研发场景：</strong>{{ module.scenario }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tooltip -->
    <div v-if="activeTooltip" class="tooltip" :style="tooltipStyle">
      <div class="tooltip-content">
        <h4>{{ activeTooltip.title }}</h4>
        <p>{{ activeTooltip.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const loopItems = [
  { icon: '👁️', title: '感知', desc: '读取代码、文档、日志等上下文' },
  { icon: '🧠', title: '规划', desc: '拆解任务，制定执行路径' },
  { icon: '💾', title: '记忆', desc: '存储历史经验与任务进度' },
  { icon: '🛠️', title: '工具调用', desc: '对接IDE、Git、Docker等工具' },
  { icon: '⚡', title: '执行', desc: '按规划完成任务' },
  { icon: '🔄', title: '反思', desc: '校验结果，迭代优化' },
]

const activeTooltip = ref(null)
const tooltipPos = ref({ x: 0, y: 0 })

const tooltipStyle = computed(() => ({
  left: tooltipPos.value.x + 'px',
  top: tooltipPos.value.y + 'px'
}))

const showTooltip = (type, event) => {
  const tips = {
    CoT: { title: 'CoT (Chain of Thought)', content: '思维链技术，让模型逐步推理，展示思考过程，提升复杂问题解决能力' },
    ToT: { title: 'ToT (Tree of Thoughts)', content: '树状思维技术，探索多个推理路径，评估后选择最优方案，适合需要探索的复杂决策' }
  }
  activeTooltip.value = tips[type]
  tooltipPos.value = { x: event.clientX + 10, y: event.clientY - 40 }
}

const hideTooltip = () => {
  activeTooltip.value = null
}

const modules = [
  { 
    icon: '👁️', 
    title: '感知模块', 
    desc: '智能体的"感官系统"，负责读取代码仓库、接口文档、需求文档、系统日志、传感器数据等研发上下文，完成多模态信息的理解与结构化处理',
    scenario: '自动读取Git仓库代码结构，理解项目依赖关系'
  },
  { 
    icon: '🧠',
    title: '规划模块',
    hasTips: true,
    scenario: '将"优化系统性能"拆解为：分析瓶颈→定位问题→制定方案→实施优化→验证效果'
  },
  { 
    icon: '💾', 
    title: '记忆模块', 
    desc: '智能体的"知识库"，分为短期记忆（跟踪当前任务进度与思维链）、长期记忆（存储历史执行经验、代码规范、业务规则），解决长任务上下文丢失问题',
    scenario: '记住团队的代码规范，在后续代码审查中持续应用'
  },
  { 
    icon: '🛠️', 
    title: '工具调用模块', 
    desc: '智能体的"手脚"，标准化对接IDE、Git、Docker、Jenkins、数据库、测试框架、硬件外设等研发工具，突破大模型的能力边界',
    scenario: '自动调用Jenkins执行构建，调用SonarQube进行代码扫描'
  },
  { 
    icon: '🔄', 
    title: '执行与反思模块', 
    desc: '智能体的"行动与复盘系统"，按规划执行任务，同时对执行结果进行校验，发现问题自动回溯、调整方案、迭代优化，形成完整闭环',
    scenario: '代码审查发现漏洞后，自动回溯到相关代码位置，生成修复方案'
  },
]
</script>

<style scoped>
.principle-view {
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

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.loop-section {
  margin-bottom: 60px;
}

.loop-flow {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
  position: relative;
}

.loop-item {
  flex: 1;
  text-align: center;
  padding: 24px 16px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}

.loop-item:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.15);
}

.loop-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.loop-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary);
}

.loop-item p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.modules-section {
  margin-top: 60px;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
}

.module-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.module-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.module-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.module-icon {
  font-size: 32px;
}

.module-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
}

.module-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.tip-word {
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px dashed var(--primary);
  transition: all 0.2s;
}

.tip-word:hover {
  background: rgba(0, 102, 255, 0.1);
  border-bottom-style: solid;
}

.module-scenario {
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-primary);
}

.module-scenario strong {
  color: var(--secondary);
}

/* Tooltip */
.tooltip {
  position: fixed;
  z-index: 1000;
  pointer-events: none;
}

.tooltip-content {
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border);
  max-width: 280px;
}

.tooltip-content h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.tooltip-content p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .loop-flow {
    flex-wrap: wrap;
  }
  
  .loop-item {
    flex: 0 0 calc(33.33% - 11px);
  }
  
}
</style>
