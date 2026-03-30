<template>
  <div class="dev-case-view">
    <h1 class="page-title">研发全场景落地案例</h1>

    <div class="cases-grid">
      <div class="case-card" v-for="(caseItem, index) in cases" :key="index" :class="{ 'claw-team-card': caseItem.method === 'ClawTeam' }">
        <div class="case-header">
          <span class="case-icon">{{ caseItem.icon }}</span>
          <div class="case-title-area">
            <h2>{{ caseItem.title }}</h2>
            <div class="case-tags">
              <span class="case-tag team-tag">{{ caseItem.teamSize }}</span>
              <span class="case-tag method-tag">{{ caseItem.method }}</span>
            </div>
          </div>
        </div>
        <div class="case-content">
          <div class="case-section">
            <h3 class="pain-label">🔴 研发痛点</h3>
            <p>{{ caseItem.pain }}</p>
          </div>
          <div class="case-section">
            <h3 class="path-label">🧩 落地步骤</h3>
            <p>{{ caseItem.path }}</p>
          </div>
          <div class="case-section">
            <h3 class="solution-label">🟢 智能体方案</h3>
            <p>{{ caseItem.solution }}</p>
          </div>
          <div class="case-effect">
            <div class="effect-metrics">
              <span class="effect-number">{{ caseItem.metrics.value }}</span>
              <span class="effect-label">{{ caseItem.metrics.label }}</span>
            </div>
            <p class="effect-desc">{{ caseItem.effect }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cases = [
  {
    icon: '💻',
    title: '代码审查工具',
    teamSize: '研发团队',
    method: 'OpenClaw',
    pain: '代码质量参差不齐，潜在 Bug 难以发现，代码规范不一致，人工审查耗时耗力且容易遗漏。',
    path: '配置代码审查 Agent → 接入代码仓库 → 设置审查规则与质量标准 → 自动扫描与生成审查报告。',
    solution: '让智能体自动扫描代码，识别潜在 Bug、代码异味、安全漏洞和规范问题，提供修复建议。',
    metrics: { value: '50%+', label: '代码质量提升' },
    effect: '代码质量更可控，Bug 发现更早，团队代码风格更统一，审查效率大幅提升。'
  },
  {
    icon: '🧪',
    title: '测试用例生成器',
    teamSize: '测试团队',
    method: 'OpenClaw',
    pain: '测试用例编写和维护成本高，接口变动后回归测试容易漏项，测试工程师大量时间耗在重复劳动上。',
    path: '配置测试用例生成 Agent → 接入接口文档和代码仓库 → 自动生成测试用例 / Mock / 脚本 → 输出测试报告。',
    solution: '根据接口文档、代码变更和历史缺陷自动生成测试点、接口测试脚本和回归建议。',
    metrics: { value: '60%+', label: '测试效率提升' },
    effect: '回归测试更完整，测试准备时间显著缩短，缺陷发现更早。'
  },
  {
    icon: '🔧',
    title: '运维监控',
    teamSize: '运维团队',
    method: 'OpenClaw',
    pain: '告警太多、日志太杂、定位故障依赖资深运维经验，夜间问题响应压力大。',
    path: '接入监控 / 日志 / Shell / Kubernetes → 配置巡检与告警处理流程 → 实时监控与告警分析。',
    solution: '告警触发后自动汇总日志、分析异常链路、定位根因，并提供监控视图和告警通知。',
    metrics: { value: '40%+', label: '故障响应效率提升' },
    effect: '值班更轻松，问题定位更快，知识经验不再只掌握在少数人手里。'
  },
  {
    icon: '📄',
    title: '热点AI新闻推送',
    teamSize: '产品与研发协同团队',
    method: 'OpenClaw',
    pain: 'AI 技术发展迅速，热点新闻和信息分散在各个平台，难以实时获取和整理有价值的信息。',
    path: '配置新闻抓取 Agent → 接入各大 AI 新闻源 → 智能筛选与分类 → 定时推送个性化新闻摘要。',
    solution: '让智能体实时监控 AI 领域最新动态，筛选有价值的热点新闻，按需推送给团队。',
    metrics: { value: '70%+', label: '信息获取效率提升' },
    effect: '团队能及时掌握 AI 领域最新动态，决策更有依据，创新灵感更丰富。'
  },
  {
    icon: '👥',
    title: '产品研发平台',
    teamSize: '跨职能协作团队',
    method: 'ClawTeam',
    pain: '需求讨论分散在群聊、会议和文档里，PRD、任务拆分、研发排期经常反复同步。',
    path: '配置产品、研发、测试等多智能体角色 → 统一项目管理 → 自动化需求分析与任务分配。',
    solution: '用智能体协作平台模拟真实研发团队，把需求分析、方案评审、任务拆分和交付校验串起来。',
    metrics: { value: '30%+', label: '跨团队协作效率提升' },
    effect: '需求到交付的信息链路更完整，减少反复沟通和责任断层，团队协作上下游对齐更快。'
  }
]
</script>

<style scoped>
.dev-case-view {
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

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.case-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 102, 255, 0.12);
}

/* 专属 ClawTeam 卡片样式 */
.claw-team-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%);
  border: 2px solid rgba(139, 92, 246, 0.2);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.06);
}

.claw-team-card:hover {
  border-color: rgba(139, 92, 246, 0.6);
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(139, 92, 246, 0.15);
}

.claw-team-card .case-title-area h2 {
  background: linear-gradient(135deg, #8b5cf6 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.claw-team-card .method-tag {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
}

.case-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}

.case-icon {
  font-size: 40px;
}

.case-title-area {
  flex: 1;
}

.case-title-area h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.case-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.case-tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.team-tag {
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
}

.method-tag {
  background: rgba(0, 212, 170, 0.1);
  color: var(--secondary);
}

.case-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.case-section h3 {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}

.pain-label {
  color: var(--accent);
}

.solution-label {
  color: var(--secondary);
}

.path-label {
  color: var(--primary);
}

.case-section p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.case-effect {
  margin-top: auto;
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(0, 212, 170, 0.05));
  border-radius: 12px;
  border: 1px solid rgba(0, 102, 255, 0.1);
}

.effect-metrics {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.effect-number {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.effect-label {
  font-size: 14px;
  color: var(--text-muted);
}

.effect-desc {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
