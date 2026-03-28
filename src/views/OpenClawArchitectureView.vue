<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 架构流程图</h1>
    
    <div class="flow-diagram">
      <!-- 用户入口 -->
      <div class="flow-row entry-row">
        <div class="flow-box user-box">
          <span class="box-icon">👤</span>
          <span class="box-label">用户</span>
        </div>
      </div>
      
      <!-- 向下箭头 -->
      <div class="flow-arrow down">
        <span class="arrow-line"></span>
        <span class="arrow-head">▼</span>
      </div>
      
      <!-- Channel 频道层 -->
      <div class="flow-row channels-row">
        <div class="flow-box channel-box" v-for="ch in channels" :key="ch.name">
          <span class="box-icon">{{ ch.icon }}</span>
          <span class="box-label">{{ ch.name }}</span>
        </div>
      </div>
      
      <!-- 汇聚箭头 -->
      <div class="flow-arrow converge">
        <div class="converge-lines">
          <span class="c-line"></span>
          <span class="c-line"></span>
          <span class="c-line"></span>
          <span class="c-line"></span>
          <span class="c-line"></span>
          <span class="c-line"></span>
        </div>
        <span class="arrow-head">▼</span>
      </div>
      
      <!-- Gateway 网关 -->
      <div class="flow-row gateway-row">
        <div class="flow-box gateway-box">
          <span class="box-icon">🚪</span>
          <span class="box-label">Gateway 网关</span>
          <div class="box-tags">
            <span class="tag">路由</span>
            <span class="tag">认证</span>
            <span class="tag">Hooks</span>
            <span class="tag">Check Port</span>
          </div>
        </div>
      </div>
      
      <!-- 分支箭头 -->
      <div class="flow-arrow branch">
        <span class="arrow-head">▼</span>
        <div class="branch-lines">
          <span class="b-line to-left"></span>
          <span class="b-line to-right"></span>
        </div>
      </div>
      
      <!-- Node 节点层 -->
      <div class="flow-row nodes-row">
        <div class="flow-box node-box" v-for="node in nodes" :key="node.name">
          <span class="box-icon">{{ node.icon }}</span>
          <span class="box-label">{{ node.name }}</span>
          <span class="box-sub">{{ node.type }}</span>
        </div>
      </div>
      
      <!-- 横向连接线 -->
      <div class="flow-connector horizontal">
        <span class="h-line"></span>
        <span class="arrow-head left">◀</span>
        <span class="arrow-head right">▶</span>
      </div>
      
      <!-- Session 会话 -->
      <div class="flow-row session-row">
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
      <div class="flow-arrow down">
        <span class="arrow-line"></span>
        <span class="arrow-head">▼</span>
      </div>
      
      <!-- 执行核心 -->
      <div class="flow-row core-row">
        <div class="core-container">
          <!-- 左侧：执行单元 -->
          <div class="core-side">
            <div class="side-title">执行单元</div>
            <div class="core-boxes">
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
          
          <!-- 中间：能力支撑 -->
          <div class="core-center">
            <div class="center-title">能力支撑</div>
            <div class="capability-ring">
              <div class="cap-item" v-for="cap in capabilities" :key="cap.name">
                <span class="cap-icon">{{ cap.icon }}</span>
                <span class="cap-name">{{ cap.name }}</span>
              </div>
            </div>
          </div>
          
          <!-- 右侧：存储 -->
          <div class="core-side">
            <div class="side-title">数据存储</div>
            <div class="core-boxes">
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
      </div>
      
      <!-- 向下箭头 -->
      <div class="flow-arrow down">
        <span class="arrow-line"></span>
        <span class="arrow-head">▼</span>
      </div>
      
      <!-- 外部集成 -->
      <div class="flow-row external-row">
        <div class="external-title">外部集成</div>
        <div class="external-groups">
          <div class="ext-group">
            <div class="ext-label">大模型 Model</div>
            <div class="ext-items">
              <span class="ext-item">OpenAI</span>
              <span class="ext-item">Claude</span>
              <span class="ext-item">Gemini</span>
              <span class="ext-item">Kimi</span>
            </div>
          </div>
          <div class="ext-group">
            <div class="ext-label">开发工具 Tools</div>
            <div class="ext-items">
              <span class="ext-item">Git</span>
              <span class="ext-item">Docker</span>
              <span class="ext-item">Jenkins</span>
              <span class="ext-item">VSCode</span>
            </div>
          </div>
          <div class="ext-group">
            <div class="ext-label">技能 Skills</div>
            <div class="ext-items">
              <span class="ext-item">ClawHub</span>
              <span class="ext-item">自定义</span>
              <span class="ext-item">插件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 数据流向说明 -->
    <div class="flow-legend">
      <h3 class="legend-title">数据流向</h3>
      <div class="legend-flow">
        <div class="legend-step">
          <span class="step-num">1</span>
          <span class="step-text">用户通过 Channel 发送消息</span>
        </div>
        <span class="flow-dir">→</span>
        <div class="legend-step">
          <span class="step-num">2</span>
          <span class="step-text">Gateway 路由到 Node</span>
        </div>
        <span class="flow-dir">→</span>
        <div class="legend-step">
          <span class="step-num">3</span>
          <span class="step-text">Session 维护上下文</span>
        </div>
        <span class="flow-dir">→</span>
        <div class="legend-step">
          <span class="step-num">4</span>
          <span class="step-text">Agent/Cron/Workflow 执行</span>
        </div>
        <span class="flow-dir">→</span>
        <div class="legend-step">
          <span class="step-num">5</span>
          <span class="step-text">调用 Tools/Model/Memory</span>
        </div>
        <span class="flow-dir">→</span>
        <div class="legend-step">
          <span class="step-num">6</span>
          <span class="step-text">返回结果给用户</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const channels = [
  { name: 'Signal', icon: '💬' },
  { name: 'Telegram', icon: '✈️' },
  { name: 'Discord', icon: '🎮' },
  { name: 'WebChat', icon: '🌐' },
  { name: 'WhatsApp', icon: '📱' },
  { name: 'API', icon: '🔗' },
]

const nodes = [
  { name: '本地节点', icon: '🏠', type: 'Local' },
  { name: '云端节点', icon: '☁️', type: 'Cloud' },
  { name: '边缘节点', icon: '📟', type: 'Edge' },
]

const capabilities = [
  { name: 'Tools', icon: '🔧' },
  { name: 'Skills', icon: '📦' },
  { name: 'Model', icon: '🤖' },
  { name: 'Memory', icon: '🧠' },
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
  padding: 20px;
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
  max-width: 120px;
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

/* 用户入口 */
.user-box {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  color: white;
}

.user-box .box-label {
  color: white;
}

/* Channel 层 */
.channels-row {
  gap: 12px;
  flex-wrap: wrap;
}

.channel-box {
  min-width: 80px;
  padding: 12px 16px;
}

.channel-box .box-icon {
  font-size: 24px;
}

.channel-box .box-label {
  font-size: 12px;
}

/* 网关 */
.gateway-box {
  min-width: 200px;
  padding: 20px 30px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-color: var(--primary);
}

/* 节点层 */
.nodes-row {
  gap: 20px;
}

.node-box {
  min-width: 120px;
}

/* Session */
.session-box {
  min-width: 180px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 102, 255, 0.05));
  border-color: var(--secondary);
}

/* 执行核心 */
.core-row {
  width: 100%;
}

.core-container {
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
}

.core-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.side-title {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.core-boxes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exec-box, .storage-box {
  padding: 14px;
}

.exec-box {
  border-color: var(--primary);
}

.storage-box {
  border-color: var(--secondary);
}

/* 能力环 */
.core-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
}

.center-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.capability-ring {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.cap-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--border);
  transition: all 0.3s;
}

.cap-item:hover {
  border-color: var(--primary);
  transform: scale(1.05);
}

.cap-icon {
  font-size: 24px;
}

.cap-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

/* 外部集成 */
.external-row {
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  width: auto;
}

.external-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
}

.external-groups {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.ext-group {
  text-align: center;
}

.ext-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.ext-items {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.ext-item {
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 20px;
  font-size: 12px;
  color: var(--text-primary);
}

/* 箭头 */
.flow-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
}

.arrow-line {
  width: 2px;
  height: 24px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
}

.arrow-head {
  font-size: 14px;
  color: var(--primary);
  margin-top: -4px;
}

/* 汇聚箭头 */
.converge {
  width: 100%;
  position: relative;
}

.converge-lines {
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 20px;
}

.c-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  transform: rotate(15deg);
}

.c-line:nth-child(1) { transform: rotate(25deg); }
.c-line:nth-child(2) { transform: rotate(15deg); }
.c-line:nth-child(3) { transform: rotate(5deg); }
.c-line:nth-child(4) { transform: rotate(-5deg); }
.c-line:nth-child(5) { transform: rotate(-15deg); }
.c-line:nth-child(6) { transform: rotate(-25deg); }

/* 分支箭头 */
.branch {
  position: relative;
}

.branch-lines {
  position: absolute;
  top: 20px;
  width: 60%;
  height: 20px;
}

.b-line {
  position: absolute;
  width: 2px;
  height: 30px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
}

.b-line.to-left {
  left: 30%;
  transform: rotate(-20deg);
  transform-origin: top;
}

.b-line.to-right {
  right: 30%;
  transform: rotate(20deg);
  transform-origin: top;
}

/* 横向连接 */
.flow-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  position: relative;
}

.h-line {
  width: 60%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.arrow-head.left, .arrow-head.right {
  position: absolute;
  font-size: 12px;
}

.arrow-head.left {
  left: 20%;
}

.arrow-head.right {
  right: 20%;
}

/* 图例说明 */
.flow-legend {
  margin-top: 50px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
}

.legend-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 24px;
}

.legend-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.legend-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-radius: 10px;
}

.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.step-text {
  font-size: 13px;
  color: var(--text-primary);
}

.flow-dir {
  font-size: 18px;
  color: var(--primary);
  font-weight: 700;
}

@media (max-width: 768px) {
  .core-container {
    flex-direction: column;
  }
  
  .channels-row {
    flex-wrap: wrap;
  }
  
  .nodes-row {
    flex-wrap: wrap;
  }
  
  .external-groups {
    flex-direction: column;
  }
  
  .legend-flow {
    flex-direction: column;
  }
  
  .flow-dir {
    transform: rotate(90deg);
  }
}
</style>
