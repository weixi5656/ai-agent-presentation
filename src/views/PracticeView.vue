<template>
  <div class="practice-view">
    <h1 class="page-title">研发落地避坑指南与核心最佳实践</h1>
    
    <div class="sections-grid">
      <div class="section-card">
        <h2>🛠️ 环境与部署避坑</h2>
        <ul>
          <li>国内大模型适配常见问题</li>
          <li>网络代理配置</li>
          <li>依赖安装</li>
          <li>私有化部署的核心注意事项</li>
        </ul>
      </div>
      
      <div class="section-card highlight">
        <h2>💡 智能体提示词优化核心技巧</h2>
        <div class="tip-list">
          <div class="tip">
            <strong>技巧1：</strong>用「角色+目标+约束+工具+输出」五段式固定结构
          </div>
          <div class="tip">
            <strong>技巧2：</strong>用强约束指令替代模糊描述
          </div>
          <div class="tip">
            <strong>技巧3：</strong>用示例引导（Few-Shot）替代纯指令
          </div>
          <div class="tip">
            <strong>技巧4：</strong>禁止多目标叠加，一个智能体只负责一个核心任务
          </div>
          <div class="tip">
            <strong>技巧5：</strong>加入容错与终止机制
          </div>
        </div>
      </div>
      
      <div class="section-card">
        <h2>⚡ 提效省Token核心方法</h2>
        <div class="method-category">
          <h3>提示词层面</h3>
          <ul>
            <li>极简指令原则</li>
            <li>固定输出格式</li>
            <li>上下文精准过滤</li>
          </ul>
        </div>
        <div class="method-category">
          <h3>执行流程层面</h3>
          <ul>
            <li>长任务分阶段执行</li>
            <li>反思过滤机制</li>
            <li>结果前置校验</li>
          </ul>
        </div>
        <div class="method-category">
          <h3>工程化层面</h3>
          <ul>
            <li>滑动窗口+向量检索</li>
            <li>模型分级调用</li>
            <li>调用结果缓存</li>
            <li>批量执行优化</li>
          </ul>
        </div>
      </div>
      
      <div class="section-card">
        <h2>🔒 成本与安全管控</h2>
        <ul>
          <li>大模型API调用成本优化方案</li>
          <li>代码安全与知识产权合规</li>
          <li>内部敏感数据管控方案</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.practice-view {
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

.sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.section-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.section-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.section-card.highlight {
  border: 2px solid var(--primary);
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
}

.section-card h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary);
}

.section-card ul {
  list-style: none;
}

.section-card li {
  padding: 10px 0;
  padding-left: 20px;
  position: relative;
  color: var(--text-secondary);
  font-size: 15px;
}

.section-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

.tip-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tip {
  padding: 14px 18px;
  background: white;
  border-radius: 8px;
  border-left: 3px solid var(--secondary);
  font-size: 14px;
  line-height: 1.6;
}

.tip strong {
  color: var(--primary);
}

.method-category {
  margin-bottom: 20px;
}

.method-category h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .sections-grid {
    grid-template-columns: 1fr;
  }
}
</style>
