<template>
  <div class="future-view">
    <h1 class="page-title">未来展望</h1>
    
    <div class="timeline-section">
      <h2 class="section-title">AI智能体发展趋势</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
          <div class="timeline-marker">
            <div class="timeline-dot" :class="item.status"></div>
            <div class="timeline-line" v-if="index < timeline.length - 1"></div>
          </div>
          <div class="timeline-content glass-card">
            <div class="timeline-period">{{ item.period }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="timeline-tags">
              <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="predictions-section">
      <h2 class="section-title">2025-2030 关键预测</h2>
      <div class="predictions-grid">
        <div class="prediction-card" v-for="(pred, index) in predictions" :key="index">
          <div class="prediction-visual">
            <div class="prediction-chart">
              <svg viewBox="0 0 100 50" class="chart-svg">
                <path 
                  :d="pred.chartPath" 
                  fill="none" 
                  :stroke="pred.color" 
                  stroke-width="2"
                  class="chart-line"
                />
                <circle 
                  :cx="pred.endX" 
                  :cy="pred.endY" 
                  r="4" 
                  :fill="pred.color"
                  class="chart-dot"
                />
              </svg>
            </div>
          </div>
          <div class="prediction-content">
            <div class="prediction-year">{{ pred.year }}</div>
            <h3>{{ pred.title }}</h3>
            <p>{{ pred.desc }}</p>
            <div class="prediction-confidence">
              <span class="confidence-label">置信度</span>
              <div class="confidence-bar">
                <div class="confidence-fill" :style="{ width: pred.confidence + '%', background: pred.color }"></div>
              </div>
              <span class="confidence-value">{{ pred.confidence }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="opportunities-section">
      <h2 class="section-title">企业应用机会</h2>
      <div class="opportunities-list">
        <div class="opportunity-item" v-for="(opp, index) in opportunities" :key="index">
          <div class="opportunity-icon">{{ opp.icon }}</div>
          <div class="opportunity-content">
            <h3>{{ opp.title }}</h3>
            <p>{{ opp.desc }}</p>
            <div class="opportunity-metrics">
              <div class="metric">
                <span class="metric-value">{{ opp.metric }}</span>
                <span class="metric-label">{{ opp.metricLabel }}</span>
              </div>
              <div class="metric-bar">
                <div class="metric-fill" :style="{ width: opp.readiness + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="challenges-section">
      <h2 class="section-title">挑战与应对</h2>
      <div class="challenges-grid">
        <div class="challenge-card" v-for="(challenge, index) in challenges" :key="index">
          <div class="challenge-header">
            <span class="challenge-icon">{{ challenge.icon }}</span>
            <h3>{{ challenge.title }}</h3>
          </div>
          <p class="challenge-desc">{{ challenge.desc }}</p>
          <div class="challenge-solutions">
            <h4>应对策略：</h4>
            <ul>
              <li v-for="solution in challenge.solutions" :key="solution">{{ solution }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="cta-section">
      <div class="cta-card glass-card">
        <h2>开始您的AI智能体之旅</h2>
        <p>从概念到落地，OpenClaw助您构建企业级智能体解决方案</p>
        <div class="cta-actions">
          <a href="https://openclaw.ai" target="_blank" class="btn btn-primary">
            访问 OpenClaw 官网 →
          </a>
          <a href="https://github.com/openclaw/openclaw" target="_blank" class="btn btn-secondary">
            GitHub 仓库
          </a>
        </div>
      </div>
    </div>
    
    <div class="resources-section">
      <h2 class="section-title">学习资源</h2>
      <div class="resources-grid">
        <a 
          v-for="(resource, index) in resources" 
          :key="index"
          :href="resource.url"
          target="_blank"
          class="resource-card"
        >
          <div class="resource-icon">{{ resource.icon }}</div>
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.desc }}</p>
          <span class="resource-link">查看 →</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeline = [
  {
    period: '2023-2024',
    title: '单智能体工具化',
    desc: 'ChatGPT、Claude等对话式AI普及，代码助手、写作助手等单任务智能体成熟',
    tags: ['对话AI', '代码生成', '内容创作'],
    status: 'completed'
  },
  {
    period: '2024-2025',
    title: '多智能体协作',
    desc: 'OpenClaw、AutoGPT等多智能体框架兴起，智能体开始自主协作完成复杂任务',
    tags: ['多智能体', '任务分解', '自主执行'],
    status: 'current'
  },
  {
    period: '2025-2026',
    title: '企业级部署',
    desc: '智能体进入企业核心业务流程，RPA与AI深度融合，出现行业标准',
    tags: ['企业应用', '流程自动化', '合规治理'],
    status: 'upcoming'
  },
  {
    period: '2026-2028',
    title: '智能体生态',
    desc: '智能体市场形成，可复用的智能体组件、模板和最佳实践普及',
    tags: ['智能体市场', '标准化', '生态繁荣'],
    status: 'future'
  },
  {
    period: '2028-2030',
    title: '通用智能体',
    desc: '接近AGI水平的通用智能体出现，能够处理跨领域复杂问题',
    tags: ['AGI', '通用智能', '自主决策'],
    status: 'future'
  },
]

const predictions = [
  {
    year: '2025',
    title: '50%企业试点智能体',
    desc: '半数以上大型企业将启动AI智能体试点项目',
    confidence: 85,
    color: '#0066FF',
    endX: 90,
    endY: 15,
    chartPath: 'M 10 45 Q 30 40, 50 35 T 90 15'
  },
  {
    year: '2026',
    title: '智能体成为标准工具',
    desc: '软件开发、数据分析等领域智能体成为标配',
    confidence: 75,
    color: '#00D4AA',
    endX: 90,
    endY: 20,
    chartPath: 'M 10 45 Q 30 42, 50 35 T 90 20'
  },
  {
    year: '2027',
    title: '多智能体协作普及',
    desc: '跨部门、跨系统的多智能体协作成为常态',
    confidence: 70,
    color: '#FF6B35',
    endX: 90,
    endY: 25,
    chartPath: 'M 10 45 Q 30 40, 50 32 T 90 25'
  },
  {
    year: '2030',
    title: '智能体经济规模千亿',
    desc: '全球AI智能体相关市场规模突破千亿美元',
    confidence: 60,
    color: '#9B59B6',
    endX: 90,
    endY: 10,
    chartPath: 'M 10 45 Q 30 35, 50 25 T 90 10'
  },
]

const opportunities = [
  {
    icon: '💼',
    title: '智能办公助手',
    desc: '自动化处理邮件、日程、文档，提升办公效率',
    metric: '40%',
    metricLabel: '效率提升',
    readiness: 90
  },
  {
    icon: '🔧',
    title: 'DevOps自动化',
    desc: '代码审查、测试、部署全流程自动化',
    metric: '60%',
    metricLabel: '时间节省',
    readiness: 85
  },
  {
    icon: '📊',
    title: '智能数据分析',
    desc: '自动收集、清洗、分析数据并生成洞察',
    metric: '5x',
    metricLabel: '分析速度',
    readiness: 80
  },
  {
    icon: '🎧',
    title: '客户服务中心',
    desc: '7×24小时智能客服，复杂问题自动升级',
    metric: '70%',
    metricLabel: '问题解决率',
    readiness: 85
  },
  {
    icon: '🔒',
    title: '安全运维',
    desc: '实时监控、威胁检测、自动响应',
    metric: '24/7',
    metricLabel: '不间断监控',
    readiness: 75
  },
  {
    icon: '📚',
    title: '知识管理',
    desc: '自动整理、检索、推荐企业知识',
    metric: '80%',
    metricLabel: '检索准确率',
    readiness: 70
  },
]

const challenges = [
  {
    icon: '🔐',
    title: '数据安全与隐私',
    desc: '智能体处理敏感数据时的安全和合规风险',
    solutions: [
      '实施零信任架构',
      '数据脱敏和加密',
      '建立访问控制策略',
      '定期安全审计'
    ]
  },
  {
    icon: '🎯',
    title: '准确性与可靠性',
    desc: '大模型可能产生幻觉，输出结果不稳定',
    solutions: [
      '人机协同验证',
      '多智能体交叉验证',
      '建立置信度评估',
      '持续监控和反馈'
    ]
  },
  {
    icon: '⚖️',
    title: '伦理与责任',
    desc: '智能体决策的伦理边界和责任归属问题',
    solutions: [
      '制定使用准则',
      '保留人工决策权',
      '建立审计日志',
      '透明化决策过程'
    ]
  },
  {
    icon: '🔧',
    title: '集成与兼容性',
    desc: '与现有系统的集成复杂度和技术债务',
    solutions: [
      '采用API优先策略',
      '渐进式迁移',
      '建立中间件层',
      '标准化接口协议'
    ]
  },
]

const resources = [
  {
    icon: '📖',
    title: 'OpenClaw 文档',
    desc: '官方文档和API参考',
    url: 'https://docs.openclaw.ai'
  },
  {
    icon: '🎓',
    title: '智能体最佳实践',
    desc: '企业级智能体部署指南',
    url: 'https://clawhub.ai/skills'
  },
  {
    icon: '💬',
    title: '社区论坛',
    desc: '与开发者交流经验和问题',
    url: 'https://discord.com/invite/clawd'
  },
  {
    icon: '📺',
    title: '视频教程',
    desc: '从入门到精通的视频课程',
    url: 'https://youtube.com/openclaw'
  },
]
</script>

<style scoped>
.future-view {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 32px;
  color: var(--text-primary);
}

.timeline-section {
  margin-bottom: 80px;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline-item {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  position: relative;
}

.timeline-marker {
  position: absolute;
  left: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid;
  background: white;
}

.timeline-dot.completed {
  border-color: var(--secondary);
  background: var(--secondary);
}

.timeline-dot.current {
  border-color: var(--primary);
  background: var(--primary);
  box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.2);
}

.timeline-dot.upcoming {
  border-color: var(--primary);
}

.timeline-dot.future {
  border-color: var(--border);
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: var(--border);
  margin: 8px 0;
}

.timeline-content {
  flex: 1;
  padding: 24px;
}

.timeline-period {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.timeline-content h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.timeline-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.predictions-section {
  margin-bottom: 80px;
}

.predictions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.prediction-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 28px;
  border: 1px solid var(--border);
  display: flex;
  gap: 20px;
  transition: var(--transition);
}

.prediction-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.prediction-visual {
  width: 120px;
  flex-shrink: 0;
}

.prediction-chart {
  width: 100%;
  height: 60px;
}

.chart-svg {
  width: 100%;
  height: 100%;
}

.chart-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 2s ease forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

.chart-dot {
  animation: pulseDot 2s ease infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.prediction-content {
  flex: 1;
}

.prediction-year {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.prediction-content h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.prediction-content p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.prediction-confidence {
  display: flex;
  align-items: center;
  gap: 12px;
}

.confidence-label {
  font-size: 12px;
  color: var(--text-muted);
}

.confidence-bar {
  flex: 1;
  height: 6px;
  background: var(--bg-tertiary);
  border-radius: 3px;
  overflow: hidden;
}

.confidence-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease;
}

.confidence-value {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  min-width: 36px;
  text-align: right;
}

.opportunities-section {
  margin-bottom: 80px;
}

.opportunities-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.opportunity-item {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.opportunity-item:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.opportunity-icon {
  font-size: 40px;
  width: 60px;
  text-align: center;
}

.opportunity-content {
  flex: 1;
}

.opportunity-content h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.opportunity-content p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.opportunity-metrics {
  display: flex;
  align-items: center;
  gap: 16px;
}

.metric {
  display: flex;
  flex-direction: column;
  min-width: 80px;
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
}

.metric-label {
  font-size: 11px;
  color: var(--text-muted);
}

.metric-bar {
  flex: 1;
  max-width: 200px;
  height: 6px;
  background: var(--bg-tertiary);
  border-radius: 3px;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 3px;
  transition: width 1s ease;
}

.challenges-section {
  margin-bottom: 80px;
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.challenge-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 28px;
  border: 1px solid var(--border);
}

.challenge-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.challenge-icon {
  font-size: 28px;
}

.challenge-header h3 {
  font-size: 18px;
  font-weight: 600;
}

.challenge-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.challenge-solutions h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.challenge-solutions ul {
  list-style: none;
}

.challenge-solutions li {
  font-size: 13px;
  color: var(--text-secondary);
  padding: 4px 0;
  padding-left: 16px;
  position: relative;
}

.challenge-solutions li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--secondary);
}

.cta-section {
  margin-bottom: 80px;
}

.cta-card {
  text-align: center;
  padding: 60px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(0, 212, 170, 0.05) 100%);
}

.cta-card h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.cta-card p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.resources-section {
  margin-bottom: 40px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.resource-card {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

.resource-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.resource-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.resource-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--text-primary);
}

.resource-card p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.resource-link {
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .predictions-grid {
    grid-template-columns: 1fr;
  }
  
  .prediction-card {
    flex-direction: column;
  }
  
  .prediction-visual {
    width: 100%;
  }
  
  .challenges-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
