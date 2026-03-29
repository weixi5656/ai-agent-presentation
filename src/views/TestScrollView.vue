<template>
  <div class="test-scroll-view">
    <div class="test-content">
      <h1 class="test-title animate-on-scroll">苹果官网风格滚动测试</h1>
      <p class="test-desc animate-on-scroll delay-100">
        这是一个测试页面，用于验证苹果官网风格的滚动效果。
      </p>
      
      <div class="test-grid">
        <div class="test-card animate-on-scroll" style="animation-delay: 200ms">
          <div class="card-icon">🎯</div>
          <h3>视口锁定</h3>
          <p>滚动时页面会自动吸附到每个section</p>
        </div>
        
        <div class="test-card animate-on-scroll" style="animation-delay: 300ms">
          <div class="card-icon">✨</div>
          <h3>视差效果</h3>
          <p>背景元素以不同速度滚动</p>
        </div>
        
        <div class="test-card animate-on-scroll" style="animation-delay: 400ms">
          <div class="card-icon">🎨</div>
          <h3>元素动画</h3>
          <p>元素根据滚动位置触发动画</p>
        </div>
        
        <div class="test-card animate-on-scroll" style="animation-delay: 500ms">
          <div class="card-icon">⚡</div>
          <h3>平滑过渡</h3>
          <p>使用缓动函数实现流畅动画</p>
        </div>
      </div>
      
      <div class="test-parallax">
        <div class="parallax-layer layer-1"></div>
        <div class="parallax-layer layer-2"></div>
        <div class="parallax-content animate-on-scroll">
          <h2>视差滚动演示</h2>
          <p>尝试滚动页面，观察背景层的移动速度差异</p>
        </div>
      </div>
      
      <div class="test-instructions">
        <h3 class="animate-on-scroll">使用说明：</h3>
        <ul>
          <li class="animate-on-scroll" style="animation-delay: 100ms">使用鼠标滚轮进行翻页</li>
          <li class="animate-on-scroll" style="animation-delay: 200ms">在移动设备上使用触摸滑动</li>
          <li class="animate-on-scroll" style="animation-delay: 300ms">使用键盘方向键控制</li>
          <li class="animate-on-scroll" style="animation-delay: 400ms">点击左侧导航直接跳转</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-scroll-view {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.test-content {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.test-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.test-desc {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.test-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.test-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.12);
  border-color: rgba(0, 102, 255, 0.2);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.test-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.test-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.test-parallax {
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
}

.layer-1 {
  background: radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.4) 0%, transparent 50%);
  transform: translateZ(-2px) scale(3);
}

.layer-2 {
  background: radial-gradient(circle at 70% 70%, rgba(0, 212, 170, 0.3) 0%, transparent 50%);
  transform: translateZ(-1px) scale(2);
}

.parallax-content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 40px;
}

.parallax-content h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.parallax-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
}

.test-instructions {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.test-instructions h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.test-instructions ul {
  list-style: none;
  padding: 0;
}

.test-instructions li {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  padding-left: 32px;
  position: relative;
  line-height: 1.6;
}

.test-instructions li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

@media (max-width: 768px) {
  .test-scroll-view {
    padding: 20px;
  }
  
  .test-title {
    font-size: 36px;
  }
  
  .test-desc {
    font-size: 16px;
  }
  
  .test-grid {
    grid-template-columns: 1fr;
  }
  
  .test-parallax {
    height: 300px;
  }
  
  .parallax-content h2 {
    font-size: 32px;
  }
  
  .parallax-content p {
    font-size: 16px;
  }
}
</style>