<template>
  <div class="architecture-view">
    <div class="page-header">
      <h1 class="page-title">OpenClaw 核心架构</h1>
      <p class="page-subtitle">Gateway为中心的控制面/执行面分离设计</p>
    </div>
    
    <!-- 核心架构流程图 -->
    <div class="architecture-container">
      <div class="flowchart-container">
        
        <!-- 客户端与渠道层 -->
        <div class="layer client-layer fade-in-up delay-1">
          <div class="layer-header">
            <h2>客户端与渠道层（交互入口）</h2>
            <div class="layer-desc">用户与系统的交互入口，支持多种接入方式</div>
          </div>
          <div class="layer-content">
            <div class="node-box client-node" style="--delay: 1">
              <div class="node-icon">💻</div>
              <div class="node-title">控制客户端</div>
              <div class="node-desc">CLI / Web UI / 原生App</div>
            </div>
            <div class="node-box client-node" style="--delay: 2">
              <div class="node-icon">💬</div>
              <div class="node-title">通信渠道</div>
              <div class="node-desc">WhatsApp / Telegram / 飞书 / 钉钉等</div>
            </div>
          </div>
        </div>

        <!-- 连接箭头 -->
        <div class="arrow-down">
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="var(--primary)" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- 核心控制平面：Gateway网关 -->
        <div class="layer gateway-layer fade-in-up delay-2">
          <div class="layer-header">
            <h2>核心控制平面：Gateway网关（系统中枢）</h2>
            <div class="layer-desc">负责连接管理、会话调度、路由控制等核心控制功能</div>
          </div>
          <div class="layer-grid">
            <!-- 第一行 -->
            <div class="grid-row">
              <div class="node-box gateway-node" style="--delay: 3">
                <div class="node-icon">🔌</div>
                <div class="node-title">WebSocket连接管理器</div>
                <div class="node-desc">管理客户端连接状态</div>
              </div>
              <div class="node-box gateway-node" style="--delay: 4">
                <div class="node-icon">🔐</div>
                <div class="node-title">鉴权与准入控制</div>
                <div class="node-desc">设备配对/签名/限流</div>
              </div>
              <div class="node-box gateway-node" style="--delay: 5">
                <div class="node-icon">💾</div>
                <div class="node-title">会话管理器</div>
                <div class="node-desc">Session生命周期管理</div>
              </div>
              <div class="node-box gateway-node" style="--delay: 6">
                <div class="node-icon">🔄</div>
                <div class="node-title">消息路由引擎</div>
                <div class="node-desc">智能消息分发与路由</div>
              </div>
            </div>
            <!-- 第二行 -->
            <div class="grid-row">
              <div class="node-box gateway-node" style="--delay: 7">
                <div class="node-icon">❤️</div>
                <div class="node-title">健康检查模块</div>
                <div class="node-desc">存活性/就绪性/心跳巡检</div>
              </div>
              <div class="node-box gateway-node" style="--delay: 8">
                <div class="node-icon">⚙️</div>
                <div class="node-title">配置与元数据管理</div>
                <div class="node-desc">系统配置与元数据存储</div>
              </div>
              <div class="node-box gateway-node" style="--delay: 9">
                <div class="node-icon">📦</div>
                <div class="node-title">插件生命周期管理器</div>
                <div class="node-desc">插件加载、卸载、热更新</div>
              </div>
              <div class="node-box gateway-node" style="--delay: 10">
                <div class="node-icon">📊</div>
                <div class="node-title">Lane命令队列</div>
                <div class="node-desc">串行任务调度与队列管理</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 连接箭头 -->
        <div class="arrow-down">
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="var(--primary)" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- 执行平面：Agent Runtime集群 -->
        <div class="layer execution-layer fade-in-up delay-3">
          <div class="layer-header">
            <h2>执行平面：Agent Runtime集群</h2>
            <div class="layer-desc">实际执行任务的智能体运行时环境</div>
          </div>
          <div class="layer-grid">
            <!-- 第一行 -->
            <div class="grid-row">
              <div class="node-box execution-node" style="--delay: 11">
                <div class="node-icon">🤖</div>
                <div class="node-title">Pi Agent核心循环</div>
                <div class="node-desc">Think/Act/Observe/Reflect</div>
              </div>
              <div class="node-box execution-node" style="--delay: 12">
                <div class="node-icon">📋</div>
                <div class="node-title">上下文引擎</div>
                <div class="node-desc">提示词组装/动态注入</div>
              </div>
              <div class="node-box execution-node" style="--delay: 13">
                <div class="node-icon">🧠</div>
                <div class="node-title">三级记忆子系统</div>
                <div class="node-desc">短期/中期/长期记忆管理</div>
              </div>
            </div>
            <!-- 第二行 -->
            <div class="grid-row">
              <div class="node-box execution-node" style="--delay: 14">
                <div class="node-icon">🔧</div>
                <div class="node-title">模型Provider插件中心</div>
                <div class="node-desc">多模型接入与切换</div>
              </div>
              <div class="node-box execution-node" style="--delay: 15">
                <div class="node-icon">⚡</div>
                <div class="node-title">工具执行器</div>
                <div class="node-desc">外部工具调用与执行</div>
              </div>
              <div class="node-box execution-node" style="--delay: 16">
                <div class="node-icon">🎯</div>
                <div class="node-title">技能引擎</div>
                <div class="node-desc">技能注册、发现与执行</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧扩展层 -->
        <div class="side-layers">
          <!-- 插件扩展层 -->
          <div class="side-layer extension-layer fade-in-right delay-4">
            <div class="side-layer-header">
              <h3>插件扩展层（一级公民）</h3>
            </div>
            <div class="side-layer-content">
              <div class="side-node" style="--delay: 1">
                <div class="side-node-icon">🤖</div>
                <div class="side-node-title">模型Provider插件</div>
                <div class="side-node-desc">OpenAI/豆包/Ollama等</div>
              </div>
              <div class="side-node" style="--delay: 2">
                <div class="side-node-icon">💬</div>
                <div class="side-node-title">渠道适配器插件</div>
                <div class="side-node-desc">多平台消息适配</div>
              </div>
              <div class="side-node" style="--delay: 3">
                <div class="side-node-icon">🔧</div>
                <div class="side-node-title">工具/技能插件</div>
                <div class="side-node-desc">扩展功能与能力</div>
              </div>
              <div class="side-node" style="--delay: 4">
                <div class="side-node-icon">💾</div>
                <div class="side-node-title">记忆存储插件</div>
                <div class="side-node-desc">多种记忆存储后端</div>
              </div>
              <div class="side-node" style="--delay: 5">
                <div class="side-node-icon">🪝</div>
                <div class="side-node-title">钩子扩展插件</div>
                <div class="side-node-desc">生命周期事件处理</div>
              </div>
            </div>
          </div>

          <!-- 持久化存储层 -->
          <div class="side-layer storage-layer fade-in-right delay-5">
            <div class="side-layer-header">
              <h3>持久化存储层</h3>
            </div>
            <div class="side-layer-content">
              <div class="side-node" style="--delay: 6">
                <div class="side-node-icon">📝</div>
                <div class="side-node-title">会话存储</div>
                <div class="side-node-desc">JSONL事件日志</div>
              </div>
              <div class="side-node" style="--delay: 7">
                <div class="side-node-icon">💾</div>
                <div class="side-node-title">Checkpoint快照存储</div>
                <div class="side-node-desc">任务状态快照</div>
              </div>
              <div class="side-node" style="--delay: 8">
                <div class="side-node-icon">🔢</div>
                <div class="side-node-title">长期向量知识库</div>
                <div class="side-node-desc">向量化知识存储</div>
              </div>
              <div class="side-node" style="--delay: 9">
                <div class="side-node-icon">⚙️</div>
                <div class="side-node-title">配置文件存储</div>
                <div class="side-node-desc">系统配置与元数据</div>
              </div>
            </div>
          </div>

          <!-- 安全沙箱层 -->
          <div class="side-layer security-layer fade-in-right delay-6">
            <div class="side-layer-header">
              <h3>安全沙箱层</h3>
            </div>
            <div class="side-layer-content">
              <div class="side-node" style="--delay: 10">
                <div class="side-node-icon">📦</div>
                <div class="side-node-title">Docker隔离沙箱</div>
                <div class="side-node-desc">容器化执行环境</div>
              </div>
              <div class="side-node" style="--delay: 11">
                <div class="side-node-icon">📋</div>
                <div class="side-node-title">执行策略管控</div>
                <div class="side-node-desc">资源与权限策略</div>
              </div>
              <div class="side-node" style="--delay: 12">
                <div class="side-node-icon">🔐</div>
                <div class="side-node-title">权限与审批控制</div>
                <div class="side-node-desc">操作权限管理</div>
              </div>
              <div class="side-node" style="--delay: 13">
                <div class="side-node-icon">📊</div>
                <div class="side-node-title">全链路审计日志</div>
                <div class="side-node-desc">操作记录与审计</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 连接线 -->
        <div class="connection-lines">
          <div class="line vertical" style="left: 50%;"></div>
          <div class="line horizontal extension" style="top: 30%;"></div>
          <div class="line horizontal storage" style="top: 50%;"></div>
          <div class="line horizontal security" style="top: 70%;"></div>
        </div>
      </div>
    </div>

    <!-- 架构说明 -->
    <div class="architecture-description">
      <h2 class="section-title">架构设计理念</h2>
      <div class="design-principles">
        <div class="principle-card fade-in-left delay-7">
          <div class="principle-icon">🏗️</div>
          <h3>控制面与执行面分离</h3>
          <p>Gateway 作为控制面中枢，统一管理连接、会话、路由；Agent Runtime 作为执行面，专注于任务执行，实现关注点分离。</p>
        </div>
        <div class="principle-card fade-in-left delay-8">
          <div class="principle-icon">🔌</div>
          <h3>插件化一级公民</h3>
          <p>插件系统是架构的一等公民，支持模型、渠道、工具、记忆、钩子等全方位扩展，无需修改核心代码。</p>
        </div>
        <div class="principle-card fade-in-left delay-9">
          <div class="principle-icon">🛡️</div>
          <h3>安全沙箱隔离</h3>
          <p>通过 Docker 沙箱、策略管控、权限审批、审计日志等多层安全机制，确保代码安全执行。</p>
        </div>
        <div class="principle-card fade-in-left delay-10">
          <div class="principle-icon">💾</div>
          <h3>持久化与恢复能力</h3>
          <p>完善的 Checkpoint 机制和持久化存储，支持长时间任务中断恢复，保障生产环境稳定性。</p>
        </div>
      </div>
    </div>

    <!-- 数据流向说明 -->
    <div class="data-flow-section">
      <h2 class="section-title">标准数据流向</h2>
      <div class="flow-steps">
        <div class="flow-step fade-in-right delay-7">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>客户端发起请求</h4>
            <p>用户通过 CLI、Web UI 或 IM 工具发送请求到 Gateway。</p>
          </div>
        </div>
        <div class="flow-step fade-in-right delay-8">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Gateway 控制面处理</h4>
            <p>WebSocket 管理器接收连接，鉴权模块验证身份，路由引擎将任务分发到 Lane 队列。</p>
          </div>
        </div>
        <div class="flow-step fade-in-right delay-9">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Agent Runtime 执行</h4>
            <p>Pi Agent 核心循环执行 Think/Act/Observe/Reflect，调用模型、工具、技能完成计算。</p>
          </div>
        </div>
        <div class="flow-step fade-in-right delay-10">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>插件与存储交互</h4>
            <p>通过插件系统调用外部能力，同时将结果持久化到存储层，确保状态可恢复。</p>
          </div>
        </div>
        <div class="flow-step fade-in-right delay-11">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>结果返回与状态同步</h4>
            <p>执行结果通过 Gateway 返回客户端，同时更新会话状态和检查点。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 关键特性 -->
    <div class="key-features">
      <h2 class="section-title">关键工程特性</h2>
      <div class="features-grid">
        <div class="feature-card fade-in-up delay-7">
          <div class="feature-icon">⚡</div>
          <h3>高并发处理</h3>
          <p>Lane 队列机制支持并行任务处理，Gateway 可水平扩展支撑高并发场景。</p>
        </div>
        <div class="feature-card fade-in-up delay-8">
          <div class="feature-icon">🔄</div>
          <h3>热插拔插件</h3>
          <p>插件系统支持运行时动态加载/卸载，无需重启服务即可扩展功能。</p>
        </div>
        <div class="feature-card fade-in-up delay-9">
          <div class="feature-icon">🔐</div>
          <h3>企业级安全</h3>
          <p>多层安全防护：网络隔离、权限管控、沙箱执行、操作审计，满足企业级安全要求。</p>
        </div>
        <div class="feature-card fade-in-up delay-10">
          <div class="feature-icon">📈</div>
          <h3>可观测性</h3>
          <p>完善的监控指标、健康检查、日志追踪，便于问题诊断和性能优化。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 架构数据定义
const layers = [
  {
    id: 'client',
    name: '客户端与渠道层',
    description: '用户与系统的交互入口，支持多种接入方式',
    nodes: [
      { icon: '💻', title: '控制客户端', desc: 'CLI / Web UI / 原生App' },
      { icon: '💬', title: '通信渠道', desc: 'WhatsApp / Telegram / 飞书 / 钉钉等' }
    ]
  },
  {
    id: 'gateway',
    name: '核心控制平面：Gateway网关',
    description: '负责连接管理、会话调度、路由控制等核心控制功能',
    nodes: [
      { icon: '🔌', title: 'WebSocket连接管理器', desc: '管理客户端连接状态' },
      { icon: '🔐', title: '鉴权与准入控制', desc: '设备配对/签名/限流' },
      { icon: '💾', title: '会话管理器', desc: 'Session生命周期管理' },
      { icon: '🔄', title: '消息路由引擎', desc: '智能消息分发与路由' },
      { icon: '❤️', title: '健康检查模块', desc: '存活性/就绪性/心跳巡检' },
      { icon: '⚙️', title: '配置与元数据管理', desc: '系统配置与元数据存储' },
      { icon: '📦', title: '插件生命周期管理器', desc: '插件加载、卸载、热更新' },
      { icon: '📊', title: 'Lane命令队列', desc: '串行任务调度与队列管理' }
    ]
  },
  {
    id: 'execution',
    name: '执行平面：Agent Runtime集群',
    description: '实际执行任务的智能体运行时环境',
    nodes: [
      { icon: '🤖', title: 'Pi Agent核心循环', desc: 'Think/Act/Observe/Reflect' },
      { icon: '📋', title: '上下文引擎', desc: '提示词组装/动态注入' },
      { icon: '🧠', title: '三级记忆子系统', desc: '短期/中期/长期记忆管理' },
      { icon: '🔧', title: '模型Provider插件中心', desc: '多模型接入与切换' },
      { icon: '⚡', title: '工具执行器', desc: '外部工具调用与执行' },
      { icon: '🎯', title: '技能引擎', desc: '技能注册、发现与执行' }
    ]
  }
]

const sideLayers = [
  {
    id: 'extension',
    name: '插件扩展层（一级公民）',
    nodes: [
      { icon: '🤖', title: '模型Provider插件', desc: 'OpenAI/豆包/Ollama等' },
      { icon: '💬', title: '渠道适配器插件', desc: '多平台消息适配' },
      { icon: '🔧', title: '工具/技能插件', desc: '扩展功能与能力' },
      { icon: '💾', title: '记忆存储插件', desc: '多种记忆存储后端' },
      { icon: '🪝', title: '钩子扩展插件', desc: '生命周期事件处理' }
    ]
  },
  {
    id: 'storage',
    name: '持久化存储层',
    nodes: [
      { icon: '📝', title: '会话存储', desc: 'JSONL事件日志' },
      { icon: '💾', title: 'Checkpoint快照存储', desc: '任务状态快照' },
      { icon: '🔢', title: '长期向量知识库', desc: '向量化知识存储' },
      { icon: '⚙️', title: '配置文件存储', desc: '系统配置与元数据' }
    ]
  },
  {
    id: 'security',
    name: '安全沙箱层',
    nodes: [
      { icon: '📦', title: 'Docker隔离沙箱', desc: '容器化执行环境' },
      { icon: '📋', title: '执行策略管控', desc: '资源与权限策略' },
      { icon: '🔐', title: '权限与审批控制', desc: '操作权限管理' },
      { icon: '📊', title: '全链路审计日志', desc: '操作记录与审计' }
    ]
  }
]
</script>

<style scoped>
.architecture-view {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
  animation: fadeInUp 0.8s ease-out forwards;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 架构图容器 */
.architecture-container {
  position: relative;
  margin-bottom: 80px;
  min-height: 1000px;
}

.flowchart-container {
  position: relative;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.02), rgba(0, 212, 170, 0.02));
  border-radius: 24px;
  padding: 60px 40px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  /* 为侧边层预留空间 */
  padding-right: 360px;
  min-height: 900px;
}

/* 层级样式 */
.layer {
  margin-bottom: 60px;
  position: relative;
  z-index: 10;
}

.layer-header {
  text-align: center;
  margin-bottom: 32px;
}

.layer-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 12px;
}

.layer-header .layer-desc {
  font-size: 15px;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

.layer-content {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  /* 限制宽度避免与侧边层冲突 */
  max-width: calc(100% - 360px);
  margin: 0 auto;
}

.layer-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: calc(100% - 360px);
  margin: 0 auto;
}

.grid-row {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

/* 节点盒子 */
.node-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
  background: white;
  border-radius: 16px;
  border: 2px solid var(--border);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-width: 200px;
  text-align: center;
  opacity: 0;
  animation: cardEnter 0.6s ease-out forwards;
  animation-delay: calc(var(--delay, 0) * 0.1s);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

.node-box:hover {
  border-color: var(--primary);
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.2);
  transform: translateY(-8px) scale(1.05);
  z-index: 10;
}

.client-node:hover {
  border-color: #10b981;
  box-shadow: 0 16px 40px rgba(16, 185, 129, 0.2);
}

.gateway-node:hover {
  border-color: #3b82f6;
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.2);
}

.execution-node:hover {
  border-color: #8b5cf6;
  box-shadow: 0 16px 40px rgba(139, 92, 246, 0.2);
}

.node-icon {
  font-size: 36px;
  margin-bottom: 16px;
  animation: float 3s ease-in-out infinite;
  animation-delay: calc(var(--delay, 0) * 0.1s);
}

.node-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.node-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.4;
  min-height: 34px;
}

/* 箭头连接 */
.arrow-down {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  position: relative;
  z-index: 5;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.3s forwards;
}

.arrow-down svg {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* 侧边层 */
.side-layers {
  position: absolute;
  right: 40px;
  top: 60px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 20;
}

.side-layer {
  background: white;
  border-radius: 16px;
  border: 2px solid var(--border);
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: fadeInRight 0.8s ease-out forwards;
  animation-delay: calc(var(--delay, 0) * 0.1s);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.side-layer:hover {
  transform: translateX(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.extension-layer {
  border-color: #10b981;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05));
  animation-delay: 0.4s;
}

.storage-layer {
  border-color: #3b82f6;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  animation-delay: 0.5s;
}

.security-layer {
  border-color: #ef4444;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(16, 185, 129, 0.05));
  animation-delay: 0.6s;
}

.side-layer-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
  text-align: center;
}

.side-layer-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.side-node {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  animation: fadeInLeft 0.6s ease-out forwards;
  animation-delay: calc(var(--delay, 0) * 0.1s + 0.5s);
}

.side-node:hover {
  background: white;
  border-color: var(--primary);
  transform: translateX(8px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 102, 255, 0.15);
}

.side-node-icon {
  font-size: 20px;
  flex-shrink: 0;
  min-width: 24px;
}

.side-node-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.side-node-desc {
  font-size: 10px;
  color: var(--text-muted);
  margin-left: auto;
  text-align: right;
  min-width: 80px;
}

/* 连接线 */
.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: visible;
}

.connection-lines .line {
  position: absolute;
  background: var(--primary);
  opacity: 0.3;
  transform-origin: center;
  animation: lineDraw 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 0.8s;
}

@keyframes lineDraw {
  from {
    transform: scaleX(0) scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1) scaleY(1);
    opacity: 0.3;
  }
}

.connection-lines .vertical {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-1px) scaleY(0);
  transform-origin: top center;
}

.connection-lines .horizontal {
  height: 2px;
  width: 200px;
  right: 300px;
  transform: scaleX(0);
}

.connection-lines .horizontal.extension {
  top: 30%;
  transform-origin: right center;
}

.connection-lines .horizontal.storage {
  top: 50%;
  transform-origin: right center;
}

.connection-lines .horizontal.security {
  top: 70%;
  transform-origin: right center;
}

/* 架构说明 */
.architecture-description {
  margin: 80px 0;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin: 60px 0 40px;
}

.design-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
}

.principle-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  animation: fadeInLeft 0.6s ease-out forwards;
  animation-delay: calc(var(--delay, 0) * 0.1s);
}

.principle-card:hover {
  border-color: var(--primary);
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.12);
  transform: translateY(-8px);
}

.principle-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.principle-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 16px;
}

.principle-card p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 数据流向 */
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto 60px;
}

.flow-step {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 28px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.03), rgba(0, 212, 170, 0.03));
  border-radius: 20px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  opacity: 0;
  animation: fadeInRight 0.6s ease-out forwards;
  animation-delay: calc(var(--delay, 0) * 0.1s);
  transition: all 0.3s ease;
}

.flow-step:hover {
  transform: translateX(8px);
  border-color: rgba(0, 102, 255, 0.2);
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(0, 102, 255, 0.3);
}

.step-content h4 {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 12px;
}

.step-content p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 关键特性 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--delay, 0) * 0.1s);
}

.feature-card:hover {
  border-color: var(--primary);
  box-shadow: 0 16px 40px rgba(0, 102, 255, 0.12);
  transform: translateY(-8px);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 16px;
}

.feature-card p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .flowchart-container {
    padding-right: 40px;
    min-height: auto;
  }
  
  .layer-content,
  .layer-grid {
    max-width: 100%;
  }
  
  .side-layers {
    position: static;
    width: 100%;
    margin-top: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }
  
  .side-layer {
    flex: 1;
    min-width: 300px;
    max-height: none;
  }
  
  .connection-lines {
    display: none;
  }
  
  .grid-row {
    gap: 20px;
  }
  
  .node-box {
    min-width: 180px;
  }
}

@media (max-width: 768px) {
  .architecture-view {
    padding: 40px 20px;
  }
  
  .page-title {
    font-size: 36px;
  }
  
  .layer-grid,
  .grid-row {
    flex-direction: column;
    align-items: center;
  }
  
  .node-box {
    width: 100%;
    max-width: 300px;
  }
  
  .design-principles,
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .side-layers {
    flex-direction: column;
  }
  
  .side-layer {
    width: 100%;
  }
  
  .flow-step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>