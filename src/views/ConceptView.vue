<template>
  <div class="concept-view">
    <h1 class="page-title">AI Agent 核心概念：不是更强的聊天，而是更强的执行</h1>

    <div class="conclusion-box">
      <div class="conclusion-header">
        <span class="icon">💡</span>
        <h2>核心结论</h2>
      </div>
      <div class="conclusion-content">
        <p>传统大模型更像<strong>知识问答机</strong>，AI Agent 更像<strong>能动手、能协作、能交付结果的数字工程师</strong>。</p>
        <p>核心差异不在<strong>更会说</strong>，而在于<strong>能感知、会规划、能调用工具、能记忆、会执行和反思</strong>。</p>
      </div>
      <div class="highlight-badge">
        <span class="badge-icon">✨</span>
        <div class="badge-text">
          <strong>补充：</strong>当前AI智能体已支持消费级显卡部署在个人电脑，普通研发电脑即可满足需求，大幅降低落地门槛。
        </div>
      </div>
    </div>

    <div class="comparison-section">
      <div class="comparison-cards">
        <div class="comp-card traditional-card">
          <div class="card-header">
            <span class="card-icon">💬</span>
            <h3>传统 LLM / 普通AI助手</h3>
            <span class="card-subtitle">"你问我答" 的被动工具</span>
          </div>
          <div class="card-body">
            <div class="comp-item" v-for="(row, index) in comparisonRows" :key="'trad-'+index">
              <span class="item-label">{{ row.dimension }}</span>
              <p class="item-value">{{ row.traditional }}</p>
            </div>
          </div>
        </div>

        <div class="vs-divider">
          <span>VS</span>
        </div>

        <div class="comp-card agent-card">
          <div class="card-header">
            <span class="card-icon">🤖</span>
            <h3>AI 智能体 (Agent)</h3>
            <span class="card-subtitle">"你说目标，我来完成" 的数字员工</span>
          </div>
          <div class="card-body">
            <div class="comp-item highlight" v-for="(row, index) in comparisonRows" :key="'agent-'+index">
              <span class="item-label">{{ row.dimension }}</span>
              <p class="item-value">{{ row.agent }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="definition-section">
      <h2 class="section-title">AI智能体5大核心能力</h2>
      <div class="cycle-container">
        <div class="glow-ring"></div>
        <div class="orbit-ring outer"></div>
        <div class="orbit-ring inner"></div>
        <div class="rotating-ring">
          <svg viewBox="0 0 400 400" class="ring-svg">
            <defs>
              <linearGradient id="ringGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0066ff" />
                <stop offset="50%" stop-color="#00d4aa" />
                <stop offset="100%" stop-color="#0066ff" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringGradient3)" stroke-width="4" stroke-linecap="round" stroke-dasharray="20 10" />
          </svg>
        </div>
        <div class="cycle-center">
          <span class="center-text">
            <span class="center-icon">🦞</span>
            AI智能体
          </span>
        </div>
        <div
          v-for="(module, index) in modules"
          :key="module.title"
          class="capability-card"
          :style="{ '--angle': module.angle, '--dist': '260px' }"
        >
          <div class="card-content">
            <span class="card-number">{{ index + 1 }}</span>
            <span class="card-icon">{{ module.icon }}</span>
            <span class="card-label">{{ module.label }}</span>
          </div>
          <div class="module-bubble" :class="module.bubbleClass">
            <div class="module-bubble-title">
              <span class="module-bubble-icon">{{ module.icon }}</span>
              <span>{{ module.title }}</span>
            </div>
            <p class="module-bubble-desc">{{ module.desc }}</p>
            <div class="module-bubble-scenario">
              <strong>研发场景：</strong>{{ module.scenario }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const comparisonRows = [
  { dimension: '定位', traditional: '回答问题', agent: '完成任务' },
  { dimension: '行为方式', traditional: '用户问一步，模型答一步', agent: '接收目标后自主拆解、多步执行' },
  { dimension: '工具能力', traditional: '通常只输出文本', agent: '可调用 IDE、终端、API、数据库、浏览器等工具' },
  { dimension: '记忆能力', traditional: '依赖当前上下文窗口', agent: '可接入长期记忆，跨任务积累经验' },
  { dimension: '典型研发场景', traditional: '写个函数、解释报错、生成注释', agent: '自动修 Bug、批量写测试、巡检服务、生成文档、执行部署' },
  { dimension: '部署门槛', traditional: '主要依赖云端 API，本地私有化部署门槛高，需要专业硬件资源', agent: '支持消费级显卡个人电脑部署，门槛极低，私有数据不出内网' }
]

const modules = [
  { 
    name: '环境感知', 
    icon: '👁️',
    label: '环境感知',
    angle: '-90deg',
    bubbleClass: 'bubble-right',
    title: '感知模块',
    desc: '负责读取外部环境信息，包括代码仓库、接口文档、日志、数据库、用户输入、监控指标等；没有感知，智能体就像“闭着眼睛写代码”。',
    scenario: '读取一个老项目的目录结构、接口定义和最近报错日志，然后理解当前系统问题'
  },
  {
    icon: '🧠',
    label: '自主规划',
    angle: '-18deg',
    title: '规划模块',
    desc: '智能体的大脑引擎，通过思维链和树状思维等方式，把模糊目标拆成可执行子任务，再决定执行顺序与策略。',
    scenario: '把“帮我优化接口性能”拆成：定位慢查询 → 分析索引 → 修改 SQL → 回归验证'
  },
  {
    icon: '💾',
    label: '长期记忆',
    angle: '54deg',
    bubbleClass: 'bubble-right',
    title: '记忆模块',
    desc: '负责保存短期上下文和长期经验，比如“这个项目用的不是 MyBatis，而是 JPA”“这个团队禁止直接改生产配置”。没有记忆，智能体每次都像新来的实习生。',
    scenario: '记住团队代码规范、历史架构约束和常见问题修复方式，在后续任务中持续复用'
  },
  {
    icon: '🛠️',
    label: '工具调用',
    angle: '126deg',
    bubbleClass: 'bubble-left',
    title: '工具调用模块',
    desc: '这是让智能体真正“能干活”的关键模块。大模型本身不会改代码、不会跑测试、不会查数据库，但通过工具调用，它就能连接 IDE、终端、Git、Jenkins、Docker、浏览器、传感器等系统。',
    scenario: '调用测试框架跑单元测试，调用 Git 查看变更，调用 Jenkins 触发构建，调用数据库检查线上数据'
  },
  {
    icon: '🔄',
    label: '执行反思',
    angle: '198deg',
    title: '执行与反思模块',
    desc: '执行模块负责真正把计划落地，反思模块负责检查结果是否达标；这两个模块一起构成智能体“能闭环”的核心。没有反思，智能体就会像只会蛮干的脚本。',
    scenario: '代码修改后自动跑测试，发现失败再回溯原因、调整方案并重新执行'
  }
]
</script>

<style scoped>
.concept-view {
  max-width: 1200px;
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

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.conclusion-box {
  background: linear-gradient(135deg, rgba(255, 217, 61, 0.12) 0%, rgba(0, 212, 170, 0.08) 50%, rgba(0, 102, 255, 0.05) 100%);
  border: 1px solid rgba(255, 217, 61, 0.3);
  padding: 32px 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.03);
}

.conclusion-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.conclusion-header .icon {
  font-size: 24px;
}

.conclusion-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  margin: 0;
  letter-spacing: 0.5px;
}

.conclusion-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.conclusion-content p {
  font-size: 18px;
  line-height: 1.75;
  color: var(--text-primary);
  margin: 0;
}

.conclusion-content strong {
  color: var(--primary);
  font-weight: 600;
  background: rgba(0, 102, 255, 0.06);
  padding: 2px 6px;
  border-radius: 6px;
  margin: 0 2px;
}

.highlight-badge {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.12), rgba(0, 212, 170, 0.04));
  border: 1px solid rgba(0, 212, 170, 0.3);
  border-radius: 12px;
}

.highlight-badge .badge-icon {
  font-size: 18px;
  line-height: 1.5;
}

.highlight-badge .badge-text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.highlight-badge .badge-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.comparison-section {
  margin-bottom: 80px;
}

.comparison-cards {
  display: flex;
  align-items: stretch;
  gap: 20px;
  position: relative;
}

.comp-card {
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.comp-card:hover {
  transform: translateY(-4px);
}

.traditional-card {
  background: white;
  border: 1px solid var(--border);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

.traditional-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

.agent-card {
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.02) 0%, rgba(0, 212, 170, 0.02) 100%);
  border: 2px solid rgba(0, 102, 255, 0.2);
  box-shadow: 0 12px 32px rgba(0, 102, 255, 0.08);
}

.agent-card:hover {
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.4);
}

.card-header {
  padding: 30px 24px 24px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.traditional-card .card-header {
  background: var(--bg-tertiary);
}

.agent-card .card-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border-bottom: none;
}

.card-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 12px;
}

.card-header h3 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.traditional-card .card-header h3 {
  color: var(--text-primary);
}

.agent-card .card-header h3 {
  color: white;
}

.card-subtitle {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
}

.traditional-card .card-subtitle {
  color: var(--text-secondary);
}

.card-body {
  padding: 10px 24px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comp-item {
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--bg-primary);
  border: 1px solid transparent;
}

.comp-item.highlight {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.04) 0%, rgba(0, 212, 170, 0.04) 100%);
  border-color: rgba(0, 102, 255, 0.15);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.04);
}

.item-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.agent-card .item-label {
  color: var(--primary);
}

.item-value {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-primary);
  margin: 0;
  font-weight: 500;
}

.agent-card .item-value {
  color: #1e293b;
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  position: relative;
  z-index: 10;
}

.vs-divider span {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  color: white;
  font-style: italic;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5);
  border: 4px solid white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.definition-section {
  margin-bottom: 60px;
  padding: 50px 40px 100px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.03) 0%, rgba(0, 212, 170, 0.03) 100%);
  border-radius: 32px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.02);
  text-align: center;
  position: relative;
  z-index: 1;
}

.definition-hint {
  margin-top: 28px;
  text-align: center;
  font-size: 14px;
  color: var(--text-muted);
}

.cycle-container {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 100px auto 0;
  z-index: 1;
}

.glow-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, rgba(0, 212, 170, 0.08) 40%, transparent 70%);
  filter: blur(30px);
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px dashed rgba(0, 102, 255, 0.2);
}

.orbit-ring.outer {
  width: 440px;
  height: 440px;
  animation: rotate-slow 40s linear infinite;
}

.orbit-ring.inner {
  width: 300px;
  height: 300px;
  border-color: rgba(0, 212, 170, 0.15);
  animation: rotate-slow 30s linear infinite reverse;
}

@keyframes rotate-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.rotating-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  animation: rotate-ring 25s linear infinite;
}

@keyframes rotate-ring {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.ring-svg {
  width: 100%;
  height: 100%;
}

.cycle-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  z-index: 10;
}

.center-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0 16px 36px rgba(0, 102, 255, 0.28), inset 0 -3px 20px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.center-text .center-icon {
  font-size: 36px;
  margin-bottom: 4px;
}

.capability-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  z-index: 20;
  transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--dist, 260px)) rotate(calc(var(--angle) * -1));
  cursor: pointer;
}

.capability-card .card-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 8px 32px rgba(0, 102, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.capability-card:hover .card-content {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(0, 102, 255, 0.18), 0 6px 14px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 102, 255, 0.3);
}

.capability-card .card-icon {
  font-size: 36px;
  transition: transform 0.4s ease;
}

.capability-card:hover .card-icon {
  transform: scale(1.08);
}

.capability-card .card-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.capability-card .card-number {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  color: white;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.4);
}

.module-bubble {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 16px);
  width: 300px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(0, 102, 255, 0.14);
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.16), 0 8px 18px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(18px);
  transform: translateX(-50%) translateY(8px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
  z-index: 40;
}

.module-bubble::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.96);
  border-right: 1px solid rgba(0, 102, 255, 0.14);
  border-bottom: 1px solid rgba(0, 102, 255, 0.14);
  transform: translate(-50%, -50%) rotate(45deg);
}

.module-bubble.bubble-right {
  left: calc(100% + 18px);
  bottom: 50%;
  transform: translateY(50%) translateX(8px);
}

.module-bubble.bubble-right::after {
  left: 0;
  top: 50%;
  border-right: none;
  border-bottom: 1px solid rgba(0, 102, 255, 0.14);
  border-left: 1px solid rgba(0, 102, 255, 0.14);
  transform: translate(-50%, -50%) rotate(45deg);
}

.module-bubble.bubble-left {
  left: auto;
  right: calc(100% + 18px);
  bottom: 50%;
  transform: translateY(50%) translateX(-8px);
}

.module-bubble.bubble-left::after {
  left: auto;
  right: 0;
  top: 50%;
  border-right: 1px solid rgba(0, 102, 255, 0.14);
  border-bottom: none;
  transform: translate(50%, -50%) rotate(45deg);
}

.capability-card:hover .module-bubble {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.capability-card:hover .module-bubble.bubble-right {
  transform: translateY(50%) translateX(0);
}

.capability-card:hover .module-bubble.bubble-left {
  transform: translateY(50%) translateX(0);
}

.module-bubble-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.module-bubble-icon {
  font-size: 20px;
}

.module-bubble-desc {
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-secondary);
}

.module-bubble-scenario {
  padding: 10px 12px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.07), rgba(0, 212, 170, 0.05));
  border-radius: 10px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-primary);
}

.module-bubble-scenario strong {
  color: var(--secondary);
}

@media (max-width: 768px) {
  .conclusion-box {
    padding: 24px 20px;
  }

  .conclusion-header h2 {
    font-size: 18px;
  }

  .conclusion-content p {
    font-size: 15px;
  }

  .highlight-badge {
    padding: 12px 16px;
  }

  .highlight-badge .badge-text {
    font-size: 13px;
  }

  .comparison-cards {
    flex-direction: column;
  }

  .vs-divider {
    width: 100%;
    height: 48px;
    margin: -10px 0;
  }

  .cycle-container {
    width: 340px;
    height: 340px;
    margin-top: 80px;
  }

  .glow-ring {
    width: 280px;
    height: 280px;
  }

  .orbit-ring.outer {
    width: 300px;
    height: 300px;
  }

  .orbit-ring.inner {
    width: 200px;
    height: 200px;
  }

  .rotating-ring {
    width: 260px;
    height: 260px;
  }

  .cycle-center {
    width: 110px;
    height: 110px;
  }

  .center-text {
    font-size: 14px;
  }

  .center-text .center-icon {
    font-size: 28px;
  }

  .capability-card {
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--dist, 170px)) rotate(calc(var(--angle) * -1));
  }

  .capability-card .card-icon {
    font-size: 24px;
  }

  .capability-card .card-label {
    font-size: 10px;
  }

  .capability-card .card-number {
    width: 18px;
    height: 18px;
    font-size: 10px;
    top: -6px;
    right: -6px;
  }

  .definition-hint {
    font-size: 13px;
  }

  .module-bubble {
    width: 220px;
    padding: 12px 14px;
    bottom: calc(100% + 10px);
  }

  .module-bubble.bubble-right,
  .module-bubble.bubble-left {
    left: 50%;
    right: auto;
    bottom: calc(100% + 10px);
    transform: translateX(-50%) translateY(8px);
  }

  .module-bubble.bubble-right::after,
  .module-bubble.bubble-left::after {
    left: 50%;
    right: auto;
    top: 100%;
    border-right: 1px solid rgba(0, 102, 255, 0.14);
    border-bottom: 1px solid rgba(0, 102, 255, 0.14);
    border-left: none;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .module-bubble-title {
    font-size: 14px;
  }

  .module-bubble-desc,
  .module-bubble-scenario {
    font-size: 11px;
  }
}
</style>
