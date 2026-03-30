<template>
  <div class="intro-view">
    <div class="hero-content">

      
      <h1 class="hero-title">
        <span class="gradient-text typewriter">聚焦前沿、可落地、高质感的</span><br>
        <span class="main-text">AI 智能体方案</span>
      </h1>
      
      <p class="hero-desc">
        <strong>AI智能体应用场景分享</strong>
      </p>
      
      <div class="feature-tags">
        <div class="tag glass">
          <span class="icon">✨</span>
          <span>干货满满，拒绝空谈</span>
        </div>
        <div class="tag glass">
          <span class="icon">🗺️</span>
          <span>全景视角，一览无余</span>
        </div>
        <div class="tag glass">
          <span class="icon">🤖</span>
          <span>端云协同，硬核实战</span>
        </div>
      </div>
    </div>
    
    <!-- 滚动提示 -->
    <div class="scroll-prompt">
      <span>向下滑动探索</span>
      <div class="mouse-icon">
        <div class="wheel"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  padding-top: 40px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

.badge-container {
  margin-bottom: 24px;
  display: inline-block;
}

.version-badge {
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(0, 102, 255, 0.2);
  display: inline-block;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 58px;
  line-height: 1.2;
  margin-bottom: 24px;
  font-weight: 800;
  letter-spacing: -1px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 42px;
}

.main-text {
  color: var(--text-primary);
  font-size: 72px;
}

.hero-desc {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0 auto 40px;
  max-width: 700px;
}

.hero-desc strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* 毛玻璃标签 */
.feature-tags {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.tag.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 12px 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: var(--text-primary);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tag.glass:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.2);
}

/* 打字机动画 */
.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2.5s steps(40, end);
}

@keyframes typing {
  from { width: 0; opacity: 0; }
  1% { opacity: 1; }
  to { width: 100%; opacity: 1; }
}

/* 滚动提示 */
.scroll-prompt {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 14px;
  animation: bounce 2s infinite;
}

.mouse-icon {
  width: 24px;
  height: 36px;
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--text-muted);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 12px); opacity: 0; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 40px;
  }
  .gradient-text {
    font-size: 28px;
  }
  .main-text {
    font-size: 48px;
  }
  .hero-desc {
    font-size: 16px;
    padding: 0 20px;
  }
  .feature-tags {
    flex-direction: column;
    padding: 0 40px;
  }
}
</style>
