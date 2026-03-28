<template>
  <div class="resource-view">
    <h1 class="page-title">分享资源包</h1>
    
    <div class="content-grid">
      <div class="resources-section">
        <h2 class="section-title">📦 资源清单</h2>
        <div class="resource-list">
          <div class="resource-item" v-for="(resource, index) in resources" :key="index">
            <span class="resource-icon">📥</span>
            <span class="resource-name">{{ resource }}</span>
          </div>
        </div>
      </div>
      
      <div class="qr-section">
        <h2 class="section-title">扫码获取全部资源</h2>
        <div class="qr-card">
          <div class="qr-placeholder">
            <div class="qr-code">
              <span>QR CODE</span>
              <small>扫码下载资源包</small>
            </div>
          </div>
          <p class="qr-hint">微信扫码或访问 GitHub 仓库获取</p>
        </div>
      </div>
    </div>
    
    <div class="github-section">
      <h2 class="section-title">GitHub 仓库</h2>
      <a href="https://github.com/weixi5656/ai-agent-presentation" target="_blank" class="github-link">
        <span>🔗 github.com/weixi5656/ai-agent-presentation</span>
        <span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const resources = [
  '本次分享完整PPT/PDF文档',
  'OpenClaw/ClawTeam 环境搭建教程与一键部署脚本',
  '本次分享全套智能体提示词模板库（单智能体+多智能体全场景）',
  '所有案例演示的完整源码与工程文件',
  '智能体提效省Token工程化工具包',
  'ESP32端侧智能体开源工程与开发教程',
  'AI智能体开源框架合集与前沿技术报告'
]
</script>

<style scoped>
.resource-view {
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

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border-radius: 10px;
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.resource-item:hover {
  border-color: var(--primary);
  transform: translateX(5px);
}

.resource-icon {
  font-size: 20px;
}

.resource-name {
  font-size: 15px;
  color: var(--text-primary);
}

.qr-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid var(--border);
  text-align: center;
}

.qr-placeholder {
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
}

.qr-code span {
  font-size: 18px;
  font-weight: 600;
}

.qr-code small {
  font-size: 12px;
}

.qr-hint {
  font-size: 14px;
  color: var(--text-secondary);
}

.github-section {
  margin-top: 40px;
  text-align: center;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 32px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}

.github-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
}

.arrow {
  font-size: 20px;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
