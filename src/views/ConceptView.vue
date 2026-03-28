<template>
  <div class="concept-view">
    <h1 class="page-title">AI智能体：到底是什么？</h1>
    
    <!-- 核心定义 - 环形闭环图 -->
    <div class="definition-section">
      <h2 class="section-title">核心定义</h2>
      <div class="cycle-container">
        <div class="cycle-center">
          <span class="center-text">AI智能体</span>
        </div>
        <div class="cycle-item" style="--angle: 0deg;">
          <div class="cycle-node">
            <span class="node-icon">👁️</span>
            <span class="node-text">环境感知</span>
          </div>
        </div>
        <div class="cycle-item" style="--angle: 72deg;">
          <div class="cycle-node">
            <span class="node-icon">🎯</span>
            <span class="node-text">自主规划</span>
          </div>
        </div>
        <div class="cycle-item" style="--angle: 144deg;">
          <div class="cycle-node">
            <span class="node-icon">🧠</span>
            <span class="node-text">长期记忆</span>
          </div>
        </div>
        <div class="cycle-item" style="--angle: 216deg;">
          <div class="cycle-node">
            <span class="node-icon">🔧</span>
            <span class="node-text">工具调用</span>
          </div>
        </div>
        <div class="cycle-item" style="--angle: 288deg;">
          <div class="cycle-node">
            <span class="node-icon">🔄</span>
            <span class="node-text">执行反思</span>
          </div>
        </div>
        <!-- 渐变圆环箭头 -->
        <div class="cycle-ring">
          <div class="ring-arrow" style="--rot: 0deg;">▶</div>
          <div class="ring-arrow" style="--rot: 72deg;">▶</div>
          <div class="ring-arrow" style="--rot: 144deg;">▶</div>
          <div class="ring-arrow" style="--rot: 216deg;">▶</div>
          <div class="ring-arrow" style="--rot: 288deg;">▶</div>
        </div>
      </div>
      <p class="definition-desc">具备完整闭环能力，可自主完成复杂研发任务的智能系统</p>
    </div>
    
    <!-- 本质区别 - 去掉固定逻辑列 -->
    <div class="comparison-section">
      <h2 class="section-title">本质区别</h2>
      <div class="comparison-cards">
        <div class="comparison-card">
          <div class="card-header">
            <span class="card-icon">💬</span>
            <h3>传统大模型对话</h3>
          </div>
          <div class="card-content">
            <div class="card-item">
              <span class="item-label">核心输出</span>
              <span class="item-value">文本/代码片段</span>
            </div>
            <div class="card-item">
              <span class="item-label">执行逻辑</span>
              <span class="item-value">一问一答，被动响应</span>
            </div>
            <div class="card-item">
              <span class="item-label">能力边界</span>
              <span class="item-value">受限于模型本身知识</span>
            </div>
          </div>
        </div>
        
        <div class="vs-divider">VS</div>
        
        <div class="comparison-card highlight">
          <div class="card-header">
            <span class="card-icon">🤖</span>
            <h3>AI智能体</h3>
          </div>
          <div class="card-content">
            <div class="card-item">
              <span class="item-label">核心输出</span>
              <span class="item-value highlight-text">完整任务的闭环结果</span>
            </div>
            <div class="card-item">
              <span class="item-label">执行逻辑</span>
              <span class="item-value highlight-text">自主拆解任务，动态决策迭代</span>
            </div>
            <div class="card-item">
              <span class="item-label">能力边界</span>
              <span class="item-value highlight-text">可通过工具调用无限扩展能力</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 核心公式 - 一行显示，突出运算符 -->
    <div class="formula-section">
      <h2 class="section-title">核心公式</h2>
      <div class="formula-line">
        <span class="formula-term base">大语言模型</span>
        <span class="formula-op">+</span>
        <span class="formula-term module">规划</span>
        <span class="formula-op">+</span>
        <span class="formula-term module">记忆</span>
        <span class="formula-op">+</span>
        <span class="formula-term module">工具</span>
        <span class="formula-op">+</span>
        <span class="formula-term module">执行</span>
        <span class="formula-op eq">=</span>
        <span class="formula-term result">AI智能体</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.concept-view {
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

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
  text-align: center;
}

/* 环形闭环图 */
.definition-section {
  margin-bottom: 60px;
}

.cycle-container {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto 30px;
}

.cycle-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(0, 102, 255, 0.3);
  z-index: 10;
}

.center-text {
  color: white;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
}

.cycle-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(var(--angle)) translateX(140px) translateY(-50%);
  transform-origin: 0 0;
}

.cycle-node {
  transform: rotate(calc(-1 * var(--angle)));
  background: white;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 80px;
}

.node-icon {
  font-size: 24px;
}

.node-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

.cycle-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box,
              conic-gradient(from 0deg, var(--primary), var(--secondary), var(--primary)) border-box;
}

.ring-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(var(--rot)) translateX(140px) translateY(-50%);
  font-size: 14px;
  color: var(--primary);
  text-shadow: 0 0 4px white;
}

.definition-desc {
  text-align: center;
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
}

/* 本质对比卡片 */
.comparison-section {
  margin-bottom: 60px;
}

.comparison-cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.comparison-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  width: 320px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
}

.comparison-card.highlight {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border);
}

.card-icon {
  font-size: 32px;
}

.card-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-value {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.5;
}

.item-value.highlight-text {
  color: var(--primary);
  font-weight: 600;
}

.vs-divider {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-muted);
  background: var(--bg-tertiary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 核心公式 - 一行显示，突出运算符 */
.formula-section {
  margin-top: 60px;
}

.formula-line {
  background: white;
  border-radius: 16px;
  padding: 30px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.formula-term {
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
}

.formula-term.base {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 600;
}

.formula-term.module {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: 14px;
}

.formula-term.result {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border: 2px solid var(--primary);
  color: var(--primary);
  font-weight: 700;
}

.formula-op {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  padding: 0 4px;
}

.formula-op.eq {
  font-size: 32px;
}

@media (max-width: 768px) {
  .cycle-container {
    width: 300px;
    height: 300px;
  }
  
  .cycle-item {
    transform: rotate(var(--angle)) translateX(100px) translateY(-50%);
  }
  
  .cycle-node {
    padding: 8px 10px;
    min-width: 60px;
  }
  
  .node-icon {
    font-size: 18px;
  }
  
  .node-text {
    font-size: 11px;
  }
  
  .cycle-center {
    width: 90px;
    height: 90px;
  }
  
  .center-text {
    font-size: 13px;
  }
  
  .comparison-cards {
    flex-direction: column;
  }
  
  .vs-divider {
    transform: rotate(90deg);
  }
  
  .formula-operations {
    gap: 15px;
  }
}
</style>
