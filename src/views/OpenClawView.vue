<template>
  <div class="openclaw-view">
    <h1 class="page-title">OpenClaw 原理</h1>
    
    <div class="hero-banner glass-card">
      <div class="hero-content">
        <div class="hero-logo">🦞</div>
        <div class="hero-text">
          <h2>OpenClaw</h2>
          <p>开源多智能体协调框架 · 让AI智能体自主协作</p>
        </div>
      </div>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="stat-value">Multi-Agent</div>
          <div class="stat-label">多智能体</div>
        </div>
        <div class="hero-stat">
          <div class="stat-value">Git</div>
          <div class="stat-label">工作区隔离</div>
        </div>
        <div class="hero-stat">
          <div class="stat-value">tmux</div>
          <div class="stat-label">会话管理</div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">🏗️</span>
        核心架构
      </h2>
      <div class="architecture-showcase">
        <div class="arch-flow">
          <div class="flow-step" v-for="(step, index) in archSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-card glass-card">
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
            <div v-if="index < archSteps.length - 1" class="step-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">⚙️</span>
        工作流程
      </h2>
      <div class="workflow-demo">
        <div class="workflow-tabs">
          <button 
            v-for="(tab, index) in workflowTabs" 
            :key="index"
            class="tab-btn"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab.title }}
          </button>
        </div>
        <div class="workflow-content glass-card">
          <div class="code-showcase">
            <div class="code-header">
              <div class="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="code-title">{{ workflowTabs[activeTab].title }}</span>
            </div>
            <pre class="code-body"><code>{{ workflowTabs[activeTab].code }}</code></pre>
          </div>
          <div class="workflow-desc">
            <p>{{ workflowTabs[activeTab].desc }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">🔑</span>
        核心特性
      </h2>
      <div class="features-grid">
        <div class="feature-item" v-for="(feature, index) in features" :key="index">
          <div class="feature-visual">
            <div class="feature-animation" :class="`anim-${index}`">
              <div class="anim-shape"></div>
            </div>
          </div>
          <div class="feature-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
            <ul>
              <li v-for="item in feature.points" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        支持的智能体
      </h2>
      <div class="agents-showcase">
        <div class="agent-card" v-for="(agent, index) in agents" :key="index">
          <div class="agent-icon">{{ agent.icon }}</div>
          <h3>{{ agent.name }}</h3>
          <p>{{ agent.desc }}</p>
          <div class="agent-status" :class="agent.status">{{ agent.statusText }}</div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">💡</span>
        使用场景
      </h2>
      <div class="use-cases">
        <div class="use-case" v-for="(useCase, index) in useCases" :key="index">
          <div class="use-case-number">0{{ index + 1 }}</div>
          <div class="use-case-content">
            <h3>{{ useCase.title }}</h3>
            <p>{{ useCase.desc }}</p>
            <div class="use-case-flow">
              <div class="flow-item" v-for="(step, i) in useCase.steps" :key="i">
                <span class="flow-dot"></span>
                <span>{{ step }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const archSteps = [
  { icon: '👤', title: 'Leader 智能体', desc: '接收任务，制定计划，协调团队' },
  { icon: '📋', title: '任务分解', desc: '将复杂目标拆分为可并行子任务' },
  { icon: '👥', title: 'Worker 智能体', desc: '在独立工作区执行具体任务' },
  { icon: '🔄', title: '协作通信', desc: '通过消息队列同步进度和结果' },
  { icon: '✅', title: '结果合并', desc: '自动整合各工作区成果' },
]

const activeTab = ref(0)

const workflowTabs = [
  {
    title: '创建团队',
    code: `# 创建一个新的智能体团队
clawteam team spawn-team my-team \\
  -d "构建Web应用" \\
  -n leader

# 查看团队状态
clawteam team status my-team`,
    desc: '创建团队时，系统会自动初始化Git仓库、配置工作区目录结构，并为Leader智能体分配管理权限。'
  },
  {
    title: '分配任务',
    code: `# 创建带有依赖关系的任务
clawteam task create my-team \\
  "设计数据库架构" \\
  -o architect \\
  --priority high

# 创建依赖任务（自动解锁）
clawteam task create my-team \\
  "实现API接口" \\
  -o backend \\
  --blocked-by task-001`,
    desc: '任务系统支持优先级设置、依赖关系管理和自动解锁。当依赖任务完成时，后续任务会自动变为可执行状态。'
  },
  {
    title: '启动智能体',
    code: `# 启动OpenClaw智能体
clawteam spawn --team my-team \\
  --agent-name alice \\
  --task "实现用户认证模块"

# 启动其他类型智能体
clawteam spawn tmux claude \\
  --team my-team \\
  --agent-name bob \\
  --task "编写单元测试"`,
    desc: '每个智能体都在独立的Git工作区和tmux会话中运行，确保环境隔离和并行执行。'
  },
  {
    title: '监控管理',
    code: `# 查看实时看板
clawteam board show my-team

# 附加到团队会话（分屏视图）
clawteam board attach my-team

# 启动Web管理界面
clawteam board serve --port 8080`,
    desc: '提供多种监控方式：终端看板、tmux分屏视图和Web界面，实时掌握团队工作状态。'
  },
]

const features = [
  {
    title: 'Git 工作区隔离',
    desc: '每个智能体拥有独立的Git工作区',
    points: ['避免代码冲突', '支持并行开发', '自动分支管理', '一键合并成果']
  },
  {
    title: 'tmux 会话管理',
    desc: '基于tmux的智能体会话管理',
    points: ['持久化会话', '分屏监控', '实时日志', '远程恢复']
  },
  {
    title: '消息通信系统',
    desc: '智能体间的点对点通信',
    points: ['收件箱机制', '广播消息', '文件传输', '状态同步']
  },
  {
    title: '任务依赖管理',
    desc: '支持复杂任务依赖关系',
    points: ['自动解锁', '优先级调度', '死锁检测', '进度追踪']
  },
]

const agents = [
  { icon: '🦞', name: 'OpenClaw', desc: '默认智能体，深度集成', status: 'default', statusText: '默认' },
  { icon: '✨', name: 'Claude Code', desc: 'Anthropic Claude', status: 'supported', statusText: '支持' },
  { icon: '🔷', name: 'Codex', desc: 'OpenAI Codex CLI', status: 'supported', statusText: '支持' },
  { icon: '🤖', name: 'nanobot', desc: '轻量级智能体', status: 'supported', statusText: '支持' },
  { icon: '⚡', name: 'Cursor', desc: 'Cursor IDE Agent', status: 'experimental', statusText: '实验性' },
]

const useCases = [
  {
    title: '自主ML研究',
    desc: '8个智能体在8块GPU上并行优化训练',
    steps: ['Leader分配研究方向', '各智能体独立实验', '每30分钟交叉验证', '动态重分配GPU资源', '收敛到最优配置']
  },
  {
    title: '全栈应用开发',
    desc: '5个智能体协作完成复杂项目',
    steps: ['架构师设计系统', '后端开发API', '前端实现界面', '测试员编写用例', 'Leader整合部署']
  },
  {
    title: '对冲基金分析',
    desc: '7个分析师智能体投资决策',
    steps: ['多维度数据分析', '风险评估建模', '投资组合优化', '实时监控调整', '收益归因分析']
  },
]
</script>

<style scoped>
.openclaw-view {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-banner {
  padding: 48px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero-logo {
  font-size: 72px;
}

.hero-text h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.hero-text p {
  font-size: 16px;
  color: var(--text-secondary);
}

.hero-stats {
  display: flex;
  gap: 40px;
}

.hero-stat {
  text-align: center;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.section {
  margin-bottom: 80px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
}

.section-icon {
  font-size: 32px;
}

.arch-flow {
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: auto;
  padding: 20px 0;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.step-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.step-card {
  padding: 24px;
  width: 200px;
  text-align: center;
}

.step-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.step-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.step-card p {
  font-size: 13px;
  color: var(--text-secondary);
}

.step-arrow {
  font-size: 24px;
  color: var(--primary);
  opacity: 0.5;
}

.workflow-demo {
  background: white;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
}

.workflow-tabs {
  display: flex;
  border-bottom: 1px solid var(--border);
}

.tab-btn {
  flex: 1;
  padding: 16px 24px;
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.tab-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.tab-btn.active {
  background: var(--primary);
  color: white;
}

.workflow-content {
  padding: 32px;
  background: transparent;
  border: none;
  box-shadow: none;
}

.code-showcase {
  background: #1a1a2e;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 24px;
}

.code-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-dots {
  display: flex;
  gap: 6px;
}

.code-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dots span:nth-child(1) { background: #ff5f56; }
.code-dots span:nth-child(2) { background: #ffbd2e; }
.code-dots span:nth-child(3) { background: #27ca40; }

.code-title {
  font-size: 13px;
  color: #8892b0;
}

.code-body {
  padding: 20px;
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.8;
  color: #e2e8f0;
  overflow-x: auto;
}

.workflow-desc {
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: var(--radius);
}

.workflow-desc p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.feature-item {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--border);
  display: flex;
  gap: 24px;
}

.feature-visual {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-animation {
  width: 60px;
  height: 60px;
  position: relative;
}

.anim-shape {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 12px;
  animation: morph 3s ease infinite;
}

@keyframes morph {
  0%, 100% { border-radius: 12px; transform: rotate(0deg); }
  25% { border-radius: 50%; transform: rotate(90deg); }
  50% { border-radius: 12px; transform: rotate(180deg); }
  75% { border-radius: 50%; transform: rotate(270deg); }
}

.feature-content h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-content p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.feature-content ul {
  list-style: none;
}

.feature-content li {
  font-size: 13px;
  color: var(--text-muted);
  padding: 4px 0;
  padding-left: 16px;
  position: relative;
}

.feature-content li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: 600;
}

.agents-showcase {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.agent-card {
  background: white;
  border-radius: var(--radius);
  padding: 24px 16px;
  text-align: center;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.agent-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.agent-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.agent-card h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.agent-card p {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.agent-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}

.agent-status.default {
  background: var(--primary);
  color: white;
}

.agent-status.supported {
  background: rgba(0, 212, 170, 0.1);
  color: var(--secondary);
}

.agent-status.experimental {
  background: rgba(255, 107, 53, 0.1);
  color: var(--accent);
}

.use-cases {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.use-case {
  display: flex;
  gap: 32px;
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--border);
}

.use-case-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
  line-height: 1;
}

.use-case-content h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}

.use-case-content p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.use-case-flow {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
}

.flow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--secondary);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .hero-banner {
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .arch-flow {
    flex-direction: column;
  }
  
  .step-arrow {
    transform: rotate(90deg);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-item {
    flex-direction: column;
  }
  
  .agents-showcase {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .use-case {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
