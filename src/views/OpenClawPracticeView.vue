<template>
  <div class="openclaw-practice-view">
    <h1 class="page-title">OpenClaw 实操：3步上手最小Demo</h1>
    
    <div class="steps-section">
      <div class="step-card" v-for="(step, index) in steps" :key="index">
        <div class="step-header">
          <span class="step-number">步骤 {{ index + 1 }}</span>
          <h2>{{ step.title }}</h2>
        </div>
        <p class="step-desc">{{ step.desc }}</p>
        <div class="step-content" v-if="step.content">
          <pre class="code-block"><code>{{ step.content }}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="template-section">
      <h2 class="section-title">OpenClaw 研发场景智能体提示词通用模板</h2>
      <div class="template-card">
        <pre class="code-block"><code>{{ promptTemplate }}</code></pre>
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
const steps = [
  {
    title: '前置准备',
    desc: '环境搭建、依赖安装、核心配置（大模型API接入、代理配置、权限设置）',
    content: `# 一键安装脚本
curl -fsSL https://openclaw.ai/install.sh | bash

# 配置大模型API
openclaw config set models.providers.openai.apiKey sk-xxx

# 验证安装
openclaw doctor`
  },
  {
    title: '定义智能体角色与目标',
    desc: '使用研发场景Prompt模板，定义智能体的角色、目标、约束和可用工具',
    content: `# 角色：代码审计工程师
# 目标：对Java代码进行安全审计
# 约束：遵循OWASP规范，输出结构化报告
# 工具：read_file, vuln_scan, write_file`
  },
  {
    title: '启动智能体执行',
    desc: '启动智能体，查看执行日志、结果校验、效果演示',
    content: `# 启动智能体
openclaw agent run --config audit-agent.yaml

# 查看执行日志
openclaw logs -f

# 输出结果
✓ 代码审计完成
✓ 发现3个高危漏洞
✓ 生成修复方案
✓ 输出审计报告`
  }
]

const promptTemplate = `# 角色定位
你是一名【XX研发岗位，如：资深代码审计工程师】，专精【XX领域，如：Java代码安全审计、漏洞检测与修复】，严格遵循行业规范与团队研发标准。

# 核心目标
1. 核心任务：【一句话明确智能体的唯一核心目标】
2. 交付标准：【明确最终交付物、格式、验收要求】

# 执行约束
1. 严格限制：仅使用【已授权的工具列表】完成任务，禁止超出工具权限执行操作；
2. 规范要求：【行业/团队规范】；
3. 容错机制：执行中遇到异常，先输出错误原因，给出3种解决方案，等待确认后再继续执行，禁止无限制重试；
4. 输出限制：仅输出与当前任务相关的内容，禁止无关解释、客套话，所有内容必须结构化、可落地。

# 可用工具
1. 【工具1名称】：【工具用途】
2. 【工具2名称】：【工具用途】
3. 【工具3名称】：【工具用途】

# 输出规范
1. 执行过程：每完成一个步骤，输出【步骤X：执行动作+执行结果】，仅保留关键信息；
2. 最终交付：严格按照【JSON/Markdown表格】格式输出，禁止自然语言冗余表述；
3. 异常输出：格式为【异常类型：XX | 异常原因：XX | 解决方案：XX】。`

const tips = [
  '角色定位必须精准：限定唯一岗位+唯一核心领域，避免"全能型"角色导致执行发散；',
  '核心目标必须单一：一个智能体只负责一个核心任务，多任务拆分为多个智能体，大幅提升执行准确率；',
  '约束必须可落地：用"禁止/必须"的强指令，替代模糊的"尽量/最好"，减少模型的无效发挥；',
  '输出格式必须固定：提前限定结构化格式（表格/JSON），大幅减少自然语言冗余，同时降低Token消耗。'
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
  margin-bottom: 16px;
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

.template-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 2px solid var(--primary);
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
</style>
