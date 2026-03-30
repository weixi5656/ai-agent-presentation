<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 极简架构流程图</h1>

    <div class="flow-diagram">
      <!-- 用户入口 -->
      <div class="flow-row">
        <div class="user-box">
          <span class="box-icon">👤</span>
          <span class="box-label">User / External</span>
        </div>
      </div>
      
      <div class="arrow-container">
        <span class="flow-step-badge left-badge">1. 触发任务交互</span>
        <div class="arrow-line"></div>
      </div>
      
      <!-- Messaging Surfaces (Channels) -->
      <div class="flow-row">
        <div class="flow-box surface-box has-tooltip">
          <span class="box-icon">🌐</span>
          <span class="box-label">Messaging Surfaces</span>
          <div class="box-tags">
            <span class="tag">IM (Telegram/Slack)</span>
            <span class="tag">Web UI</span>
            <span class="tag">CLI</span>
            <span class="tag">API</span>
          </div>
          <div class="tooltip-content">用户交互界面层，摆脱传统Web束缚，将多渠道输入无缝化。</div>
        </div>
      </div>
      
      <div class="arrow-container">
        <span class="flow-step-badge right-badge">2. 请求路由接入</span>
        <div class="arrow-line"></div>
      </div>
      
      <!-- Gateway Daemon -->
      <div class="flow-row">
        <div class="flow-box gateway-box has-tooltip">
          <span class="box-icon">🚪</span>
          <span class="box-label">Gateway (Daemon)</span>
          <span class="box-sub">Local Port: 18789</span>
          <div class="box-tags">
            <span class="tag">本地常驻守护</span>
            <span class="tag">会话管理(Session)</span>
            <span class="tag">路由分发分流</span>
          </div>
          <div class="tooltip-content">中心控制平面守护进程(Daemon)，维持消息长联，统管路由并处理Hook。</div>
        </div>
      </div>
      
      <div class="arrow-container">
        <span class="flow-step-badge left-badge">3. 同步状态中枢</span>
        <div class="arrow-line split-line"></div>
      </div>
      
      <!-- Parallel: Agent Runtime & Checkpoint -->
      <div class="parallel-section">
        <div class="flow-box runtime-box has-tooltip">
          <span class="box-icon">🧠</span>
          <span class="box-label">Agent Runtime</span>
          <div class="box-tags">
            <span class="tag">上下文视窗组装</span>
            <span class="tag">大语言模型(LLM)引擎</span>
            <span class="tag">自治循环(Autonomous Loop)</span>
          </div>
          <div class="tooltip-content">真正的智能运行中枢，构建Context并通信给LLM，执行核心逻辑决策及多次循环工具调度。</div>
        </div>
        
        <div class="flow-box checkpoint-box has-tooltip">
          <span class="box-icon">⚕️</span>
          <span class="box-label">健康检查 & Checkpoint</span>
          <div class="box-tags">
            <span class="tag">Health Check 心跳探活</span>
            <span class="tag">任务快照持久落盘</span>
            <span class="tag">故障无损恢复机制</span>
          </div>
          <div class="tooltip-content">并行的鲁棒防御防线：持续侦测节点心跳健康，自动存档任务状态进度，保障宕机遇险即可恢复。</div>
        </div>
      </div>

      <div class="arrow-container">
        <span class="flow-step-badge right-badge">4. 功能连接与存档</span>
        <div class="arrow-line merge-line"></div>
      </div>
      
      <!-- Capabilities -->
      <div class="flow-row capacities">
        <div class="flow-box cap-box has-tooltip">
          <span class="box-icon">🔌</span>
          <span class="box-label">Skills & Plugins</span>
          <div class="tooltip-content">扩展插槽：从执行脚本的 Skills 到实现浏览器自动化等深层原生 Plugins 等多样拓展能力。</div>
        </div>
        <div class="flow-box cap-box has-tooltip">
          <span class="box-icon">📊</span>
          <span class="box-label">Canvas / HTML A2UI</span>
          <div class="tooltip-content">用户呈现拓展：Agent主动渲染响应反馈可交互的 HTML 动态面板及界面流向。</div>
        </div>
        <div class="flow-box cap-box has-tooltip">
          <span class="box-icon">💾</span>
          <span class="box-label">Local Memory</span>
          <div class="tooltip-content">隐私优先本地记忆：长期把交互习惯与经验直接写成 Markdown/YAML等文件纯本地驻留。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.architecture-view {
  max-width: 1000px;
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

.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 102, 255, 0.08);
}

.flow-row {
  display: flex;
  justify-content: center;
  width: 100%;
}

.capacities {
  gap: 20px;
  flex-wrap: wrap;
}

.user-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: rgba(0, 102, 255, 0.05);
  border: 2px solid var(--primary);
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
}

.box-icon {
  font-size: 24px;
}

.arrow-container {
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 0;
}

.arrow-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, var(--primary) 0%, rgba(0, 212, 170, 0.5) 100%);
  position: relative;
}

.arrow-line::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid rgba(0, 212, 170, 0.6);
}

.flow-step-badge {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px 14px;
  background: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  border: 1px dashed var(--border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  white-space: nowrap;
}

.left-badge {
  right: calc(50% + 20px);
}
.right-badge {
  left: calc(50% + 20px);
}

.flow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid var(--border);
  background: white;
  transition: all 0.3s ease;
  min-width: 240px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.flow-box:hover {
  border-color: var(--primary);
  box-shadow: 0 12px 30px rgba(0, 102, 255, 0.1);
  transform: translateY(-2px);
  z-index: 100;
}

.box-label {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 8px;
}

.box-sub {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

.box-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
}

.tag {
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Specific styling */
.gateway-box {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.03), rgba(0, 212, 170, 0.03));
}
.gateway-box .tag {
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
  font-weight: 600;
}

.parallel-section {
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: center;
}

.runtime-box {
  flex: 1;
  max-width: 360px;
  border-color: var(--secondary);
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 102, 255, 0.05));
}
.runtime-box .tag {
  background: rgba(0, 212, 170, 0.1);
  color: var(--secondary);
  font-weight: 600;
}

.checkpoint-box {
  flex: 1;
  max-width: 360px;
  border-color: #f59e0b;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(239, 68, 68, 0.05));
}
.checkpoint-box .tag {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  font-weight: 600;
}

.cap-box {
  flex: 1;
  min-width: 180px;
  max-width: 250px;
  padding: 20px;
}

/* Tooltip implementation with z-index 9999 requirement */
.has-tooltip {
  position: relative;
  cursor: help;
}

.has-tooltip .tooltip-content {
  position: absolute;
  top: 50%;
  left: calc(100% + 15px);
  transform: translateY(-50%) translateX(10px);
  width: max-content;
  max-width: 280px;
  background: rgba(255, 255, 255, 0.96);
  color: var(--text-primary);
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid rgba(0, 102, 255, 0.14);
  font-size: 13px;
  line-height: 1.6;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 9999;
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.16), 0 8px 18px rgba(0, 0, 0, 0.08);
  pointer-events: none;
  backdrop-filter: blur(18px);
  text-align: left;
}

.has-tooltip .tooltip-content::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(0, 102, 255, 0.14);
  border-left: 1px solid rgba(0, 102, 255, 0.14);
  transform: translate(-50%, -50%) rotate(45deg);
}

.has-tooltip:hover .tooltip-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(0);
}

@media (max-width: 768px) {
  .parallel-section {
    flex-direction: column;
  }
  .flow-box {
    min-width: 100%;
  }
  .flow-step-badge {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    margin: 10px 0;
  }
  .arrow-container {
    flex-direction: column;
    height: 80px;
  }
}
</style>
