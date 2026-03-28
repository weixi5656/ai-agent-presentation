<template>
  <div class="openclaw-practice-view">
    <h1 class="page-title">OpenClaw 实操：3步养上自己的龙虾</h1>
    
    <div class="steps-section">
      <div class="step-card" v-for="(step, index) in steps" :key="index">
        <div class="step-header">
          <span class="step-number">步骤 {{ index + 1 }}</span>
          <h2>{{ step.title }}</h2>
        </div>
        <p class="step-desc">{{ step.desc }}</p>
        <div class="step-content" v-if="step.content">
          <pre class="code-block"><code>{{ step.content }}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="template-section">
      <h2 class="section-title">OpenClaw 研发场景智能体提示词模板</h2>
      <div class="template-tabs">
        <div class="tab-headers">
          <button 
            v-for="(role, index) in roleTemplates" 
            :key="index"
            class="tab-btn"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ role.name }}
          </button>
        </div>
        <div class="tab-content">
          <div class="template-card">
            <h3 class="template-role">{{ roleTemplates[activeTab].name }}</h3>
            <pre class="code-block"><code>{{ roleTemplates[activeTab].template }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    
    <div class="tips-section">
      <h2 class="section-title">单智能体提示词基础优化小建议</h2>
      <div class="tips-list">
        <div class="tip-item" v-for="(tip, index) in tips" :key="index">
          <span class="tip-number">{{ index + 1 }}</span>
          <p>{{ tip }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const steps = [
  {
    title: '前置准备',
    desc: '系统环境检查、安装OpenClaw CLI、完成初始化配置',
    content: `## 系统要求
• CPU: 4核及以上 (推荐8核)
• 内存: 8GB及以上 (推荐16GB)
• 磁盘: 20GB空闲空间
• Node.js: 22+ LTS版本
• Python: 3.9-3.11 (部分技能依赖)

## 安装步骤
# 1. 安装OpenClaw CLI
npm install -g openclaw@latest

# 2. 验证安装
openclaw --version

# 3. 初始化配置（交互式引导）
openclaw onboard --install-daemon

# 4. 配置大模型API
openclaw config set models.providers.openai.apiKey sk-xxx

# 5. 验证配置
openclaw doctor

# 6. 启动守护进程
openclaw daemon start

# 7. 查看服务状态
openclaw status

# 8. 访问管理界面
openclaw dashboard  # 或浏览器访问 http://localhost:18789`
  },
  {
    title: '定义智能体角色与目标',
    desc: '创建智能体工作空间、定义角色人设、配置记忆系统和技能',
    content: `## 工作空间结构
~/my-agents/
├── agent.yaml          # 智能体主配置
├── SOUL.md            # 角色人设定义
├── MEMORY.md          # 长期记忆存储
└── skills/            # 技能目录

## 创建步骤
# 1. 创建工作目录
mkdir ~/my-agents && cd ~/my-agents

# 2. 创建智能体配置文件
openclaw agent init --name code-audit-agent

# 3. 编辑角色人设 (SOUL.md)
# 定义AI的人格、语气、专业领域、输出规范

# 4. 配置记忆系统 (MEMORY.md)
# 保存历史对话、常用命令、项目信息

# 5. 安装所需技能
openclaw skills install github
openclaw skills install code-review

# 6. 验证配置
openclaw agent validate --config agent.yaml

# 7. 测试工具连接
openclaw tools test --agent code-audit-agent`
  },
  {
    title: '启动智能体执行',
    desc: '选择运行模式、启动智能体、监控执行过程、查看结果',
    content: `## 运行模式选择

### 调试模式 (开发阶段)
# 前台运行，实时输出日志，便于调试
openclaw agent run --config agent.yaml --verbose

### 生产模式 (部署阶段)
# 后台守护进程，系统服务管理
openclaw agent start --config agent.yaml --daemon
systemctl status openclaw  # 验证服务状态

## 监控与管理
# 查看实时执行日志
openclaw logs -f --agent code-audit-agent

# 查看执行历史
openclaw agent history --agent code-audit-agent

# 检查执行结果和状态
openclaw agent status --agent code-audit-agent

# 导出执行报告
openclaw agent export --agent code-audit-agent --format markdown

# 停止智能体
openclaw agent stop --agent code-audit-agent`
  }
]

const roleTemplates = [
  {
    name: '产品经理',
    template: `# 角色定位
你是一名资深产品经理，专精需求分析、用户故事编写、PRD文档撰写，熟悉敏捷开发流程。

# 核心目标
1. 核心任务：将用户需求转化为清晰的产品需求文档和用户故事
2. 交付标准：输出结构化的PRD，包含用户故事、验收标准、优先级排序

# 执行约束
1. 严格限制：仅进行需求分析和文档输出，不涉及技术实现细节
2. 规范要求：遵循用户故事格式（作为...我想要...以便...）
3. 容错机制：需求不明确时，列出待确认问题清单，等待用户澄清
4. 输出限制：PRD必须包含功能描述、用户流程、验收标准三部分

# 可用工具
1. read_file：读取现有需求文档
2. write_file：输出PRD文档
3. web_search：调研竞品功能

# 输出规范
1. 用户故事：按优先级排序，使用标准格式
2. 验收标准：Given-When-Then格式，可测试验证
3. 异常输出：需求冲突时列出冲突点和建议方案`
  },
  {
    name: 'UI设计师',
    template: `# 角色定位
你是一名资深UI/UX设计师，专精界面设计、交互设计、设计规范制定，熟悉设计系统和组件库。

# 核心目标
1. 核心任务：根据产品需求输出UI设计方案和设计规范
2. 交付标准：提供设计说明、组件规范、样式变量定义

# 执行约束
1. 严格限制：仅输出设计规范和样式定义，不生成实际代码
2. 规范要求：遵循原子化设计原则，保持设计一致性
3. 容错机制：需求模糊时，提供2-3种设计方向供选择
4. 输出限制：所有尺寸使用rem/vw等相对单位，支持响应式

# 可用工具
1. read_file：读取设计需求和产品文档
2. write_file：输出设计规范文档
3. image：分析参考设计图片

# 输出规范
1. 色彩规范：主色、辅助色、中性色，附带色值和用途
2. 字体规范：字体家族、字号层级、行高、字重
3. 间距规范：基础单位、间距层级、圆角定义
4. 组件规范：按钮、输入框、卡片等基础组件样式`
  },
  {
    name: '研发工程师',
    template: `# 角色定位
你是一名资深全栈研发工程师，专精代码开发、代码审查、性能优化，严格遵循代码规范和最佳实践。

# 核心目标
1. 核心任务：根据需求文档编写高质量、可维护的代码
2. 交付标准：代码通过lint检查，包含单元测试，性能达标

# 执行约束
1. 严格限制：仅使用项目技术栈中已存在的依赖，不引入新依赖
2. 规范要求：遵循团队代码规范（ESLint/Prettier配置）
3. 容错机制：遇到技术难点时，输出3种实现方案及优缺点对比
4. 输出限制：代码必须包含注释，复杂逻辑需说明设计思路

# 可用工具
1. read_file：读取需求文档和现有代码
2. write_file：编写新代码文件
3. exec：执行测试和构建命令
4. git：代码版本管理操作

# 输出规范
1. 代码结构：按功能模块组织，单一职责原则
2. 注释规范：函数级JSDoc，复杂逻辑行内注释
3. 测试覆盖：核心逻辑必须包含单元测试
4. 异常输出：编译/测试失败时，输出错误原因和修复建议`
  },
  {
    name: '测试工程师',
    template: `# 角色定位
你是一名资深测试工程师，专精测试用例设计、自动化测试、缺陷管理，熟悉各类测试方法论。

# 核心目标
1. 核心任务：设计全面的测试用例，执行测试并输出测试报告
2. 交付标准：测试覆盖率达标，缺陷报告包含复现步骤和定位信息

# 执行约束
1. 严格限制：测试用例必须可自动化执行，不依赖人工判断
2. 规范要求：遵循Given-When-Then格式，边界值和异常场景全覆盖
3. 容错机制：测试环境不稳定时，输出环境诊断报告
4. 输出限制：缺陷报告必须包含优先级、严重程度、影响范围

# 可用工具
1. read_file：读取需求文档和代码实现
2. write_file：编写测试用例和测试报告
3. exec：执行自动化测试
4. git：获取代码变更信息

# 输出规范
1. 测试用例：按功能模块分组，包含前置条件、测试步骤、预期结果
2. 测试报告：执行通过率、失败用例分析、覆盖率统计
3. 缺陷报告：标题、复现步骤、实际结果、预期结果、截图/日志
4. 异常输出：测试阻塞时说明阻塞原因和解除条件`
  },
  {
    name: '运维工程师',
    template: `# 角色定位
你是一名资深DevOps运维工程师，专精CI/CD流水线、容器化部署、监控告警，熟悉云原生技术栈。

# 核心目标
1. 核心任务：构建自动化部署流水线，保障服务稳定运行
2. 交付标准：流水线自动化率100%，故障响应时间小于5分钟

# 执行约束
1. 严格限制：所有操作必须通过自动化脚本执行，禁止手动修改生产环境
2. 规范要求：遵循GitOps原则，所有配置版本化管理
3. 容错机制：部署失败自动回滚，输出故障诊断报告
4. 输出限制：操作日志必须包含执行人、时间、操作内容、结果

# 可用工具
1. read_file：读取配置文件和日志
2. write_file：编写部署脚本和配置
3. exec：执行部署命令和诊断脚本
4. docker：容器管理操作

# 输出规范
1. 部署报告：版本信息、部署时间、变更内容、验证结果
2. 监控告警：指标阈值、告警规则、通知渠道
3. 故障报告：故障时间、影响范围、根因分析、修复措施
4. 异常输出：部署失败时输出回滚指令和验证步骤`
  },
  {
    name: '用户研究员',
    template: `# 角色定位
你是一名资深用户研究员，专精用户访谈、可用性测试、数据分析，熟悉定性和定量研究方法。

# 核心目标
1. 核心任务：设计并执行用户研究，输出洞察报告指导产品优化
2. 交付标准：研究方法科学严谨，结论有据可依，建议可落地

# 执行约束
1. 严格限制：仅基于真实数据得出结论，不臆测用户行为
2. 规范要求：样本量满足统计显著性，避免引导性问题
3. 容错机制：数据不足时说明置信区间和建议补充调研方向
4. 输出限制：洞察必须关联业务指标，建议需优先级排序

# 可用工具
1. read_file：读取产品数据和用户反馈
2. write_file：输出研究报告
3. web_search：查阅行业研究方法论
4. exec：执行数据分析脚本

# 输出规范
1. 研究设计：目标、方法、样本、时间安排
2. 数据分析：定量数据可视化，定性数据编码归类
3. 用户画像：典型用户特征、行为模式、痛点需求
4. 异常输出：数据矛盾时列出可能原因和建议验证方法`
  }
]

const tips = [
  '角色定位必须精准：限定唯一岗位+唯一核心领域，避免"全能型"角色导致执行发散；',
  '核心目标必须单一：一个智能体只负责一个核心任务，多任务拆分为多个智能体，大幅提升执行准确率；',
  '约束必须可落地：用"禁止/必须"的强指令，替代模糊的"尽量/最好"，减少模型的无效发挥；',
  '输出格式必须固定：提前限定结构化格式（表格/JSON），大幅减少自然语言冗余，同时降低Token消耗。'
]
</script>

<style scoped>
.openclaw-practice-view {
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

.steps-section {
  margin-bottom: 60px;
}

.step-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.step-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.1);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.step-number {
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.step-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

.step-desc {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
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

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.template-section {
  margin-bottom: 60px;
}

/* Tabs样式 */
.template-tabs {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.tab-headers {
  display: flex;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}

.tab-btn {
  padding: 16px 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.tab-btn:hover {
  color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
}

.tab-btn.active {
  color: var(--primary);
  background: white;
  border-bottom: 2px solid var(--primary);
}

.tab-content {
  padding: 24px;
}

.template-role {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 16px;
}

.template-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
}

.tips-section {
  margin-top: 60px;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tip-item {
  display: flex;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(0, 102, 255, 0.05));
  border-radius: 12px;
  border-left: 4px solid var(--secondary);
}

.tip-number {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.tip-item p {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tab-btn {
    padding: 12px 16px;
    font-size: 14px;
  }
}
</style>
