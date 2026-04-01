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
        <div class="tip-card" v-for="(tip, index) in tokenTips" :key="index" :class="{ 'bubble-right': index > 2 }">
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
    title: '指令精简原则', 
    desc: '采用短句、分点表述，剔除冗余修饰，保留强约束规则',
    negative: '请你帮我写一个函数，这个函数的作用是用来计算两个数字相加的，你一定要用Python来写，而且写完之后要告诉我怎么用。',
    positive: '用Python编写两数相加函数，并附带调用示例。'
  },
  { 
    title: '上下文动态裁剪', 
    desc: '仅保留最近3轮核心结果与关键上下文，避免无限膨胀',
    negative: '这是我们整个项目的50个文件的代码，帮我看看 LoginController 里的登录逻辑。',
    positive: '这是 LoginController 的代码和对应的 User 实体类，请检查登录逻辑。'
  },
  { 
    title: '批量任务合并执行', 
    desc: '同类原子任务合并为单次指令，减少重复消耗',
    negative: '请分析 A 组件。请分析 B 组件。请分析 C 组件。',
    positive: '请一次性分析 A、B、C 组件的逻辑并输出对比报告。'
  },
  { 
    title: '知识库分层检索', 
    desc: '区分高频核心与低频长尾知识，仅检索强相关内容',
    negative: '全文检索整个 10 万字的架构手册并在上下文中完整输出。',
    positive: '仅检索与当前分布式锁实现相关的 3 个架构片段并输出。'
  },
  { 
    title: '输出格式轻量化', 
    desc: '非必要场景避免强制 JSON/Markdown 复杂格式',
    negative: '所有的回复必须使用这种复杂的嵌套 JSON 格式。',
    positive: '仅在最终交付环节采用 JSON 格式，中间过程建议简短文字。'
  }
]

const frameworks = [
  {
    name: 'APE',
    badge: '角色确立',
    colorClass: 'ape',
    structure: [
      { key: 'A - Agent Persona', desc: '智能体角色背景' },
      { key: 'P - Purpose', desc: '核心目标与职责' },
      { key: 'E - Expectation', desc: '交付期望与标准' }
    ]
  },
  {
    name: 'TAG',
    badge: '任务对齐',
    colorClass: 'tag-framework',
    structure: [
      { key: 'T - Task', desc: '核心任务分解' },
      { key: 'A - Alignment', desc: '目标与需求对齐' },
      { key: 'G - Guide', desc: '执行逻辑指引' }
    ]
  },
  {
    name: 'ICIO',
    badge: '工具调用',
    colorClass: 'icio',
    structure: [
      { key: 'I - Instruction', desc: '核心指令' },
      { key: 'C - Context', desc: '上下文环境' },
      { key: 'I - Input', desc: '工具输入参数' },
      { key: 'O - Output', desc: '输出处理规则' }
    ]
  },
  {
    name: 'BROKE',
    badge: '反思优化',
    colorClass: 'broke',
    structure: [
      { key: 'B - Background', desc: '背景分析' },
      { key: 'R - Role', desc: '角色设定' },
      { key: 'O - Objectives', desc: '执行目标' },
      { key: 'K - Keep/Revise', desc: '校验与修订' },
      { key: 'E - Evaluate', desc: '评估优化' }
    ]
  },
  {
    name: 'RISEN',
    badge: '记忆管理',
    colorClass: 'risen',
    structure: [
      { key: 'R - Retention', desc: '信息留存' },
      { key: 'I - Indexing', desc: '索引逻辑' },
      { key: 'S - Search', desc: '检索召回' },
      { key: 'E - Evaluation', desc: '相关性评估' },
      { key: 'N - Navigation', desc: '上下文导航' }
    ]
  },
  {
    name: 'Co-STAR',
    badge: '多智能体协同',
    colorClass: 'costar',
    structure: [
      { key: 'C - Collaborative', desc: '协同分工' },
      { key: 'O - Objective', desc: '共同目标' },
      { key: 'S - Smart Agent', desc: '智能体角色' },
      { key: 'T - Teamwork', desc: '团队协作规则' },
      { key: 'A - Alignment', desc: '对齐资源' },
      { key: 'R - Resource', desc: '共享资源枢纽' }
    ]
  },
  {
    name: 'CRISPER',
    badge: '安全合规',
    colorClass: 'crispe',
    structure: [
      { key: 'C - Compliance', desc: '合规红线' },
      { key: 'R - Risk', desc: '风险识别' },
      { key: 'I - Inspection', desc: '安全审查' },
      { key: 'S - Security', desc: '运行权限' },
      { key: 'P - Permission', desc: '执行控制' },
      { key: 'R - Review', desc: '结果回顾' }
    ]
  },
  {
    name: 'RTF',
    badge: '响应模版',
    colorClass: 'rtf',
    structure: [
      { key: 'R - Response', desc: '响应内容' },
      { key: 'T - Template', desc: '结构化模版' },
      { key: 'F - Format', desc: '数据交换格式' }
    ]
  }
]

const agentTemplate = [
  { tag: '👤 角色定义', desc: '你是[XX领域专业智能体]，核心职责是[核心目标]，具备[核心能力]，严格遵守[执行红线]。' },
  { tag: '🎯 任务目标', desc: '交付标准：[明确的交付物、验收标准、完成标志]。' },
  { tag: '📋 执行规则', desc: '任务拆解逻辑：按[需求分析→方案设计→落地执行→结果校验]拆解，每步仅执行一个原子动作。' },
  { tag: '🔧 工具/记忆', desc: '仅在[场景]调用[工具]；每3步回顾一次上下文，避免信息偏差。' },
  { tag: '📤 输出要求', desc: '输出：当前步骤、内容、结果、下步计划，全流程完成后输出交付物与复盘总结。' }
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
