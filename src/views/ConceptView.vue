<template>
  <div class="concept-view">
    <h1 class="page-title">AI智能体：到底是什么？</h1>
    
    <!-- 核心定义 - 酷炫环形闭环图 -->
    <div class="definition-section">
      <h2 class="section-title">核心定义</h2>
      <div class="cycle-container">
        <!-- 外圈发光环 -->
        <div class="glow-ring"></div>
        <!-- 旋转的渐变环 -->
        <div class="rotating-ring">
          <svg viewBox="0 0 400 400" class="ring-svg">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0066ff" />
                <stop offset="50%" stop-color="#00d4aa" />
                <stop offset="100%" stop-color="#0066ff" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringGradient)" stroke-width="4" stroke-linecap="round" stroke-dasharray="20 10" />
          </svg>
        </div>
        <!-- 箭头 - 更大更明显 -->
        <div class="arrow-markers">
          <div class="arrow-item" style="--pos: 0;">
            <div class="arrow-body"></div>
            <div class="arrow-head">▶</div>
          </div>
          <div class="arrow-item" style="--pos: 1;">
            <div class="arrow-body"></div>
            <div class="arrow-head">▶</div>
          </div>
          <div class="arrow-item" style="--pos: 2;">
            <div class="arrow-body"></div>
            <div class="arrow-head">▶</div>
          </div>
          <div class="arrow-item" style="--pos: 3;">
            <div class="arrow-body"></div>
            <div class="arrow-head">▶</div>
          </div>
          <div class="arrow-item" style="--pos: 4;">
            <div class="arrow-body"></div>
            <div class="arrow-head">▶</div>
          </div>
        </div>
        <!-- 中心 -->
        <div class="cycle-center">
          <div class="center-glow"></div>
          <span class="center-text">AI智能体</span>
        </div>
        <!-- 5个能力卡片 - 均匀分布在圆环外侧 -->
        <div class="capability-card" style="--angle: -90deg;">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-icon">👁️</span>
            <span class="card-label">环境感知</span>
          </div>
        </div>
        <div class="capability-card" style="--angle: -18deg;">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-icon">🎯</span>
            <span class="card-label">自主规划</span>
          </div>
        </div>
        <div class="capability-card" style="--angle: 54deg;">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-icon">🧠</span>
            <span class="card-label">长期记忆</span>
          </div>
        </div>
        <div class="capability-card" style="--angle: 126deg;">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-icon">🔧</span>
            <span class="card-label">工具调用</span>
          </div>
        </div>
        <div class="capability-card" style="--angle: 198deg;">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-icon">🔄</span>
            <span class="card-label">执行反思</span>
          </div>
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

/* 酷炫环形闭环图 */
.definition-section {
  margin-bottom: 60px;
}

.cycle-container {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto 30px;
}

/* 外圈发光 */
.glow-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
  filter: blur(20px);
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
}

/* 旋转渐变环 */
.rotating-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  animation: rotate-ring 20s linear infinite;
}

@keyframes rotate-ring {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.ring-svg {
  width: 100%;
  height: 100%;
}

/* 箭头标记 */
.arrow-markers {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
}

.arrow-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(calc(var(--pos) * 72deg - 90deg)) translateX(150px);
  display: flex;
  align-items: center;
}

.arrow-body {
  width: 40px;
  height: 6px;
  background: linear-gradient(90deg, transparent, var(--primary));
  margin-right: -5px;
}

.arrow-head {
  font-size: 24px;
  color: var(--primary);
  filter: drop-shadow(0 0 8px var(--primary));
}

/* 中心 */
.cycle-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  z-index: 10;
}

.center-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  filter: blur(15px);
  opacity: 0.5;
  animation: center-pulse 2s ease-in-out infinite;
}

@keyframes center-pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.center-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 8px 40px rgba(0, 102, 255, 0.4);
}

/* 能力卡片 - 均匀分布在圆环外侧 */
.capability-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  z-index: 20;
  transform: translate(-50%, -50%) rotate(var(--angle)) translateX(220px) rotate(calc(var(--angle) * -1));
}

.card-glow {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: blur(8px);
}

.capability-card:hover .card-glow {
  opacity: 0.6;
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(0, 102, 255, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.capability-card:hover .card-content {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 102, 255, 0.25);
}

.card-icon {
  font-size: 32px;
}

.card-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
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



@media (max-width: 768px) {
  .cycle-container {
    width: 340px;
    height: 340px;
  }
  
  .glow-ring {
    width: 240px;
    height: 240px;
  }
  
  .rotating-ring {
    width: 280px;
    height: 280px;
  }
  
  .arrow-markers {
    width: 220px;
    height: 220px;
  }
  
  .arrow-item {
    transform: rotate(calc(var(--pos) * 72deg - 90deg)) translateX(110px) translateY(-50%);
  }
  
  .arrow-triangle {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid var(--primary);
  }
  
  .cycle-center {
    width: 100px;
    height: 100px;
  }
  
  .center-text {
    font-size: 14px;
  }
  
  .capability-card {
    transform: rotate(calc(var(--idx) * 72deg)) translateX(140px) rotate(calc(var(--idx) * -72deg)) translateY(-50%);
    width: 75px;
    height: 75px;
  }
  
  .card-icon {
    font-size: 22px;
  }
  
  .card-label {
    font-size: 10px;
  }
  
  .comparison-cards {
    flex-direction: column;
  }
  
  .vs-divider {
    transform: rotate(90deg);
  }
}
</style>
