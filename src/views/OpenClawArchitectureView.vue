<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 架构流程图</h1>

    <!-- Tab 导航 -->
    <div class="tab-nav">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        class="tab-btn"
        :class="{ active: activeTab === i }"
        @click="activeTab = i"
      >{{ tab.icon }} {{ tab.label }}</button>
    </div>

    <!-- Tab 0: 架构流程图 -->
    <div v-show="activeTab === 0">
    <div class="flow-diagram">
      <!-- 用户入口 -->
      <div class="flow-row">
        <div class="flow-box user-box">
          <span class="box-icon">👤</span>
          <span class="box-label">用户</span>
        </div>
      </div>
      
      <!-- 向下箭头 -->
      <div class="arrow-container">
        <img src="/arrow-down.svg" class="arrow-svg" alt="down" />
      </div>
      
      <!-- Channel 频道层 -->
      <div class="flow-row channels">
        <div class="flow-box channel-box" v-for="ch in channels" :key="ch.name">
          <span class="box-icon">{{ ch.icon }}</span>
          <span class="box-label">{{ ch.name }}</span>
        </div>
      </div>
      
      <!-- 汇聚箭头 -->
      <div class="arrow-container">
        <img src="/chevron-down.svg" class="arrow-svg large" alt="converge" />
      </div>
      
      <!-- Gateway 网关 -->
      <div class="flow-row">
        <div class="flow-box gateway-box">
          <span class="box-icon">🚪</span>
          <span class="box-label">Gateway 网关</span>
          <div class="box-tags">
            <span class="tag">路由转发</span>
            <span class="tag">消息管理</span>
            <span class="tag">权限校验</span>
            <span class="tag">Hooks</span>
          </div>
        </div>
      </div>
      
      <!-- Checkpoint 检查点机制 -->
      <div class="branch-row checkpoint-branch">
        <div class="branch-label">Checkpoint 检查点机制 - 任务状态持久化</div>
        <div class="checkpoint-flow">
          <div class="checkpoint-step">
            <span class="step-icon">💾</span>
            <span class="step-name">定期保存</span>
            <span class="step-desc">每 5 步自动落盘</span>
          </div>
          <img src="/arrow-right.svg" class="arrow-svg small" alt="right" />
          <div class="checkpoint-step">
            <span class="step-icon">📝</span>
            <span class="step-name">状态快照</span>
            <span class="step-desc">已完成步骤+中间结果</span>
          </div>
          <img src="/arrow-right.svg" class="arrow-svg small" alt="right" />
          <div class="checkpoint-step">
            <span class="step-icon">⚡</span>
            <span class="step-name">中断恢复</span>
            <span class="step-desc">加载检查点继续执行</span>
          </div>
          <img src="/arrow-right.svg" class="arrow-svg small" alt="right" />
          <div class="checkpoint-step">
            <span class="step-icon">✅</span>
            <span class="step-name">断点续传</span>
            <span class="step-desc">无需从头开始</span>
          </div>
        </div>
        <div class="checkpoint-storage">
          <span class="storage-label">存储方式：</span>
          <span class="storage-item">JSON - 任务配置</span>
          <span class="storage-item">SQLite - 结构化数据</span>
        </div>
      </div>
      
      <!-- 向下箭头 -->
      <div class="arrow-container">
        <img src="/arrow-down.svg" class="arrow-svg" alt="down" />
      </div>
      
      <!-- Node 节点层 -->
      <div class="flow-row nodes">
        <div class="flow-box node-box" v-for="node in nodes" :key="node.name">
          <span class="box-icon">{{ node.icon }}</span>
          <span class="box-label">{{ node.name }}</span>
          <span class="box-sub">{{ node.type }}</span>
        </div>
      </div>
      
      <!-- 横向连接箭头 -->
      <div class="arrow-container horizontal-arrows">
        <img src="/arrow-left.svg" class="arrow-svg" alt="left" />
        <span class="arrow-label">Session 会话同步</span>
        <img src="/arrow-right.svg" class="arrow-svg" alt="right" />
      </div>
      
      <!-- Session 会话 -->
      <div class="flow-row">
        <div class="flow-box session-box">
          <span class="box-icon">💬</span>
          <span class="box-label">Session 会话</span>
          <div class="box-tags">
            <span class="tag">消息历史</span>
            <span class="tag">上下文</span>
            <span class="tag">Logs</span>
          </div>
        </div>
      </div>
      
      <!-- 向下箭头 -->
      <div class="arrow-container">
        <img src="/arrow-down.svg" class="arrow-svg" alt="down" />
      </div>
      
      <!-- 执行核心 -->
      <div class="core-section">
        <div class="core-left">
          <div class="side-title">执行单元</div>
          <div class="exec-boxes">
            <div class="flow-box exec-box">
              <span class="box-icon">🤖</span>
              <span class="box-label">Agent 代理</span>
              <div class="box-mini">Sub-agent / Agents / Work Runs</div>
            </div>
            <div class="flow-box exec-box">
              <span class="box-icon">⏰</span>
              <span class="box-label">Cron 定时任务</span>
              <div class="box-mini">定时 / 周期 / 延迟</div>
            </div>
            <div class="flow-box exec-box">
              <span class="box-icon">🔄</span>
              <span class="box-label">Workflow 工作流</span>
              <div class="box-mini">Work Tree / Pipeline</div>
            </div>
          </div>
        </div>
        
        <div class="core-center">
          <div class="center-title">能力支撑</div>
          <div class="capability-grid">
            <div class="cap-item" v-for="cap in capabilities" :key="cap.name">
              <span class="cap-icon">{{ cap.icon }}</span>
              <span class="cap-name">{{ cap.name }}</span>
              <span class="cap-desc">{{ cap.desc }}</span>
            </div>
          </div>
          
          <!-- 任务执行详细流程 -->
          <div class="task-flow">
            <div class="task-step">
              <span class="step-dot">1</span>
              <span class="step-name">Skill选择</span>
            </div>
            <img src="/arrow-right.svg" class="arrow-svg tiny" alt="right" />
            <div class="task-step">
              <span class="step-dot">2</span>
              <span class="step-name">步骤编排</span>
            </div>
            <img src="/arrow-right.svg" class="arrow-svg tiny" alt="right" />
            <div class="task-step">
              <span class="step-dot">3</span>
              <span class="step-name">执行</span>
            </div>
            <img src="/arrow-right.svg" class="arrow-svg tiny" alt="right" />
            <div class="task-step">
              <span class="step-dot">4</span>
              <span class="step-name">轮询进度</span>
            </div>
          </div>
          
          <!-- 失败重试机制 -->
          <div class="retry-box">
            <span class="retry-label">失败重试机制</span>
            <div class="retry-flow">
              <span class="retry-item">检测失败</span>
              <img src="/arrow-right.svg" class="arrow-svg tiny" alt="right" />
              <span class="retry-item">指数退避</span>
              <img src="/arrow-right.svg" class="arrow-svg tiny" alt="right" />
              <span class="retry-item">重试(最多3次)</span>
              <img src="/arrow-right.svg" class="arrow-svg tiny" alt="right" />
              <span class="retry-item">失败转移</span>
            </div>
          </div>
        </div>
        
        <div class="core-right">
          <div class="side-title">数据存储</div>
          <div class="storage-boxes">
            <div class="flow-box storage-box">
              <span class="box-icon">📁</span>
              <span class="box-label">Files 文件</span>
            </div>
            <div class="flow-box storage-box">
              <span class="box-icon">🧠</span>
              <span class="box-label">Memory 记忆</span>
            </div>
            <div class="flow-box storage-box">
              <span class="box-icon">📊</span>
              <span class="box-label">Logs 日志</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 向下箭头 -->
      <div class="arrow-container">
        <img src="/arrow-down.svg" class="arrow-svg" alt="down" />
      </div>
      
      <!-- 外部集成 -->
      <div class="external-section">
        <div class="external-title">外部集成</div>
        <div class="external-groups">
          <div class="ext-group model-group">
            <div class="ext-label">🤖 大模型 Model</div>
            <div class="ext-items">
              <span class="ext-item">OpenAI</span>
              <span class="ext-item">Claude</span>
              <span class="ext-item">Gemini</span>
              <span class="ext-item">Kimi</span>
            </div>
          </div>
          <div class="ext-group tools-group">
            <div class="ext-label">🔧 开发工具 Tools</div>
            <div class="ext-items">
              <span class="ext-item">Git</span>
              <span class="ext-item">Docker</span>
              <span class="ext-item">Jenkins</span>
              <span class="ext-item">VSCode</span>
            </div>
          </div>
          <div class="ext-group skills-group">
            <div class="ext-label">📦 技能 Skills</div>
            <div class="ext-items">
              <span class="ext-item">ClawHub</span>
              <span class="ext-item">自定义</span>
              <span class="ext-item">插件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 数据流向 -->
    <div class="flow-legend">
      <h3 class="legend-title">数据流向</h3>
      <div class="legend-items">
        <div class="legend-item" v-for="(step, index) in flowSteps" :key="index">
          <span class="step-num">{{ index + 1 }}</span>
          <span class="step-text">{{ step }}</span>
        </div>
      </div>
    </div>
    
    <!-- 概念详解 -->
    <div class="concepts-section">
      <h3 class="section-title">核心概念详解</h3>
      <div class="concepts-grid">
        <div class="concept-card" v-for="concept in concepts" :key="concept.name">
          <h4>{{ concept.name }}</h4>
          <p>{{ concept.desc }}</p>
        </div>
      </div>
    </div>
    
    <!-- 核心工程优势 -->
    <div class="advantages-section">
      <h3 class="section-title">核心工程优势</h3>
      <div class="advantages-grid">
        <div class="advantage-card" v-for="adv in advantages" :key="adv.title">
          <div class="adv-icon">{{ adv.icon }}</div>
          <div class="adv-content">
            <h4>{{ adv.title }}</h4>
            <p>{{ adv.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Tab 1: 概念详解 -->
    <div v-show="activeTab === 1">
      <div class="concepts-section">
        <h3 class="section-title">核心概念详解</h3>
        <div class="concepts-grid">
          <div class="concept-card" v-for="concept in concepts" :key="concept.name">
            <h4>{{ concept.name }}</h4>
            <p>{{ concept.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 2: 工程优势 -->
    <div v-show="activeTab === 2">
      <div class="advantages-section">
        <h3 class="section-title">核心工程优势</h3>
        <div class="advantages-grid">
          <div class="advantage-card" v-for="adv in advantages" :key="adv.title">
            <div class="adv-icon">{{ adv.icon }}</div>
            <div class="adv-content">
              <h4>{{ adv.title }}</h4>
              <p>{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  { icon: '🏗️', label: '架构流程图' },
  { icon: '📖', label: '概念详解' },
  { icon: '⚡', label: '工程优势' },
]

const channels = [
  { name: 'CLI', icon: '💻' },
  { name: 'Web UI', icon: '🌐' },
  { name: 'IM工具', icon: '💬' },
  { name: 'API', icon: '🔗' },
  { name: '移动端', icon: '📱' },
  { name: 'Webhook', icon: '🪝' },
]

const nodes = [
  { name: '本地节点', icon: '🏠', type: 'Workspace' },
  { name: '沙箱节点', icon: '📦', type: 'Isolated' },
  { name: '执行节点', icon: '⚙️', type: 'Runtime' },
]

const capabilities = [
  { name: 'Skills', icon: '📦', desc: '把复杂能力封装成可复用技能模块' },
  { name: 'Model', icon: '🤖', desc: '负责理解、推理、规划与生成' },
  { name: 'Tools', icon: '🔧', desc: '连接命令行、文件、浏览器、API 等外部能力' },
  { name: 'Memory', icon: '🧠', desc: '管理上下文、长期记忆与状态恢复' },
]

const flowSteps = [
  '用户发送消息',
  'Channel接入',
  'Gateway路由',
  'Node执行',
  'Session管理',
  'Agent/Cron/Workflow处理',
  '调用Tools/Model/Memory',
  '返回结果'
]

const concepts = [
  { name: 'Channel', desc: '负责接入用户请求，可来自命令行、网页、API 或 IM 工具。' },
  { name: 'Gateway', desc: '负责消息路由、权限校验、会话管理和 Hook 处理，是所有请求的入口中枢。' },
  { name: 'Node', desc: '负责实际执行任务，每个 Node 都可以运行一个或多个智能体实例。' },
  { name: 'Session', desc: '负责维护上下文、消息记录和中间状态，让多轮任务保持连续性。' },
  { name: 'Agent / Cron / Workflow', desc: '真正执行任务的三种核心执行单元：单智能体、定时任务、工作流。' },
  { name: 'Skills / Model / Tools / Memory', desc: '分别负责能力扩展、智能推理、外部动作执行和长期记忆管理。' },
  { name: 'Checkpoint', desc: '负责任务状态持久化，异常中断后可从检查点恢复执行。' },
  { name: 'Workspaces', desc: '通过工作区隔离保证不同任务、不同角色之间互不污染。' },
]

const advantages = [
  { icon: '🔒', title: '私有化部署', desc: '代码与数据不出内网，避免核心代码泄露；支持消费级显卡个人电脑部署，无需共享服务器，数据安全性更高。' },
  { icon: '⚡', title: '低资源占用', desc: '4核CPU、8GB内存、中端消费级显卡（8GB显存）即可稳定运行，适合开发机、私有服务器、个人电脑部署。' },
  { icon: '🛠️', title: '易于二次开发', desc: '模块化架构，接口清晰，可根据团队需求定制功能；二次开发后，仍可适配消费级显卡，无需升级硬件。' },
  { icon: '💾', title: '断点续传', desc: '支持长时间任务中断后恢复，解决研发任务超时问题；针对消费级显卡优化，中断后重启不占用额外显存。' },
  { icon: '💻', title: '多模型与多平台', desc: '支持云端API与本地模型灵活切换；支持Windows/Linux/MacOS，适配主流消费级显卡（NVIDIA、AMD）。' }
]
</script>

<style scoped>
.architecture-view {
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

/* 流程图容器 */
.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 30px;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.03), rgba(0, 212, 170, 0.03));
  border-radius: 20px;
  border: 1px solid rgba(0, 102, 255, 0.1);
}

/* 流程行 */
.flow-row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
}

.channels {
  flex-wrap: wrap;
  gap: 10px;
}

.nodes {
  gap: 20px;
}

/* 流程盒子 */
.flow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
}

.flow-box:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.15);
  transform: translateY(-2px);
}

.box-icon {
  font-size: 28px;
}

.box-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.box-sub {
  font-size: 11px;
  color: var(--text-muted);
}

.box-mini {
  font-size: 10px;
  color: var(--text-muted);
  text-align: center;
}

.box-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-top: 4px;
}

.tag {
  padding: 2px 8px;
  background: rgba(0, 102, 255, 0.1);
  border-radius: 10px;
  font-size: 10px;
  color: var(--primary);
}

/* 用户盒子 - 白底 */
.user-box {
  background: white;
  border-color: var(--primary);
  padding: 20px 30px;
}

.user-box .box-icon {
  font-size: 36px;
}

/* Channel 盒子 */
.channel-box {
  min-width: 70px;
  padding: 12px 14px;
  background: white;
}

.channel-box .box-icon {
  font-size: 22px;
}

.channel-box .box-label {
  font-size: 11px;
}

/* Gateway 盒子 */
.gateway-box {
  min-width: 220px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-color: var(--primary);
}

/* SVG 箭头 */
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  width: 100%;
}

.arrow-svg {
  width: 24px;
  height: 24px;
  filter: invert(42%) sepia(85%) saturate(3548%) hue-rotate(210deg) brightness(100%) contrast(101%);
}

.arrow-svg.large {
  width: 32px;
  height: 32px;
}

.arrow-svg.small {
  width: 20px;
  height: 20px;
  transform: translateY(8%);
}

.arrow-svg.tiny {
  width: 16px;
  height: 16px;
}

/* 横向箭头 */
.horizontal-arrows {
  gap: 20px;
}

.arrow-label {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

/* Checkpoint 分支 */
.branch-row {
  width: 100%;
  margin: 20px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08));
  border-radius: 16px;
  border: 2px solid rgba(59, 130, 246, 0.3);
}

.branch-label {
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.checkpoint-flow {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.checkpoint-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid rgba(59, 130, 246, 0.2);
  min-width: 100px;
  transition: all 0.3s;
}

.checkpoint-step:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
}

.step-icon {
  font-size: 28px;
}

.step-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.step-desc {
  font-size: 10px;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.4;
}

.checkpoint-storage {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}

.storage-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
}

.storage-item {
  padding: 6px 12px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}



/* Node 盒子 */
.node-box {
  min-width: 110px;
  background: white;
}

/* Session 盒子 */
.session-box {
  min-width: 180px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 102, 255, 0.05));
  border-color: var(--secondary);
}

/* 执行核心区域 */
.core-section {
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  padding: 20px 0;
}

.core-left, .core-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.side-title {
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.exec-boxes, .storage-boxes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exec-box, .storage-box {
  padding: 14px;
  background: white;
}

.exec-box {
  border-color: var(--primary);
}

.storage-box {
  border-color: var(--secondary);
}

/* 能力中心 */
.core-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  gap: 16px;
}

.center-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.cap-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 14px 18px;
  background: white;
  border-radius: 10px;
  border: 2px solid var(--border);
  transition: all 0.3s;
}

.cap-item:hover {
  border-color: var(--primary);
  transform: scale(1.05);
}

.cap-icon {
  font-size: 22px;
}

.cap-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.cap-desc {
  font-size: 9px;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.3;
}

/* 任务执行流程 */
.task-flow {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(0, 102, 255, 0.05);
  border-radius: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.task-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.step-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

.step-name {
  font-size: 10px;
  color: var(--text-primary);
  font-weight: 500;
}

/* 失败重试机制 */
.retry-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(239, 68, 68, 0.05);
  border-radius: 10px;
  border: 1px dashed rgba(239, 68, 68, 0.3);
}

.retry-label {
  font-size: 11px;
  font-weight: 600;
  color: #ef4444;
}

.retry-flow {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
}

.retry-item {
  padding: 4px 10px;
  background: white;
  border-radius: 16px;
  font-size: 10px;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

/* 外部集成 */
.external-section {
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  margin-top: 10px;
}

.external-title {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 16px;
}

.external-groups {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.ext-group {
  flex: 1;
  min-width: 150px;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
}

.model-group {
  background: rgba(0, 102, 255, 0.08);
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.tools-group {
  background: rgba(0, 212, 170, 0.08);
  border: 1px solid rgba(0, 212, 170, 0.2);
}

.skills-group {
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.ext-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.ext-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.ext-item {
  padding: 4px 10px;
  background: white;
  border-radius: 16px;
  font-size: 11px;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

/* 数据流向 */
.flow-legend {
  margin-top: 40px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
}

.legend-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 20px;
}

.legend-items {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
}

.step-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
}

.step-text {
  font-size: 11px;
  color: var(--text-primary);
}

/* 概念详解 */
.concepts-section {
  margin-top: 50px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-primary);
  text-align: center;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.concept-card {
  background: white;
  border-radius: 12px;
  padding: 18px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.concept-card:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.1);
}

.concept-card h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.concept-card p {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 核心工程优势 */
.advantages-section {
  margin-top: 50px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.advantage-card {
  display: flex;
  gap: 16px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.04), rgba(0, 212, 170, 0.04));
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  transition: all 0.3s;
}

.advantage-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.3);
}

.adv-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.adv-content h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.adv-content p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .core-section {
    flex-direction: column;
  }
  
  .branch-flow {
    flex-direction: column;
  }
  
  .task-flow, .retry-flow {
    flex-direction: column;
  }
  
  .concepts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .legend-items {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .channels, .nodes {
    flex-wrap: wrap;
  }
  
  .concepts-grid {
    grid-template-columns: 1fr;
  }
  
  .external-groups {
    flex-direction: column;
  }
}
</style>
