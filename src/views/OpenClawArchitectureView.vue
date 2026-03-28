<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 分层架构</h1>
    
    <div class="architecture-container">
      <!-- 应用层 -->
      <div class="layer layer-app">
        <div class="layer-header">
          <span class="layer-icon">🎯</span>
          <h2>应用层</h2>
        </div>
        <div class="layer-content">
          <div class="component-group">
            <div class="component-item">
              <span class="comp-icon">💻</span>
              <span class="comp-name">代码智能体</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">🧪</span>
              <span class="comp-name">测试智能体</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">🔧</span>
              <span class="comp-name">运维智能体</span>
            </div>
            <div class="component-item">
              <span class="comp-icon">📚</span>
              <span class="comp-name">文档智能体</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 智能体引擎层 -->
      <div class="layer layer-engine">
        <div class="layer-header">
          <span class="layer-icon">🧠</span>
          <h2>智能体引擎层</h2>
        </div>
        <div class="layer-content">
          <div class="engine-modules">
            <div class="engine-module">
              <span class="mod-icon">👁️</span>
              <span class="mod-name">感知</span>
            </div>
            <div class="engine-module">
              <span class="mod-icon">🎯</span>
              <span class="mod-name">规划</span>
            </div>
            <div class="engine-module">
              <span class="mod-icon">🧠</span>
              <span class="mod-name">记忆</span>
            </div>
            <div class="engine-module">
              <span class="mod-icon">🔧</span>
              <span class="mod-name">工具</span>
            </div>
            <div class="engine-module">
              <span class="mod-icon">⚡</span>
              <span class="mod-name">执行</span>
            </div>
            <div class="engine-module">
              <span class="mod-icon">🔄</span>
              <span class="mod-name">反思</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 核心服务层 -->
      <div class="layer layer-core">
        <div class="layer-header">
          <span class="layer-icon">⚙️</span>
          <h2>核心服务层</h2>
        </div>
        <div class="layer-content">
          <div class="core-services">
            <div class="service-item">
              <span class="svc-icon">🤖</span>
              <span class="svc-name">LLM服务</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">💾</span>
              <span class="svc-name">记忆存储</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">🔌</span>
              <span class="svc-name">工具注册中心</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">📋</span>
              <span class="svc-name">任务调度</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">🔐</span>
              <span class="svc-name">权限管理</span>
            </div>
            <div class="service-item">
              <span class="svc-icon">📊</span>
              <span class="svc-name">日志监控</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 基础设施层 -->
      <div class="layer layer-infra">
        <div class="layer-header">
          <span class="layer-icon">🏗️</span>
          <h2>基础设施层</h2>
        </div>
        <div class="layer-content">
          <div class="infra-items">
            <div class="infra-item">
              <span class="infra-icon">🌐</span>
              <span class="infra-name">网关服务</span>
            </div>
            <div class="infra-item">
              <span class="infra-icon">📡</span>
              <span class="infra-name">消息队列</span>
            </div>
            <div class="infra-item">
              <span class="infra-icon">🗄️</span>
              <span class="infra-name">数据存储</span>
            </div>
            <div class="infra-item">
              <span class="infra-icon">🔒</span>
              <span class="infra-name">安全认证</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 连接箭头 -->
      <div class="layer-connector">
        <div class="connector-line"></div>
        <span class="connector-arrow">▼</span>
      </div>
      
      <!-- 外部集成层 -->
      <div class="layer layer-external">
        <div class="layer-header">
          <span class="layer-icon">🔗</span>
          <h2>外部集成层</h2>
        </div>
        <div class="layer-content">
          <div class="external-integrations">
            <div class="ext-group">
              <h4>大模型</h4>
              <div class="ext-items">
                <span class="ext-tag">OpenAI</span>
                <span class="ext-tag">Claude</span>
                <span class="ext-tag">Gemini</span>
                <span class="ext-tag">Kimi</span>
              </div>
            </div>
            <div class="ext-group">
              <h4>开发工具</h4>
              <div class="ext-items">
                <span class="ext-tag">Git</span>
                <span class="ext-tag">Docker</span>
                <span class="ext-tag">Jenkins</span>
                <span class="ext-tag">VSCode</span>
              </div>
            </div>
            <div class="ext-group">
              <h4>云服务</h4>
              <div class="ext-items">
                <span class="ext-tag">AWS</span>
                <span class="ext-tag">Azure</span>
                <span class="ext-tag">阿里云</span>
                <span class="ext-tag">腾讯云</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 侧边说明 -->
    <div class="architecture-notes">
      <div class="note-item">
        <span class="note-dot" style="background: var(--primary);"></span>
        <p><strong>分层设计</strong>：各层职责清晰，便于扩展和维护</p>
      </div>
      <div class="note-item">
        <span class="note-dot" style="background: var(--secondary);"></span>
        <p><strong>插件化架构</strong>：工具、模型、存储均可插拔替换</p>
      </div>
      <div class="note-item">
        <span class="note-dot" style="background: linear-gradient(135deg, var(--primary), var(--secondary));"></span>
        <p><strong>开放生态</strong>：支持主流大模型和开发工具集成</p>
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
  margin-bottom: 40px;
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

/* 应用层 */
.component-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.component-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
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
  font-size: 32px;
}

.comp-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
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

/* 引擎层 */
.engine-modules {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.engine-module {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: white;
  border-radius: 10px;
  border: 2px solid var(--border);
  transition: all 0.3s;
}

.engine-module:hover {
  border-color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
}

.mod-icon {
  font-size: 24px;
}

.mod-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

/* 核心服务层 */
.core-services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  transition: all 0.3s;
}

.service-item:hover {
  background: rgba(0, 102, 255, 0.1);
}

.svc-icon {
  font-size: 20px;
}

.svc-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

/* 基础设施层 */
.infra-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.infra-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 18px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.infra-item:hover {
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}

.infra-icon {
  font-size: 28px;
}

.infra-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

/* 外部集成层 */
.external-integrations {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ext-group {
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 16px;
}

.ext-group h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.ext-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ext-tag {
  padding: 6px 12px;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

/* 说明区域 */
.architecture-notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.note-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.note-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
}

.note-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.note-item strong {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .component-group {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .engine-modules {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .core-services {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .infra-items {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .external-integrations {
    grid-template-columns: 1fr;
  }
  
  .architecture-notes {
    grid-template-columns: 1fr;
  }
}
</style>
