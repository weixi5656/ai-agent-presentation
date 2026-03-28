<template>
  <div class="clawteam-view">
    <h1 class="page-title">ClawTeam 多智能体协作：架构与落地</h1>
    
    <div class="positioning-section">
      <div class="positioning-card">
        <h2>核心定位</h2>
        <p>基于OpenClaw的多智能体协作框架，采用Supervisor-Worker主从架构，通过任务自动拆分、并行执行、状态持久化，实现从"个人助手"到"组织级协作平台"的升级</p>
      </div>
    </div>
    
    <div class="architecture-section">
      <h2 class="section-title">ClawTeam 核心架构</h2>
      <div class="architecture-diagram">
        <!-- 用户层 -->
        <div class="arch-layer user-layer">
          <div class="layer-box">
            <span class="layer-icon">👤</span>
            <span class="layer-name">用户</span>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- 调度层 -->
        <div class="arch-layer supervisor-layer">
          <div class="layer-box primary">
            <span class="layer-icon">👑</span>
            <span class="layer-name">Supervisor 主管智能体</span>
            <span class="layer-desc">目标拆解 · 任务分发 · 进度管控 · 结果汇总</span>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- 执行层 -->
        <div class="arch-layer workers-layer">
          <div class="workers-grid">
            <div class="worker-box">
              <span class="worker-icon">🏗️</span>
              <span class="worker-name">架构师</span>
            </div>
            <div class="worker-box">
              <span class="worker-icon">💻</span>
              <span class="worker-name">开发工程师</span>
            </div>
            <div class="worker-box">
              <span class="worker-icon">🧪</span>
              <span class="worker-name">测试工程师</span>
            </div>
            <div class="worker-box">
              <span class="worker-icon">🔍</span>
              <span class="worker-name">评审智能体</span>
            </div>
          </div>
        </div>
        
        <div class="arch-arrow down"></div>
        
        <!-- 存储层 -->
        <div class="arch-layer storage-layer">
          <div class="storage-box">
            <span class="storage-icon">🗄️</span>
            <span class="storage-name">共享记忆库</span>
            <span class="storage-desc">MEMORY.md + 向量数据库</span>
          </div>
        </div>
      </div>
      
      <!-- 架构特性 -->
      <div class="arch-features">
        <div class="feature-item">
          <span class="feature-icon">🔄</span>
          <div class="feature-content">
            <h4>双层通信机制</h4>
            <p>JSON-RPC + 事件总线，Agent间高效协作</p>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">💾</span>
          <div class="feature-content">
            <h4>状态持久化</h4>
            <p>Checkpoint检查点，任务断点续传</p>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🔒</span>
          <div class="feature-content">
            <h4>代码隔离</h4>
            <p>独立环境运行，避免冲突干扰</p>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">⚡</span>
          <div class="feature-content">
            <h4>并行执行</h4>
            <p>多Worker同时处理，效率提升60%</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="steps-section">
      <h2 class="section-title">3步搭建AI团队</h2>
      <div class="steps-detail">
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">1</span>
            <h3>安装ClawTeam并创建团队</h3>
          </div>
          <div class="step-content">
            <pre class="code-block"><code># 安装ClawTeam
pip install clawteam

# 验证安装
clawteam --help

# 创建AI团队
clawteam team spawn-team ai-news-team -d "AI前沿技术每日收集整理团队"

# 查看团队列表
clawteam team list</code></pre>
            <div class="step-notes">
              <p><strong>核心概念：</strong>Team是项目容器，包含多个Agent成员和任务分配规则</p>
            </div>
          </div>
        </div>
        
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">2</span>
            <h3>配置智能体角色与通信</h3>
          </div>
          <div class="step-content">
            <pre class="code-block"><code># 配置Agent间通信（在openclaw.json中）
{
  "tools": {
    "agentToAgent": {
      "enabled": true,
      "allow": ["researcher", "writer", "reviewer"],
      "maxRecursion": 3
    }
  }
}

# 启用ACP子代理模式
openclaw config set acp.sub_agent.enabled true
openclaw config set acp.sub_agent.isolate_memory true

# 重启服务
openclaw restart</code></pre>
            <div class="step-notes">
              <p><strong>关键配置：</strong>启用Agent间通信、记忆隔离、最大递归3层防循环</p>
            </div>
          </div>
        </div>
        
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">3</span>
            <h3>启动团队并监控执行</h3>
          </div>
          <div class="step-content">
            <pre class="code-block"><code># 启动团队执行任务
clawteam launch ai-news-team --goal "收集整理今日AI前沿技术报告"

# 查看团队状态看板
clawteam board show ai-news-team

# 输出示例：
# ┌─────────────┬──────────────────┬──────────┐
# │ Agent       │ 任务             │ 状态     │
# ├─────────────┼──────────────────┼──────────┤
# │ 研究员      │ 收集AI论文/新闻  │ ✅ 完成  │
# │ 内容策划    │ 整理要点         │ 🟡 进行中│
# │ 编辑        │ 撰写报告         │ 🔵 待开始│
# │ 审核员      │ 质量检查         │ ⏸️ 阻塞  │
# └─────────────┴──────────────────┴──────────┘</code></pre>
            <div class="step-notes">
              <p><strong>监控管理：</strong>实时查看各Agent任务状态、进度、阻塞情况</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="template-section">
      <h2 class="section-title">场景：AI前沿技术每日收集整理成报告</h2>
      <div class="scenario-desc">
        <p>一个完整的AI资讯团队，自动完成从信息收集到报告输出的全流程</p>
      </div>
      <div class="template-tabs">
        <button 
          v-for="(template, index) in templates" 
          :key="index"
          class="tab-btn"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ template.name }}
        </button>
      </div>
      <div class="template-content">
        <div class="template-header">
          <h3>{{ templates[activeTab].name }}</h3>
          <p>{{ templates[activeTab].role }}</p>
        </div>
        <pre class="code-block"><code>{{ templates[activeTab].content }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const templates = [
  {
    name: '研究员 Agent',
    role: '信息收集专家',
    content: `# 角色定位
你是AI前沿技术研究专家，专精全球AI领域最新动态的监测与收集。

# 核心任务
每日定时收集以下渠道的AI前沿信息：
1. arXiv最新论文（AI/ML/CV/NLP方向）
2. 顶级会议动态（NeurIPS/ICML/ACL/CVPR）
3. 科技媒体（TechCrunch/MIT Technology Review/机器之心）
4. 大厂技术博客（Google AI/OpenAI/DeepMind/阿里/腾讯）

# 输出标准
1. 每日收集不少于20条高质量信息
2. 每条信息标注：来源、发布时间、核心看点
3. 按技术领域分类：大模型/多模态/Agent/基础设施
4. 输出格式：JSON结构化数据，便于下游处理

# 协作规则
1. 每日08:00自动执行收集任务
2. 完成后将结构化数据发送给内容策划Agent
3. 对高价值信息标注"重点推荐"标签`
  },
  {
    name: '内容策划 Agent',
    role: '信息整理与选题专家',
    content: `# 角色定位
你是AI内容策划专家，专精从海量信息中提炼核心价值，设计内容结构。

# 核心任务
1. 接收研究员Agent收集的原始数据
2. 筛选高价值信息（影响力、创新性、实用性）
3. 设计报告结构：头条要闻、技术突破、产品动态、深度解读
4. 为每条选题撰写100字以内的核心要点

# 输出标准
1. 从20+条信息中筛选出8-10条精华
2. 每条要点包含：标题、一句话摘要、为什么重要
3. 设计报告大纲：目录结构、篇幅分配、视觉元素建议
4. 输出格式：Markdown结构化文档

# 协作规则
1. 接收研究员数据后2小时内完成筛选
2. 将策划方案发送给编辑Agent撰写正文
3. 标注需要深度解读的重点选题`
  },
  {
    name: '编辑 Agent',
    role: '报告撰写专家',
    content: `# 角色定位
你是AI领域资深编辑，专精技术内容的通俗化表达与专业报告撰写。

# 核心任务
1. 基于内容策划的选题方案撰写完整报告
2. 头条要闻：300字深度解读，说明技术意义
3. 技术突破：500字详细分析，包含技术原理简述
4. 产品动态：200字简洁报道，突出产品亮点
5. 深度解读：800字专题分析，联系产业趋势

# 输出标准
1. 报告总字数2000-2500字
2. 语言风格：专业但不晦涩，适合技术从业者阅读
3. 结构清晰：小标题、重点加粗、适当使用列表
4. 包含：今日概览、详细内容、明日预告三部分

# 协作规则
1. 接收策划方案后4小时内完成初稿
2. 将报告发送给审核员Agent进行质量检查
3. 根据审核意见修改完善`
  },
  {
    name: '审核员 Agent',
    role: '质量把控专家',
    content: `# 角色定位
你是AI内容质量审核专家，专精技术准确性核查与内容质量把控。

# 核心任务
1. 审核编辑Agent提交的报告全文
2. 事实核查：技术细节、数据引用、来源准确性
3. 质量评估：逻辑连贯性、表达清晰度、专业度
4. 格式检查：结构完整性、排版规范性

# 审核维度
1. 准确性：技术概念是否正确，有无事实错误
2. 完整性：是否覆盖所有策划选题，有无遗漏
3. 可读性：语言是否流畅，技术术语是否解释清楚
4. 时效性：信息是否最新，有无过时内容

# 输出标准
1. 给出通过/不通过的明确结论
2. 不通过时逐条列出修改意见
3. 标注优秀内容和需要改进的部分
4. 输出格式：审核报告 + 修改建议清单

# 协作规则
1. 收到报告后1小时内完成审核
2. 审核通过则标记完成，通知Supervisor汇总
3. 不通过则退回编辑Agent修改，说明具体问题`
  },
  {
    name: 'Supervisor 主管',
    role: '团队协调与最终输出',
    content: `# 角色定位
你是AI资讯团队的Supervisor主管智能体，负责整体协调、任务分发、结果汇总。

# 核心职责
1. 每日08:00触发研究员Agent开始收集
2. 接收各环节交付物，转发给下一环节
3. 监控各Agent进度，处理阻塞和异常
4. 审核通过后汇总最终报告
5. 输出格式化的日报并分发给订阅者

# 工作流程
08:00 → 触发研究员收集
10:00 → 接收数据，转发给内容策划
12:00 → 接收策划方案，转发给编辑
16:00 → 接收报告初稿，转发给审核员
17:00 → 接收审核结果，输出最终报告

# 异常处理
1. 某Agent超时未响应，发送提醒
2. 审核不通过，协调修改资源
3. 各环节阻塞超过2轮，人工介入

# 输出标准
1. 最终报告包含：标题、日期、目录、正文、来源引用
2. 格式：Markdown + PDF双版本
3. 分发渠道：邮件/飞书/钉钉自动推送`
  }
]
</script>

<style scoped>
.clawteam-view {
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

.positioning-section {
  margin-bottom: 50px;
}

.positioning-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.positioning-card h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.positioning-card p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-primary);
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

/* 架构图 */
.architecture-section {
  margin-bottom: 60px;
}

.architecture-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 30px;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.03), rgba(0, 212, 170, 0.03));
  border-radius: 20px;
  border: 1px solid rgba(0, 102, 255, 0.1);
  margin-bottom: 30px;
}

.arch-layer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.layer-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 40px;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--border);
  text-align: center;
}

.layer-box.primary {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(139, 92, 246, 0.1));
  border-color: var(--primary);
  min-width: 300px;
}

.layer-icon {
  font-size: 36px;
}

.layer-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.layer-desc {
  font-size: 13px;
  color: var(--text-muted);
}

.arch-arrow {
  width: 2px;
  height: 30px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  margin: 8px 0;
}

.arch-arrow.down {
  position: relative;
}

.arch-arrow.down::after {
  content: '▼';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--primary);
  font-size: 12px;
}

/* Workers层 */
.workers-layer {
  padding: 20px 0;
}

.workers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 800px;
}

.worker-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--border);
  transition: all 0.3s;
}

.worker-box:hover {
  border-color: var(--secondary);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 212, 170, 0.15);
}

.worker-icon {
  font-size: 32px;
}

.worker-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

/* 存储层 */
.storage-layer {
  padding-top: 10px;
}

.storage-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 30px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.storage-icon {
  font-size: 28px;
}

.storage-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.storage-desc {
  font-size: 12px;
  color: var(--text-muted);
}

/* 架构特性 */
.arch-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.feature-item:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.1);
}

.feature-icon {
  font-size: 28px;
}

.feature-content h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.feature-content p {
  font-size: 13px;
  color: var(--text-secondary);
}

/* 步骤详情 */
.steps-section {
  margin-bottom: 60px;
}

.steps-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step-card {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-bottom: 1px solid var(--border);
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
}

.step-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}

.step-content {
  padding: 24px;
}

.step-notes {
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(0, 212, 170, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--secondary);
}

.step-notes p {
  font-size: 14px;
  color: var(--text-primary);
  margin: 0;
}

/* 模板部分 */
.template-section {
  margin-top: 60px;
}

.scenario-desc {
  text-align: center;
  margin-bottom: 24px;
}

.scenario-desc p {
  font-size: 16px;
  color: var(--text-secondary);
}

.template-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 12px 20px;
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

.template-content {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.template-header {
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 212, 170, 0.05));
  border-bottom: 1px solid var(--border);
}

.template-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.template-header p {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
}

.code-block {
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 24px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
  margin: 0;
}

@media (max-width: 968px) {
  .workers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .arch-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .workers-grid {
    grid-template-columns: 1fr;
  }
  
  .arch-features {
    grid-template-columns: 1fr;
  }
  
  .template-tabs {
    justify-content: center;
  }
}
</style>
