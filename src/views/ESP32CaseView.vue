<template>
  <div class="esp32-case-view">
    <h1 class="page-title">Agentic AI：从云端大脑到具身智能</h1>
    <div class="optional-banner">
      <span class="banner-icon">📌</span>
      <span class="banner-text">2026 新趋势：AI 智能体不再局限于对话框，而是深入终端与边缘设备。 ESP32-S3 搭载智能体实现“数字决策 + 物理执行”的具身智能闭环。</span>
    </div>

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

    <!-- Tab 内容 -->
    <div class="tab-content">

      <!-- ===== Tab 0: 硬件与架构 ===== -->
      <div v-show="activeTab === 0">
        <div class="intro-card-new">
          <h2>案例核心价值</h2>
          <p>突破纯软件智能体的局限，实现「端侧感知 → 云端智能体规划 → 端侧执行」的完整闭环。用消费级硬件（ESP32-S3，¥35起）接入 AI 智能体，拓展 AI Agent 在嵌入式、边缘计算场景的落地思路，让智能体真正"走进"物理世界。</p>
        </div>

        <div class="content-grid">
          <div class="tech-section">
            <h2 class="section-title">硬件方案</h2>
            <div class="hw-list">
              <div class="hw-item" v-for="hw in hardware" :key="hw.name">
                <span class="hw-icon">{{ hw.icon }}</span>
                <div>
                  <div class="hw-name">{{ hw.name }}</div>
                  <div class="hw-desc">{{ hw.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="arch-section">
            <h2 class="section-title">端云协同架构与工作流</h2>
            <div class="arch-card">
              <div class="arch-diagram-vertical">
                <!-- 云端 -->
                <div class="arch-node-v cloud">
                  <div class="node-icon">☁️</div>
                  <div class="node-info">
                    <h4>云端：DeepSeek 智能体</h4>
                    <p>NLP理解 · 动作规划 · JSON指令生成</p>
                  </div>
                </div>
                
                <!-- 链接 -->
                <div class="arch-link-v">
                  <div class="link-text left">↑ 硬件数据/音频流</div>
                  <div class="link-line"></div>
                  <div class="link-text right">↓ 执行指令/TTS音频</div>
                </div>
                
                <!-- 端侧 -->
                <div class="arch-node-v edge">
                  <div class="node-icon">📟</div>
                  <div class="node-info">
                    <h4>端侧：ESP32-S3 物理代理</h4>
                    <p>VAD唤醒 · I2S采集音频 · GPIO驱动外设</p>
                  </div>
                </div>
              </div>
              
              <div class="arch-capsules">
                <div class="capsule" v-for="f in features" :key="f">
                  <span class="capsule-dot"></span>{{ f }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Tab 3: 详细烧录步骤（可折叠） ===== -->
      <div v-show="activeTab === 3">
        <div class="flash-intro">
          <p>以下为 ESP32-S3 烧录 MicroPython 固件的完整流程，覆盖 Windows / macOS / Linux 三平台。</p>
        </div>

          <div class="flash-steps">
          <div class="flash-step" v-for="(step, i) in flashSteps" :key="i">
            <!-- 可折叠标题行 -->
            <div class="fstep-header clickable" @click="toggleFlashStep(i)">
              <div class="fstep-num">{{ i + 1 }}</div>
              <div class="fstep-title-area">
                <h3>{{ step.title }}</h3>
                <span class="fstep-badge" v-if="step.badge">{{ step.badge }}</span>
              </div>
              <span class="toggle-icon" :class="{ 'is-open': flashOpen[i] }">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
            <!-- 折叠体 -->
            <div class="fstep-body" v-show="flashOpen[i]">
              <p class="fstep-desc">{{ step.desc }}</p>
              <div class="code-block" v-if="step.code">
                <div class="code-header">
                  <span class="code-lang">{{ step.lang || 'Shell' }}</span>
                  <button class="copy-btn" @click.stop="copyCode(step.code, 'flash_' + i)" :class="{ copied: copiedKey === 'flash_' + i }">
                    {{ copiedKey === 'flash_' + i ? '✓ 已复制' : '复制' }}
                  </button>
                </div>
                <pre><code>{{ step.code }}</code></pre>
              </div>
              <div class="warning-box" v-if="step.warning">⚠️ {{ step.warning }}</div>
              <div class="tip-box" v-if="step.tip">💡 {{ step.tip }}</div>
              <div class="win-note" v-if="step.windows">
                <strong>Windows：</strong>{{ step.windows }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Tab 2: 核心代码（可折叠） ===== -->
      <div v-show="activeTab === 2">
        <div class="flow-steps">
          <div class="step-card" v-for="(step, index) in codeSteps" :key="index">
            <!-- 可折叠标题行 -->
            <div class="step-header clickable" @click="toggleCodeStep(index)">
              <span class="step-num">{{ index + 1 }}</span>
              <h3>{{ step.title }}</h3>
              <span class="toggle-icon" :class="{ 'is-open': codeOpen[index] }">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
            <!-- 折叠体 -->
            <div class="step-content" v-show="codeOpen[index]">
              <p class="step-desc">{{ step.desc }}</p>
              <div class="code-block" v-if="step.code">
                <div class="code-header">
                  <span class="code-lang">MicroPython</span>
                  <button class="copy-btn" @click="copyCode(step.code, 'code_' + index)" :class="{ copied: copiedKey === 'code_' + index }">
                    {{ copiedKey === 'code_' + index ? '✓ 已复制' : '复制' }}
                  </button>
                </div>
                <pre><code>{{ step.code }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Tab 1: 实时验证 Demo ===== -->
      <div v-show="activeTab === 1">
        <div class="demo-intro">
          <p>以下三个功能在浏览器端模拟验证，对接 DeepSeek API，无需真实 ESP32 硬件即可体验完整交互逻辑。</p>
          <div class="api-status-bar">
            <span class="api-indicator" :class="apiReady ? 'ok' : 'warn'">●</span>
            <span>DeepSeek API：{{ apiReady ? '已就绪' : '配置中...' }}</span>
          </div>
        </div>

        <!-- 功能 1：语音唤醒 -->
        <div class="demo-card">
          <div class="demo-card-header">
            <span class="demo-num">功能 1</span>
            <h3>🎤 语音唤醒（VAD + 唤醒词识别）</h3>
            <span class="demo-badge simulate">浏览器模拟</span>
            <!-- 提示词气泡 -->
            <div class="prompt-bubble-wrapper">
              <button class="prompt-bubble-btn" @mouseenter="showPrompt('vad')" @mouseleave="hidePrompt('vad')" @click.stop="togglePrompt('vad')">
                💬 唤醒词配置
              </button>
              <div class="prompt-tooltip" :class="{ visible: promptVisible.vad }" @mouseenter="keepPrompt('vad')" @mouseleave="hidePrompt('vad')">
                <div class="tooltip-title">🔑 唤醒词列表（任意一个触发）</div>
                <div class="tooltip-content">
                  <div class="wake-word-list">
                    <span class="wake-tag" v-for="w in wakeWords" :key="w">{{ w }}</span>
                  </div>
                  <div class="tooltip-sep"></div>
                  <div class="tooltip-subtitle">唤醒后的应答 System Prompt</div>
                  <pre class="tooltip-code">{{ vadSystemPrompt }}</pre>
                </div>
              </div>
            </div>
          </div>
          <p class="demo-desc">模拟 ESP32 端 VAD（语音活动检测）+ 唤醒词识别逻辑：检测到超过阈值的音频能量后，识别输入文本中的唤醒词，触发唤醒并由 DeepSeek 生成智能应答。</p>

          <!-- 唤醒词输入区 -->
          <div class="wake-word-section">
            <div class="wake-word-header">
              <span class="ww-label">🔑 输入包含唤醒词的语音文本（模拟 STT 结果）</span>
            </div>
            <div class="wake-presets">
              <button class="preset-btn" v-for="p in wakePresets" :key="p" @click="wakeInput = p">{{ p }}</button>
            </div>
            <div class="chat-input-row">
              <input
                v-model="wakeInput"
                @keydown.enter="triggerWakeWord"
                placeholder='输入含唤醒词的文本，如："小智你好，帮我开灯"'
                class="chat-input"
                :disabled="wakeLoading"
              />
              <button class="send-btn" @click="triggerWakeWord" :disabled="wakeLoading || !wakeInput.trim()">
                {{ wakeLoading ? '识别中...' : '识别 →' }}
              </button>
            </div>
          </div>

          <!-- VAD 能量检测 -->
          <div class="vad-controls">
            <div class="slider-row">
              <label>唤醒能量阈值：{{ vadThreshold }}</label>
              <input type="range" min="100" max="2000" v-model="vadThreshold" class="slider" />
            </div>
            <button class="demo-btn primary" @click="toggleVAD" :class="{ active: vadListening }">
              {{ vadListening ? '🔴 停止监听' : '🎙️ 麦克风监听' }}
            </button>
          </div>

          <div class="vad-display">
            <div class="energy-bar-container" v-show="vadListening">
              <div class="energy-label">实时音频能量</div>
              <div class="energy-bar-bg">
                <div class="energy-bar-fill" :style="{ width: energyPercent + '%', background: energyPercent > 70 ? '#FF375F' : energyPercent > 40 ? '#FFD60A' : '#00D4AA' }"></div>
                <div class="threshold-line" :style="{ left: (vadThreshold / 2000 * 100) + '%' }"></div>
              </div>
              <div class="energy-value">{{ currentEnergy }}</div>
            </div>
            <div class="vad-log">
              <div class="log-line" v-for="(log, i) in vadLogs" :key="i" :class="log.type">
                <span class="log-time">{{ log.time }}</span>
                <span>{{ log.msg }}</span>
              </div>
            </div>
          </div>

          <!-- 唤醒词应答展示 -->
          <div class="wake-response-box" v-if="wakeResponse">
            <div class="wr-header">
              <span class="wr-wake-tag">🔔 唤醒成功：「{{ detectedWakeWord }}」</span>
              <span class="wr-model">DeepSeek 应答</span>
            </div>
            <div class="wr-content">{{ wakeResponse }}</div>
          </div>
          <div class="wake-loading-box" v-if="wakeLoading">
            <div class="loading-dots"><span></span><span></span><span></span></div>
            <span>DeepSeek 正在生成应答...</span>
          </div>
        </div>

        <!-- 功能 2：自然语言交互 -->
        <div class="demo-card">
          <div class="demo-card-header">
            <span class="demo-num">功能 2</span>
            <h3>💬 自然语言交互</h3>
            <span class="demo-badge live">对接 DeepSeek</span>
            <!-- 提示词气泡 -->
            <div class="prompt-bubble-wrapper">
              <button class="prompt-bubble-btn" @mouseenter="showPrompt('chat')" @mouseleave="hidePrompt('chat')" @click.stop="togglePrompt('chat')">
                💬 System Prompt
              </button>
              <div class="prompt-tooltip right" :class="{ visible: promptVisible.chat }" @mouseenter="keepPrompt('chat')" @mouseleave="hidePrompt('chat')">
                <div class="tooltip-title">📝 System Prompt（自然语言交互）</div>
                <div class="tooltip-content">
                  <pre class="tooltip-code">{{ chatSystemPrompt }}</pre>
                </div>
              </div>
            </div>
          </div>
          <p class="demo-desc">模拟 ESP32 接收到语音转文本后，发送给云端大模型处理，返回自然语言响应。</p>

          <div class="chat-area">
            <div class="chat-messages" ref="chatBox">
              <div class="chat-msg" v-for="(msg, i) in chatMessages" :key="i" :class="msg.role">
                <div class="msg-avatar">{{ msg.role === 'user' ? '📟' : '🤖' }}</div>
                <div class="msg-bubble">
                  <div class="msg-sender">{{ msg.role === 'user' ? 'ESP32（用户语音）' : 'DeepSeek（云端响应）' }}</div>
                  <div class="msg-text" v-html="msg.content"></div>
                </div>
              </div>
              <div class="chat-msg assistant" v-if="chatStreaming">
                <div class="msg-avatar">🤖</div>
                <div class="msg-bubble">
                  <div class="msg-sender">DeepSeek（云端响应）</div>
                  <div class="msg-text typing">{{ streamBuffer }}<span class="cursor">▋</span></div>
                </div>
              </div>
            </div>

            <div class="chat-presets">
              <button class="preset-btn" v-for="p in chatPresets" :key="p" @click="chatInput = p">{{ p }}</button>
            </div>
            <div class="chat-input-row">
              <input
                v-model="chatInput"
                @keydown.enter="sendChat"
                placeholder="输入指令（模拟语音转文本）..."
                class="chat-input"
                :disabled="chatLoading"
              />
              <button class="send-btn" @click="sendChat" :disabled="chatLoading || !chatInput.trim()">
                {{ chatLoading ? '处理中...' : '发送 →' }}
              </button>
            </div>
          </div>
        </div>

        <!-- 功能 3：云端智能体任务规划 -->
        <div class="demo-card">
          <div class="demo-card-header">
            <span class="demo-num">功能 3</span>
            <h3>🧠 云端智能体任务规划</h3>
            <span class="demo-badge live">对接 DeepSeek</span>
            <!-- 提示词气泡 -->
            <div class="prompt-bubble-wrapper">
              <button class="prompt-bubble-btn" @mouseenter="showPrompt('planner')" @mouseleave="hidePrompt('planner')" @click.stop="togglePrompt('planner')">
                💬 System Prompt
              </button>
              <div class="prompt-tooltip right" :class="{ visible: promptVisible.planner }" @mouseenter="keepPrompt('planner')" @mouseleave="hidePrompt('planner')">
                <div class="tooltip-title">📝 System Prompt（任务规划）</div>
                <div class="tooltip-content">
                  <pre class="tooltip-code">{{ plannerSystemPromptPreview }}</pre>
                  <div class="tooltip-note">💡 实际调用时会动态注入当前传感器上下文（设备姿态/运动状态/触控状态）</div>
                </div>
              </div>
            </div>
          </div>
          <p class="demo-desc">输入自然语言指令，DeepSeek 以 JSON 格式返回结构化任务规划（理解意图 → 拆解步骤 → 生成 ESP32 可执行指令）。</p>

          <div class="planner-area">
            <div class="sensor-context">
              <div class="ctx-title">🔌 模拟传感器上下文（ESP32 状态）</div>
              <div class="ctx-fields">
                <label>设备姿态：
                  <select v-model="sensorCtx.orientation">
                    <option>正面朝上</option>
                    <option>倾斜状态</option>
                    <option>反面朝上</option>
                  </select>
                </label>
                <label>运动状态：
                  <select v-model="sensorCtx.motion">
                    <option>静止</option>
                    <option>旋转中</option>
                    <option>快速移动</option>
                  </select>
                </label>
                <label>触控状态：
                  <select v-model="sensorCtx.touched">
                    <option value="false">未触摸</option>
                    <option value="true">被触摸</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="planner-presets">
              <button class="preset-btn" v-for="p in plannerPresets" :key="p" @click="plannerInput = p">{{ p }}</button>
            </div>
            <div class="chat-input-row">
              <input
                v-model="plannerInput"
                @keydown.enter="runPlanner"
                placeholder="输入指令（如：帮我记录会议、控制客厅灯、播报天气）..."
                class="chat-input"
                :disabled="plannerLoading"
              />
              <button class="send-btn" @click="runPlanner" :disabled="plannerLoading || !plannerInput.trim()">
                {{ plannerLoading ? '规划中...' : '规划 →' }}
              </button>
            </div>

            <div class="plan-result" v-if="planResult">
              <div class="plan-section">
                <div class="plan-label">🎯 意图理解</div>
                <div class="plan-value">{{ planResult.understanding }}</div>
              </div>
              <div class="plan-section">
                <div class="plan-label">📋 任务步骤</div>
                <ol class="plan-steps">
                  <li v-for="(step, i) in planResult.task_plan" :key="i">{{ step }}</li>
                </ol>
              </div>
              <div class="plan-section two-col">
                <div>
                  <div class="plan-label">🔊 语音回复文本</div>
                  <div class="plan-value response-text">{{ planResult.response_text }}</div>
                </div>
                <div>
                  <div class="plan-label">📺 显示内容</div>
                  <div class="plan-value display-val">
                    <span class="display-badge" :class="{ active: planResult.need_display }">
                      {{ planResult.need_display ? '需要显示' : '无需显示' }}
                    </span>
                    <span v-if="planResult.need_display">{{ planResult.display_content }}</span>
                  </div>
                </div>
              </div>
              <div class="plan-json-toggle" @click="showJson = !showJson">
                {{ showJson ? '▲ 收起' : '▼ 查看原始 JSON' }}
              </div>
              <div class="code-block" v-if="showJson">
                <pre><code>{{ JSON.stringify(planResult, null, 2) }}</code></pre>
              </div>
            </div>
            <div class="plan-loading" v-if="plannerLoading">
              <div class="loading-dots"><span></span><span></span><span></span></div>
              <span>DeepSeek 正在生成任务规划...</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, reactive } from 'vue'

const DEEPSEEK_API_KEY = 'sk-d6d77abfd83a4660925857d537094f8a'
const DEEPSEEK_BASE = 'https://api.deepseek.com/v1'

const activeTab = ref(0)
const copiedKey = ref(null)
const apiReady = ref(true)

// Tab 顺序：硬件架构 / 实时Demo / 核心代码 / 烧录步骤
const tabs = [
  { icon: '📟', label: '硬件架构' },
  { icon: '🧪', label: '实时验证 Demo' },
  { icon: '📄', label: '核心代码' },
  { icon: '🔥', label: '烧录步骤' },
]

const hardware = [
  { icon: '🔲', name: 'ESP32-S3 N16R8', desc: '双核 240MHz，16MB Flash + 8MB PSRAM' },
  { icon: '🎙️', name: 'INMP441 麦克风', desc: 'I2S 数字麦克风，采样率 16kHz' },
  { icon: '🔊', name: 'MAX98357 扬声器', desc: 'I2S 3W 单声道功放模块' },
  { icon: '📐', name: 'MPU6050 陀螺仪', desc: '6轴IMU，I2C接口' },
  { icon: '👆', name: 'TTP223 触控', desc: '单键电容触摸模块' },
  { icon: '🖥️', name: 'GC9A01 显示屏', desc: '1.28寸圆形 SPI 彩色屏' },
]

const features = ['语音唤醒', '自然语言交互', '端侧数据采集', '云端智能体任务规划', '执行结果反馈']

// ===== 烧录步骤折叠状态（默认前两步展开） =====
const flashOpen = ref([true, false, false, false, false, false, false])
function toggleFlashStep(i) {
  flashOpen.value[i] = !flashOpen.value[i]
}

const flashSteps = [
  {
    title: '安装 esptool 烧录工具',
    badge: '前置依赖',
    desc: '需要 Python 3.8+。esptool 是 Espressif 官方固件烧录工具，支持 ESP32 全系列。',
    code: `# 安装 esptool
pip install esptool

# 验证安装
esptool.py version`,
    tip: 'Windows 建议使用 pip install --user esptool，然后重启终端',
    windows: '如遇到 "命令未找到"，将 Python Scripts 目录加入 PATH 环境变量'
  },
  {
    title: '下载 MicroPython 固件',
    badge: '固件准备',
    desc: '下载 ESP32-S3 专用的 MicroPython 固件（.bin 格式）。不同型号对应不同固件，S3 请注意选正确版本。',
    code: `# macOS / Linux：wget 下载
wget https://micropython.org/resources/firmware/ESP32_GENERIC_S3-20241129-v1.24.1.bin

# Windows PowerShell：
Invoke-WebRequest -Uri "https://micropython.org/resources/firmware/ESP32_GENERIC_S3-20241129-v1.24.1.bin" -OutFile "esp32s3.bin"

# 或直接访问官网下载：
# https://micropython.org/download/ESP32_GENERIC_S3/`,
    tip: '务必下载 ESP32_GENERIC_S3 版本，不要误用 ESP32_GENERIC（不带S3的）'
  },
  {
    title: '让 ESP32 进入烧录模式',
    badge: '硬件操作',
    desc: '烧录前需要将设备置于 Bootloader 模式。不同开发板操作略有差异：',
    code: `【方法一：按键操作（推荐）】
1. 按住 BOOT 键不松手
2. 按一下 RST 键（复位）
3. 松开 BOOT 键
→ 设备进入下载模式，等待烧录

【方法二：首次连接自动进入】
部分开发板（如 Espressif 官方板）
插入 USB 后会自动进入 bootloader

【确认方法】
在设备管理器（Windows）或 /dev/ttyUSB* (Linux) 
或 /dev/cu.usbserial-* (macOS) 中看到新串口即为成功`,
    tip: 'Windows 请安装 CP2102 或 CH340 驱动（取决于开发板上的 USB 芯片型号）',
    warning: '使用数据线而非仅充电线，否则无法通信'
  },
  {
    title: '擦除 Flash（清空旧固件）',
    badge: '强烈推荐',
    desc: '烧录前先擦除 Flash，避免旧固件数据干扰新固件运行。',
    code: `# macOS / Linux（串口一般是 /dev/ttyUSB0 或 /dev/cu.usbserial-xxx）
esptool.py --chip esp32s3 --port /dev/ttyUSB0 erase_flash

# Windows（串口一般是 COM3 / COM4 等，在设备管理器确认）
esptool.py --chip esp32s3 --port COM3 erase_flash

# 出现以下提示说明成功：
# Chip is ESP32-S3
# Erasing flash (this may take a while)...
# Chip erase completed successfully`,
    warning: '擦除会清空所有数据，包括之前上传的程序文件，请确认备份',
  },
  {
    title: '烧录 MicroPython 固件',
    badge: '核心步骤',
    desc: '将下载的 .bin 固件写入 ESP32-S3 的 Flash 起始地址 0x0。',
    code: `# macOS / Linux
esptool.py --chip esp32s3 \\
    --port /dev/ttyUSB0 \\
    --baud 460800 \\
    write_flash -z 0x0 ESP32_GENERIC_S3-20241129-v1.24.1.bin

# Windows
esptool.py --chip esp32s3 ^
    --port COM3 ^
    --baud 460800 ^
    write_flash -z 0x0 ESP32_GENERIC_S3-20241129-v1.24.1.bin

# 成功输出示例：
# Writing at 0x001e7000... (100 %)
# Wrote 1671168 bytes (1021504 compressed)
# Hash of data verified.
# Leaving...`,
    tip: '如烧录失败（CRC错误），将波特率降低到 115200 再试：--baud 115200'
  },
  {
    title: '验证烧录 & 连接 REPL',
    badge: '验证上线',
    desc: '烧录完成后按 RST 复位，使用串口工具连接 REPL（交互式 Python 命令行），验证固件正常工作。',
    code: `# 方式一：mpremote（推荐，pip 安装）
pip install mpremote
mpremote connect /dev/ttyUSB0   # macOS/Linux
mpremote connect COM3            # Windows

# 连接成功后看到 MicroPython 提示符：
# MicroPython v1.24.1 on 2024-11-29; ESP32S3 module
# >>>

# 测试：运行简单代码
>>> import machine
>>> machine.freq()
240000000    # 正常：240MHz

# 方式二：Thonny IDE（图形界面，适合初学者）
# 下载：https://thonny.org/
# 工具 → 选项 → 解释器 → MicroPython (ESP32)

# 方式三：VSCode + PyMakr 插件
# 适合代码开发场景，可直接同步文件`,
    tip: 'mpremote 是最轻量的方案，安装后可直接上传 .py 文件到设备：mpremote fs cp main.py :'
  },
  {
    title: '上传 AI Agent 程序',
    badge: '部署代码',
    desc: '将项目代码文件上传到 ESP32，入口文件 main.py 会在设备上电时自动执行。',
    code: `# 上传单个文件
mpremote connect COM3 fs cp main.py :main.py
mpremote connect COM3 fs cp config.py :config.py

# 批量上传文件夹
mpremote connect COM3 fs cp -r ./src :

# 查看已上传文件
mpremote connect COM3 fs ls

# 运行指定文件（不重启）
mpremote connect COM3 run main.py

# 软复位后自动运行 main.py
mpremote connect COM3 reset

# config.py 内容示例（改这里配置 API）：
WIFI_SSID     = "你的WiFi名称"
WIFI_PASSWORD = "你的WiFi密码"
API_KEY       = "sk-d6d77abfd83a4660925857d537094f8a"
API_BASE      = "https://api.deepseek.com/v1"
MODEL_NAME    = "deepseek-chat"`,
    tip: '生产部署时把敏感 key 写入单独的 secrets.py，不要提交到版本库'
  }
]

// ===== 核心代码折叠状态（默认第一个展开） =====
const codeOpen = ref([true, false, false, false])
function toggleCodeStep(i) {
  codeOpen.value[i] = !codeOpen.value[i]
}

// ===== 提示词气泡 =====
const promptVisible = reactive({ vad: false, chat: false, planner: false })
const promptKeep = reactive({ vad: false, chat: false, planner: false })
let promptTimers = {}

function showPrompt(key) {
  clearTimeout(promptTimers[key])
  promptVisible[key] = true
}
function hidePrompt(key) {
  promptTimers[key] = setTimeout(() => {
    if (!promptKeep[key]) promptVisible[key] = false
  }, 150)
}
function keepPrompt(key) {
  clearTimeout(promptTimers[key])
  promptVisible[key] = true
}
function togglePrompt(key) {
  promptVisible[key] = !promptVisible[key]
}

const vadSystemPrompt = `你是 ESP32 智能硬件上的语音助手"小智"。
用户刚刚通过唤醒词呼唤了你。
请：
1. 简短确认已被唤醒（"我在"/"好的，我在听"等）
2. 如果语音中包含具体指令，直接执行回复
3. 回复控制在 30 字以内，语气自然友好
4. 模拟真实智能音箱的交互风格`

const chatSystemPrompt = `你是运行在 ESP32 智能硬件上的 AI 助手。
负责响应用户语音指令。
要求：
- 回复简洁（不超过100字）
- 像真实的智能音箱一样自然、友好
- 对硬件控制指令给出明确的执行反馈
- 对无法执行的指令诚实说明原因`

const plannerSystemPromptPreview = `你是部署在 ESP32 硬件上的 AI 任务规划智能体。
当前设备状态：[动态注入传感器数据]
  - 设备姿态: {orientation}
  - 运动状态: {motion}
  - 触控状态: {touched}

请严格以 JSON 格式返回，不含 markdown：
{
  "understanding": "对用户意图的一句话理解",
  "task_plan": ["步骤1", "步骤2", "步骤3"],
  "response_text": "语音回复（≤30字）",
  "need_display": true/false,
  "display_content": "显示屏内容（如有）"
}`

// ===== 唤醒词配置 =====
const wakeWords = ['小智', '你好小智', '嘿小智', 'hi 小智', '小智同学', '小智唤醒']
const wakePresets = [
  '小智你好，帮我开灯',
  '嘿小智，现在几点了',
  '你好小智，今天天气如何',
  '小智唤醒，播放音乐',
]
const wakeInput = ref('')
const wakeLoading = ref(false)
const wakeResponse = ref('')
const detectedWakeWord = ref('')

async function triggerWakeWord() {
  const text = wakeInput.value.trim()
  if (!text || wakeLoading.value) return

  // 检测唤醒词
  const found = wakeWords.find(w => text.toLowerCase().includes(w.toLowerCase()))
  if (!found) {
    addVadLog('info', `⚪ 未检测到唤醒词，忽略。（输入：${text}）`)
    return
  }

  detectedWakeWord.value = found
  addVadLog('wake', `⚡ 检测到唤醒词「${found}」！正在生成应答...`)
  wakeLoading.value = true
  wakeResponse.value = ''

  try {
    const res = await fetch(`${DEEPSEEK_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: vadSystemPrompt },
          { role: 'user', content: text }
        ],
        temperature: 0.7
      })
    })
    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content || '已唤醒，请说出你的指令。'
    wakeResponse.value = reply
    addVadLog('wake', `✅ 应答完成：${reply.slice(0, 40)}${reply.length > 40 ? '...' : ''}`)
  } catch (e) {
    wakeResponse.value = `❌ API 请求失败：${e.message}`
    addVadLog('error', `❌ 请求失败：${e.message}`)
  }
  wakeLoading.value = false
}

// ===== VAD 语音唤醒 =====
const vadListening = ref(false)
const vadThreshold = ref(500)
const currentEnergy = ref(0)
const vadLogs = ref([{ type: 'info', time: '--:--:--', msg: '等待开始监听 / 输入唤醒词文本...' }])
let vadInterval = null
let micStream = null

const energyPercent = computed(() => Math.min(100, (currentEnergy.value / 2000) * 100))

async function toggleVAD() {
  if (vadListening.value) {
    stopVAD()
  } else {
    startVAD()
  }
}

async function startVAD() {
  try {
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const audioCtx = new AudioContext()
    const source = audioCtx.createMediaStreamSource(micStream)
    const analyser = audioCtx.createAnalyser()
    analyser.fftSize = 256
    source.connect(analyser)
    const buf = new Uint8Array(analyser.frequencyBinCount)

    vadListening.value = true
    addVadLog('info', '🎙️ 麦克风已开启，开始监听...')

    vadInterval = setInterval(() => {
      analyser.getByteFrequencyData(buf)
      const avg = buf.reduce((a, b) => a + b, 0) / buf.length
      const energy = Math.round(avg * 20)
      currentEnergy.value = energy

      if (energy > vadThreshold.value) {
        addVadLog('wake', `⚡ VAD 触发！能量 ${energy} > 阈值 ${vadThreshold.value}`)
      }
    }, 200)
  } catch {
    addVadLog('error', '❌ 无法访问麦克风，请检查浏览器权限')
  }
}

function stopVAD() {
  vadListening.value = false
  currentEnergy.value = 0
  clearInterval(vadInterval)
  if (micStream) {
    micStream.getTracks().forEach(t => t.stop())
    micStream = null
  }
  addVadLog('info', '⏹️ 已停止监听')
}

function addVadLog(type, msg) {
  const now = new Date()
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
  vadLogs.value.unshift({ type, time, msg })
  if (vadLogs.value.length > 20) vadLogs.value = vadLogs.value.slice(0, 20)
}

// ===== 自然语言交互 =====
const chatMessages = ref([
  { role: 'assistant', content: '👋 ESP32 智能体就绪！输入指令开始交互（模拟语音转文本输入）。' }
])
const chatInput = ref('')
const chatLoading = ref(false)
const chatStreaming = ref(false)
const streamBuffer = ref('')
const chatBox = ref(null)
const chatPresets = ['打开客厅灯', '今天天气怎么样？', '帮我设置一个10分钟的提醒', '播报当前设备状态']

async function sendChat() {
  const text = chatInput.value.trim()
  if (!text || chatLoading.value) return
  chatInput.value = ''
  chatMessages.value.push({ role: 'user', content: text })
  chatLoading.value = true
  chatStreaming.value = true
  streamBuffer.value = ''
  await nextTick()
  if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight

  try {
    const res = await fetch(`${DEEPSEEK_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: chatSystemPrompt },
          ...chatMessages.value.filter(m => m.role !== 'assistant' || chatMessages.value.indexOf(m) > 0).slice(-6).map(m => ({ role: m.role, content: m.content }))
        ],
        stream: true
      })
    })

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      const lines = decoder.decode(value).split('\n').filter(l => l.startsWith('data: '))
      for (const line of lines) {
        const data = line.slice(6)
        if (data === '[DONE]') break
        try {
          const parsed = JSON.parse(data)
          const delta = parsed.choices?.[0]?.delta?.content || ''
          streamBuffer.value += delta
        } catch {}
      }
      await nextTick()
      if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight
    }
    chatMessages.value.push({ role: 'assistant', content: streamBuffer.value })
  } catch (e) {
    chatMessages.value.push({ role: 'assistant', content: `❌ API 请求失败：${e.message}` })
  }
  chatStreaming.value = false
  streamBuffer.value = ''
  chatLoading.value = false
  await nextTick()
  if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight
}

// ===== 云端任务规划 =====
const plannerInput = ref('')
const plannerLoading = ref(false)
const planResult = ref(null)
const showJson = ref(false)
const sensorCtx = ref({ orientation: '正面朝上', motion: '静止', touched: 'false' })
const plannerPresets = ['帮我记录会议要点', '控制客厅的灯', '播报今天的天气', '设置10分钟提醒']

async function runPlanner() {
  const text = plannerInput.value.trim()
  if (!text || plannerLoading.value) return
  plannerLoading.value = true
  planResult.value = null
  showJson.value = false

  const systemPrompt = `你是部署在 ESP32 硬件上的 AI 任务规划智能体。
当前设备状态：
- 设备姿态: ${sensorCtx.value.orientation}
- 运动状态: ${sensorCtx.value.motion}  
- 触控状态: ${sensorCtx.value.touched === 'true' ? '被触摸' : '未触摸'}

请严格以 JSON 格式返回，不要包含任何 markdown 代码块标记，直接输出纯 JSON：
{
  "understanding": "对用户意图的一句话理解",
  "task_plan": ["步骤1", "步骤2", "步骤3"],
  "response_text": "给用户的语音回复文本（不超过30字）",
  "need_display": true或false,
  "display_content": "显示屏要展示的内容（如有）"
}`

  try {
    const res = await fetch(`${DEEPSEEK_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `用户语音指令：${text}` }
        ],
        temperature: 0.3
      })
    })
    const data = await res.json()
    const raw = data.choices?.[0]?.message?.content || ''
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    planResult.value = JSON.parse(cleaned)
  } catch (e) {
    planResult.value = {
      understanding: `解析失败：${e.message}`,
      task_plan: ['请检查 API Key 或网络连接'],
      response_text: '抱歉，任务规划失败，请稍后重试',
      need_display: false,
      display_content: ''
    }
  }
  plannerLoading.value = false
}

function copyCode(code, key) {
  navigator.clipboard.writeText(code).then(() => {
    copiedKey.value = key
    setTimeout(() => { copiedKey.value = null }, 2000)
  })
}

// ===== 核心代码示例 =====
const codeSteps = [
  {
    title: '功能1：语音唤醒 — 离线 VAD 检测',
    desc: '基于音频能量阈值的本地语音活动检测，无需联网',
    code: `from machine import I2S, Pin
import time

audio_in = I2S(0, sck=Pin(40), ws=Pin(41), sd=Pin(39),
               mode=I2S.RX, bits=16, format=I2S.MONO,
               rate=16000, ibuf=64000)

def vad_detect(buf, threshold=800):
    energy = 0
    for i in range(0, len(buf), 2):
        if i + 1 < len(buf):
            s = buf[i] | (buf[i+1] << 8)
            if s & 0x8000: s = -((~s & 0xFFFF) + 1)
            energy += abs(s)
    avg = energy / (len(buf) // 2)
    return avg > threshold, avg

def wait_for_wake():
    print('等待语音唤醒...')
    buf = bytearray(1024)
    while True:
        audio_in.readinto(buf)
        is_speech, energy = vad_detect(buf)
        if is_speech:
            print(f'检测到语音！能量: {energy}')
            return True
        time.sleep_ms(50)`
  },
  {
    title: '功能2：对接 DeepSeek API（HTTP）',
    desc: 'ESP32 通过 WiFi + urequests 发送文本到 DeepSeek 获取回复',
    code: `import network, urequests, ujson

def connect_wifi(ssid, password):
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, password)
    while not wlan.isconnected():
        time.sleep(0.5)
    print('WiFi 已连接：', wlan.ifconfig()[0])

def call_deepseek(text, api_key):
    url = "https://api.deepseek.com/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    body = ujson.dumps({
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": "你是运行在ESP32上的智能助手，回复简洁。"},
            {"role": "user", "content": text}
        ]
    })
    res = urequests.post(url, headers=headers, data=body)
    data = res.json()
    res.close()
    return data['choices'][0]['message']['content']

# 使用
connect_wifi("你的WiFi", "密码")
reply = call_deepseek("打开客厅灯", "your-api-key")
print(reply)`
  },
  {
    title: '功能3：云端任务规划 — JSON 格式输出',
    desc: '让 DeepSeek 以 JSON 格式返回结构化任务规划，便于 ESP32 直接解析执行',
    code: `def plan_task(user_input, sensor_ctx, api_key):
    system = f"""你是ESP32智能体任务规划器。
设备状态：姿态={sensor_ctx['orientation']}，运动={sensor_ctx['motion']}
严格以JSON格式返回（无markdown）：
{{"understanding":"意图","task_plan":["步骤"],"response_text":"回复","need_display":true,"display_content":"显示内容"}}"""
    
    result = call_deepseek_with_system(user_input, system, api_key)
    
    try:
        plan = ujson.loads(result)
        
        # 执行任务步骤
        print("意图:", plan['understanding'])
        for step in plan['task_plan']:
            print("执行:", step)
            execute_step(step)
        
        # 语音播报回复
        tts_speak(plan['response_text'])
        
        # 显示内容
        if plan['need_display']:
            display_show(plan['display_content'])
        
        return plan
    except:
        print("规划解析失败，原始响应:", result)
        return None`
  },
  {
    title: '完整主程序 — 端云协同智能体',
    desc: '整合语音唤醒 → 云端规划 → 执行反馈的完整主循环',
    code: `import uasyncio as asyncio

class ESP32AIAgent:
    def __init__(self, config):
        connect_wifi(config['wifi_ssid'], config['wifi_pass'])
        self.api_key = config['api_key']
        self.sensors = SensorManager()
        self.output = MultiModalOutput()
    
    async def run(self):
        print('ESP32 AI Agent 已启动')
        self.output.show_status('listening')
        
        while True:
            try:
                # 1. 等待语音唤醒
                if wait_for_wake():
                    self.output.show_status('thinking')
                    
                    # 2. 录音 3 秒
                    audio = record_audio(3)
                    
                    # 3. 语音转文本（STT）
                    text = speech_to_text(audio, self.api_key)
                    
                    # 4. 获取传感器上下文
                    ctx = self.sensors.get_context()
                    
                    # 5. 云端任务规划
                    plan = plan_task(text, ctx, self.api_key)
                    
                    # 6. 多模态反馈
                    if plan:
                        self.output.feedback(plan)
                    
                    self.output.show_status('listening')
                    
            except Exception as e:
                print('Error:', e)
                await asyncio.sleep(2)

config = {
    'wifi_ssid': '你的WiFi',
    'wifi_pass': '密码',
    'api_key': 'sk-xxx'
}

asyncio.run(ESP32AIAgent(config).run())`
  }
]
</script>

<style scoped>
.esp32-case-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.optional-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 24px;
  background: linear-gradient(135deg, rgba(255, 217, 61, 0.12), rgba(0, 212, 170, 0.08));
  border: 1px solid rgba(255, 217, 61, 0.3);
  border-radius: 12px;
  margin-bottom: 28px;
}

.banner-icon { font-size: 18px; }
.banner-text { font-size: 14px; color: var(--text-primary); }
.banner-text strong { color: var(--accent); }

/* Tab 导航 */
.tab-nav {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: white;
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.tab-btn:hover { border-color: var(--primary); color: var(--primary); }
.tab-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.tab-content { min-height: 400px; }

/* ====== Tab0: 硬件架构 ====== */
.value-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(0, 212, 170, 0.08));
  border-radius: 16px;
  padding: 28px;
  border: 1px solid rgba(0, 102, 255, 0.15);
  margin-bottom: 28px;
}
.value-card h2 { font-size: 20px; font-weight: 600; color: var(--primary); margin-bottom: 10px; }
.value-card p { font-size: 15px; line-height: 1.7; color: var(--text-primary); }

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(0, 102, 255, 0.12);
}

.tech-section, .arch-section {
  display: flex;
  flex-direction: column;
}

.hw-list { display: flex; flex-direction: column; gap: 10px; flex: 1; }
.hw-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: white;
  border-radius: 10px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}
.hw-icon { font-size: 22px; }
.hw-name { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.hw-desc { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }

.arch-card {
  background: white;
  border-radius: 14px;
  border: 1px solid var(--border);
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.arch-diagram-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-bottom: 24px;
}

.arch-node-v {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
.arch-node-v:hover { transform: translateY(-2px); }

.arch-node-v.cloud { background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(139, 92, 246, 0.05)); border: 1px solid rgba(0, 102, 255, 0.2); box-shadow: 0 8px 24px rgba(0,102,255,0.08); }
.arch-node-v.edge { background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 102, 255, 0.03)); border: 1px solid rgba(0, 212, 170, 0.2); box-shadow: 0 8px 24px rgba(0,212,170,0.08); }

.node-icon { font-size: 32px; flex-shrink: 0; }
.node-info h4 { font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
.node-info p { font-size: 13px; color: var(--text-secondary); line-height: 1.4; margin: 0; }

.arch-link-v {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 0;
  position: relative;
  gap: 16px;
}
.link-text { font-size: 12px; font-weight: 600; width: 130px; }
.link-text.left { text-align: right; color: var(--primary); }
.link-text.right { text-align: left; color: var(--secondary); }
.link-line {
  height: 40px;
  width: 3px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  position: relative;
  border-radius: 2px;
  opacity: 0.6;
}

.arch-capsules {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.capsule {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-primary);
  transition: all 0.3s;
}
.capsule:hover {
  border-color: var(--secondary);
  background: rgba(0, 212, 170, 0.05);
}
.capsule-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  color: var(--secondary);
}

/* ====== Tab1: 烧录步骤（可折叠） ====== */
.flash-intro {
  padding: 14px 20px;
  background: rgba(0, 102, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--text-secondary);
}

.flash-steps { display: flex; flex-direction: column; gap: 12px; }

.flash-step {
  background: white;
  border-radius: 14px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.fstep-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.04), rgba(0, 212, 170, 0.04));
}

.fstep-header.clickable {
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
}
.fstep-header.clickable:hover {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(0, 212, 170, 0.08));
}

.fstep-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
}

.fstep-title-area {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
}

.fstep-title-area h3 { font-size: 15px; font-weight: 600; color: var(--text-primary); }

.fstep-badge {
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
}

/* 折叠箭头 —— 与 OpenClaw Practice 保持一致 */
.toggle-icon {
  margin-left: auto;
  color: var(--text-muted, #adb5bd);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
  color: var(--primary);
}

.fstep-body { padding: 20px; border-top: 1px solid var(--border); }

.fstep-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 14px;
  line-height: 1.6;
}

.warning-box {
  padding: 10px 14px;
  background: rgba(255, 55, 95, 0.07);
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 10px;
  line-height: 1.5;
}

.tip-box {
  padding: 10px 14px;
  background: rgba(255, 214, 10, 0.08);
  border-left: 3px solid var(--highlight);
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 8px;
  line-height: 1.5;
}

.win-note {
  margin-top: 8px;
  padding: 10px 14px;
  background: rgba(0, 102, 255, 0.05);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* ====== Tab3: Demo ====== */
.demo-intro {
  padding: 14px 20px;
  background: rgba(0, 212, 170, 0.06);
  border-radius: 10px;
  border: 1px solid rgba(0, 212, 170, 0.2);
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.api-status-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}

.api-indicator { font-size: 16px; }
.api-indicator.ok { color: #00D4AA; }
.api-indicator.warn { color: #FFD60A; }

.demo-card {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 24px;
  margin-bottom: 20px;
}

.demo-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  position: relative;
}

.demo-num {
  padding: 2px 10px;
  background: var(--primary);
  color: white;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.demo-card-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.demo-badge {
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
}
.demo-badge.simulate { background: rgba(255, 214, 10, 0.15); color: #a88000; }
.demo-badge.live { background: rgba(0, 212, 170, 0.15); color: #007a60; }

.demo-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.5;
}

/* ====== 提示词气泡 ====== */
.prompt-bubble-wrapper {
  position: relative;
  flex-shrink: 0;
}

.prompt-bubble-btn {
  padding: 4px 12px;
  border-radius: 16px;
  border: 1px solid rgba(0, 102, 255, 0.25);
  background: rgba(0, 102, 255, 0.07);
  color: var(--primary);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.prompt-bubble-btn:hover {
  background: rgba(0, 102, 255, 0.14);
  border-color: var(--primary);
}

/* Tooltip 弹出层 —— 使用 fixed 定位保证不被压盖 */
.prompt-tooltip {
  position: fixed;
  top: auto;
  right: auto;
  z-index: 9999;
  width: 480px;
  max-width: 90vw;
  background: #1a1d27;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45), 0 4px 16px rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s;
  transform: translateY(-100%) translateY(-12px);
}

/* 定位通过 JS 动态计算，这里先写相对于 wrapper 的基础偏移 */
.prompt-tooltip {
  /* 默认弹出方向：向上 */
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

.prompt-tooltip.right {
  left: auto;
  right: 0;
  transform: none;
}

.prompt-tooltip.visible {
  opacity: 1;
  pointer-events: auto;
}

.tooltip-title {
  padding: 12px 16px 8px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.tooltip-content {
  padding: 12px 16px 14px;
  max-height: 320px;
  overflow-y: auto;
}

.tooltip-subtitle {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.45);
  margin: 8px 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tooltip-sep {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 8px 0;
}

.tooltip-code {
  margin: 0;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 11.5px;
  line-height: 1.65;
  color: #a8d8a8;
  white-space: pre-wrap;
  word-break: break-word;
}

.wake-word-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
}

.wake-tag {
  padding: 3px 10px;
  background: rgba(0, 212, 170, 0.18);
  color: #00D4AA;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
}

.tooltip-note {
  margin-top: 8px;
  font-size: 11px;
  color: rgba(255, 214, 10, 0.7);
  line-height: 1.5;
}

/* ====== 语音唤醒区域 ====== */
.wake-word-section {
  background: rgba(0, 212, 170, 0.05);
  border: 1px solid rgba(0, 212, 170, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.wake-word-header {
  margin-bottom: 10px;
}

.ww-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
}

.wake-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.wake-response-box {
  margin-top: 14px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.08), rgba(0, 102, 255, 0.06));
  border: 1px solid rgba(0, 212, 170, 0.25);
  border-radius: 12px;
  overflow: hidden;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

.wr-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(0, 212, 170, 0.15);
}

.wr-wake-tag {
  font-size: 13px;
  font-weight: 600;
  color: #007a60;
}

.wr-model {
  font-size: 11px;
  color: var(--text-secondary);
  background: rgba(0, 212, 170, 0.12);
  padding: 2px 8px;
  border-radius: 8px;
}

.wr-content {
  padding: 14px 16px;
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.6;
}

.wake-loading-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  color: var(--text-secondary);
  font-size: 13px;
}

/* VAD */
.vad-controls { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; flex-wrap: wrap; }

.slider-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--text-secondary);
}

.slider {
  width: 150px;
  accent-color: var(--primary);
}

.demo-btn {
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.demo-btn.primary { background: var(--primary); color: white; }
.demo-btn.primary:hover { opacity: 0.85; }
.demo-btn.primary.active { background: var(--accent); }

.vad-display { display: flex; flex-direction: column; gap: 10px; }

.energy-bar-container { display: flex; align-items: center; gap: 12px; }
.energy-label { font-size: 12px; color: var(--text-secondary); white-space: nowrap; }
.energy-bar-bg {
  flex: 1;
  height: 16px;
  background: rgba(0,0,0,0.06);
  border-radius: 8px;
  overflow: visible;
  position: relative;
}
.energy-bar-fill {
  height: 100%;
  border-radius: 8px;
  transition: width 0.1s, background 0.2s;
}
.threshold-line {
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 2px;
  background: var(--accent);
  border-radius: 2px;
}
.energy-value { font-size: 13px; font-weight: 600; color: var(--primary); min-width: 40px; text-align: right; }

.vad-log {
  max-height: 120px;
  overflow-y: auto;
  background: #0f1117;
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.log-line {
  display: flex;
  gap: 10px;
  font-size: 12px;
  font-family: 'Fira Code', monospace;
}
.log-line.info { color: rgba(255,255,255,0.5); }
.log-line.wake { color: #FFD60A; }
.log-line.error { color: var(--accent); }
.log-time { color: rgba(255,255,255,0.3); flex-shrink: 0; }

/* Chat */
.chat-area { display: flex; flex-direction: column; gap: 10px; }

.chat-messages {
  max-height: 280px;
  overflow-y: auto;
  background: #f7f8fa;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-msg {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.chat-msg.assistant { flex-direction: row; }
.chat-msg.user { flex-direction: row-reverse; }

.msg-avatar { font-size: 22px; flex-shrink: 0; }

.msg-bubble { max-width: 75%; }

.chat-msg.user .msg-bubble { align-items: flex-end; display: flex; flex-direction: column; }

.msg-sender { font-size: 11px; color: var(--text-secondary); margin-bottom: 4px; }

.msg-text {
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.chat-msg.user .msg-text {
  background: var(--primary);
  color: white;
  border-bottom-right-radius: 4px;
}

.chat-msg.assistant .msg-text {
  background: white;
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-bottom-left-radius: 4px;
}

.cursor { animation: blink 0.8s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }

.chat-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.preset-btn {
  padding: 5px 12px;
  border-radius: 16px;
  border: 1px solid rgba(0, 102, 255, 0.2);
  background: rgba(0, 102, 255, 0.06);
  color: var(--primary);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}
.preset-btn:hover { background: rgba(0, 102, 255, 0.12); }

.chat-input-row {
  display: flex;
  gap: 8px;
}

.chat-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}
.chat-input:focus { border-color: var(--primary); }
.chat-input:disabled { opacity: 0.6; }

.send-btn {
  padding: 10px 20px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.send-btn:hover { opacity: 0.85; }
.send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Planner */
.planner-area { display: flex; flex-direction: column; gap: 12px; }

.sensor-context {
  padding: 14px 16px;
  background: rgba(0, 102, 255, 0.04);
  border: 1px solid rgba(0, 102, 255, 0.12);
  border-radius: 10px;
}

.ctx-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.ctx-fields {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.ctx-fields label {
  font-size: 13px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.ctx-fields select {
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  background: white;
}

.planner-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.plan-result {
  background: #f7f8fa;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid var(--border);
}

.plan-section { margin-bottom: 14px; }

.plan-section.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 0;
}

.plan-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.plan-value {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.5;
}

.plan-steps {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plan-steps li { font-size: 14px; color: var(--text-primary); line-height: 1.5; }

.response-text {
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.display-val {
  display: flex;
  align-items: center;
  gap: 8px;
}

.display-badge {
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12px;
  background: rgba(0,0,0,0.06);
  color: var(--text-secondary);
}
.display-badge.active {
  background: rgba(0, 212, 170, 0.12);
  color: #007a60;
}

.plan-json-toggle {
  font-size: 12px;
  color: var(--primary);
  cursor: pointer;
  padding: 6px 0;
  margin-top: 4px;
}

.plan-loading {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  color: var(--text-secondary);
  font-size: 14px;
}

.loading-dots {
  display: flex;
  gap: 4px;
}
.loading-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  animation: dotPulse 1.2s ease-in-out infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes dotPulse { 0%, 60%, 100% { opacity: 0.2; } 30% { opacity: 1; } }

/* ====== Tab2: 核心代码（可折叠） ====== */
.flow-steps { display: flex; flex-direction: column; gap: 12px; }
.step-card { background: white; border-radius: 14px; border: 1px solid var(--border); overflow: hidden; }
.step-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  background: linear-gradient(135deg, rgba(0,102,255,0.04), rgba(0,212,170,0.04));
}
.step-header.clickable {
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
}
.step-header.clickable:hover {
  background: linear-gradient(135deg, rgba(0,102,255,0.08), rgba(0,212,170,0.08));
}
.step-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
}
.step-header h3 { font-size: 15px; font-weight: 600; color: var(--text-primary); flex: 1; }
.step-content { padding: 20px; border-top: 1px solid var(--border); }
.step-desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.5; }

/* 通用代码块 */
.code-block { background: #0f1117; border-radius: 10px; overflow: hidden; margin-top: 4px; }
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.code-lang { font-size: 11px; color: rgba(255,255,255,0.35); font-family: 'Fira Code', monospace; }
.copy-btn {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: all 0.2s;
}
.copy-btn:hover { color: white; background: rgba(255,255,255,0.08); }
.copy-btn.copied { color: #00D4AA; border-color: #00D4AA; }
.code-block pre { margin: 0; padding: 14px; overflow-x: auto; }
.code-block code { color: #e2e8f0; font-family: 'Fira Code', 'JetBrains Mono', monospace; font-size: 12.5px; line-height: 1.6; }

@media (max-width: 968px) {
  .content-grid { grid-template-columns: 1fr; }
  .plan-section.two-col { grid-template-columns: 1fr; }
  .prompt-tooltip { width: calc(100vw - 32px); max-width: 400px; }
}
</style>
