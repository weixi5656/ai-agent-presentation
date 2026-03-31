<template>
  <div class="outcomes-view">
    <h1 class="page-title">实际案例：提效成果展示</h1>
    
    <div class="outcomes-grid">
      <!-- 核心指标卡片 -->
      <div class="outcome-card glass" v-for="(item, i) in metrics" :key="i">
        <div class="outcome-header">
          <span class="outcome-icon">{{ item.icon }}</span>
          <h3>{{ item.label }}</h3>
        </div>
        <div class="outcome-value">
          <span class="value-text">{{ item.value }}</span>
          <span class="percent">%</span>
        </div>
        <p class="outcome-desc">{{ item.desc }}</p>
      </div>
    </div>

    <div class="case-highlight glass">
      <div class="highlight-content">
        <h2>🚀 某大型互联网团队落地实践</h2>
        <p>引入多智能体协作体系后，单个小型功能模块从需求分析到交付上线的时间由 <strong>3-5天</strong> 缩短至 <strong>1天</strong>，不仅提升了交付速度，更极大降低了由于人工沟通不一致导致的返工成本。</p>
        <div class="highlight-stats">
          <div class="stat-item">
            <span class="stat-num">60%</span>
            <span class="stat-label">需求梳理周期缩短</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">50%+</span>
            <span class="stat-label">编码效率提升</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">70%</span>
            <span class="stat-label">测试执行时间减少</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部暗示后续内容 -->
    <div class="next-hint">
      接下来，我们将深入探讨支撑这些成果的核心架构与实操细节...
      <div class="hint-arrow">↓↓↓</div>
    </div>
  </div>
</template>

<script setup>
const metrics = [
  {
    icon: '💻',
    label: 'AI 代码贡献占比',
    value: '20-40',
    desc: '头部研发团队中，AI 原生生成的生产代码占比已达此区间。'
  },
  {
    icon: '🏗️',
    label: 'AI 原生应用占比',
    value: '≥30',
    desc: '2026 年新增研发项目中，深度集成智能体架构的比例。'
  },
  {
    icon: '🚀',
    label: '编码效率提升',
    value: '60',
    desc: '通过 Vibe Coding 与智能补全导致的开发周期大幅缩短。'
  },
  {
    icon: '🛡️',
    label: '生产 Bug 率降低',
    value: '40',
    desc: '智能体自主 Debug 与修复机制拦截了大量逻辑缺陷。'
  }
]
</script>

<style scoped>
.outcomes-view {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 60px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.outcome-card {
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.outcome-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 102, 255, 0.1);
}

.outcome-icon {
  font-size: 32px;
  margin-bottom: 12px;
  display: block;
}

.outcome-header h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0 0 16px 0;
}

.outcome-value {
  margin-bottom: 12px;
}

.value-text {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.percent {
  font-size: 20px;
  font-weight: 800;
  color: var(--primary);
  margin-left: 2px;
}

.outcome-desc {
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-muted);
}

.case-highlight {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border: 1px solid rgba(0, 102, 255, 0.15);
  border-radius: 32px;
  padding: 50px 40px;
  text-align: left;
  margin-bottom: 60px;
}

.highlight-content h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.highlight-content p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.highlight-stats {
  display: flex;
  justify-content: flex-start;
  gap: 60px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 32px;
  font-weight: 800;
  color: var(--primary);
}

.stat-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
}

.next-hint {
  color: var(--text-muted);
  font-size: 16px;
}

.hint-arrow {
  margin-top: 10px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@media (max-width: 900px) {
  .outcomes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .highlight-stats {
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
