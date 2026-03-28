<template>
  <div class="concept-view">
    <h1 class="page-title">AI智能体：到底是什么？</h1>
    
    <div class="definition-section">
      <div class="definition-card">
        <h2>核心定义</h2>
        <p class="definition-text">
          AI智能体是具备<span class="highlight">环境感知、自主规划、长期记忆、工具调用、执行反思</span>完整闭环能力，
          可自主完成复杂研发任务的智能系统
        </p>
      </div>
    </div>
    
    <div class="comparison-section">
      <h2 class="section-title">本质区别（研发视角）</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>对比项</th>
            <th>传统大模型对话</th>
            <th>固定逻辑自动化脚本</th>
            <th class="highlight-col">AI智能体</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>核心输出</strong></td>
            <td>文本/代码片段</td>
            <td>预设流程的固定执行</td>
            <td class="highlight-cell">完整任务的闭环结果</td>
          </tr>
          <tr>
            <td><strong>执行逻辑</strong></td>
            <td>一问一答，被动响应</td>
            <td>按预设规则线性执行</td>
            <td class="highlight-cell">自主拆解任务，动态决策迭代</td>
          </tr>
          <tr>
            <td><strong>能力边界</strong></td>
            <td>受限于模型本身知识</td>
            <td>仅能处理预设场景</td>
            <td class="highlight-cell">可通过工具调用无限扩展能力</td>
          </tr>
          <tr>
            <td><strong>研发场景示例</strong></td>
            <td>帮你写一段代码</td>
            <td>按固定规则扫代码漏洞</td>
            <td class="highlight-cell">自主完成代码审计→漏洞定位→修复方案→报告生成全流程</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="formula-section">
      <h2 class="section-title">核心公式</h2>
      <div class="formula-card">
        <p class="formula">
          AI智能体 = <span class="formula-part">大语言模型</span>（决策大脑）
          + <span class="formula-part">规划模块</span>
          + <span class="formula-part">记忆模块</span>
          + <span class="formula-part">工具调用模块</span>
          + <span class="formula-part">执行模块</span>
        </p>
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

.definition-section {
  margin-bottom: 50px;
}

.definition-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.definition-card h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary);
}

.definition-text {
  font-size: 20px;
  line-height: 1.8;
  color: var(--text-primary);
}

.highlight {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.comparison-section {
  margin-bottom: 50px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.comparison-table th,
.comparison-table td {
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.comparison-table th {
  background: var(--bg-tertiary);
  font-weight: 600;
  color: var(--text-primary);
}

.comparison-table .highlight-col {
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
}

.comparison-table .highlight-cell {
  background: rgba(0, 102, 255, 0.05);
  color: var(--primary);
  font-weight: 500;
}

.formula-section {
  margin-top: 50px;
}

.formula-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  border: 2px solid var(--primary);
  text-align: center;
}

.formula {
  font-size: 18px;
  line-height: 2;
  color: var(--text-primary);
}

.formula-part {
  display: inline-block;
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border-radius: 8px;
  font-weight: 600;
  margin: 0 4px;
}
</style>
