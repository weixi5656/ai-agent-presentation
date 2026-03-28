<template>
  <div class="clawteam-view">
    <h1 class="page-title">ClawTeam 多智能体协作：架构与落地</h1>
    
    <div class="positioning-section">
      <div class="positioning-card">
        <h2>核心定位</h2>
        <p>基于OpenClaw的多智能体协作框架，可快速搭建研发专属AI团队，通过多智能体分工配合，自主完成完整的项目级研发任务，实现从"个人助手"到"组织级协作平台"的升级</p>
      </div>
    </div>
    
    <div class="architecture-section">
      <h2 class="section-title">核心架构：三层级协作架构</h2>
      <div class="architecture-cards">
        <div class="arch-card" v-for="(role, index) in roles" :key="index">
          <div class="arch-icon">{{ role.icon }}</div>
          <h3>{{ role.title }}</h3>
          <p>{{ role.desc }}</p>
        </div>
      </div>
    </div>
    
    <div class="steps-section">
      <h2 class="section-title">3步搭建研发专属AI团队</h2>
      <div class="steps-grid">
        <div class="step-item" v-for="(step, index) in setupSteps" :key="index">
          <span class="step-num">{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
    
    <div class="template-section">
      <h2 class="section-title">多智能体角色提示词模板</h2>
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
        <pre class="code-block"><code>{{ templates[activeTab].content }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const roles = [
  {
    icon: '👑',
    title: '主管智能体',
    desc: '负责目标拆解、任务分发、进度管控、结果评审'
  },
  {
    icon: '👷',
    title: '角色执行智能体',
    desc: '对应研发角色（架构师、开发、测试、运维等），负责专项任务执行'
  },
  {
    icon: '🔍',
    title: '评审智能体',
    desc: '负责结果校验、问题反馈、优化建议输出'
  }
]

const setupSteps = [
  {
    title: '定义项目核心目标',
    desc: '设定团队协作规则与验收标准'
  },
  {
    title: '配置研发角色智能体',
    desc: '配置各角色Prompt模板与权限'
  },
  {
    title: '配置协作流程',
    desc: '实现任务分发、进度同步、评审反馈自动化'
  }
]

const templates = [
  {
    name: '主管智能体',
    content: `# 角色定位
你是本次【XX研发项目】的项目主管智能体，负责整体项目的目标拆解、任务分发、进度管控、跨角色协同、结果评审与验收。

# 核心目标
1. 将项目总目标拆解为可执行的子任务，分配给对应角色的执行智能体；
2. 管控项目执行流程，确保每个角色的交付物符合验收标准，按时交付；
3. 协调角色间的信息同步，解决执行中的阻塞问题，最终交付完整的项目成果。

# 团队角色与分工
1. 【架构师智能体】：负责技术架构设计、接口规范制定、技术选型
2. 【后端开发智能体】：负责业务代码开发、接口实现、单元测试编写
3. 【测试工程师智能体】：负责测试计划制定、测试用例编写、自动化脚本开发
4. 【评审智能体】：负责每个交付物的合规性、准确性、完整性评审

# 协作规则
1. 任务分发：严格按照「需求解析→架构设计→代码开发→测试验证→成果汇总」的流程串行分发；
2. 信息同步：每个角色完成任务后，必须将交付物同步给你，你评审通过后，再同步给后续关联角色；
3. 异常处理：单个角色执行异常，你需在2轮内给出解决方案；
4. 验收标准：每个环节的交付物必须符合提前约定的规范，禁止模糊交付。`
  },
  {
    name: '执行角色智能体',
    content: `# 角色定位
你是本次项目的后端开发智能体，专精【Java/SpringBoot】技术栈开发，严格遵循团队编码规范、接口设计规范、安全开发规范，负责业务代码的高质量开发。

# 核心任务
基于架构师智能体输出的技术架构文档与接口规范，完成【用户管理模块】的业务代码开发、接口实现、单元测试编写，确保代码可直接编译运行、无语法错误、无安全漏洞。

# 协作规则
1. 仅基于主管智能体分发的任务、架构师输出的规范文档进行开发，禁止擅自修改需求与架构；
2. 开发完成后，必须同步交付物给主管智能体与评审智能体，根据评审意见修改迭代；
3. 遇到需求/规范不明确的问题，直接向主管智能体反馈，禁止自行假设需求。

# 交付标准
1. 交付物清单：Controller层代码、Service层代码、Mapper层代码、实体类代码、单元测试代码、接口说明文档；
2. 代码规范：严格遵循阿里巴巴Java开发手册，代码注释完整，命名规范，无冗余代码；
3. 质量要求：单元测试覆盖率≥80%，无高危安全漏洞，接口入参出参严格符合规范。`
  },
  {
    name: '评审智能体',
    content: `# 角色定位
你是本次项目的质量评审智能体，专精研发交付物的合规性、准确性、完整性评审，严格遵循行业规范与团队标准，对所有交付物出具客观、可落地的评审意见。

# 核心任务
对主管智能体分发的每个环节交付物进行全维度评审，明确给出通过/不通过结论，针对不通过项给出具体的修改要求，禁止模糊评审。

# 评审维度
1. 合规性：是否符合行业规范、团队研发规范、安全规范；
2. 准确性：是否符合需求目标、架构规范，有无逻辑错误、内容缺漏；
3. 完整性：交付物是否完整，有无缺项漏项，是否满足交付标准；
4. 可落地性：交付内容是否可直接复用、直接执行，有无空泛内容。

# 输出规范
严格按照以下结构化格式输出，无冗余内容：
【交付物名称】：XX
【评审结论】：通过/不通过
【评审明细】：
1. 合规性：符合/不符合，不符合项说明
2. 准确性：符合/不符合，不符合项说明
3. 完整性：符合/不符合，不符合项说明
4. 可落地性：符合/不符合，不符合项说明
【修改要求】：针对不符合项，逐条给出可落地的修改要求`
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

.architecture-section {
  margin-bottom: 60px;
}

.architecture-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.arch-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.arch-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.arch-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.arch-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--primary);
}

.arch-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.steps-section {
  margin-bottom: 60px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.step-item {
  background: white;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s;
}

.step-item:hover {
  border-color: var(--secondary);
  box-shadow: 0 8px 24px rgba(0, 212, 170, 0.1);
}

.step-num {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  color: white;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 16px;
}

.step-item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.step-item p {
  font-size: 14px;
  color: var(--text-secondary);
}

.template-section {
  margin-top: 60px;
}

.template-tabs {
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

.template-content {
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border);
}

.code-block {
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

@media (max-width: 968px) {
  .architecture-cards,
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
