<template>
  <div class="demo-view">
    <!-- 苹果官网风格演示 -->
    <div class="demo-section hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate-on-scroll">
          <span class="title-gradient">苹果官网风格</span>
          <span class="title-separator">·</span>
          <span class="title-light">滚动翻页效果</span>
        </h1>
        <p class="hero-desc animate-on-scroll delay-200">
          体验类似苹果官网的视口锁定滚动、视差滚动和元素动画
        </p>
        <div class="hero-scroll-hint animate-on-scroll delay-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>向下滚动体验效果</span>
        </div>
      </div>
    </div>

    <div class="demo-section features-section">
      <div class="section-title animate-on-scroll">
        <h2>核心特性</h2>
        <p class="section-subtitle">实现苹果官网的流畅滚动体验</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card animate-on-scroll" style="animation-delay: 100ms">
          <div class="feature-icon">🎯</div>
          <h3>视口锁定滚动</h3>
          <p>滚动时页面自动"吸附"到每个section，提供精准的翻页体验</p>
        </div>
        
        <div class="feature-card animate-on-scroll" style="animation-delay: 200ms">
          <div class="feature-icon">✨</div>
          <h3>视差滚动效果</h3>
          <p>背景和前景元素以不同速度滚动，创造深度感和沉浸感</p>
        </div>
        
        <div class="feature-card animate-on-scroll" style="animation-delay: 300ms">
          <div class="feature-icon">🎨</div>
          <h3>元素动画系统</h3>
          <p>元素根据滚动位置淡入/淡出、移动、缩放，增强视觉引导</p>
        </div>
        
        <div class="feature-card animate-on-scroll" style="animation-delay: 400ms">
          <div class="feature-icon">⚡</div>
          <h3>平滑过渡动画</h3>
          <p>使用缓动函数实现流畅的滚动动画，避免生硬的跳转</p>
        </div>
      </div>
    </div>

    <div class="demo-section parallax-section">
      <div class="parallax-content">
        <div class="parallax-bg-layer"></div>
        <div class="parallax-fg-layer">
          <h2 class="animate-on-scroll">视差滚动演示</h2>
          <p class="animate-on-scroll delay-200">背景层和前景层以不同速度滚动，创造深度感</p>
        </div>
      </div>
    </div>

    <div class="demo-section animation-section">
      <div class="animation-demo">
        <div class="animation-item fadeInLeft animate-on-scroll">
          <div class="animation-preview fadeInLeft-preview"></div>
          <div class="animation-info">
            <h3>从左淡入</h3>
            <p>元素从左侧滑入，适合介绍性内容</p>
          </div>
        </div>
        
        <div class="animation-item fadeInUp animate-on-scroll" style="animation-delay: 100ms">
          <div class="animation-preview fadeInUp-preview"></div>
          <div class="animation-info">
            <h3>从下淡入</h3>
            <p>元素从下方升起，适合强调性内容</p>
          </div>
        </div>
        
        <div class="animation-item scaleIn animate-on-scroll" style="animation-delay: 200ms">
          <div class="animation-preview scaleIn-preview"></div>
          <div class="animation-info">
            <h3>缩放淡入</h3>
            <p>元素从小变大，适合焦点内容</p>
          </div>
        </div>
        
        <div class="animation-item rotateIn animate-on-scroll" style="animation-delay: 300ms">
          <div class="animation-preview rotateIn-preview"></div>
          <div class="animation-info">
            <h3>旋转进入</h3>
            <p>元素旋转进入，适合创意性内容</p>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section controls-section">
      <div class="controls-content">
        <h2 class="animate-on-scroll">交互控制</h2>
        <p class="animate-on-scroll delay-100">支持多种交互方式，提供完整的用户体验</p>
        
        <div class="controls-grid">
          <div class="control-item animate-on-scroll" style="animation-delay: 200ms">
            <div class="control-icon">🖱️</div>
            <h3>鼠标滚轮</h3>
            <p>使用鼠标滚轮进行翻页，支持惯性滚动</p>
          </div>
          
          <div class="control-item animate-on-scroll" style="animation-delay: 300ms">
            <div class="control-icon">👆</div>
            <h3>触摸滑动</h3>
            <p>在移动设备上支持触摸滑动翻页</p>
          </div>
          
          <div class="control-item animate-on-scroll" style="animation-delay: 400ms">
            <div class="control-icon">⌨️</div>
            <h3>键盘控制</h3>
            <p>支持方向键、空格键、PageUp/Down等快捷键</p>
          </div>
          
          <div class="control-item animate-on-scroll" style="animation-delay: 500ms">
            <div class="control-icon">🎯</div>
            <h3>导航点击</h3>
            <p>点击左侧导航直接跳转到指定页面</p>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section conclusion-section">
      <div class="conclusion-content">
        <h2 class="animate-on-scroll">体验完成</h2>
        <p class="animate-on-scroll delay-200">
          您已体验了完整的苹果官网风格滚动效果。这种设计模式特别适合：
        </p>
        
        <div class="conclusion-points">
          <div class="point animate-on-scroll" style="animation-delay: 300ms">
            <span class="point-icon">📱</span>
            <span>产品展示页面</span>
          </div>
          <div class="point animate-on-scroll" style="animation-delay: 400ms">
            <span class="point-icon">🎨</span>
            <span>设计作品集</span>
          </div>
          <div class="point animate-on-scroll" style="animation-delay: 500ms">
            <span class="point-icon">📊</span>
            <span>数据可视化</span>
          </div>
          <div class="point animate-on-scroll" style="animation-delay: 600ms">
            <span class="point-icon">🎓</span>
            <span>教育演示</span>
          </div>
        </div>
        
        <div class="scroll-to-top animate-on-scroll delay-800" @click="scrollToTop">
          <span>回到顶部</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.demo-view {
  width: 100%;
  min-height: 100vh;
}

.demo-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  position: relative;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #f4f4f8 0%, #ffffff 100%);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 72px;
  font-weight: 900;
  margin-bottom: 24px;
  letter-spacing: -2px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.title-gradient {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-separator {
  color: rgba(60, 60, 67, 0.2);
  font-weight: 300;
}

.title-light {
  color: var(--text-primary);
}

.hero-desc {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 14px;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Features Section */
.features-section {
  background: white;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.2);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.feature-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Parallax Section */
.parallax-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  overflow: hidden;
}

.parallax-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.parallax-bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 70%);
  transform: translateZ(-1px) scale(2);
  z-index: 1;
}

.parallax-fg-layer {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.parallax-fg-layer h2 {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.parallax-fg-layer p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* Animation Section */
.animation-section {
  background: #f8f9fa;
}

.animation-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.animation-item {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.animation-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
}

.animation-preview {
  width: 100%;
  height: 120px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
}

.fadeInLeft-preview::after {
  content: '← 淡入';
}

.fadeInUp-preview::after {
  content: '↑ 淡入';
}

.scaleIn-preview::after {
  content: '↔ 缩放';
}

.rotateIn-preview::after {
  content: '↻ 旋转';
}

.animation-info h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.animation-info p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Controls Section */
.controls-section {
  background: white;
}

.controls-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.controls-content h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.controls-content p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.control-item {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 102, 255, 0.1);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s ease;
}

.control-item:hover {
  background: white;
  border-color: rgba(0, 102, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0, 102, 255, 0.1);
}

.control-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.control-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.control-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Conclusion Section */
.conclusion-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  text-align: center;
}

.conclusion-content {
  max-width: 800px;
  margin: 0 auto;
}

.conclusion-content h2 {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 24px;
}

.conclusion-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
}

.conclusion-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.point {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.point:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.point-icon {
  font-size: 32px;
}

.point span:last-child {
  font-size: 16px;
  font-weight: 600;
}

.scroll-to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary);
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.scroll-to-top:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.scroll-to-top svg {
  transform: rotate(-90deg);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .demo-section {
    padding: 40px 20px;
  }
  
  .hero-title {
    font-size: 48px;
    flex-direction: column;
    gap: 8px;
  }
  
  .section-title h2,
  .controls-content h2 {
    font-size: 36px;
  }
  
  .parallax-fg-layer h2 {
    font-size: 40px;
  }
  
  .conclusion-content h2 {
    font-size: 40px;
  }
  
  .features-grid,
  .controls-grid {
    grid-template-columns: 1fr;
  }
  
  .animation-demo {
    grid-template-columns: 1fr;
  }
  
  .conclusion-points {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-desc {
    font-size: 16px;
  }
  
  .section-title h2,
  .controls-content h2 {
    font-size: 28px;
  }
  
  .parallax-fg-layer h2 {
    font-size: 32px;
  }
  
  .conclusion-content h2 {
    font-size: 32px;
  }
}
</style>
