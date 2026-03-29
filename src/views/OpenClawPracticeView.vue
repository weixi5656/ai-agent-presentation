<template>
  <div class="openclaw-practice-view">
    <h1 class="page-title">OpenClaw 快速上手：3 步跑通第一个研发智能体</h1>
    
    <div class="steps-section">
      <div class="step-card" v-for="(step, index) in steps" :key="index">
        <div class="step-header" @click="toggleStep(index)">
          <span class="step-number">步骤 {{ index + 1 }}</span>
          <h2>{{ step.title }}</h2>
          <span class="toggle-icon" :class="{ 'is-open': expandedSteps.includes(index) }">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div class="step-body" v-show="expandedSteps.includes(index)">
          <p class="step-desc">{{ step.desc }}</p>
          <div class="step-content" v-if="step.content">
            <pre class="code-block"><code>{{ step.content }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    
    <div class="template-section">
      <h2 class="section-title">代码审查智能体核心文件示例</h2>
      <div class="template-tabs">
        <div class="tab-headers">
          <button 
            v-for="(role, index) in roleTemplates" 
            :key="index"
            class="tab-btn"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ role.name }}
          </button>
        </div>
        <div class="tab-content">
          <div class="template-card">
            <h3 class="template-role">{{ roleTemplates[activeTab].name }}</h3>
            <pre class="code-block"><code>{{ roleTemplates[activeTab].template }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    
    <div class="tips-section">
      <h2 class="section-title">单智能体提示词基础优化小建议</h2>
      <div class="tips-list">
        <div class="tip-item" v-for="(tip, index) in tips" :key="index">
          <span class="tip-number">{{ index + 1 }}</span>
          <p>{{ tip }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)
const expandedSteps = ref([0]) // 默认展开第一个步骤

const toggleStep = (index) => {
  const i = expandedSteps.value.indexOf(index)
  if (i > -1) {
    expandedSteps.value.splice(i, 1)
  } else {
    expandedSteps.value.push(index)
  }
}

const steps = [
  {
    title: '环境准备（消费级显卡适配）',
    desc: '完成 Node.js/Python 等基础环境检查，安装 OpenClaw CLI 并配置本地大模型。',
    content: `# 检查显卡状态（确保 8GB+ 显存）
nvidia-smi  # NVIDIA用户
rocm-smi    # AMD用户

# 安装 OpenClaw CLI
npm install -g openclaw@latest

# 初始化配置（选择“本地部署-消费级显卡”模式）
openclaw onboard --install-daemon --gpu consumer

# 配置本地大模型（以 Ollama + Llama 3 8B 为例）
ollama pull llama3:8b
openclaw config set models.default.provider ollama
openclaw config set models.default.model llama3:8b

# 启动守护进程（开启显卡优化）
openclaw daemon start --gpu-optimize`
  },
  {
    title: '定义代码审查智能体',
    desc: '创建工作空间，补齐智能体角色人设（SOUL）、长期记忆（MEMORY）和技能。',
    content: `# 创建智能体（指定类型为 code-review 并适配消费级显卡）
openclaw agent init --name code-audit-agent --type code-review --gpu consumer

# 安装所需技能（轻量化版本，降低显存占用）
openclaw skills install code-review:light
openclaw skills install git
openclaw skills install file

# 验证配置与显卡适配状态
openclaw agent validate --config agent.yaml --gpu-check`
  },
  {
    title: '启动执行与效果监控',
    desc: '给智能体一个真实代码审查目标，并在执行时监控显存占用情况。',
    content: `# 前台运行智能体，开启显卡监控
openclaw agent run \\
  --config agent.yaml \\
  --task "审查 ~/project/UserController.java，按照代码规范输出审查报告" \\
  --gpu-monitor

# 另开终端查看显卡显存占用（避免溢出）
nvidia-smi -l 1

# 生产环境可使用后台守护进程运行
# openclaw agent start --config agent.yaml --daemon --gpu-optimize`
  }
]

const roleTemplates = [
  {
    name: 'SOUL.md',
    template: `# 角色定位
你是一名资深后端研发工程师，专精代码审查、代码规范、Bug排查。

# 核心目标
1. 检查代码是否符合团队规范
2. 发现代码中的Bug、潜在风险
3. 给出具体的优化建议
4. 输出结构化的审查报告

# 执行约束
1. 严格按照团队代码规范执行审查
2. 发现问题后，必须给出具体的修复代码示例
3. 适配消费级显卡性能，复杂任务拆分执行`
  },
  {
    name: 'MEMORY.md',
    template: `# 团队代码规范（长期记忆）
## 命名规范
1. 类名：采用PascalCase，如UserController
2. 方法名：采用camelCase，如getUserInfo

## 注释规范
1. 类注释：必须包含类的功能描述、作者、创建时间
2. 方法注释：必须包含方法功能、参数说明

## 代码格式规范
1. 缩进：采用4个空格缩进，不使用Tab`
  },
  {
    name: 'Skills',
    template: `[
  {
    "name": "code-review",
    "version": "light",
    "provider": "openclaw"
  },
  {
    "name": "git",
    "version": "latest",
    "provider": "openclaw"
  },
  {
    "name": "file",
    "version": "latest",
    "provider": "openclaw"
  }
]`
  },
  {
    name: '执行任务',
    template: `任务目标：
审查 ~/project/UserController.java，按照MEMORY.md中的代码规范，输出审查报告。

要求：
1. 问题类型、位置、描述
2. 修复建议与修复代码
3. 避免一次性审查过多文件导致显存溢出`
  }
]

const tips = [
  '角色越清晰，智能体越稳定；不要写成“什么都能做”的全能助手。',
  '记忆越贴近项目真实约束，智能体输出越像团队成员而不是泛化模型。',
  '技能注册越精简越好，只保留当前任务真正要调用的能力。',
  '第一次任务一定用真实研发问题来验证，优先闭环而不是追求花哨演示。'
]
</script>

<style scoped>
.openclaw-practice-view {
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

.steps-section {
  margin-bottom: 60px;
}

.step-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.step-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 0;
  cursor: pointer;
  user-select: none;
}

.step-body {
  margin-top: 16px;
}

.toggle-icon {
  margin-left: auto;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
  color: var(--primary);
}

.step-number {
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.step-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

.step-desc {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.code-block {
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.template-section {
  margin-bottom: 60px;
}

/* Tabs样式 */
.template-tabs {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.tab-headers {
  display: flex;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}

.tab-btn {
  padding: 16px 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.tab-btn:hover {
  color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
}

.tab-btn.active {
  color: var(--primary);
  background: white;
  border-bottom: 2px solid var(--primary);
}

.tab-content {
  padding: 24px;
}

.template-role {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 16px;
}

.template-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
}

.tips-section {
  margin-top: 60px;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tip-item {
  display: flex;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(0, 102, 255, 0.05));
  border-radius: 12px;
  border-left: 4px solid var(--secondary);
}

.tip-number {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.tip-item p {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tab-btn {
    padding: 12px 16px;
    font-size: 14px;
  }
}
</style>
