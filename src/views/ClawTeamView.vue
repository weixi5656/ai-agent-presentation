<template>
  <div class="clawteam-view">
    <h1 class="page-title">ClawTeam 多智能体协作：架构与应用</h1>
    
    <div class="positioning-section">
      <div class="positioning-card">
        <h2>核心定位</h2>
        <p>ClawTeam  是基于 OpenClaw 的多智能体协作框架，用来把单个智能体升级为“会分工、会协作、会交付”的 AI 研发团队。</p>
      </div>
    </div>
    
    <div class="architecture-section">
      <h2 class="section-title">ClawTeam 架构流程</h2>
      <div class="architecture-diagram">
        
        <!-- 人类输入层 -->
        <div class="arch-layer user-layer">
          <div class="layer-title">👤 人类</div>
          <div class="layer-box primary">
            <span class="layer-icon">💬</span>
            <span class="layer-name">"Optimize this LLM"</span>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- Leader Agent 层 -->
        <div class="arch-layer leader-layer">
          <div class="layer-title">🦞 Leader Agent</div>
          <div class="layer-box primary">
            <span class="layer-icon">🧠</span>
            <span class="layer-name">Claude Code / Codex / OpenClaw</span>
            <span class="layer-desc">任务分解 · 子智能体生成 · 进度监控</span>
          </div>
          <div class="leader-commands">
            <span class="cmd-tag">spawn</span>
            <span class="cmd-tag">task create</span>
            <span class="cmd-tag">inbox send</span>
            <span class="cmd-tag">board show</span>
            <span class="cmd-tag">task wait</span>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- Worker Agents 层 -->
        <div class="arch-layer worker-layer">
          <div class="layer-title">🤖 Worker Agents（并行执行）</div>
          <div class="worker-grid">
            <div class="worker-box">
              <span class="worker-icon">🤖</span>
              <span class="worker-name">Worker 1</span>
              <span class="worker-env">Claude Code</span>
              <span class="worker-info">git worktree + tmux</span>
            </div>
            <div class="worker-box">
              <span class="worker-icon">⚡</span>
              <span class="worker-name">Worker 2</span>
              <span class="worker-env">Codex</span>
              <span class="worker-info">git worktree + tmux</span>
            </div>
            <div class="worker-box">
              <span class="worker-icon">🔧</span>
              <span class="worker-name">Worker N</span>
              <span class="worker-env">any CLI</span>
              <span class="worker-info">git worktree + tmux</span>
            </div>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- 协调协议层 -->
        <div class="arch-layer coord-layer">
          <div class="layer-title">🔄 协调协议</div>
          <div class="coord-grid">
            <div class="coord-item">
              <span class="coord-icon">📋</span>
              <span class="coord-name">clawteam task list</span>
              <span class="coord-desc">查看任务</span>
            </div>
            <div class="coord-item">
              <span class="coord-icon">✅</span>
              <span class="coord-name">clawteam task update --status completed</span>
              <span class="coord-desc">更新状态</span>
            </div>
            <div class="coord-item">
              <span class="coord-icon">📨</span>
              <span class="coord-name">clawteam inbox send</span>
              <span class="coord-desc">发送消息</span>
            </div>
            <div class="coord-item">
              <span class="coord-icon">⏳</span>
              <span class="coord-name">clawteam lifecycle idle</span>
              <span class="coord-desc">空闲报告</span>
            </div>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- 数据存储层 -->
        <div class="arch-layer storage-layer">
          <div class="layer-title">💾 本地存储 ~/.clawteam/</div>
          <div class="storage-box">
            <div class="storage-item">
              <span class="storage-icon">👥</span>
              <span class="storage-name">teams/</span>
              <span class="storage-desc">谁（团队成员）</span>
            </div>
            <div class="storage-item">
              <span class="storage-icon">📝</span>
              <span class="storage-name">tasks/</span>
              <span class="storage-desc">什么（任务列表）</span>
            </div>
            <div class="storage-item">
              <span class="storage-icon">💬</span>
              <span class="storage-name">inboxes/</span>
              <span class="storage-desc">通信（消息）</span>
            </div>
            <div class="storage-item">
              <span class="storage-icon">📂</span>
              <span class="storage-name">workspaces/</span>
              <span class="storage-desc">隔离代码</span>
            </div>
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
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">1</span>
            <h3>创建一个用户管理系统团队</h3>
          </div>
          <div class="step-content">
            <pre class="code-block"><code># 安装 ClawTeam
pip install clawteam

# 验证安装
clawteam --help

# 创建团队
clawteam team spawn-team user-system-team -d "用户管理系统研发团队"

# 查看团队列表
clawteam team list</code></pre>
            <div class="step-notes">
              <p><strong>核心概念：</strong>一个 Team 就是一支 AI 团队，里面包含多个分工明确的 Agent。</p>
            </div>
          </div>
        </div>
        
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">2</span>
            <h3>配置角色分工与通信机制</h3>
          </div>
          <div class="step-content">
            <pre class="code-block"><code># 配置Agent间通信（在openclaw.json中）
{
  "tools": {
    "agentToAgent": {
      "enabled": true,
      "allow": ["pm", "architect", "backend", "frontend", "tester", "ops"],
      "maxRecursion": 3
    }
  }
}

# 启用ACP子代理模式
openclaw config set acp.sub_agent.enabled true
openclaw config set acp.sub_agent.isolate_memory true

# 重启服务
openclaw restart</code></pre>
            <div class="step-notes">
              <p><strong>关键配置：</strong>开启 Agent 间通信和记忆隔离，让每个角色在独立上下文里协作。</p>
            </div>
          </div>
        </div>
        
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">3</span>
            <h3>下发目标并查看协作过程</h3>
          </div>
          <div class="step-content">
            <pre class="code-block"><code># 启动团队执行任务
clawteam launch user-system-team --goal "完成一个用户管理系统的需求分析、架构设计、开发、测试和部署方案"

# 查看团队状态看板
clawteam board show user-system-team

# 输出示例：
# ┌─────────────┬──────────────────┬──────────┐
# │ Agent       │ 任务             │ 状态     │
# ├─────────────┼──────────────────┼──────────┤
# │ 产品经理    │ 梳理需求         │ ✅ 完成  │
# │ 架构师      │ 设计系统架构     │ 🟡 进行中│
# │ 后端工程师  │ 开发接口         │ 🔵 待开始│
# │ 测试工程师  │ 编写测试         │ ⏸️ 阻塞  │
# └─────────────┴──────────────────┴──────────┘</code></pre>
            <div class="step-notes">
              <p><strong>监控管理：</strong>实时查看各角色状态、依赖关系和当前阻塞点。</p>
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
.leader-layer {
  padding: 20px 0;
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
.worker-layer {
  padding: 20px 0;
}

.worker-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 700px;
}

.worker-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
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
}

.worker-env {
  font-size: 11px;
  color: var(--primary);
  font-weight: 500;
}

.worker-info {
  font-size: 10px;
  color: var(--text-muted);
}

/* 协调层 */
.coord-layer {
  padding: 20px 0;
}

.coord-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 800px;
}

.coord-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 102, 255, 0.05));
  border-radius: 10px;
  border: 1px solid rgba(0, 212, 170, 0.2);
  transition: all 0.3s;
}

.coord-item:hover {
  border-color: var(--secondary);
  transform: translateY(-2px);
}

.coord-icon {
  font-size: 20px;
}

.coord-name {
  font-size: 10px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  font-family: monospace;
}

.coord-desc {
  font-size: 10px;
  color: var(--text-muted);
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

/* Gateway层 */
.gateway-layer {
  padding: 20px 0;
}

.gateway-functions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
}

.func-tag {
  padding: 4px 12px;
  background: rgba(0, 102, 255, 0.1);
  border-radius: 16px;
  font-size: 11px;
  color: var(--primary);
  font-weight: 500;
}

/* Agent层 */
.agent-layer {
  padding: 20px 0;
}

.agent-hierarchy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.agent-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 24px;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--border);
  text-align: center;
  transition: all 0.3s;
}

.agent-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 102, 255, 0.15);
}

.agent-box.supervisor {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(139, 92, 246, 0.1));
  border-color: var(--primary);
  min-width: 280px;
}

.agent-children {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 700px;
}

.agent-box.worker {
  border-color: var(--secondary);
}

.agent-icon {
  font-size: 28px;
}

.agent-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.agent-desc {
  font-size: 11px;
  color: var(--text-muted);
}

/* Runtime层 */
.runtime-layer {
  padding: 20px 0;
}

.runtime-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 700px;
}

.runtime-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  border-radius: 10px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
}

.runtime-item:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
}

.runtime-icon {
  font-size: 26px;
}

.runtime-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

.runtime-desc {
  font-size: 10px;
  color: var(--text-muted);
}

/* Skills层 */
.skills-layer {
  padding: 20px 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 800px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 12px;
  background: white;
  border-radius: 10px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.skill-item:hover {
  border-color: var(--secondary);
  transform: scale(1.05);
}

.skill-icon {
  font-size: 24px;
}

.skill-name {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

/* Memory层 */
.memory-layer {
  padding: 20px 0;
}

.memory-boxes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 800px;
}

.memory-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 10px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.memory-box:hover {
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}

.memory-icon {
  font-size: 24px;
}

.memory-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.memory-desc {
  font-size: 10px;
  color: var(--text-muted);
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
