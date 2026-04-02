<template>
  <div class="ollama-view">
    <h1 class="page-title">本地模型部署：Ollama 快速上手</h1>

    <div class="subtitle-bar">
      <span class="sub-tag">🔒 数据不出内网</span>
      <span class="sub-tag">⚡ 消费级显卡可跑</span>
      <span class="sub-tag">🔌 OpenAI 兼容接口</span>
      <span class="sub-tag">🦞 OpenClaw 直接对接</span>
    </div>

    <!-- 为什么需要本地部署 -->
    <div class="why-section">
      <div class="why-card" v-for="(item, i) in whyItems" :key="i">
        <div class="why-icon">{{ item.icon }}</div>
        <div class="why-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 主内容：左右布局 -->
    <div class="main-grid">
      <!-- 左：安装与运行 -->
      <div class="left-col">
        <h2 class="section-title">3 步跑通本地大模型</h2>
        <div class="step-list">
          <div class="install-step" v-for="(step, i) in installSteps" :key="i">
            <div class="step-badge">{{ i + 1 }}</div>
            <div class="step-body">
              <h3>{{ step.title }}</h3>
              <p class="step-desc">{{ step.desc }}</p>
              <div class="code-block" v-if="step.code">
                <div class="code-header">
                  <span class="code-lang">{{ step.lang }}</span>
                  <button class="copy-btn" @click="copyCode(step.code, i)" :class="{ copied: copiedIndex === i }">
                    {{ copiedIndex === i ? '✓ 已复制' : '复制' }}
                  </button>
                </div>
                <pre><code>{{ step.code }}</code></pre>
              </div>
              <div class="tip-box" v-if="step.tip">💡 {{ step.tip }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右：模型选择 + OpenClaw 对接 -->
      <div class="right-col">
        <h2 class="section-title">推荐模型选型</h2>
        <div class="model-table">
          <div class="model-row header-row">
            <span>模型</span>
            <span>参数量</span>
            <span>显存要求</span>
            <span>推荐场景</span>
          </div>
          <div class="model-row" v-for="m in models" :key="m.name" :class="{ highlight: m.highlight }">
            <span class="model-name">{{ m.name }}</span>
            <span>{{ m.size }}</span>
            <span>{{ m.vram }}</span>
            <span class="model-scene">{{ m.scene }}</span>
          </div>
        </div>

        <h2 class="section-title">对接 OpenClaw</h2>
        <div class="connect-block">
          <p class="connect-desc">Ollama 默认暴露 <code>http://localhost:11434</code>，与 OpenAI API 完全兼容，OpenClaw 只需修改 baseURL 即可切换。</p>
          <div class="code-block">
            <div class="code-header">
              <span class="code-lang">Python</span>
              <button class="copy-btn" @click="copyCode(openclaw_code, 99)" :class="{ copied: copiedIndex === 99 }">
                {{ copiedIndex === 99 ? '✓ 已复制' : '复制' }}
              </button>
            </div>
            <pre><code>{{ openclaw_code }}</code></pre>
          </div>
        </div>

        <!-- 环境变量配置 -->
        <h2 class="section-title">环境变量关键配置</h2>
        <div class="env-config-block">
          <div class="env-row" v-for="env in envConfigs" :key="env.key">
            <code class="env-key">{{ env.key }}</code>
            <span class="env-desc">{{ env.desc }}</span>
          </div>
        </div>

        <!-- 实时 Ollama 状态检测 -->
        <h2 class="section-title">本地服务状态检测</h2>
        <div class="status-checker">
          <div class="status-row">
            <div class="status-dot" :class="ollamaStatus"></div>
            <span class="status-text">Ollama 服务：{{ statusLabels[ollamaStatus] }}</span>
            <button class="check-btn" @click="checkOllama" :disabled="checking">
              {{ checking ? '检测中...' : '重新检测' }}
            </button>
          </div>
          <div class="model-list-result" v-if="localModels.length > 0">
            <div class="result-label">已安装模型：</div>
            <div class="tag-list">
              <span class="model-tag" v-for="m in localModels" :key="m">{{ m }}</span>
            </div>
          </div>
          <div class="no-model-tip" v-if="ollamaStatus === 'offline'">
            <p>🔌 Ollama 未启动，请先运行：<code>ollama serve</code></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copiedIndex = ref(null)
const checking = ref(false)
const ollamaStatus = ref('unknown') // unknown | online | offline
const localModels = ref([])

const statusLabels = {
  unknown: '未检测',
  online: '运行中 ✅',
  offline: '未启动 ❌'
}

const whyItems = [
  { icon: '🔒', title: '数据安全', desc: '代码、需求文档、内部数据全程不经过外网，满足企业合规与保密要求。' },
  { icon: '💰', title: '零 Token 成本', desc: '本地推理无 API 调用费用，适合研发阶段大量调试和批量任务。' },
  { icon: '⚡', title: '低延迟响应', desc: '本地模型平均响应延迟 < 200ms（8GB 显存），远低于云端 API 的网络往返耗时。' },
  { icon: '🔌', title: '无缝接入 OpenClaw', desc: 'Ollama 提供 OpenAI 兼容接口，只需修改一行 baseURL，OpenClaw 即可切换到本地模型。' },
]

const installSteps = [
  {
    title: '安装 Ollama',
    lang: 'Shell',
    desc: 'macOS / Linux 一键安装；Windows 下载安装包（ollama.com）',
    code: `# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh

# 验证安装
ollama --version`,
    tip: 'Windows 用户直接下载 OllamaSetup.exe 安装即可，无需命令行'
  },
  {
    title: '拉取并运行模型',
    lang: 'Shell',
    desc: '推荐根据使用场景拉取专属模型，以获得最佳的性能与显存平衡。',
    code: `# 编码推荐（全链路开发）：qwen3.5:30b
ollama pull qwen3.5:30b

# 图片识别推荐（UI转代码/多模态）：qwen3.5:4b
ollama pull qwen3.5:4b

# 对话推荐（逻辑推理/日常问答）：deepseek-r1:8b
ollama pull deepseek-r1:8b

# 运行模型（交互对话）
ollama run qwen3.5:30b

# 后台服务模式（供 OpenClaw 调用）
ollama serve`,
    tip: '首次拉取需要下载模型文件，不同参数量下载耗时和占用空间不同。'
  },
  {
    title: '验证 API 接口',
    lang: 'Python / Shell',
    desc: 'Ollama 默认在 11434 端口暴露 OpenAI 兼容接口，可直接用官方 SDK 调用。',
    code: `# 1. (选做) 终端直接检查服务是否正常启动
curl http://localhost:11434/api/tags

# 2. Python 代码方式 (完全兼容 OpenAI 官方库)
# pip install openai
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama"         # 随便填，Ollama 不校验 key
)

response = client.chat.completions.create(
    model="qwen3.5:30b",
    messages=[
      {"role": "user", "content": "帮我写一个 Python 冒泡排序"}
    ]
)
print(response.choices[0].message.content)`,
    tip: '返回 JSON 中的 models 列表即代表服务正常'
  }
]

const models = [
  { name: 'qwen3.5:30b', size: '30B', vram: '18-24GB', scene: '💻 编码推荐：全链路架构、编码与漏洞修复', highlight: true },
  { name: 'deepseek-r1:8b', size: '8B', vram: '6-8GB', scene: '💬 对话推荐：逻辑推理、文档问答、辅助决策', highlight: true },
  { name: 'qwen3.5:4b', size: '4B', vram: '4-6GB', scene: '👁️ 图片识别推荐：UI转代码、视觉理解解析' },
]

const openclaw_code = `# OpenClaw 配置文件 (config.yaml)
model:
  provider: ollama          # 指定使用 ollama 适配器
  base_url: http://localhost:11434/v1
  model_name: qwen3.5:30b
  api_key: ollama           # Ollama 不校验 key，填任意值即可`

async function checkOllama() {
  checking.value = true
  ollamaStatus.value = 'unknown'
  localModels.value = []
  try {
    const res = await fetch('http://localhost:11434/api/tags', { signal: AbortSignal.timeout(3000) })
    if (res.ok) {
      const data = await res.json()
      ollamaStatus.value = 'online'
      localModels.value = (data.models || []).map(m => m.name)
    } else {
      ollamaStatus.value = 'offline'
    }
  } catch {
    ollamaStatus.value = 'offline'
  }
  checking.value = false
}

const envConfigs = [
  { key: 'OLLAMA_HOST', desc: '网络绑定：允许局域网访问及自定义端口（默认127.0.0.1:11434，填 0.0.0.0 对外放行）' },
  { key: 'OLLAMA_MODELS', desc: '存储路径：指定模型文件的本地存放磁盘，有效规避 C 盘空间被占满' },
  { key: 'OLLAMA_KEEP_ALIVE', desc: '模型停留时间：模型加载后在显存中的驻留时长（默认 5m，频繁调用建议设为 -1 常驻）' },
  { key: 'OLLAMA_MAX_LOADED_MODELS', desc: '同时加载模型数：允许同时驻留显存的最大模型实例个数（依据显卡显存量力而行）' },
  { key: 'OLLAMA_NUM_PARALLEL', desc: '请求并发数：指定同一模型并行处理请求的能力（默认 1 排队处理，团队共享时务必调大）' }
]

function copyCode(code, idx) {
  navigator.clipboard.writeText(code).then(() => {
    copiedIndex.value = idx
    setTimeout(() => { copiedIndex.value = null }, 2000)
  })
}

// 页面加载时自动检测
checkOllama()
</script>

<style scoped>
.ollama-view {
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

.subtitle-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.sub-tag {
  padding: 6px 16px;
  background: rgba(0, 102, 255, 0.08);
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 20px;
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
}

/* 为什么 */
.why-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.why-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
}

.why-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.why-icon {
  font-size: 28px;
}

.why-content h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.why-content p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* 主网格 */
.main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(0, 102, 255, 0.15);
}

/* 安装步骤 */
.step-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.install-step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-badge {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  margin-top: 2px;
}

.step-body {
  flex: 1;
  min-width: 0;
}

.step-body h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.step-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 10px;
  line-height: 1.5;
}

.code-block {
  background: #0f1117;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.code-lang {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Fira Code', monospace;
}

.copy-btn {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.copy-btn.copied {
  color: #00D4AA;
  border-color: #00D4AA;
}

.code-block pre {
  margin: 0;
  padding: 14px;
  overflow-x: auto;
}

.code-block code {
  color: #e2e8f0;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 12.5px;
  line-height: 1.6;
}

.tip-box {
  padding: 10px 14px;
  background: rgba(255, 214, 10, 0.08);
  border-left: 3px solid var(--highlight);
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* 模型表格 */
.model-table {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  margin-bottom: 40px;
}

.model-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 0;
  padding: 10px 16px;
  font-size: 13px;
  border-bottom: 1px solid var(--border);
  align-items: center;
}

.model-row:last-child {
  border-bottom: none;
}

.header-row {
  background: rgba(0, 102, 255, 0.06);
  font-weight: 600;
  color: var(--text-secondary);
  font-size: 12px;
  text-transform: uppercase;
}

.model-row.highlight {
  background: rgba(0, 102, 255, 0.04);
}

.model-name {
  font-family: 'Fira Code', monospace;
  font-size: 12.5px;
  color: var(--primary);
  font-weight: 600;
}

.model-scene {
  color: var(--text-secondary);
}

/* OpenClaw 对接 */
.connect-block {
  margin-bottom: 40px;
}

.connect-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.connect-desc code {
  background: rgba(0, 102, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--primary);
  font-size: 13px;
}

/* 环境变量配置 */
.env-config-block {
  background: rgba(0, 102, 255, 0.03);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 102, 255, 0.08);
}

.env-row {
  display: grid;
  grid-template-columns: 240px 1fr;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px dashed rgba(0, 102, 255, 0.1);
}

.env-row:last-child {
  border-bottom: none;
}

.env-key {
  font-family: 'Fira Code', monospace;
  font-size: 13.5px;
  color: var(--primary);
  font-weight: 600;
  background: rgba(0, 102, 255, 0.06);
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
}

.env-desc {
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--text-secondary);
  padding-top: 4px;
}

/* 状态检测 */
.status-checker {
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 20px;
}

.status-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.unknown { background: #aaa; }
.status-dot.online { background: #00D4AA; box-shadow: 0 0 8px rgba(0, 212, 170, 0.5); animation: pulse 2s infinite; }
.status-dot.offline { background: #FF375F; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-text {
  flex: 1;
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}

.check-btn {
  padding: 6px 16px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.check-btn:hover { opacity: 0.85; }
.check-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.model-list-result {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.result-label {
  font-size: 13px;
  color: var(--text-secondary);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.model-tag {
  padding: 3px 10px;
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid rgba(0, 212, 170, 0.3);
  border-radius: 12px;
  font-size: 12px;
  color: #00aa88;
  font-family: 'Fira Code', monospace;
}

.no-model-tip {
  margin-top: 14px;
  padding: 12px;
  background: rgba(255, 55, 95, 0.06);
  border-radius: 8px;
}

.no-model-tip p {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
}

.no-model-tip code {
  background: rgba(255, 55, 95, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--accent);
  font-size: 13px;
}

@media (max-width: 968px) {
  .why-section { grid-template-columns: repeat(2, 1fr); }
  .main-grid { grid-template-columns: 1fr; }
  .model-row { grid-template-columns: 1.5fr 1fr 1fr 2fr; }
}
</style>
