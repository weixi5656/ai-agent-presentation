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
          <a :href="trend.link" target="_blank" class="trend-link">📎 参考资料</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const trends = [
  {
    title: 'Harness Engineering（驾驭工程）',
    desc: '2026年最热门的AI工程范式。通过构建"软件基础设施"包裹模型，为AI提供持久化记忆、隔离的安全沙盒、确定性架构护栏和强制自我验证闭环。让AI从"玩具级"迈入"工业级"，实现Humans steer, Agents execute（人类掌舵，智能体执行）。',
    link: 'https://www.163.com/dy/article/KNUAAI0V05566TJ2.html'
  },
  {
    title: 'Agentic AI（自主智能体）',
    desc: 'AI从被动响应工具向主动决策执行者跨越。具备感知-推理-行动-学习闭环能力，可自主规划、调用工具、执行任务。2025年被称为AI Agent商业元年，79%的组织已采用AI Agent，从实验性工具进入企业级实用阶段。',
    link: 'https://baijiahao.baidu.com/s?id=1853445683827940934'
  },
  {
    title: 'MCP协议（模型上下文协议）',
    desc: '由Anthropic提出，被称为Agent时代的"USB-C接口"。标准化AI系统与外部工具、数据源的连接，支持TypeScript/Python/Java SDK。2025年12月捐赠给Linux Foundation，从企业私有标准走向全球中立治理。',
    link: 'https://wap.sciencenet.cn/home.php?mod=space&uid=362400&do=blog&id=1522044'
  },
  {
    title: 'A2A协议（智能体间通信）',
    desc: '解决多智能体协作的标准化通信问题。支持Agent之间的任务委托、状态同步、结果回调。与MCP互补：MCP解决Agent与工具的连接，A2A解决Agent与Agent的连接，共同构建"智能体互联网"。',
    link: 'https://baijiahao.baidu.com/s?id=1860563842231223212'
  },
  {
    title: 'Long Horizon Agents（长时程智能体）',
    desc: '能够执行复杂长周期任务的智能体，自主规划、长时间运行、目标导向。应用场景包括Coding、AI SREs、Research、金融分析。关键突破：模型能力提升 + Harness设计成熟，实现从"Talkers"到"Doers"的转变。',
    link: 'https://dreamit.blog.csdn.net/article/details/157531878'
  },
  {
    title: '多智能体协作系统（Multi-Agent）',
    desc: 'AI从单体模型走向多智能体生态。MetaGPT、CAMEL、AutoGen等框架成熟，智能体扮演程序员、测试员、产品经理等角色，通过结构化通信、反思性推理和明确任务分配，协作完成软件开发等复杂任务。',
    link: 'https://baijiahao.baidu.com/s?id=1860563842231223212'
  },
  {
    title: '端云协同智能体规模化',
    desc: '端侧负责感知与执行，云端负责复杂推理与规划。ESP32等边缘设备结合OpenClaw等云端框架，实现低功耗、低成本、高性能的智能体应用，在物联网、智能家居、工业控制场景大规模落地。',
    link: 'https://baijiahao.baidu.com/s?id=1860533747373128466'
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
