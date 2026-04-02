<template>
  <div class="architecture-view">
    <h1 class="page-title">OpenClaw 架构全景</h1>
    <div class="repo-link-container">
      <a href="https://github.com/badlogic/pi-mono" target="_blank" class="repo-link">
        <span class="icon">🔗</span> Pi-mono: badlogic/pi-mono
      </a>
    </div>

    <div class="intro-card-new glass">
      <div class="intro-badge">2026 最火智能体框架</div>
      <h2>从“动口”到“动手”的脚手架</h2>
      <p>
        OpenClaw 不仅是 AI 助手，更是具备本地执行能力的<strong>研发引擎</strong>。
        代码与数据<strong>不上云</strong>，解决企业核心隐私痛点。通过“组装智能体”替代“编写业务逻辑”。
      </p>
    </div>

    <!-- 架构主视图 -->
    <div class="arch-wrapper">
      <svg class="arch-svg" ref="svgEl" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <marker id="arrow-blue" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <polygon points="0,0 5,2.5 0,5" fill="#0066ff" opacity="0.7"/>
          </marker>
          <marker id="arrow-green" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <polygon points="0,0 5,2.5 0,5" fill="#00c49a" opacity="0.7"/>
          </marker>
          <marker id="arrow-orange" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <polygon points="0,0 5,2.5 0,5" fill="#ff6b35" opacity="0.7"/>
          </marker>
        </defs>
        <!-- Paths drawn dynamically by JS -->
        <path v-for="p in paths" :key="p.id" :d="p.d" :class="p.cls" :marker-end="p.marker"/>
        <!-- Flow dots -->
        <circle v-for="p in paths" :key="'dot-'+p.id" r="3" :fill="p.dotColor" opacity="0.85">
          <animateMotion :dur="p.dur" repeatCount="indefinite" :path="p.d"/>
        </circle>
      </svg>

      <div class="arch-container">
        <!-- 1. 消息入口 -->
        <div class="arch-panel msg-input-panel" ref="msgPanel">
          <div class="panel-header">消息入口</div>
          <div class="msg-grid">
            <div class="msg-item" ref="msgItem1"><span class="icon">✈️</span><span>Telegram</span></div>
            <div class="msg-item"><span class="icon">💬</span><span>WhatsApp</span></div>
            <div class="msg-item" ref="msgItem2"><span class="icon">💠</span><span>Feishu</span></div>
            <div class="msg-item"><span class="icon">🔵</span><span>DingTalk</span></div>
            <div class="msg-item" ref="msgItem3"><span class="icon">👾</span><span>Discord</span></div>
            <div class="msg-item"><span class="icon">🛡️</span><span>Signal</span></div>
            <div class="msg-item"><span class="icon">💬</span><span>iMessage</span></div>
            <div class="msg-item"><span class="icon">🌐</span><span>Web UI</span></div>
            <div class="msg-item"><span class="icon">💻</span><span>CLI</span></div>
            <div class="msg-item"><span class="icon">📱</span><span>Native App</span></div>
          </div>
        </div>

        <!-- 2. 网关 -->
        <div class="arch-panel gateway-panel" ref="gatewayPanel">
          <div class="panel-header">Gateway 网关</div>
          <div class="gateway-top">
            <div class="ws-server" ref="wsServer">
              <span class="icon">🖥️</span>
              WebSocket 服务器 <br><small>(127.0.0.1:18789)</small>
            </div>
          </div>
          <div class="gateway-flow">
            <div class="flow-stage" ref="gw1">
              <span class="icon">📩</span><span>消息接收与解析</span>
            </div>
            <div class="flow-stage" ref="gw2">
              <span class="icon">🔐</span><span>鉴权与<br>访问控制</span>
            </div>
            <div class="flow-stage" ref="gw3">
              <span class="icon">🔀</span><span>路由分发</span>
            </div>
            <div class="flow-stage" ref="gw4">
              <span class="icon">📑</span><span>格式转换与长消息切分</span>
            </div>
          </div>
        </div>

        <!-- 3. 智能体运行时 -->
        <div class="arch-panel runtime-panel" ref="runtimePanel">
          <div class="panel-header">Agent 运行时</div>
          <div class="runtime-flow">
            <div class="rt-stage" ref="rt1"><span class="icon">🗣️</span> 会话确定</div>
            <div class="rt-stage" ref="rt2"><span class="icon">🧩</span> 上下文组装</div>
            
            <div class="agentic-loop interactive" ref="agenticLoop" @click="showLoopModal = true">
              <div class="loop-core">
                <span class="icon">♾️</span>
                <strong>Agentic Loop</strong>
              </div>
              <div class="loop-nodes">
                <span class="node n1">Load ⏳</span>
                <span class="node n2">Call 📡</span>
                <span class="node n3">Parse 🔍</span>
                <span class="node n4">Execute ⚙️</span>
                <span class="node n5">Append ➕</span>
              </div>
            </div>
            
            <div class="rt-stage" ref="rt3"><span class="icon">💾</span> 状态持久化</div>
          </div>
        </div>

        <!-- 4. AI 模型层 -->
        <div class="arch-panel models-panel" ref="modelsPanel">
          <div class="panel-header">AI 模型层</div>
          <div class="models-row">
            <div class="model-item"><span class="icon">🟠</span>Claude</div>
            <div class="model-item"><span class="icon">🟢</span>GPT-4</div>
            <div class="model-item"><span class="icon">🐳</span>DeepSeek</div>
            <div class="model-item"><span class="icon">🦙</span>Llama (Ollama)</div>
            <div class="model-item"><span class="icon">🌙</span>Kimi</div>
            <div class="model-item"><span class="icon">🟣</span>通义千问</div>
            <div class="model-item"><span class="icon">✨</span>Gemini</div>
          </div>
        </div>

        <!-- 5. 扩展插件 -->
        <div class="arch-panel plugins-panel" ref="pluginsPanel">
          <div class="panel-header">扩展插件</div>
          <div class="plugins-grid">
            <div class="plugin-item"><span class="icon">🧠</span>模型提供商</div>
            <div class="plugin-item"><span class="icon">🛠️</span>工具插件</div>
            <div class="plugin-item"><span class="icon">📂</span>记忆插件</div>
            <div class="plugin-item"><span class="icon">🔗</span>渠道插件</div>
          </div>
        </div>

      </div>
    </div>

    <!-- 使用小技巧区域 -->
    <div class="tips-section">
      <h2 class="section-title">💡 使用小技巧</h2>
      <div class="tips-grid">
        <!-- 配置调整 -->
        <div class="tips-card glass">
          <div class="card-header">
            <span class="card-icon">⚙️</span>
            <h3>配置调整</h3>
          </div>
          <ul class="tips-list">
            <li>
              <code class="cmd-block">openclaw config set tools.profile "full"</code>
              <p>解决写入无权限问题，开启完整系统权限</p>
            </li>
            <li>
              <code class="cmd-block">openclaw config set channels.feishu.streaming true</code>
              <p>开启流式回复，体验更流畅的数据下发</p>
            </li>
            <li>
              <code class="cmd-block">openclaw config set channels.feishu.footer.elapsed true</code>
              <p>在消息页脚显示本次请求的总耗时</p>
            </li>
            <li>
              <code class="cmd-block">openclaw config set channels.feishu.footer.status true</code>
              <p>开启实时的 Agent 运行生命周期状态展示</p>
            </li>
          </ul>
        </div>

        <!-- 快捷命令 -->
        <div class="tips-card glass">
          <div class="card-header">
            <span class="card-icon">⚡</span>
            <h3>快捷命令</h3>
          </div>
          <ul class="tips-list">
            <li>
              <code class="cmd-inline">/reasoning on</code>
              <p>开启思考过程展示，查看 Agent 的决策链路</p>
            </li>
            <li>
              <code class="cmd-inline">/verbose on</code>
              <p>开启详细模式，实时追踪工具调用细节</p>
            </li>
            <li>
              <code class="cmd-inline">/stop</code>
              <p>立即中断当前正在运行的 Agent 任务</p>
            </li>
            <li>
              <code class="cmd-inline">/status</code>
              <p>查看当前活跃 Agent 的状态、内存与负载</p>
            </li>
            <li>
              <code class="cmd-inline">/compact</code>
              <p>主动压缩上下文，建议超过 100k Token 时执行</p>
            </li>
            <li>
              <code class="cmd-inline">/new</code>
              <p>开启全新对话，清空历史上下文以消除干扰</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Agentic Loop 详细架构探出层 -->
    <Teleport to="body">
      <Transition name="fade">
        <div class="loop-modal-overlay" v-if="showLoopModal" @click="showLoopModal = false">
          <div class="loop-modal-content" @click.stop>
            <button class="close-btn" @click="showLoopModal = false">✕</button>
            <div class="image-wrapper">
              <img src="../assets/agentic-loop-clean.png" alt="Agentic Loop Architecture Design" class="original-arch-img" />
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const showLoopModal = ref(false)

// Template refs for key DOM nodes
const svgEl = ref(null)
const msgPanel = ref(null)
const msgItem1 = ref(null)
const msgItem2 = ref(null)
const msgItem3 = ref(null)
const gatewayPanel = ref(null)
const wsServer = ref(null)
const gw1 = ref(null)
const gw2 = ref(null)
const gw3 = ref(null)
const gw4 = ref(null)
const runtimePanel = ref(null)
const r1 = ref(null)
const r2 = ref(null)
const r3 = ref(null)
const agenticLoop = ref(null)
const modelsPanel = ref(null)
const pluginsPanel = ref(null)

const paths = ref([])

function toSVG(el, svgRect) {
  const r = el.getBoundingClientRect()
  const scaleX = 1000 / svgRect.width
  const scaleY = 1000 / svgRect.height
  const cx = (r.left + r.width / 2 - svgRect.left) * scaleX
  const cy = (r.top + r.height / 2 - svgRect.top) * scaleY
  const right = (r.right - svgRect.left) * scaleX
  const left = (r.left - svgRect.left) * scaleX
  const top = (r.top - svgRect.top) * scaleY
  const bottom = (r.bottom - svgRect.top) * scaleY
  return { cx, cy, right, left, top, bottom }
}

function curve(x1, y1, x2, y2, id, cls, dotColor, dur, marker) {
  const dx = (x2 - x1)
  const dy = (y2 - y1)
  const adx = Math.abs(dx)
  const ady = Math.abs(dy)
  let d
  if (ady < 40) {
    const bend = Math.min(adx * 0.35, 60)
    const mx = (x1 + x2) / 2
    d = `M ${x1} ${y1} Q ${mx} ${y1 - bend}, ${x2} ${y2}`
  } else if (adx < 40) {
    const bend = Math.min(ady * 0.2, 40)
    const my = (y1 + y2) / 2
    d = `M ${x1} ${y1} Q ${x1 + bend} ${my}, ${x2} ${y2}`
  } else {
    d = `M ${x1} ${y1} C ${x1 + dx * 0.5} ${y1}, ${x2 - dx * 0.5} ${y2}, ${x2} ${y2}`
  }
  return { id, d, cls, dotColor, dur: dur + 's', marker: marker ? `url(#arrow-${marker})` : 'none' }
}

function drawConnectors() {
  if (!svgEl.value) return
  const svgRect = svgEl.value.getBoundingClientRect()
  if (svgRect.width === 0 || svgRect.height === 0) return

  const refs = {
    msg: msgPanel.value, mi1: msgItem1.value, mi2: msgItem2.value, mi3: msgItem3.value,
    gw: gatewayPanel.value, ws: wsServer.value,
    g1: gw1.value, g2: gw2.value, g3: gw3.value, g4: gw4.value,
    rt: runtimePanel.value, r1: rt1.value, r2: rt2.value, r3: rt3.value,
    loop: agenticLoop.value, models: modelsPanel.value, plugins: pluginsPanel.value
  }
  if (Object.values(refs).some(v => !v)) return

  const p = (el) => toSVG(el, svgRect)
  const newPaths = []

  const g1 = p(refs.g1), g2 = p(refs.g2), g3 = p(refs.g3), g4 = p(refs.g4)
  const ws = p(refs.ws)
  const r1 = p(refs.r1), r2 = p(refs.r2), r3 = p(refs.r3)
  const lp = p(refs.loop)
  const mod = p(refs.models)
  const plug = p(refs.plugins)
  const msgPanelP = p(refs.msg)

  // 1. Msg -> G1
  newPaths.push(curve(msgPanelP.right, p(refs.mi1).cy, g1.left, g1.cy - 12, 'm1-g1', 'curve-line blue-line', '#0066ff', 2.8, 'blue'))
  newPaths.push(curve(msgPanelP.right, p(refs.mi2).cy, g1.left, g1.cy,      'm2-g1', 'curve-line blue-line', '#3388ff', 3.2, 'blue'))
  newPaths.push(curve(msgPanelP.right, p(refs.mi3).cy, g1.left, g1.cy + 12, 'm3-g1', 'curve-line blue-line', '#5599ff', 3.6, 'blue'))

  // 2. WS -> G1
  newPaths.push(curve(ws.cx, ws.bottom, g1.cx, g1.top, 'ws-g1', 'curve-line green-line', '#00c49a', 2, 'green'))

  // 3. GW chain
  newPaths.push(curve(g1.right, g1.cy, g2.left, g2.cy, 'g1-2', 'curve-line green-line', '#00c49a', 1.8, 'green'))
  newPaths.push(curve(g2.right, g2.cy, g3.left, g3.cy, 'g2-3', 'curve-line green-line', '#00c49a', 1.8, 'green'))
  newPaths.push(curve(g3.right, g3.cy, g4.left, g4.cy, 'g3-4', 'curve-line green-line', '#00c49a', 1.8, 'green'))

  // 4. GW to Runtime (fan)
  newPaths.push(curve(g4.right, g4.cy, r1.left, r1.cy, 'g4-r1', 'curve-line green-line', '#00c49a', 2.5, 'green'))
  newPaths.push(curve(g4.right, g4.cy, r2.left, r2.cy, 'g4-r2', 'curve-line green-line', '#44ddbb', 2.8, 'green'))
  newPaths.push(curve(g4.right, g4.cy, lp.left, lp.cy, 'g4-lp', 'curve-line green-line', '#66eebb', 3.2, 'green'))

  // 5. Runtime vertical
  newPaths.push(curve(r1.cx, r1.bottom, r2.cx, r2.top, 'r1-r2', 'curve-line orange-line', '#ff6b35', 1.6, 'orange'))
  newPaths.push(curve(r2.cx, r2.bottom, lp.cx, lp.top, 'r2-lp', 'curve-line orange-line', '#ff6b35', 1.6, 'orange'))
  newPaths.push(curve(lp.cx, lp.bottom, r3.cx, r3.top, 'lp-r3', 'curve-line orange-line', '#ff6b35', 1.6, 'orange'))

  // 6. AI模型层 -> 状态持久化 (UPWARDS)
  newPaths.push(curve(mod.cx, mod.top, r3.cx, r3.bottom, 'mod-r3', 'curve-line orange-line', '#ff8844', 2.5, 'orange'))

  // 7. Loop -> 扩展插件
  newPaths.push(curve(lp.right, lp.cy, plug.left, plug.top + 40, 'lp-plug', 'curve-line orange-line', '#ff8844', 3, 'orange'))

  // 8. 扩展插件 -> Loop
  newPaths.push(curve(plug.cx, plug.top, lp.right, lp.cy + 20, 'plug-lp', 'curve-line green-line', '#00c49a', 2.8, 'green'))

  // 9. 扩展插件 -> 状态持久化
  newPaths.push(curve(plug.cx + 20, plug.top, r3.right, r3.cy, 'plug-r3', 'curve-line green-line', '#00c49a', 3, 'green'))

  // 10. 扩展插件 -> AI模型层
  newPaths.push(curve(plug.left, plug.cy, mod.right, mod.cy, 'plug-mod', 'curve-line green-line', '#00c49a', 3.5, 'green'))

  paths.value = newPaths
}

let resizeObs = null
onMounted(async () => {
  await nextTick()
  setTimeout(drawConnectors, 500) // Give more time for grid to settle
  resizeObs = new ResizeObserver(drawConnectors)
  if (svgEl.value) resizeObs.observe(svgEl.value.parentElement)
})
onUnmounted(() => resizeObs?.disconnect())

</script>

<style scoped>
.architecture-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
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

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.repo-link-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.repo-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.repo-link:hover {
  background: rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
  color: var(--primary);
  border-color: rgba(0, 102, 255, 0.2);
}

.repo-link .icon {
  font-size: 16px;
}

.arch-wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  /* Let it expand to fit content properly */
  height: auto;
  min-height: 700px;
}

.arch-svg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
  z-index: 100; /* Brought to top */
  pointer-events: none;
}
.curve-line {
  fill: none;
  stroke-width: 1.5;
  /* No dashes on primary lines - clean look */
}
.blue-line { stroke: #0066ff; opacity: 0.45; }
.green-line { stroke: #00c49a; opacity: 0.45; }
.orange-line { stroke: #ff6b35; opacity: 0.45; }
.feedback-line { stroke: #cc44cc; opacity: 0.4; stroke-dasharray: 5 3; }

/* 核心布局 */
.arch-container {
  display: grid;
  grid-template-columns: 240px 1fr 340px;
  grid-template-rows: auto auto; /* Fixes overlap by letting grid grow */
  gap: 20px;
  grid-template-areas: 
    "msg gateway runtime"
    "models models plugins";
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 20;
}

@media (max-width: 1024px) {
  .arch-container {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "msg"
      "gateway"
      "runtime"
      "models"
      "plugins";
  }
}

.arch-panel {
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
}

.panel-header {
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  letter-spacing: 0.5px;
}

/* 蓝色 - 消息入口 */
.msg-input-panel {
  grid-area: msg;
  background: linear-gradient(145deg, rgba(230, 243, 255, 0.9) 0%, rgba(200, 230, 255, 0.7) 100%);
  border: 1px solid rgba(0, 102, 255, 0.2);
}
.msg-input-panel .panel-header { border-bottom: 2px dashed rgba(0, 102, 255, 0.2); color: #0055cc; }

.msg-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.msg-item {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: #333;
  border: 1px solid rgba(0, 102, 255, 0.15);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transition: transform 0.2s;
}
.msg-item:hover { transform: translateY(-2px); }
.msg-item .icon { font-size: 20px; }

/* 绿色 - 网关 */
.gateway-panel {
  grid-area: gateway;
  background: linear-gradient(145deg, rgba(232, 245, 233, 0.9) 0%, rgba(200, 230, 201, 0.7) 100%);
  border: 1px solid rgba(0, 212, 170, 0.3);
}
.gateway-panel .panel-header { border-bottom: 2px dashed rgba(0, 212, 170, 0.25); color: #007a60; }

.gateway-top {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.ws-server {
  background: white;
  padding: 14px 40px;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  color: #007a60;
  border: 2px solid rgba(0, 212, 170, 0.3);
  box-shadow: 0 8px 20px rgba(0, 212, 170, 0.12);
}
.ws-server .icon { margin-right: 8px; }

.gateway-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: rgba(255,255,255,0.4);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(0, 212, 170, 0.15);
}
.flow-stage {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 10px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  border: 1px solid rgba(0, 212, 170, 0.3);
  box-shadow: 0 6px 16px rgba(0, 212, 170, 0.06);
  min-height: 80px;
  justify-content: center;
  transition: transform 0.2s;
  z-index: 2;
}
.flow-stage:hover { transform: translateY(-2px); }
.flow-stage .icon { font-size: 20px; margin-bottom: 4px; }

@media (max-width: 1024px) {
  .gateway-flow { flex-wrap: wrap; }
}

/* 橙色 - 运行时 */
.runtime-panel {
  grid-area: runtime;
  background: linear-gradient(145deg, rgba(255, 243, 224, 0.9) 0%, rgba(255, 224, 178, 0.7) 100%);
  border: 1px solid rgba(255, 107, 53, 0.2);
}
.runtime-panel .panel-header { border-bottom: 2px dashed rgba(255, 107, 53, 0.2); color: #cc4400; }

.runtime-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.rt-stage {
  width: 90%;
  background: white;
  padding: 8px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  color: #cc4400;
  border: 1px solid rgba(255, 107, 53, 0.3);
  box-shadow: 0 4px 14px rgba(255, 107, 53, 0.06);
  z-index: 2;
}

/* 炫酷的 Agentic Loop */
.agentic-loop {
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 50%;
  box-shadow: inset 0 0 20px rgba(255, 107, 53, 0.05), 0 8px 24px rgba(255, 107, 53, 0.15);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
}

.agentic-loop::before {
  content: '';
  position: absolute;
  top: 4px; left: 4px; right: 4px; bottom: 4px;
  border: 2px dashed rgba(255, 107, 53, 0.5);
  border-radius: 50%;
  animation: spinRing 12s linear infinite;
}

@keyframes spinRing { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loop-core {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  font-weight: 800;
  color: #cc4400;
  z-index: 10;
  text-align: center;
  background: white;
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
}
.loop-core .icon { font-size: 26px; margin-bottom: 2px; }

.loop-nodes {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 20;
}

.node {
  position: absolute;
  top: 50%; left: 50%;
  margin-top: -12px;
  margin-left: -32px;
  font-size: 11px;
  font-weight: 700;
  color: #cc4400;
  background: white;
  padding: 2px 8px;
  border-radius: 20px;
  border: 2px solid rgba(255, 107, 53, 0.2);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  box-sizing: border-box;
}

/* Orbit translations for a 80px radius (fitting the 150px circle) */
.n1 { transform: rotate(-90deg) translate(80px) rotate(90deg); }
.n2 { transform: rotate(-18deg) translate(80px) rotate(18deg); }
.n3 { transform: rotate(54deg) translate(80px) rotate(-54deg); }
.n4 { transform: rotate(126deg) translate(80px) rotate(-126deg); }
.n5 { transform: rotate(198deg) translate(80px) rotate(-198deg); }

/* 红色 - 模型层 */
.models-panel {
  grid-area: models;
  background: linear-gradient(145deg, rgba(255, 235, 238, 0.9) 0%, rgba(255, 205, 210, 0.7) 100%);
  border: 1px solid rgba(233, 30, 99, 0.2);
}
.models-panel .panel-header { border-bottom: 2px dashed rgba(233, 30, 99, 0.2); color: #c2185b; }

.models-row {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
}
.model-item {
  background: white;
  padding: 12px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  color: #c2185b;
  border: 1px solid rgba(233, 30, 99, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.08);
  transition: transform 0.2s;
}
.model-item:hover { transform: translateY(-2px); }

/* 紫色 - 扩展插件 */
.plugins-panel {
  grid-area: plugins;
  background: linear-gradient(145deg, rgba(243, 229, 245, 0.9) 0%, rgba(225, 190, 231, 0.7) 100%);
  border: 1px solid rgba(156, 39, 176, 0.2);
}
.plugins-panel .panel-header { border-bottom: 2px dashed rgba(156, 39, 176, 0.2); color: #7b1fa2; }

.plugins-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: 100%;
}
.plugin-item {
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #7b1fa2;
  border: 1px solid rgba(156, 39, 176, 0.2);
  box-shadow: 0 6px 16px rgba(156, 39, 176, 0.06);
  transition: transform 0.2s;
}
.plugin-item:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(156, 39, 176, 0.12); }
.plugin-item .icon { font-size: 28px; margin-bottom: 8px; }

/* ================================= */
/* Modal Overlay & Animations        */
/* ================================= */

.agentic-loop.interactive {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.agentic-loop.interactive:hover {
  transform: scale(1.02);
  box-shadow: inset 0 0 20px rgba(255, 107, 53, 0.1), 0 12px 32px rgba(255, 107, 53, 0.2);
}

.loop-modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.loop-modal-content {
  width: 100%;
  max-width: 1100px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05);
  padding: 24px;
  position: relative;
  overflow: hidden;
  max-height: 95vh;
}

.close-btn {
  position: absolute;
  top: 24px; right: 24px;
  width: 40px; height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.05);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.close-btn:hover { background: rgba(0,0,0,0.1); }

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  background: white;
  padding: 0;
  box-shadow: 0 12px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05);
}

.original-arch-img {
  max-width: 100%;
  max-height: calc(95vh - 48px);
  object-fit: contain;
  border-radius: 12px;
  display: block;
}

/* 使用小技巧样式 */
.tips-section {
  margin-top: 60px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 80px;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 30px;
  text-align: left;
  letter-spacing: -0.5px;
}

.tips-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
}

@media (max-width: 1024px) {
  .tips-grid { grid-template-columns: 1fr; }
}

.tips-card {
  padding: 30px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.tips-card:hover { transform: translateY(-4px); }

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.card-icon { font-size: 24px; }
.card-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tips-list li {
  margin-bottom: 20px;
}
.tips-list li:last-child { margin-bottom: 0; }

.cmd-block {
  display: block;
  background: #1e1e1e;
  color: #dcdcdc;
  padding: 12px 16px;
  border-radius: 10px;
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 13px;
  margin-bottom: 8px;
  border-left: 4px solid var(--primary);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow-x: auto;
}

.cmd-inline {
  display: inline-block;
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 6px;
  font-family: "SF Mono", monospace;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}

.tips-list p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
  padding-left: 4px;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
