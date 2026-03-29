<template>
  <div class="trend-view">
    <h1 class="page-title">AI 智能体 2026 最前沿趋势</h1>
    
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
    title: '端侧原生智能体（On-Device AI Agents）',
    desc: '从"云端依赖"到"终端原生"关键转折：OpenAI Q*端侧推理引擎、微软TinyMind终端框架、ARM首款Agent芯片Cortex-A78AE、Apple M5 Neural Engine。终端原生智能体实现低功耗、高响应、隐私保护的智能交互，手机/汽车/穿戴设备成为独立Agent载体，2026年出货量将突破20亿台。',
    link: 'https://www.ithome.com/0/933/193.htm'
  },
  {
    title: '多智能体协作操作系统（MAOS）',
    desc: 'MetaGPT、CAMEL、AutoGen等框架向OS化演进：OpenAI的Supervisor、Anthropic的Constitutional Agents、Google的MADPS（Multi-Agent Distributed Planning System）。MAOS实现智能体间的任务调度、资源管理、安全隔离和协同学习，让AI从"工具"升级为"团队"，重构企业组织架构。',
    link: 'https://www.sohu.com/a/997779254_468661'
  },
  {
    title: '具身AI与物理世界交互智能体',
    desc: 'MIT CSAIL的DexNet 3.0、斯坦福HAI的RoboAgent、伯克利BAIR的Real2Sim：基于视觉-触觉-力觉多模态反馈构建的物理世界交互智能体，实现物体操作、环境感知、动态规划。Tesla Optimus Gen3、Boston Dynamics Atlas结合OpenAI VPT，形成具身智能体的产业落地。',
    link: 'https://news.qq.com/rain/a/20260113A06NA000'
  },
  {
    title: 'AI Agent联邦学习与隐私计算',
    desc: 'Google Federated Learning+、华为昇腾隐私计算、蚂蚁摩斯多方安全计算：AI Agent在不暴露原始数据的前提下，通过加密协议进行模型协同训练，解决医疗/金融/政务等敏感场景的数据合规问题。MIT Satori Lab的Secure Multi-Party Agent Learning成为隐私计算新范式。',
    link: 'https://www.gyznsw.cn/2026/03/26/2026-03-26-AI%E6%8A%80%E6%9C%AF%E6%AF%8F%E6%97%A5%E5%88%86%E6%9E%90-20260326/'
  },
  {
    title: '自演化智能体（Self-Evolving Agents）',
    desc: 'DeepMind Gemini N+、Anthropic Constitutional AI 2.0、清华CoEvol：具备自主目标设定、能力演进、经验累积的学习型智能体。通过反思机制、任务重规划、技能合成，实现无需人类干预的持续能力提升。OpenAI的Recursive Self-Improvement（RSI）智能体成为AGI关键技术路径。',
    link: 'https://www.tsinghua.edu.cn/info/1182/124190.htm'
  },
  {
    title: 'AI Agent测试与验证基础设施',
    desc: 'Anthropic的Constitutional Safety Suite、Google Responsible AI Test Suite、微软MAVTS（Multi-Agent Verification & Test System）：随着Agent规模部署，测试验证成为工程瓶颈。2026年各大企业投入超百亿美元构建Agent验证平台，涵盖安全性、一致性、合规性和鲁棒性测试。',
    link: 'https://qverlabs.com/blog/openai-vs-google-deepmind-vs-anthropic-2026'
  },
  {
    title: '神经符号智能体（Neuro-Symbolic Agents）',
    desc: 'IBM Neurosymbolic AI、微软LogicLM、Meta LlamaLogic：融合深度学习与符号推理，提升Agent的逻辑推理、规划能力和可解释性。清华-华为联合实验室NeSy-Agent框架在金融风控、法律推理场景实现突破，成为高可靠AI系统核心架构。',
    link: 'https://blog.csdn.net/jinanwuhuaguo/article/details/159088534'
  },
  {
    title: 'AI Agent伦理与治理标准化',
    desc: '欧盟AI Act 2026全面实施、美国NIST AI Risk Management Framework、中国AI治理白皮书：随着Agent自主性提升，伦理治理成为全球共识。Anthropic与五角大楼AI合规诉讼、OpenAI安全董事会的重组，标志着AI Agent从技术探索进入规范化发展阶段。',
    link: 'https://www.infoq.cn/article/iHkvlLuTCWNJv27eJ1XY'
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