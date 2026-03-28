<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 技术架构全景</h1>
    
    <div class="architecture-container">
      <!-- 接入层 -->
      <div class="layer layer-access">
        <div class="layer-header">
          <span class="layer-icon">📡</span>
          <h2>接入层 Channel</h2>
        </div>
        <div class="layer-content">
          <div class="component-group">
            <div class="component-item">
              <span class="comp-icon">💬</span>
              <span class="comp-name">Signal</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">✈️</span>
              <span class="comp-name">Telegram</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">🎮</span>
              <span class="comp-name">Discord</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">🌐</span>
              <span class="comp-name">WebChat</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">📱</span>
              <span class="comp-name">WhatsApp</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">🔗</span>
              <span class="comp-name">API</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 网关层 -->
      <div class="layer layer-gateway">
        <div class="layer-header">
          <span class="layer-icon">🚪</span>
          <h2>网关层 Gateway</h2>
        </div>
        <div class="layer-content">
          <div class="gateway-services">
            <div class="service-item">
              <span class="svc-icon">🔀</span>
              <span class="svc-name">消息路由</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">🔐</span>
              <span class="svc-name">认证鉴权</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">⚖️</span>
              <span class="svc-name">负载均衡</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">📝</span>
              <span class="svc-name">会话管理</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">🪝</span>
              <span class="svc-name">Hooks</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">🔍</span>
              <span class="svc-name">Check Port</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 节点层 -->
      <div class="layer layer-node">
        <div class="layer-header">
          <span class="layer-icon">🖥️</span>
          <h2>节点层 Node / 实例 Instance</h2>
        </div>
        <div class="layer-content">
          <div class="node-instances">
            <div class="instance-card">
              <span class="inst-icon">🏠</span>
              <span class="inst-name">本地节点</span>
              <span class="inst-tag">Mac/Windows/Linux</span>
            </div>
            <div class="instance-card">
              <span class="inst-icon">☁️</span>
              <span class="inst-name">云端节点</span>
              <span class="inst-tag">VPS/容器</span>
            </div>
            <div class="instance-card">
              <span class="inst-icon">📟</span>
              <span class="inst-name">边缘节点</span>
              <span class="inst-tag">ESP32/嵌入式</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 会话层 -->
      <div class="layer layer-session">
        <div class="layer-header">
          <span class="layer-icon">💬</span>
          <h2>会话层 Session</h2>
        </div>
        <div class="layer-content">
          <div class="session-components">
            <div class="session-item">
              <span class="sess-icon">📜</span>
              <span class="sess-name">消息历史</span>
            </div>
            <div class="session-item">
              <span class="sess-icon">🧠</span>
              <span class="sess-name">上下文管理</span>
            </div>
            <div class="session-item">
              <span class="sess-icon">💾</span>
              <span class="sess-name">状态持久化</span>
            </div>
            <div class="session-item">
              <span class="sess-icon">🧩</span>
              <span class="sess-name">Session Logs</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 执行层 -->
      <div class="layer layer-execution">
        <div class="layer-header">
          <span class="layer-icon">⚙️</span>
          <h2>执行层 Execution</h2>
        </div>
        <div class="layer-content">
          <div class="execution-grid">
            <!-- Agent -->
            <div class="exec-category">
              <h4>Agent 代理</h4>
              <div class="exec-items">
                <span class="exec-tag">Sub-agent</span>
                <span class="exec-tag">Agents</span>
                <span class="exec-tag">Work Runs</span>
              </div>
            </div>
            <!-- Cron -->
            <div class="exec-category">
              <h4>Cron 定时任务</h4>
              <div class="exec-items">
                <span class="exec-tag">定时触发</span>
                <span class="exec-tag">周期任务</span>
                <span class="exec-tag">延迟执行</span>
              </div>
            </div>
            <!-- Workflow -->
            <div class="exec-category">
              <h4>Workflow 工作流</h4>
              <div class="exec-items">
                <span class="exec-tag">Work Tree</span>
                <span class="exec-tag">Pipeline</span>
                <span class="exec-tag">编排</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 能力层 -->
      <div class="layer layer-capability">
        <div class="layer-header">
          <span class="layer-icon">🛠️</span>
          <h2>能力层 Capabilities</h2>
        </div>
        <div class="layer-content">
          <div class="capability-grid">
            <!-- Tools -->
            <div class="cap-category">
              <h4>Tools 工具</h4>
              <div class="cap-items">
                <span class="cap-tag">Exec</span>
                <span class="cap-tag">Web</span>
                <span class="cap-tag">Files</span>
                <span class="cap-tag">Read</span>
                <span class="cap-tag">Write</span>
              </div>
            </div>
            <!-- Skills -->
            <div class="cap-category">
              <h4>Skills 技能</h4>
              <div class="cap-items">
                <span class="cap-tag">ClawHub</span>
                <span class="cap-tag">自定义</span>
                <span class="cap-tag">插件</span>
              </div>
            </div>
            <!-- Model -->
            <div class="cap-category">
              <h4>Model 模型</h4>
              <div class="cap-items">
                <span class="cap-tag">OpenAI</span>
                <span class="cap-tag">Claude</span>
                <span class="cap-tag">Gemini</span>
                <span class="cap-tag">Kimi</span>
              </div>
            </div>
            <!-- Memory -->
            <div class="cap-category">
              <h4>Memory 记忆</h4>
              <div class="cap-items">
                <span class="cap-tag">Short-term</span>
                <span class="cap-tag">Long-term</span>
                <span class="cap-tag">Vector DB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 存储层 -->
      <div class="layer layer-storage">
        <div class="layer-header">
          <span class="layer-icon">🗄️</span>
          <h2>存储层 Storage</h2>
        </div>
        <div class="layer-content">
          <div class="storage-items">
            <div class="storage-item">
              <span class="stor-icon">📁</span>
              <span class="stor-name">Files 文件</span>
              <span class="stor-desc">工作目录 / 附件 / 临时文件</span>
            </div>
            <div class="storage-item">
              <span class="stor-icon">🧠</span>
              <span class="stor-name">Memory 记忆</span>
              <span class="stor-desc">会话记忆 / 长期记忆 / 向量存储</span>
            </div>
            <div class="storage-item">
              <span class="stor-icon">📊</span>
              <span class="stor-name">Logs 日志</span>
              <span class="stor-desc">执行日志 / 审计日志 / 监控</span>
            </div>
            <div class="storage-item">
              <span class="stor-icon">⚙️</span>
              <span class="stor-name">Config 配置</span>
              <span class="stor-desc">节点配置 / 代理配置 / 密钥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 概念说明 -->
    <div class="concepts-section">
      <h2 class="section-title">核心概念详解</h2>
      <div class="concepts-grid">
        <div class="concept-card">
          <h4>Channel 频道</h4>
          <p>消息接入通道，支持Signal、Telegram、Discord、WebChat等多种平台</p>
        </div>
        <div class="concept-card">
          <h4>Node / Instance 节点/实例</h4>
          <p>执行任务的计算单元，可以是本地机器、云端VPS或边缘设备</p>
        </div>
        <div class="concept-card">
          <h4>Session 会话</h4>
          <p>维护对话上下文、消息历史和状态，支持跨会话记忆</p>
        </div>
        <div class="concept-card">
          <h4>Agent 代理</h4>
          <p>执行具体任务的智能体，支持子代理(Work Tree)和并行执行</p>
        </div>
        <div class="concept-card">
          <h4>Cron 定时任务</h4>
          <p>定时触发器，支持周期性任务、延迟执行和条件触发</p>
        </div>
        <div class="concept-card">
          <h4>Workflow 工作流</h4>
          <p>复杂任务编排，支持Work Tree树状结构和Pipeline流水线</p>
        </div>
        <div class="concept-card">
          <h4>Skills 技能</h4>
          <p>可复用的能力模块，通过ClawHub安装或自定义开发</p>
        </div>
        <div class="concept-card">
          <h4>Hooks 钩子</h4>
          <p>事件监听机制，在特定节点执行自定义逻辑</p>
        </div>
        <div class="concept-card">
          <h4>Work Runs</h4>
          <p>代理执行记录，包含输入、输出、耗时和状态</p>
        </div>
      </div>
    </div>
  </div>
</template>

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

.architecture-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 60px;
}

/* 层级卡片 */
.layer {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
}

.layer:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 30px rgba(0, 102, 255, 0.12);
  transform: translateY(-2px);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.layer-icon {
  font-size: 28px;
}

.layer-header h2 {
  font-size: 22px;
  font-weight: 600;
  color: var(--primary);
}

/* 连接箭头 */
.layer-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
}

.connector-line {
  width: 2px;
  height: 20px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
}

.connector-arrow {
  font-size: 16px;
  color: var(--primary);
  margin-top: -5px;
}

/* 接入层 */
.component-group {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.component-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-radius: 12px;
  border: 1px solid rgba(0, 102, 255, 0.2);
  transition: all 0.3s;
}

.component-item:hover {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  transform: scale(1.02);
}

.comp-icon {
  font-size: 28px;
}

.comp-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

/* 网关层 */
.gateway-services {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 10px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  transition: all 0.3s;
}

.service-item:hover {
  background: rgba(0, 102, 255, 0.1);
}

.svc-icon {
  font-size: 22px;
}

.svc-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-primary);
}

/* 节点层 */
.node-instances {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.instance-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(0, 212, 170, 0.08));
  border-radius: 12px;
  border: 2px solid rgba(0, 102, 255, 0.3);
  transition: all 0.3s;
}

.instance-card:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
}

.inst-icon {
  font-size: 32px;
}

.inst-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.inst-tag {
  font-size: 11px;
  color: var(--text-muted);
  background: rgba(0, 102, 255, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
}

/* 会话层 */
.session-components {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.session-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: white;
  border-radius: 10px;
  border: 2px solid var(--border);
  transition: all 0.3s;
}

.session-item:hover {
  border-color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
}

.sess-icon {
  font-size: 24px;
}

.sess-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

/* 执行层 */
.execution-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.exec-category {
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 16px;
}

.exec-category h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 12px;
}

.exec-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exec-tag {
  padding: 6px 12px;
  background: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

/* 能力层 */
.capability-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.cap-category {
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 14px;
}

.cap-category h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 10px;
}

.cap-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cap-tag {
  padding: 4px 10px;
  background: white;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

/* 存储层 */
.storage-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.storage-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.storage-item:hover {
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}

.stor-icon {
  font-size: 24px;
}

.stor-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.stor-desc {
  font-size: 11px;
  color: var(--text-muted);
  text-align: center;
}

/* 概念说明 */
.concepts-section {
  margin-top: 60px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
  text-align: center;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.concept-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.concept-card:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.1);
}

.concept-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 10px;
}

.concept-card p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .component-group,
  .gateway-services {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .node-instances,
  .session-components,
  .execution-grid,
  .capability-grid,
  .storage-items,
  .concepts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .component-group,
  .gateway-services,
  .node-instances,
  .session-components,
  .execution-grid,
  .capability-grid,
  .storage-items,
  .concepts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
