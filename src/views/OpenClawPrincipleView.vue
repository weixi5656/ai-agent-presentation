<template>
  <div class="openclaw-principle-view">
    <h1 class="page-title">OpenClaw 单智能体框架：架构与原理解析</h1>
    
    <div class="positioning-section">
      <div class="positioning-card">
        <h2>框架定位</h2>
        <p>轻量级开源单智能体框架，低代码即可实现智能体的快速搭建、工具对接与任务执行，完美适配研发场景定制化需求，是AI智能体原理的工程化落地实现</p>
      </div>
    </div>
    
    <div class="architecture-section">
      <h2 class="section-title">核心架构设计</h2>
      <div class="architecture-layers">
        <div class="layer" v-for="(layer, index) in layers" :key="index">
          <div class="layer-header">
            <span class="layer-icon">{{ layer.icon }}</span>
            <h3>{{ layer.title }}</h3>
          </div>
          <p class="layer-desc">{{ layer.desc }}</p>
          <div class="layer-features">
            <span class="feature-tag" v-for="feature in layer.features" :key="feature">{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mechanism-section">
      <h2 class="section-title">核心工作机制</h2>
      <div class="mechanism-card">
        <p class="mechanism-title">OTAC 智能体循环范式</p>
        <div class="mechanism-flow">
          <div class="flow-item" v-for="(item, index) in mechanism" :key="index">
            <span class="flow-number">{{ index + 1 }}</span>
            <span class="flow-text">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const layers = [
  {
    icon: '🌐',
    title: '接入层（Gateway）',
    desc: '中心辐射式架构的核心中枢，负责消息收发、协议转换、任务调度',
    features: ['飞书', '钉钉', 'CLI', 'Web']
  },
  {
    icon: '⚙️',
    title: '核心运行时（Agent Runtime）',
    desc: '对应规划+记忆模块，端到端运行智能体循环，负责上下文组装、模型调用、任务决策、状态持久化',
    features: ['上下文组装', '模型调用', '任务决策', '状态持久化']
  },
  {
    icon: '📦',
    title: '技能运行时（Skill Runtime）',
    desc: '对应工具调用+执行模块，提供沙箱化的工具执行环境，支持自定义技能开发',
    features: ['沙箱执行', '自定义技能', '工具对接', '安全隔离']
  },
  {
    icon: '🔌',
    title: '多模型适配器',
    desc: '支持OpenAI、通义千问、豆包、DeepSeek等国内外主流大模型的统一接口调用',
    features: ['OpenAI', '通义千问', '豆包', 'DeepSeek', 'ReAct', 'Plan-and-Execute']
  },
]

const mechanism = ['观察（Observe）', '思考（Think）', '行动（Act）', '检查（Check）']
</script>

<style scoped>
.openclaw-principle-view {
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

.positioning-section {
  margin-bottom: 50px;
}

.positioning-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.positioning-card h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.positioning-card p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-primary);
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.architecture-section {
  margin-bottom: 60px;
}

.architecture-layers {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.layer {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.layer:hover {
  border-color: var(--primary);
  transform: translateX(10px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.layer-icon {
  font-size: 28px;
}

.layer-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
}

.layer-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.layer-features {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.feature-tag {
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-secondary);
}

.mechanism-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  border: 2px solid var(--primary);
  text-align: center;
}

.mechanism-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 30px;
}

.mechanism-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border-radius: 12px;
  font-weight: 600;
}

.flow-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
