<template>
  <div class="summary-view">
    <h1 class="page-title">互动交流 & 总结</h1>
    
    <div class="summary-container">
      <div class="summary-card glass">
        <div class="summary-header">
          <span class="icon">📝</span>
          <h2>核心观点回顾</h2>
        </div>
        <ul class="summary-list">
          <li><strong>研发人员角色向“指挥官”转型</strong>：从单纯编码到编排智能体、审核架构决策。</li>
          <li><strong>AI 原生全流程覆盖</strong>：从需求 Vibe Coding 到自动运维的全链路闭环已成标配。</li>
          <li><strong>Human-in-the-Loop</strong>：建立“人协作机”的可信审核与安全治理机制。</li>
          <li><strong>Agentic AI 落地</strong>：打通数字决策与硬件执行的最后一公里。</li>
        </ul>
      </div>

      <div class="qa-section glass">
        <div class="qa-header">
          <span class="icon">💬</span>
          <h2>Q & A 互动环节</h2>
        </div>
        <div class="qa-placeholder">
          <p>欢迎各位同事提问交流！</p>
          <div class="qa-visual">
            <div class="qa-bubble left">关于数据安全...</div>
            <div class="qa-bubble right">多智能体如何分工？</div>
            <div class="qa-bubble left last">如何参与试点？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="thanks-msg">
      <h2>感谢大家的参与！</h2>
      <p>一起探索 AI 智能体带来的新可能</p>
    </div>
  </div>
</template>

<style scoped>
.summary-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 50px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.summary-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 60px;
}

.summary-card, .qa-section {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  padding: 40px;
  text-align: left;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

.summary-header, .qa-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.summary-header h2, .qa-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.summary-list {
  list-style: none;
  padding: 0;
}

.summary-list li {
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.summary-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: 800;
}

.qa-placeholder {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 102, 255, 0.03);
  border-radius: 16px;
  border: 2px dashed rgba(0, 102, 255, 0.1);
  color: var(--text-muted);
}

.qa-visual {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
}

.qa-bubble {
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 13px;
  max-width: 80%;
}

.qa-bubble.left {
  background: white;
  align-self: flex-start;
  color: var(--text-secondary);
}

.qa-bubble.right {
  background: var(--primary);
  color: white;
  align-self: flex-end;
}

.thanks-msg {
  margin-top: 40px;
}

.thanks-msg h2 {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.thanks-msg p {
  font-size: 18px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .summary-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .summary-card {
    padding: 24px 20px;
  }
  .thanks-msg h2 {
    font-size: 28px;
  }
  .thanks-msg p {
    font-size: 15px;
  }
}
</style>
