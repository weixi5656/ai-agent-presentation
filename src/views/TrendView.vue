<template>
  <div class="trend-view">
    <h1 class="page-title">2026 AI智能体的未来展望</h1>
    
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
          <a :href="trend.link" target="_blank" class="trend-link">📎 前沿报告</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const trends = [
  {
    title: 'Harness engineering 驾驭工程',
    desc: '从底层的代码实现转向高层的逻辑编排与驾驭。研发人员的核心职责从“写代码”进化为“定义北极星目标并监管执行路径”。',
    link: 'https://finance.sina.com.cn/wm/2026-03-29/doc-inhssscr0165548.shtml'
  },
  {
    title: 'AaaS 智能体即服务 (Agent-as-a-Service)',
    desc: '从传统的被动式软件服务（SaaS）演进为主动执行、自主决策的智能体服务。研发核心从“卖功能座席”转向“卖业务结果”，实现全自动任务流的规模化交付。',
    link: 'https://zhuanlan.zhihu.com/p/2017285894349022379'
  },
  {
    title: '深度端侧化与边缘计算',
    desc: '大模型向终端设备（手机、PC、嵌入式 NPU）迁移，通过端云协同实现亚秒级响应与 100% 数据离岸，拓展 Agent 在离线与高隐私场景的落地。',
    link: 'https://zhuanlan.zhihu.com/p/1980238441204699605'
  },
  {
    title: '去媒介化交互模式',
    desc: '摆脱传统 GUI 限制，转向全语音、多模态、无痕式智能交互。智能体将成为系统底层的一部分，实现“意图即触发”的流畅体验。',
    link: 'https://www.36kr.com/p/3057238478672257'
  },
  {
    title: '持续自主演进能力',
    desc: '智能体具备基于执行结果的自主闭环学习能力。通过“反思优化”模块，智能体能在任务执行中不断修正策略，实现越用越好、越用越准。',
    link: 'https://zhuanlan.zhihu.com/p/1935746832107025537'
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
  margin-bottom: 16px;
}

.trend-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 8px;
  font-size: 13px;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.trend-link:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
}
</style>