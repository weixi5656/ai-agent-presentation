<template>
  <div class="clawteam-view">
    <h1 class="page-title">ClawTeam 多智能体协作：架构与应用</h1>
    
    <div class="positioning-section">
      <div class="intro-card-new glass">
        <div class="intro-badge">2026 研发新范式</div>
        <h2>多智能体协同：从“助手”到“团队”</h2>
        <p>
          不再只是单一助手，而是由<strong>需求、架构、编码、测试、部署</strong>五大专业智能体构成的战队。
          <br>
          <span class="highlight-text">案例：开发用户登录接口（含校验+单测），人工耗时 <strong>30 分钟</strong> → 智能体战队仅需 <strong>5 分钟</strong>。</span>
        </p>
      </div>
    </div>
    
    <div class="architecture-section">
      <h2 class="section-title">ClawTeam 架构流程</h2>
      <div class="architecture-diagram">
        
        <!-- 人类输入层 -->
        <div class="arch-layer user-layer">
          <div class="layer-title">👤 人类</div>
          <div class="layer-box primary user-action" style="min-width: 250px; padding: 12px;">
            <span class="layer-icon" style="font-size: 22px;">💬</span>
            <span class="layer-name">"Optimize this LLM"</span>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- 核心并列层：Leader 与 Workers -->
        <div class="team-core-layout">
          
          <!-- 左侧：Leader -->
          <div class="leader-section">
            <div class="arch-layer leader-layer" style="padding: 0;">
              <div class="layer-title">🦞 Leader Agent</div>
              <div class="layer-box primary">
                <span class="layer-icon">🧠</span>
                <span class="layer-name">Claude Code / OpenClaw</span>
                <span class="layer-desc">接收人类意图 · 分解任务 · 生成集群</span>
                <div class="leader-commands">
                  <span class="cmd-tag">spawn</span>
                  <span class="cmd-tag">task create</span>
                  <span class="cmd-tag">inbox send</span>
                  <span class="cmd-tag">board show</span>
                  <span class="cmd-tag">task wait</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 中间：Spawn 箭头 -->
          <div class="spawn-arrow">
            <span class="spawn-text">clawteam spawn</span>
            <div class="arrow-line-right"></div>
          </div>
          
          <!-- 右侧：Workers 集群 -->
          <div class="workers-section">
            <div class="arch-layer worker-layer" style="padding: 0;">
              <div class="layer-title">🤖 Worker Agents (独立隔离仓)</div>
              <div class="worker-grid" style="grid-template-columns: repeat(3, 1fr); max-width: 450px;">
                <div class="worker-box">
                  <span class="worker-icon">🤖</span>
                  <span class="worker-name">Worker 1</span>
                  <div class="worker-tags">
                    <span class="w-tag">Claude Code</span>
                    <span class="w-tag">git worktree</span>
                  </div>
                </div>
                <div class="worker-box">
                  <span class="worker-icon">⚡</span>
                  <span class="worker-name">Worker 2</span>
                  <div class="worker-tags">
                    <span class="w-tag">Codex</span>
                    <span class="w-tag">git worktree</span>
                  </div>
                </div>
                <div class="worker-box">
                  <span class="worker-icon">🔧</span>
                  <span class="worker-name">Worker N</span>
                  <div class="worker-tags">
                    <span class="w-tag">any CLI</span>
                    <span class="w-tag">git worktree</span>
                  </div>
                </div>
              </div>
              <div class="worker-commands">
                <span class="proto-tag">task list (查任务)</span>
                <span class="proto-tag">task update (报进度)</span>
                <span class="proto-tag">inbox send (发内容)</span>
                <span class="proto-tag">inbox receive (取指令)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="arch-arrow down wide"></div>
        
        <!-- 数据存储层 -->
        <div class="arch-layer storage-layer">
          <div class="layer-title">💾 共有状态层 ~/.clawteam/</div>
          <div class="storage-box">
            <div class="storage-item">
              <span class="storage-icon">👥</span>
              <span class="storage-name">teams/</span>
              <span class="storage-desc">人员 (who)</span>
            </div>
            <div class="storage-item">
              <span class="storage-icon">📝</span>
              <span class="storage-name">tasks/</span>
              <span class="storage-desc">看板 (what)</span>
            </div>
            <div class="storage-item">
              <span class="storage-icon">💬</span>
              <span class="storage-name">inboxes/</span>
              <span class="storage-desc">网状通信 (talk)</span>
            </div>
            <div class="storage-item">
              <span class="storage-icon">📂</span>
              <span class="storage-name">workspaces/</span>
              <span class="storage-desc">代码沙箱隔离</span>
            </div>
          </div>
          <div class="storage-features">
            <span class="feat-badge">🚫 无中心数据库 (No DB)</span>
            <span class="feat-badge">⚛️ Atomic tmp+rename 原子防碰落盘</span>
            <span class="feat-badge">🛜 File / ZeroMQ P2P Transport</span>
          </div>
        </div>
        
      </div>
      
      <!-- 架构特性 -->
      <div class="arch-features">
        <div class="feature-item">
          <span class="feature-icon">🔄</span>
          <div class="feature-content">
            <h4>框架无关</h4>
            <p>支持 Claude Code、Codex、OpenClaw、nanobot 等任意 CLI 智能体</p>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🔒</span>
          <div class="feature-content">
            <h4>工作区隔离</h4>
            <p>每个 Worker 拥有独立 git worktree + tmux 窗口，避免代码冲突</p>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">⚡</span>
          <div class="feature-content">
            <h4>并行执行</h4>
            <p>多 Worker 同时推进任务，自动依赖管理与解阻塞</p>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📊</span>
          <div class="feature-content">
            <h4>实时监控</h4>
            <p>终端看板、Web UI、tmux tiled 视图多种监控方式</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="steps-section">
      <h2 class="section-title">3 步搭建 AI 研发团队</h2>
      <div class="steps-detail">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-header" @click="toggleStep(index)">
            <span class="step-num">{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <span class="toggle-icon" :class="{ 'is-open': expandedSteps.includes(index) }">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
          <div class="step-content" v-show="expandedSteps.includes(index)">
            <pre class="code-block"><code>{{ step.code }}</code></pre>
            <div class="step-notes">
              <p><strong>{{ step.noteLabel }}</strong>{{ step.noteText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="template-section">
      <h2 class="section-title">场景：多智能体协作开发一个用户管理系统</h2>
      <div class="scenario-desc">
        <p>从需求分析到架构设计、开发测试与部署建议，完整模拟真实研发团队协作。</p>
      </div>
      <div class="template-tabs">
        <button 
          v-for="(template, index) in templates" 
          :key="index"
          class="tab-btn"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ template.name }}
        </button>
      </div>
      <div class="template-content">
        <div class="template-header">
          <h3>{{ templates[activeTab].name }}</h3>
          <p>{{ templates[activeTab].role }}</p>
        </div>
        <pre class="code-block"><code>{{ templates[activeTab].content }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)
const expandedSteps = ref([0])

const toggleStep = (index) => {
  const i = expandedSteps.value.indexOf(index)
  if (i > -1) {
    expandedSteps.value.splice(i, 1)
  } else {
    expandedSteps.value.push(index)
  }
}

const steps = [
  {
    title: '创建一个用户管理系统团队',
    code: `# 安装 ClawTeam\npip install clawteam\n\n# 验证安装\nclawteam --help\n\n# 创建团队\nclawteam team spawn-team user-system-team -d "用户管理系统研发团队"\n\n# 查看团队列表\nclawteam team list`,
    noteLabel: '核心概念：',
    noteText: '一个 Team 就是一支 AI 团队，里面包含多个分工明确的 Agent。'
  },
  {
    title: '配置角色分工与通信机制',
    code: `# 配置Agent间通信（在openclaw.json中）\n{\n  "tools": {\n    "agentToAgent": {\n      "enabled": true,\n      "allow": ["pm", "architect", "backend", "frontend", "tester", "ops"],\n      "maxRecursion": 3\n    }\n  }\n}\n\n# 启用ACP子代理模式\nopenclaw config set acp.sub_agent.enabled true\nopenclaw config set acp.sub_agent.isolate_memory true\n\n# 重启服务\nopenclaw restart`,
    noteLabel: '关键配置：',
    noteText: '开启 Agent 间通信和记忆隔离，让每个角色在独立上下文里协作。'
  },
  {
    title: '下发目标并查看协作过程',
    code: `# 启动团队执行任务\nclawteam launch user-system-team --goal "完成一个用户管理系统的需求分析、架构设计、开发、测试和部署方案"\n\n# 查看团队状态看板\nclawteam board show user-system-team\n\n# 输出示例：\n# ┌─────────────┬──────────────────┬──────────┐\n# │ Agent       │ 任务             │ 状态     │\n# ├─────────────┼──────────────────┼──────────┤\n# │ 产品经理    │ 梳理需求         │ ✅ 完成  │\n# │ 架构师      │ 设计系统架构     │ 🟡 进行中│\n# │ 后端工程师  │ 开发接口         │ 🔵 待开始│\n# │ 测试工程师  │ 编写测试         │ ⏸️ 阻塞  │\n# └─────────────┴──────────────────┴──────────┘`,
    noteLabel: '监控管理：',
    noteText: '实时查看各角色状态、依赖关系和当前阻塞点。'
  }
]

const templates = [
  {
    name: '产品经理 Agent',
    role: '需求拆解专家',
    content: `# 角色定位
你是资深产品经理，负责把“做一个用户管理系统”拆成清晰需求。

# 核心任务
1. 输出功能范围：登录、注册、角色管理、权限管理、用户信息维护
2. 定义用户角色和权限边界
3. 给出接口需求与页面需求清单

# 输出标准
1. 需求列表结构清晰
2. 每项需求包含目标、输入、输出、校验规则
3. 输出格式：Markdown`
  },
  {
    name: '架构师 Agent',
    role: '系统设计专家',
    content: `# 角色定位
你是系统架构师，负责用户管理系统的架构设计。

# 核心任务
1. 定义模块划分：认证、用户、角色、权限
2. 设计数据库表结构
3. 设计服务接口与调用关系

# 输出标准
1. 有明确模块边界
2. 有数据模型和接口草图
3. 输出格式：架构说明 + ER 图描述`
  },
  {
    name: '后端 Agent',
    role: '服务实现专家',
    content: `# 角色定位
你是后端工程师，负责核心接口与权限逻辑实现。

# 核心任务
1. 基于需求和架构实现用户、角色、权限接口
2. 加入登录鉴权与异常处理
3. 配合测试修复缺陷

# 输出标准
1. 接口清单完整
2. 关键逻辑可测试
3. 输出格式：代码变更说明 + 接口列表`
  },
  {
    name: '测试 Agent',
    role: '质量保障专家',
    content: `# 角色定位
你是测试工程师，负责验证用户管理系统是否满足需求。

# 核心任务
1. 根据需求设计测试点
2. 验证登录、权限、边界值和异常流程
3. 输出缺陷与回归建议

# 输出标准
1. 包含功能测试和异常测试
2. 缺陷描述清楚可复现
3. 输出格式：测试报告 + 问题列表`
  },
  {
    name: 'Supervisor 主管',
    role: '团队协调与最终输出',
    content: `# 角色定位
你是多智能体团队主管，负责分工、协调、汇总和把控节奏。

# 核心职责
1. 把总目标拆给产品、架构、开发、测试等角色
2. 管理依赖顺序和阻塞关系
3. 汇总所有子任务结果，形成最终交付结论

# 输出标准
1. 给出团队当前进展
2. 标记阻塞点与下一步动作
3. 输出最终交付摘要`
  }
]
</script>

<style scoped>
.clawteam-view {
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

.intro-card-new {
  background: linear-gradient(135deg, rgba(255, 217, 61, 0.12) 0%, rgba(0, 212, 170, 0.08) 50%, rgba(0, 102, 255, 0.05) 100%);
  border: 1px solid rgba(255, 217, 61, 0.3);
  padding: 32px 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.03);
}

.intro-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 217, 61, 0.2);
  color: #c09100;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.intro-card-new h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  margin: 0 0 12px 0;
}

.intro-card-new p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-primary);
  margin: 0;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

/* 架构图 */
.architecture-section {
  margin-bottom: 60px;
}

.architecture-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 30px;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.03), rgba(0, 212, 170, 0.03));
  border-radius: 20px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  margin-bottom: 30px;
}

.arch-layer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
}

.layer-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.layer-items {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.layer-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 24px;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--border);
  text-align: center;
}

.layer-box.small {
  padding: 12px 20px;
  min-width: 80px;
}

.layer-box.primary {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(139, 92, 246, 0.1));
  border-color: var(--primary);
  min-width: 320px;
}

.layer-icon {
  font-size: 28px;
}

.layer-box.small .layer-icon {
  font-size: 24px;
}

.layer-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.layer-box.small .layer-name {
  font-size: 13px;
}

.layer-desc {
  font-size: 12px;
  color: var(--text-muted);
}

.arch-arrow {
  width: 2px;
  height: 30px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  margin: 4px 0;
}

.arch-arrow.down {
  position: relative;
}

.arch-arrow.down::after {
  content: '▼';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--primary);
  font-size: 12px;
}

/* Leader层 */
.team-core-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 10px 0;
}

@media (max-width: 900px) {
  .team-core-layout {
    flex-direction: column;
    gap: 10px;
  }
}

.spawn-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: -20px;
}

.spawn-text {
  font-family: monospace;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
  background: white;
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px dashed rgba(0, 102, 255, 0.3);
  z-index: 2;
}

.arrow-line-right {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  position: relative;
}

.arrow-line-right::after {
  content: '▶';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary);
  font-size: 16px;
  line-height: 0;
}

@media (max-width: 900px) {
  .arrow-line-right {
    width: 2px;
    height: 40px;
    background: linear-gradient(180deg, var(--primary), var(--secondary));
  }
  .arrow-line-right::after {
    content: '▼';
    right: 50%;
    transform: translateX(50%);
    top: auto;
    bottom: -10px;
  }
}

.leader-layer {
  padding: 0;
}

.leader-commands {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
}

.cmd-tag {
  padding: 4px 12px;
  background: rgba(0, 102, 255, 0.1);
  border-radius: 16px;
  font-size: 11px;
  color: var(--primary);
  font-weight: 500;
  font-family: monospace;
}

/* Worker层 */
.worker-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
}

.worker-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 12px;
  background: white;
  border-radius: 10px;
  border: 2px solid var(--secondary);
  transition: all 0.3s;
}

.worker-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 212, 170, 0.2);
}

.worker-icon {
  font-size: 28px;
}

.worker-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.worker-tags {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.w-tag {
  font-size: 10px;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  padding: 2px 8px;
  border-radius: 6px;
  white-space: nowrap;
}

.worker-commands {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 12px;
  background: rgba(0, 212, 170, 0.05);
  border-radius: 12px;
  border: 1px dashed rgba(0, 212, 170, 0.3);
  max-width: 450px;
}

.proto-tag {
  font-family: monospace;
  font-size: 11px;
  color: var(--secondary);
  background: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

/* 存储层 */
.storage-layer {
  padding: 20px 0;
}

.storage-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 800px;
}

.storage-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 10px;
  border: 1px solid var(--border);
}

.storage-icon {
  font-size: 24px;
}

.storage-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.storage-desc {
  font-size: 11px;
  color: var(--text-muted);
}

.storage-features {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.feat-badge {
  padding: 6px 14px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}



/* 架构特性 */
.arch-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.feature-item:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.1);
}

.feature-icon {
  font-size: 28px;
}

.feature-content h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.feature-content p {
  font-size: 13px;
  color: var(--text-secondary);
}

/* 步骤详情 */
.steps-section {
  margin-bottom: 60px;
}

.steps-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step-card {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  user-select: none;
}

.toggle-icon {
  margin-left: auto;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
  color: var(--primary);
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
}

.step-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}

.step-content {
  padding: 24px;
}

.step-notes {
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(0, 212, 170, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--secondary);
}

.step-notes p {
  font-size: 14px;
  color: var(--text-primary);
  margin: 0;
}

/* 模板部分 */
.template-section {
  margin-top: 60px;
}

.scenario-desc {
  text-align: center;
  margin-bottom: 24px;
}

.scenario-desc p {
  font-size: 16px;
  color: var(--text-secondary);
}

.template-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 12px 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  border-color: var(--primary);
}

.tab-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.template-content {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.template-header {
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-bottom: 1px solid var(--border);
}

.template-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.template-header p {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
}

.code-block {
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 24px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
  margin: 0;
}

@media (max-width: 968px) {
  .worker-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .coord-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .storage-box {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .arch-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .layer-items {
    flex-direction: column;
    align-items: center;
  }
  
  .worker-grid {
    grid-template-columns: 1fr;
  }
  
  .coord-grid {
    grid-template-columns: 1fr;
  }
  
  .storage-box {
    grid-template-columns: 1fr;
  }
  
  .arch-features {
    grid-template-columns: 1fr;
  }
  
  .template-tabs {
    justify-content: center;
  }
}
</style>
