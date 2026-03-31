<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 极简架构流程图</h1>

    <div class="intro-card-new glass">
      <div class="intro-badge">2026 最火智能体框架</div>
      <h2>从“动口”到“动手”的脚手架</h2>
      <p>
        OpenClaw 不仅是 AI 助手，更是具备本地执行能力的<strong>研发引擎</strong>。
        代码与数据<strong>不上云</strong>，解决企业核心隐私痛点。通过“组装智能体”替代“编写业务逻辑”。
      </p>
    </div>

    <div class="flow-diagram">
      <!-- Channel & Security -->
      <div class="flow-row">
        <div class="flow-box surface-box has-tooltip">
          <span class="box-icon">🛡️</span>
          <span class="box-label">Channel-SecurityChecker</span>
          <span class="box-sub">安全校验组件</span>
          <div class="box-tags">
            <span class="tag">输入校验</span>
            <span class="tag">合规审计</span>
            <span class="tag">越权防护</span>
          </div>
          <div class="tooltip-content">安全屏障：负责管控组件运行安全、规避违规操作与越权调用，贯穿任务执行全流程。</div>
        </div>
      </div>
      
      <div class="arrow-container">
        <span class="flow-step-badge left-badge">1. 安全准入与触发</span>
        <div class="arrow-line"></div>
      </div>
      
      <!-- Planning Layer -->
      <div class="flow-row">
        <div class="flow-box gateway-box has-tooltip">
          <span class="box-icon">🧠</span>
          <span class="box-label">Agent-TaskSplitter</span>
          <span class="box-sub">任务规划层 / 目标拆解组件</span>
          <div class="box-tags">
            <span class="tag">任务拆解</span>
            <span class="tag">计划制定</span>
            <span class="tag">目标对齐</span>
          </div>
          <div class="tooltip-content">决策核心：接收用户目标，完成任务拆解并输出可执行任务流。</div>
        </div>
      </div>
      
      <div class="arrow-container">
        <span class="flow-step-badge right-badge">2. 向执行层分发指令</span>
        <div class="arrow-line"></div>
      </div>
      
      <!-- Execution & Feedback -->
      <div class="parallel-section">
        <div class="flow-box runtime-box has-tooltip">
          <span class="box-icon">🔧</span>
          <span class="box-label">Tools.md</span>
          <span class="box-sub">执行层 / 工具调度组件</span>
          <div class="box-tags">
            <span class="tag">代码执行</span>
            <span class="tag">API 调用</span>
            <span class="tag">自动化工具</span>
          </div>
          <div class="tooltip-content">执行手脚：识别任务需求，筛选并调用外部工具落地任务。</div>
        </div>
        
        <div class="flow-box checkpoint-box has-tooltip">
          <span class="box-icon">🔄</span>
          <span class="box-label">Skill-Reflector</span>
          <span class="box-sub">反馈层 / 反思优化组件</span>
          <div class="box-tags">
            <span class="tag">结果校验</span>
            <span class="tag">异常识别</span>
            <span class="tag">策略优化</span>
          </div>
          <div class="tooltip-content">校验中枢：实时采集结果、识别偏差并输出复盘优化建议。</div>
        </div>
      </div>

      <div class="arrow-container">
        <span class="flow-step-badge left-badge">3. 记忆存取与知识增益</span>
        <div class="arrow-line merge-line"></div>
      </div>
      
      <!-- Knowledge Base -->
      <div class="flow-row">
        <div class="flow-box cap-box has-tooltip knowledge-box">
          <span class="box-icon">💾</span>
          <span class="box-label">Model-MemoryManager</span>
          <span class="box-sub">知识库层 / 记忆管理组件</span>
          <div class="box-tags">
            <span class="tag">RAG 检索</span>
            <span class="tag">长期记忆</span>
            <span class="tag">知识库维护</span>
          </div>
          <div class="tooltip-content">长期记忆库：存储领域知识、历史经验及用户偏好，支撑任务连贯性。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
