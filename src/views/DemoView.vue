<template>
  <div class="demo-view">
    <h1 class="page-title">实践演示</h1>
    
    <div class="demo-intro">
      <p class="intro-text">
        通过交互式演示，体验AI智能体的实际工作流程。
        以下模拟了一个<strong>多智能体协作开发Web应用</strong>的完整过程。
      </p>
    </div>
    
    <!-- 演示控制台 -->
    <div class="demo-console glass-card">
      <div class="console-header">
        <div class="console-tabs">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            class="console-tab"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            <span class="tab-icon">{{ tab.icon }}</span>
            <span>{{ tab.name }}</span>
          </button>
        </div>
        <div class="console-actions">
          <button class="btn-icon" @click="resetDemo" title="重置演示">
            ↻
          </button>
          <button class="btn-icon" @click="toggleAutoPlay" title="自动播放">
            {{ isPlaying ? '⏸' : '▶' }}
          </button>
        </div>
      </div>
      
      <div class="console-body">
        <!-- 团队视图 -->
        <div v-if="activeTab === 0" class="view-team">
          <div class="team-stats">
            <div class="stat-card">
              <div class="stat-icon">👥</div>
              <div class="stat-info">
                <div class="stat-value">{{ agents.length }}</div>
                <div class="stat-label">智能体</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">📋</div>
              <div class="stat-info">
                <div class="stat-value">{{ tasks.length }}</div>
                <div class="stat-label">任务</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">✅</div>
              <div class="stat-info">
                <div class="stat-value">{{ completedTasks }}</div>
                <div class="stat-label">已完成</div>
              </div>
            </div>
          </div>
          
          <div class="agents-grid">
            <div 
              v-for="agent in agents" 
              :key="agent.id"
              class="agent-tile"
              :class="{ active: agent.status === 'working', idle: agent.status === 'idle' }"
              @click="selectAgent(agent)"
            >
              <div class="agent-avatar">{{ agent.avatar }}</div>
              <div class="agent-info">
                <div class="agent-name">{{ agent.name }}</div>
                <div class="agent-role">{{ agent.role }}</div>
                <div class="agent-status-badge" :class="agent.status">
                  {{ agent.statusText }}
                </div>
              </div>
              <div class="agent-activity" v-if="agent.currentTask">
                <div class="activity-bar">
                  <div class="activity-progress" :style="{ width: agent.progress + '%' }"></div>
                </div>
                <div class="activity-text">{{ agent.currentTask }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 任务看板 -->
        <div v-if="activeTab === 1" class="view-board">
          <div class="board-columns">
            <div class="board-column">
              <h3 class="column-header pending">
                <span class="column-dot"></span>
                待处理
                <span class="column-count">{{ pendingTasks.length }}</span>
              </h3>
              <div class="column-tasks">
                <div 
                  v-for="task in pendingTasks" 
                  :key="task.id"
                  class="task-card"
                  draggable="true"
                  @dragstart="dragTask(task)"
                >
                  <div class="task-priority" :class="task.priority"></div>
                  <div class="task-title">{{ task.title }}</div>
                  <div class="task-meta">
                    <span class="task-assignee">{{ task.assignee || '未分配' }}</span>
                    <span class="task-id">#{{ task.id }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="board-column">
              <h3 class="column-header inprogress">
                <span class="column-dot"></span>
                进行中
                <span class="column-count">{{ inProgressTasks.length }}</span>
              </h3>
              <div class="column-tasks">
                <div 
                  v-for="task in inProgressTasks" 
                  :key="task.id"
                  class="task-card active"
                >
                  <div class="task-priority" :class="task.priority"></div>
                  <div class="task-title">{{ task.title }}</div>
                  <div class="task-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: task.progress + '%' }"></div>
                    </div>
                    <span>{{ task.progress }}%</span>
                  </div>
                  <div class="task-meta">
                    <span class="task-assignee">{{ task.assignee }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="board-column">
              <h3 class="column-header completed">
                <span class="column-dot"></span>
                已完成
                <span class="column-count">{{ doneTasks.length }}</span>
              </h3>
              <div class="column-tasks">
                <div 
                  v-for="task in doneTasks" 
                  :key="task.id"
                  class="task-card done"
                >
                  <div class="task-title">{{ task.title }}</div>
                  <div class="task-meta">
                    <span class="task-assignee">{{ task.assignee }}</span>
                    <span class="task-done">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 终端视图 -->
        <div v-if="activeTab === 2" class="view-terminal">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="terminal-title">clawteam console</span>
            </div>
            <div class="terminal-body" ref="terminalBody">
              <div 
                v-for="(line, index) in terminalLines" 
                :key="index"
                class="terminal-line"
                :class="line.type"
              >
                <span class="line-prompt" v-if="line.type === 'command'">$</span>
                <span class="line-content">{{ line.content }}</span>
              </div>
              <div class="terminal-input">
                <span class="input-prompt">$</span>
                <span class="input-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 消息视图 -->
        <div v-if="activeTab === 3" class="view-messages">
          <div class="message-list" ref="messageList">
            <div 
              v-for="(msg, index) in messages" 
              :key="index"
              class="message-item"
              :class="msg.type"
            >
              <div class="message-avatar">{{ msg.avatar }}</div>
              <div class="message-content">
                <div class="message-header">
                  <span class="message-from">{{ msg.from }}</span>
                  <span class="message-time">{{ msg.time }}</span>
                </div>
                <div class="message-text">{{ msg.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 演示控制 -->
    <div class="demo-controls">
      <button 
        class="control-btn"
        :class="{ active: currentStep === index }"
        v-for="(step, index) in demoSteps" 
        :key="index"
        @click="goToStep(index)"
      >
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-info">
          <div class="step-title">{{ step.title }}</div>
          <div class="step-desc">{{ step.desc }}</div>
        </div>
      </button>
    </div>
    
    <!-- 交互提示 -->
    <div class="interaction-tips glass-card">
      <h3>💡 交互提示</h3>
      <ul>
        <li>点击<strong>智能体卡片</strong>查看详细状态</li>
        <li>在<strong>任务看板</strong>中拖拽任务卡片</li>
        <li>观察<strong>终端</strong>中的实时命令执行</li>
        <li>查看<strong>消息</strong>了解智能体间通信</li>
        <li>使用<strong>自动播放</strong>观看完整演示流程</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const tabs = [
  { name: '团队', icon: '👥' },
  { name: '看板', icon: '📋' },
  { name: '终端', icon: '💻' },
  { name: '消息', icon: '💬' },
]

const activeTab = ref(0)
const isPlaying = ref(false)
const currentStep = ref(0)

const agents = ref([
  { id: 1, name: 'Leader', role: '团队负责人', avatar: '👑', status: 'working', statusText: '协调中', currentTask: '分配任务', progress: 60 },
  { id: 2, name: 'Alice', role: '架构师', avatar: '🏗️', status: 'working', statusText: '设计中', currentTask: '数据库设计', progress: 45 },
  { id: 3, name: 'Bob', role: '后端开发', avatar: '⚙️', status: 'idle', statusText: '等待中', currentTask: null, progress: 0 },
  { id: 4, name: 'Carol', role: '前端开发', avatar: '🎨', status: 'idle', statusText: '等待中', currentTask: null, progress: 0 },
  { id: 5, name: 'Dave', role: '测试工程师', avatar: '🧪', status: 'idle', statusText: '等待中', currentTask: null, progress: 0 },
])

const tasks = ref([
  { id: '001', title: '设计数据库架构', assignee: 'Alice', priority: 'high', status: 'inprogress', progress: 45 },
  { id: '002', title: '实现用户认证API', assignee: null, priority: 'high', status: 'pending', progress: 0 },
  { id: '003', title: '开发前端登录页', assignee: null, priority: 'medium', status: 'pending', progress: 0 },
  { id: '004', title: '编写单元测试', assignee: null, priority: 'medium', status: 'pending', progress: 0 },
  { id: '005', title: '部署到测试环境', assignee: null, priority: 'low', status: 'pending', progress: 0 },
])

const terminalLines = ref([
  { type: 'output', content: 'ClawTeam v0.3.0 - Multi-agent swarm coordination' },
  { type: 'output', content: '' },
  { type: 'command', content: 'clawteam team spawn-team webapp -d "构建Web应用" -n leader' },
  { type: 'output', content: '✓ Team "webapp" created successfully' },
  { type: 'output', content: '  Data directory: ~/.clawteam/teams/webapp' },
  { type: 'output', content: '' },
])

const messages = ref([
  { type: 'broadcast', from: 'Leader', avatar: '👑', time: '10:00', content: '团队已创建，开始分配任务' },
  { type: 'direct', from: 'Alice', avatar: '🏗️', time: '10:02', content: '收到数据库设计任务，开始分析需求' },
  { type: 'broadcast', from: 'Leader', avatar: '👑', time: '10:05', content: '@Bob 请准备接手API开发任务' },
])

const demoSteps = [
  { title: '创建团队', desc: '初始化项目和工作区' },
  { title: '分配任务', desc: '创建任务并设置依赖' },
  { title: '启动智能体', desc: '并行执行开发任务' },
  { title: '协作通信', desc: '智能体间消息同步' },
  { title: '成果合并', desc: '整合各工作区代码' },
]

const pendingTasks = computed(() => tasks.value.filter(t => t.status === 'pending'))
const inProgressTasks = computed(() => tasks.value.filter(t => t.status === 'inprogress'))
const doneTasks = computed(() => tasks.value.filter(t => t.status === 'completed'))
const completedTasks = computed(() => doneTasks.value.length)

let playInterval = null

const toggleAutoPlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    playInterval = setInterval(() => {
      currentStep.value = (currentStep.value + 1) % demoSteps.length
      simulateStep()
    }, 3000)
  } else {
    clearInterval(playInterval)
  }
}

const resetDemo = () => {
  currentStep.value = 0
  isPlaying.value = false
  clearInterval(playInterval)
}

const goToStep = (index) => {
  currentStep.value = index
  simulateStep()
}

const simulateStep = () => {
  // 模拟不同步骤的效果
  const step = currentStep.value
  
  if (step === 1) {
    // 分配任务
    addTerminalLine('command', 'clawteam task create webapp "实现API" -o Bob --blocked-by 001')
    addTerminalLine('output', '✓ Task created: #002')
  } else if (step === 2) {
    // 启动智能体
    addTerminalLine('command', 'clawteam spawn --team webapp --agent-name Bob --task "实现API"')
    addTerminalLine('output', '✓ Agent Bob spawned in tmux window')
    agents.value[2].status = 'working'
    agents.value[2].statusText = '编码中'
    agents.value[2].currentTask = '实现用户认证API'
    agents.value[2].progress = 30
  } else if (step === 3) {
    // 发送消息
    addMessage('Bob', '⚙️', 'API接口设计完成，开始实现业务逻辑')
  }
}

const addTerminalLine = (type, content) => {
  terminalLines.value.push({ type, content })
  nextTick(() => {
    const terminal = document.querySelector('.terminal-body')
    if (terminal) terminal.scrollTop = terminal.scrollHeight
  })
}

const addMessage = (from, avatar, content) => {
  const now = new Date()
  const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
  messages.value.push({ type: 'direct', from, avatar, time, content })
}

const selectAgent = (agent) => {
  activeTab.value = 0
  // 可以添加更多交互
}

const dragTask = (task) => {
  // 拖拽功能
}

onUnmounted(() => {
  clearInterval(playInterval)
})
</script>

<style scoped>
.demo-view {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.demo-intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro-text {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.intro-text strong {
  color: var(--primary);
}

.demo-console {
  margin-bottom: 32px;
  overflow: hidden;
}

.console-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border);
}

.console-tabs {
  display: flex;
  gap: 8px;
}

.console-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.console-tab:hover {
  background: white;
  color: var(--text-primary);
}

.console-tab.active {
  background: white;
  border-color: var(--primary);
  color: var(--primary);
}

.tab-icon {
  font-size: 16px;
}

.console-actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: white;
  border: 1px solid var(--border);
  font-size: 16px;
  cursor: pointer;
  transition: var(--transition);
}

.btn-icon:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.console-body {
  min-height: 400px;
  padding: 20px;
}

/* 团队视图 */
.view-team {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.team-stats {
  display: flex;
  gap: 16px;
}

.stat-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: var(--radius);
}

.stat-icon {
  font-size: 32px;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 13px;
  color: var(--text-muted);
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.agent-tile {
  background: white;
  border-radius: var(--radius);
  padding: 20px;
  border: 2px solid var(--border);
  cursor: pointer;
  transition: var(--transition);
}

.agent-tile:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.agent-tile.active {
  border-color: var(--secondary);
  background: rgba(0, 212, 170, 0.05);
}

.agent-avatar {
  font-size: 40px;
  margin-bottom: 12px;
}

.agent-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.agent-role {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.agent-status-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}

.agent-status-badge.working {
  background: rgba(0, 212, 170, 0.1);
  color: var(--secondary);
}

.agent-status-badge.idle {
  background: var(--bg-tertiary);
  color: var(--text-muted);
}

.agent-activity {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.activity-bar {
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;
}

.activity-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
  transition: width 0.3s ease;
}

.activity-text {
  font-size: 12px;
  color: var(--text-muted);
}

/* 看板视图 */
.view-board {
  height: 100%;
}

.board-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: 100%;
}

.board-column {
  background: var(--bg-tertiary);
  border-radius: var(--radius);
  padding: 16px;
}

.column-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.column-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.column-header.pending .column-dot { background: var(--text-muted); }
.column-header.inprogress .column-dot { background: var(--primary); }
.column-header.completed .column-dot { background: var(--secondary); }

.column-count {
  margin-left: auto;
  background: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: var(--text-muted);
}

.column-tasks {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-card {
  background: white;
  border-radius: var(--radius-sm);
  padding: 16px;
  border: 1px solid var(--border);
  cursor: grab;
  transition: var(--transition);
}

.task-card:hover {
  box-shadow: var(--shadow);
}

.task-card.active {
  border-color: var(--primary);
}

.task-card.done {
  opacity: 0.7;
  border-color: var(--secondary);
}

.task-priority {
  width: 4px;
  height: 20px;
  border-radius: 2px;
  margin-bottom: 8px;
}

.task-priority.high { background: var(--accent); }
.task-priority.medium { background: var(--primary); }
.task-priority.low { background: var(--text-muted); }

.task-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.task-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.task-progress .progress-bar {
  flex: 1;
  height: 4px;
}

.task-progress span {
  font-size: 11px;
  color: var(--text-muted);
}

.task-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-muted);
}

.task-done {
  color: var(--secondary);
  font-weight: 600;
}

/* 终端视图 */
.view-terminal {
  height: 100%;
}

.terminal-window {
  background: #1a1a2e;
  border-radius: var(--radius);
  overflow: hidden;
  height: 100%;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.terminal-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dots span:nth-child(1) { background: #ff5f56; }
.terminal-dots span:nth-child(2) { background: #ffbd2e; }
.terminal-dots span:nth-child(3) { background: #27ca40; }

.terminal-title {
  font-size: 13px;
  color: #8892b0;
}

.terminal-body {
  padding: 16px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.8;
  color: #e2e8f0;
  height: calc(100% - 44px);
  overflow-y: auto;
}

.terminal-line {
  margin-bottom: 4px;
}

.terminal-line.command {
  color: #64d2ff;
}

.line-prompt {
  margin-right: 8px;
  color: var(--secondary);
}

.terminal-input {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.input-prompt {
  margin-right: 8px;
  color: var(--secondary);
}

.input-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 消息视图 */
.view-messages {
  height: 100%;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.message-item.broadcast {
  background: rgba(0, 102, 255, 0.05);
  border-color: rgba(0, 102, 255, 0.2);
}

.message-avatar {
  font-size: 28px;
}

.message-content {
  flex: 1;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.message-from {
  font-weight: 600;
  color: var(--text-primary);
}

.message-time {
  font-size: 12px;
  color: var(--text-muted);
}

.message-text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 演示控制 */
.demo-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  text-align: left;
  min-width: 200px;
}

.control-btn:hover {
  border-color: var(--primary);
}

.control-btn.active {
  border-color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-muted);
}

.control-btn.active .step-number {
  background: var(--primary);
  color: white;
}

.step-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
}

.step-desc {
  font-size: 12px;
  color: var(--text-muted);
}

/* 交互提示 */
.interaction-tips {
  padding: 24px;
}

.interaction-tips h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

.interaction-tips ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.interaction-tips li {
  font-size: 14px;
  color: var(--text-secondary);
  padding-left: 20px;
  position: relative;
}

.interaction-tips li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

.interaction-tips strong {
  color: var(--primary);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .team-stats {
    flex-direction: column;
  }
  
  .board-columns {
    grid-template-columns: 1fr;
  }
  
  .demo-controls {
    flex-direction: column;
  }
  
  .control-btn {
    min-width: auto;
  }
  
  .interaction-tips ul {
    grid-template-columns: 1fr;
  }
}
</style>
