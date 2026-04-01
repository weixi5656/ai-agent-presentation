<template>
  <div class="challenges-view">
    <h1 class="page-title">AI 安全与治理：2026 核心挑战</h1>
    <div class="intro-card-new">
      <p>人机协作机治理 (Human-in-the-Loop) —— AI 干活，人类决策、审核并担责。</p>
    </div>
    
    <div class="challenges-grid">
      <div class="challenge-card" v-for="(item, i) in challenges" :key="i">
        <div class="challenge-header">
          <div class="challenge-icon icon-box danger">
            <span class="icon">🚫</span>
            <h3>挑战 {{ i + 1 }}</h3>
          </div>
          <h2>{{ item.title }}</h2>
        </div>
        
        <div class="challenge-body">
          <div class="pain-section">
            <div class="section-label-red">😱 挑战痛点</div>
            <p>{{ item.challenge }}</p>
          </div>
          
          <div class="solution-section">
            <div class="section-label-green">✅ 对应方案</div>
            <ul>
              <li v-for="sol in item.solutions" :key="sol">{{ sol }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const challenges = [
  {
    title: '幻觉与确定性问题',
    challenge: '基于概率预测的大模型在处理严肃逻辑、代码执行、规则校验场景中存在结果不可预测性，易产生虚假信息（幻觉）。',
    solutions: [
      '建立 Skill-Reflector 闭环反思机制，通过执行结果反馈进行自主纠偏。',
      '强制 Human-in-the-Loop 高风险操作审核。',
      '利用 RAG（检索增强生成）技术，在确定性知识库（如架构设计手册）约束下生成结果。'
    ]
  },
  {
    title: '数据安全与隐私治理',
    challenge: '智能体高强度依赖上下文感知与工具调用，可能导致敏感代码片段、生产环境密钥或核心业务数据泄露至公有云。',
    solutions: [
      '构建 Channel-SecurityChecker 指令脱敏与权限隔离层。',
      '核心业务逻辑优先采用本地部署小模型（如 Ollama + DeepSeek 7B）处理。',
      '建立基于 Token/文件的隔离沙箱环境，防止跨级越权操作。'
    ]
  },
  {
    title: '算力成本与性能收益平衡',
    challenge: '长周期自治任务中，Token 消耗量呈指数级增长，高规格模型调用成本与研发效率提升的边际收益可能不匹配。',
    solutions: [
      '实施 Token 深度优化策略（指令精简、上下文分段、知识库分层检索）。',
      '采用端云协同策略，简单意图分类用低成本端侧模型、复杂重构用高参数模型。',
      '引入缓存机制，复用历史生成片段，减少冗余推理。'
    ]
  },
  {
    title: '自动化带来的操作风险',
    challenge: '智能体具备写权限与环境修改能力后，可能在未经人类充分确认的情况下误删代码、误改配置或触发非预期部署。',
    solutions: [
      '引入 Git Worktree 隔离机制，所有智能体修改必须经过 PR 预览与单测验证。',
      '配置智能体操作权限白名单（只读 vs 读写），限定可控代码范围。',
      '设置紧急熔断机制，在检测到异常操作行为（如循环错误、高频变更）时自动挂起 Agent。'
    ]
  }
]
</script>

<style scoped>
.challenges-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.challenge-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.challenge-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.challenge-header {
  margin-bottom: 24px;
}

.challenge-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.icon-box.danger h3 {
  color: #ff3b30;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
}

.challenge-header h2 {
  font-size: 24px;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}

.challenge-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-label-red {
  display: inline-block;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border-radius: 8px;
  margin-bottom: 8px;
}

.section-label-green {
  display: inline-block;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
  background: rgba(0, 212, 170, 0.1);
  color: #007a60;
  border-radius: 8px;
  margin-bottom: 8px;
}

.pain-section p {
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
}

.solution-section ul {
  padding-left: 20px;
  margin: 0;
}

.solution-section li {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 8px;
}

.summary-banner {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 20px;
  padding: 24px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.banner-icon {
  font-size: 32px;
}

.banner-content p {
  font-size: 16px;
  color: #1e293b;
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .challenges-grid {
    grid-template-columns: 1fr;
  }
}
</style>
