<template>
  <div class="practice-view">
    <h1 class="page-title">提示词工程：研发实战</h1>





    <div class="frameworks-section">
      <h2 class="section-title">🛠️ 常用提示词框架（8个）</h2>
      <div class="frameworks-scroll">
        <div class="frameworks-track">
          <div class="framework-card" v-for="(fw, index) in frameworks" :key="index" :class="fw.colorClass">
            <div class="framework-header">
              <h3>{{ fw.name }}</h3>
              <span class="framework-badge">{{ fw.badge }}</span>
            </div>
            <div class="framework-structure">
              <div class="fw-item" v-for="(item, idx) in fw.structure" :key="idx">
                <span class="fw-key">{{ item.key }}</span>
                <span class="fw-desc">{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">← 左右滑动查看更多框架 →</div>
    </div>

    <div class="agent-prompt-section">
      <h2 class="section-title">🤖 智能体专用提示词模板</h2>
      <div class="agent-template">
        <div class="template-header">
          <span class="template-label">推荐结构</span>
          <span class="template-note">智能体提示词 = 角色 + 目标 + 约束 + 工具 + 输出</span>
        </div>
        <div class="template-sections">
          <div class="template-section" v-for="(section, index) in agentTemplate" :key="index">
            <span class="section-tag">{{ section.tag }}</span>
            <span class="section-desc">{{ section.desc }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="token-tips-sub">
      <h3 class="sub-title">💡 进阶：5个省Token小妙招 (Hover查看示例)</h3>
      <div class="tips-grid">
        <div class="tip-card" v-for="(tip, index) in tokenTips" :key="index" :class="{ 'bubble-right': index === 4 }">
          <span class="tip-number">{{ index + 1 }}</span>
          <div class="tip-content">
            <h4>{{ tip.title }}</h4>
            <p>{{ tip.desc }}</p>
          </div>
          <div class="tip-bubble">
            <div class="example-item negative">
              <span class="example-label">❌ 错误示例</span>
              <p>{{ tip.negative }}</p>
            </div>
            <div class="example-item positive">
              <span class="example-label">✅ 正确示例</span>
              <p>{{ tip.positive }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tokenTips = [
  { 
    title: '极简指令原则', 
    desc: '指令简洁明了，避免重复描述',
    negative: '请你帮我写一个函数，这个函数的作用是用来计算两个数字相加的，你一定要用Python来写，而且写完之后要告诉我怎么用。',
    positive: '用Python写一个两数相加的函数，并附带调用示例。'
  },
  { 
    title: '固定输出格式', 
    desc: '指定JSON/列表等格式，减少推理消耗',
    negative: '帮我分析一下这段代码有什么问题，把结果告诉我。',
    positive: '分析代码问题。按以下JSON格式输出：{"issues": [{"line": 1, "desc": "描述", "fix": "建议"}]}'
  },
  { 
    title: '上下文精准过滤', 
    desc: '只传递相关上下文，裁剪无关信息',
    negative: '这是我们整个项目的50个文件的代码（附带几万行代码），帮我看看 LoginController 里的登录逻辑对不对。',
    positive: '这是 LoginController 的代码和对应的 User 实体类（附带2个核心文件），请检查登录逻辑。'
  },
  { 
    title: '长任务分阶段', 
    desc: '拆分为多个短任务，避免上下文溢出',
    negative: '帮我设计一个完整的电商系统，包括数据库表结构、后端API代码、前端Vue组件、部署脚本。',
    positive: '任务1：请先帮我设计电商系统核心模块（商品、订单、用户）的数据库表结构。'
  },
  { 
    title: '模型分级调用', 
    desc: '简单任务用小模型，复杂任务再用大模型',
    negative: '调用 GPT-4o / Claude-3.5-Sonnet 来给代码批量添加注释。',
    positive: '用 Qwen-2.5-Coder-7B 批量生成注释；用 GPT-4o 处理复杂重构或系统架构设计。'
  }
]

const frameworks = [
  {
    name: 'APE',
    badge: '简单快速',
    colorClass: 'ape',
    structure: [
      { key: 'A - Action', desc: '行动' },
      { key: 'P - Purpose', desc: '目的' },
      { key: 'E - Expect', desc: '期望' }
    ]
  },
  {
    name: 'TAG',
    badge: '极简',
    colorClass: 'tag-framework',
    structure: [
      { key: 'T - Task', desc: '任务' },
      { key: 'A - Action', desc: '行动' },
      { key: 'G - Goal', desc: '目标' }
    ]
  },
  {
    name: 'RTF',
    badge: '简洁高效',
    colorClass: 'rtf',
    structure: [
      { key: 'R - Role', desc: '角色定位' },
      { key: 'T - Task', desc: '具体任务' },
      { key: 'F - Format', desc: '输出格式' }
    ]
  },
  {
    name: 'ICIO',
    badge: '框架通用',
    colorClass: 'icio',
    structure: [
      { key: 'I - Instruction', desc: '指令' },
      { key: 'C - Context', desc: '背景' },
      { key: 'I - Input', desc: '输入数据' },
      { key: 'O - Output', desc: '输出格式' }
    ]
  },
  {
    name: 'BROKE',
    badge: '目标达成',
    colorClass: 'broke',
    structure: [
      { key: 'B - Background', desc: '背景' },
      { key: 'R - Role', desc: '角色' },
      { key: 'O - Objectives', desc: '目标' },
      { key: 'K - Key Result', desc: '关键结果' },
      { key: 'E - Evolve', desc: '改进调整' }
    ]
  },
  {
    name: 'RISEN',
    badge: '任务执行',
    colorClass: 'risen',
    structure: [
      { key: 'R - Role', desc: '角色' },
      { key: 'I - Instruction', desc: '指令' },
      { key: 'S - Steps', desc: '步骤' },
      { key: 'E - End Goal', desc: '最终目标' },
      { key: 'N - Narrowing', desc: '约束条件' }
    ]
  },
  {
    name: 'CRISPE',
    badge: '专业开发',
    colorClass: 'crispe',
    structure: [
      { key: 'C - Capacity', desc: '能力与角色' },
      { key: 'I - Insight', desc: '洞察与背景' },
      { key: 'S - Statement', desc: '具体任务' },
      { key: 'P - Personality', desc: '个性风格' },
      { key: 'E - Experiment', desc: '实验改进' }
    ]
  },
  {
    name: 'Co-STAR',
    badge: '结构完整',
    colorClass: 'costar',
    structure: [
      { key: 'C - Context', desc: '背景上下文' },
      { key: 'O - Objective', desc: '明确目标' },
      { key: 'S - Style', desc: '写作风格' },
      { key: 'T - Tone', desc: '语气语调' },
      { key: 'A - Audience', desc: '目标受众' },
      { key: 'R - Response', desc: '响应格式' }
    ]
  }
]

const agentTemplate = [
  { tag: '🎯 角色', desc: '你是一个 Code Review 智能体，专注于发现代码中的安全漏洞和潜在风险' },
  { tag: '📋 目标', desc: '对提交的代码变更进行安全审查，输出结构化的问题列表和修复方案' },
  { tag: '⚠️ 约束', desc: '只关注安全问题（注入、越权、敏感信息泄露等），不做代码风格建议；发现漏洞必须给出具体修复代码' },
  { tag: '🔧 工具', desc: '可调用：代码搜索工具、Git 提交历史、依赖包查询、CVE 漏洞库' },
  { tag: '📤 输出', desc: '按 JSON 格式输出：漏洞列表（位置 + 类型 + 严重程度 + 修复建议 + 修复代码示例）' }
]
</script>

<style scoped>
.practice-view {
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
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-primary);
}


.token-tips-sub {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.sub-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tip-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255, 217, 61, 0.15), rgba(0, 212, 170, 0.1));
  border-radius: 12px;
  border: 1px solid rgba(255, 217, 61, 0.3);
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0s;
  z-index: 1;
}

.tip-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

.tip-bubble {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: 320px;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  pointer-events: none;
}

.tip-bubble::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: white;
  border-left: 1px solid var(--border);
  border-top: 1px solid var(--border);
}

.tip-card:hover .tip-bubble {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(15px);
}

/* 针对第5个卡片的右侧气泡样式 */
.tip-card.bubble-right .tip-bubble {
  top: 50%;
  left: calc(100% + 15px);
  transform: translateY(-50%) translateX(10px);
}

.tip-card.bubble-right:hover .tip-bubble {
  transform: translateY(-50%) translateX(0);
}

.tip-card.bubble-right .tip-bubble::before {
  top: 50%;
  left: -7px;
  transform: translateY(-50%) rotate(-45deg);
}

.example-item {
  margin-bottom: 12px;
}

.example-item:last-child {
  margin-bottom: 0;
}

.example-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
}

.example-item.negative .example-label {
  color: #ff4d4f;
}

.example-item.positive .example-label {
  color: #52c41a;
}

.example-item p {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  padding: 8px 12px;
  border-radius: 6px;
  margin: 0;
}

.example-item.negative p {
  background: rgba(255, 77, 79, 0.05);
  border-left: 3px solid #ff4d4f;
}

.example-item.positive p {
  background: rgba(82, 196, 26, 0.05);
  border-left: 3px solid #52c41a;
}

.tip-number {
  width: 32px;
  height: 32px;
  background: var(--highlight);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--text-primary);
  flex-shrink: 0;
}

.tip-content h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.tip-content p {
  font-size: 13px;
  color: var(--text-secondary);
}

.frameworks-section {
  margin-bottom: 60px;
  padding-bottom: 20px;
}

.frameworks-scroll {
  overflow-x: auto;
  padding-bottom: 20px;
  -webkit-overflow-scrolling: touch;
}

.frameworks-track {
  display: flex;
  gap: 20px;
  width: max-content;
}

.framework-card {
  display: block;
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 2px solid var(--border);
  min-width: 280px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.framework-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.framework-card.costar { border-color: #0066FF; }
.framework-card.costar:hover { box-shadow: 0 12px 30px rgba(0, 102, 255, 0.2); }

.framework-card.rtf { border-color: #00D4AA; }
.framework-card.rtf:hover { box-shadow: 0 12px 30px rgba(0, 212, 170, 0.2); }

.framework-card.risen { border-color: #FF6B35; }
.framework-card.risen:hover { box-shadow: 0 12px 30px rgba(255, 107, 53, 0.2); }

.framework-card.icio { border-color: #9B59B6; }
.framework-card.icio:hover { box-shadow: 0 12px 30px rgba(155, 89, 182, 0.2); }

.framework-card.crispe { border-color: #E74C3C; }
.framework-card.crispe:hover { box-shadow: 0 12px 30px rgba(231, 76, 60, 0.2); }

.framework-card.ape { border-color: #F39C12; }
.framework-card.ape:hover { box-shadow: 0 12px 30px rgba(243, 156, 18, 0.2); }

.framework-card.broke { border-color: #1ABC9C; }
.framework-card.broke:hover { box-shadow: 0 12px 30px rgba(26, 188, 156, 0.2); }

.framework-card.tag-framework { border-color: #16A085; }
.framework-card.tag-framework:hover { box-shadow: 0 12px 30px rgba(22, 160, 133, 0.2); }

.framework-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.framework-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.framework-badge {
  padding: 4px 12px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 12px;
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.framework-structure {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fw-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.fw-key {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
  min-width: 100px;
  flex-shrink: 0;
}

.fw-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

.scroll-hint {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 12px;
}

.agent-prompt-section {
  margin-bottom: 40px;
}

.agent-template {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
}

.template-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.template-label {
  padding: 6px 14px;
  background: var(--primary);
  color: white;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}

.template-note {
  font-size: 14px;
  color: var(--text-secondary);
}

.template-sections {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.template-section {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-radius: 10px;
}

.section-tag {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  min-width: 80px;
}

.section-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .tips-grid {
    grid-template-columns: 1fr;
  }

  .tip-bubble {
    width: calc(100vw - 60px);
    left: 50%;
    transform: translateX(-50%) translateY(10px);
  }

  .tip-card:hover .tip-bubble,
  .tip-card.bubble-right:hover .tip-bubble {
    transform: translateX(-50%) translateY(15px);
  }

  /* 重置第5个卡片在手机端的状态，改回向下弹出 */
  .tip-card.bubble-right .tip-bubble {
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
  }
  
  .tip-card.bubble-right .tip-bubble::before {
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .template-section {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
