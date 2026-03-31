<template>
  <div class="vibe-coding-view">
    <h1 class="page-title">Vibe Coding：全链路智能编程</h1>

    <div class="definition-card glass">
      <div class="def-header">
        <span class="def-icon">⚡</span>
        <h2>核心定义</h2>
      </div>
      <p class="def-text">
        Vibe Coding 是基于 AI 智能体的新一代编程模式，可实现从<strong>需求 → 架构设计 → 编码 → 调试 → 测试 → 部署</strong>的全链路智能驱动，无需人工逐轮干预，即可完成从需求想法到可运行项目的完整闭环，实现对传统 Copilot 辅助编程模式的根本性变革。
      </p>
    </div>

    <div class="scenarios-grid">
      <div class="scenario-card" v-for="(scene, index) in scenarios" :key="index">
        <div class="scene-header">
          <span class="scene-icon">{{ scene.icon }}</span>
          <h3>{{ scene.title }}</h3>
        </div>
        <p class="scene-desc">{{ scene.desc }}</p>
        <ul class="scene-features">
          <li v-for="feat in scene.features" :key="feat">{{ feat }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const scenarios = [
  {
    icon: '🏗️',
    title: '智能架构推荐',
    desc: '基于业务需求，自主完成技术决策。',
    features: ['技术栈选型', '数据库表结构设计', '输出架构方案']
  },
  {
    icon: '💻',
    title: '全量代码生成',
    desc: '基于架构方案，自动完成项目落地。',
    features: ['项目初始化', '模块开发', '前后端全量代码生成']
  },
  {
    icon: '🧪',
    title: '智能调试与修复',
    desc: '自动识别漏洞并自主定位修复。',
    features: ['代码漏洞识别', '性能瓶颈定位', '自动化用例生成']
  },
  {
    icon: '🚀',
    title: '自动化部署上线',
    desc: '实现从代码到服务的一站式闭环。',
    features: ['项目打包', '容器化部署', '线上监控配置']
  }
]
</script>

<style scoped>
.vibe-coding-view {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.definition-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  margin-bottom: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
}

.def-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.def-icon {
  font-size: 32px;
  background: rgba(0, 102, 255, 0.1);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.def-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
}

.def-text {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-primary);
}

.def-text strong {
  color: var(--primary);
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.scenario-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.scenario-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.1);
}

.scene-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.scene-icon {
  font-size: 24px;
}

.scene-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.scene-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.scene-features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scene-features li {
  font-size: 13px;
  color: var(--text-primary);
  padding-left: 20px;
  position: relative;
}

.scene-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: bold;
}

@media (max-width: 768px) {
  .def-text {
    font-size: 16px;
  }
}
</style>
