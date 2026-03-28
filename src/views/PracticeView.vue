<template>
  <div class="practice-view">
    <h1 class="page-title">提示词工程：从入门到精通</h1>
    
    <!-- 什么是提示词工程 -->
    <div class="intro-section">
      <div class="intro-card">
        <h2>什么是提示词工程（Prompt Engineering）</h2>
        <p>提示词工程是一门系统性学科，涵盖提示词的设计、优化、上下文管理以及与大模型交互的策略。通过设计和优化输入提示，引导模型生成预期的输出或行为，无需微调模型参数，只需在外部灵活调整提示词输入。</p>
        <div class="prompt-core-elements">
          <h4>提示词核心要素</h4>
          <div class="elements-grid">
            <div class="element-item">
              <span class="element-icon">🎯</span>
              <span class="element-name">指示</span>
              <span class="element-desc">特定任务或指令</span>
            </div>
            <div class="element-item">
              <span class="element-icon">📚</span>
              <span class="element-name">上下文</span>
              <span class="element-desc">外部信息引导</span>
            </div>
            <div class="element-item">
              <span class="element-icon">💡</span>
              <span class="element-name">示例</span>
              <span class="element-desc">期望输出格式</span>
            </div>
            <div class="element-item">
              <span class="element-icon">📝</span>
              <span class="element-name">输入</span>
              <span class="element-desc">用户问题内容</span>
            </div>
            <div class="element-item">
              <span class="element-icon">📤</span>
              <span class="element-name">输出</span>
              <span class="element-desc">指定类型格式</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 编写提示词的基本原则 -->
    <div class="principles-section">
      <h2 class="section-title">编写提示词的基本原则</h2>
      <div class="principles-grid">
        <div class="principle-card">
          <h3>1. 编写清晰、具体的指令</h3>
          <ul>
            <li>使用分隔符清晰表示输入的不同部分（```、""、<>等）</li>
            <li>要求结构化输出（JSON、HTML等格式）</li>
            <li>要求模型检查是否满足条件</li>
            <li>提供少量示例（Few-Shot）</li>
          </ul>
        </div>
        <div class="principle-card">
          <h3>2. 给模型时间去思考</h3>
          <ul>
            <li>指定完成任务所需的步骤</li>
            <li>指导模型在下结论之前找出自己的解法</li>
            <li>使用"让我们逐步思考"引导推理</li>
          </ul>
        </div>
        <div class="principle-card">
          <h3>3. 避免常见陷阱</h3>
          <ul>
            <li>避免说明不要做什么，而是说明要做什么</li>
            <li>具体一点：说"用2-3句话"而非"用几句话"</li>
            <li>要求模型先解释再提供答案</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 提示词技术分类 -->
    <div class="techniques-section">
      <h2 class="section-title">提示词技术分类</h2>
      <div class="techniques-tabs">
        <button 
          v-for="(cat, index) in techniqueCategories" 
          :key="index"
          class="tab-btn"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ cat.name }}
        </button>
      </div>
      <div class="technique-content">
        <div class="technique-list">
          <div class="technique-item" v-for="(tech, idx) in techniqueCategories[activeTab].techniques" :key="idx">
            <h4>{{ tech.name }}</h4>
            <p>{{ tech.desc }}</p>
            <div class="tech-example" v-if="tech.example">
              <strong>示例：</strong>{{ tech.example }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 提示词框架 -->
    <div class="frameworks-section">
      <h2 class="section-title">常用提示词框架</h2>
      <div class="frameworks-grid">
        <div class="framework-card" v-for="(fw, index) in frameworks" :key="index">
          <h3>{{ fw.name }}</h3>
          <div class="fw-structure">
            <div class="fw-item" v-for="(item, idx) in fw.structure" :key="idx">
              <span class="fw-key">{{ item.key }}</span>
              <span class="fw-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 研发场景最佳实践 -->
    <div class="best-practices-section">
      <h2 class="section-title">研发场景最佳实践</h2>
      <div class="practice-cards">
        <div class="practice-card">
          <h3>🛠️ 环境与部署避坑</h3>
          <ul>
            <li>国内大模型适配常见问题</li>
            <li>网络代理配置</li>
            <li>依赖安装</li>
            <li>私有化部署的核心注意事项</li>
          </ul>
        </div>
        <div class="practice-card highlight">
          <h3>💡 智能体提示词优化技巧</h3>
          <ul>
            <li>用「角色+目标+约束+工具+输出」五段式固定结构</li>
            <li>用强约束指令替代模糊描述</li>
            <li>用示例引导（Few-Shot）替代纯指令</li>
            <li>禁止多目标叠加，一个智能体只负责一个核心任务</li>
            <li>加入容错与终止机制</li>
          </ul>
        </div>
        <div class="practice-card">
          <h3>⚡ 提效省Token核心方法</h3>
          <ul>
            <li>极简指令原则</li>
            <li>固定输出格式</li>
            <li>上下文精准过滤</li>
            <li>长任务分阶段执行</li>
            <li>模型分级调用</li>
            <li>调用结果缓存</li>
          </ul>
        </div>
        <div class="practice-card">
          <h3>🔒 成本与安全管控</h3>
          <ul>
            <li>大模型API调用成本优化方案</li>
            <li>代码安全与知识产权合规</li>
            <li>内部敏感数据管控方案</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const techniqueCategories = [
  {
    name: '单一提示技术',
    techniques: [
      { name: 'Zero-Shot（零样本）', desc: '直接给模型任务，不提供示例，利用模型泛化能力', example: '请解释什么是人工智能' },
      { name: 'Few-Shot（少样本）', desc: '提供少量示例，帮助模型理解任务要求', example: '示例1：好的→Okay. 示例2：谢谢→Thanks.' },
      { name: 'CoT（思维链）', desc: '引导模型逐步推理，分解复杂问题为中间步骤', example: '让我们逐步思考...' },
      { name: 'PAL（程序辅助）', desc: '将解释扩展为带有代码的自然语言', example: '用Python代码解决数学问题' }
    ]
  },
  {
    name: '多重提示技术',
    techniques: [
      { name: 'Self-Consistency（自我一致性）', desc: '多次提出相同提示，通过投票选择最一致的答案', example: '多次采样取多数投票' },
      { name: 'Prompt Chaining（提示链）', desc: '将任务分解为子问题，依次用子问题提示模型', example: '先分析需求→再设计方案→最后实现' },
      { name: 'ToT（思维树）', desc: '允许模型探索多个推理步骤并自我评估选择', example: '生成多个候选方案→评估→选择最优' },
      { name: 'Reflexion（自我反思）', desc: '通过自我验证与外部反馈结合的迭代优化', example: '生成→评估→修正→再评估' }
    ]
  },
  {
    name: '高级技术',
    techniques: [
      { name: 'RAG（检索增强生成）', desc: '结合外部知识库检索，增强模型回答准确性', example: '先检索相关文档→再生成回答' },
      { name: 'ReAct（推理与行动）', desc: '交替生成推理轨迹和行动，解决决策任务', example: '思考→行动→观察→再思考' },
      { name: 'DSP（定向刺激）', desc: '生成刺激（关键词）并使用它们提高响应质量', example: '生成关键词→基于关键词生成摘要' },
      { name: 'GK（生成知识）', desc: '先使用单独提示生成知识，再利用知识获得更好响应', example: '先生成背景知识→再回答问题' }
    ]
  }
]

const frameworks = [
  {
    name: 'Co-STAR 框架',
    structure: [
      { key: 'C-Context', desc: '背景上下文' },
      { key: 'O-Objective', desc: '明确目标' },
      { key: 'S-Style', desc: '写作风格' },
      { key: 'T-Tone', desc: '语气语调' },
      { key: 'A-Audience', desc: '目标受众' },
      { key: 'R-Response', desc: '响应格式' }
    ]
  },
  {
    name: 'RTF 框架',
    structure: [
      { key: 'R-Role', desc: '角色定位' },
      { key: 'T-Task', desc: '具体任务' },
      { key: 'F-Format', desc: '输出格式' }
    ]
  },
  {
    name: 'RISEN 框架',
    structure: [
      { key: 'R-Role', desc: '角色' },
      { key: 'I-Instruction', desc: '指令' },
      { key: 'S-Steps', desc: '步骤' },
      { key: 'E-End Goal', desc: '最终目标' },
      { key: 'N-Narrowing', desc: '约束条件' }
    ]
  }
]
</script>

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

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

/* 介绍部分 */
.intro-section {
  margin-bottom: 60px;
}

.intro-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.intro-card h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.intro-card p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.prompt-core-elements h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.elements-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.element-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s;
}

.element-item:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
}

.element-icon {
  font-size: 32px;
}

.element-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.element-desc {
  font-size: 12px;
  color: var(--text-muted);
}

/* 原则部分 */
.principles-section {
  margin-bottom: 60px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.principle-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.principle-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.principle-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.principle-card ul {
  list-style: none;
}

.principle-card li {
  padding: 8px 0;
  padding-left: 16px;
  position: relative;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

.principle-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: bold;
}

/* 技术分类 */
.techniques-section {
  margin-bottom: 60px;
}

.techniques-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.tab-btn {
  padding: 12px 24px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  border-color: var(--primary);
}

.tab-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.technique-content {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
}

.technique-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.technique-item {
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.03), rgba(0, 212, 170, 0.03));
  border-radius: 12px;
  border: 1px solid rgba(0, 102, 255, 0.1);
}

.technique-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 8px;
}

.technique-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
}

.tech-example {
  font-size: 13px;
  color: var(--text-muted);
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  border-left: 3px solid var(--secondary);
}

/* 框架部分 */
.frameworks-section {
  margin-bottom: 60px;
}

.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.framework-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.framework-card:hover {
  border-color: var(--secondary);
  box-shadow: 0 8px 24px rgba(0, 212, 170, 0.1);
}

.framework-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--secondary);
}

.fw-structure {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fw-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.fw-key {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
  min-width: 80px;
}

.fw-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

/* 最佳实践 */
.best-practices-section {
  margin-bottom: 40px;
}

.practice-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.practice-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.practice-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.practice-card.highlight {
  border: 2px solid var(--primary);
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
}

.practice-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.practice-card ul {
  list-style: none;
}

.practice-card li {
  padding: 8px 0;
  padding-left: 16px;
  position: relative;
  color: var(--text-secondary);
  font-size: 14px;
}

.practice-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: bold;
}

@media (max-width: 968px) {
  .elements-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .principles-grid {
    grid-template-columns: 1fr;
  }
  
  .technique-list {
    grid-template-columns: 1fr;
  }
  
  .frameworks-grid {
    grid-template-columns: 1fr;
  }
  
  .practice-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .elements-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .techniques-tabs {
    flex-wrap: wrap;
  }
}
</style>
