<template>
  <div class="dev-case-view">
    <h1 class="page-title">研发全场景落地案例合集</h1>
    
    <div class="cases-grid">
      <div class="case-card" v-for="(caseItem, index) in cases" :key="index">
        <div class="case-header">
          <span class="case-icon">{{ caseItem.icon }}</span>
          <h2>{{ caseItem.title }}</h2>
        </div>
        <div class="case-content">
          <div class="case-section">
            <h3>痛点</h3>
            <p>{{ caseItem.pain }}</p>
          </div>
          <div class="case-section">
            <h3>方案</h3>
            <p>{{ caseItem.solution }}</p>
          </div>
          <div class="case-section">
            <h3>效果</h3>
            <p class="effect">{{ caseItem.effect }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cases = [
  {
    icon: '💻',
    title: '场景1：代码全生命周期智能体',
    pain: '重复编码、代码不规范、漏洞难发现、重构成本高',
    solution: '基于OpenClaw搭建代码智能体，实现代码生成、重构、优化、注释补全、漏洞扫描、BUG修复一站式处理',
    effect: '编码效率提升60%以上，代码规范度与安全性大幅提升，代码评审工作量减少70%'
  },
  {
    icon: '🧪',
    title: '场景2：自动化测试全流程智能体团队',
    pain: '测试用例编写效率低、覆盖率不足、自动化脚本维护成本高、故障定位慢',
    solution: '基于ClawTeam搭建测试AI团队，自动生成测试计划、接口/UI/性能测试脚本，自动执行测试并生成报告，针对失败用例自动定位问题',
    effect: '测试用例覆盖率100%，测试准备周期从3天缩短至2小时，回归测试效率提升90%'
  },
  {
    icon: '🔧',
    title: '场景3：DevOps智能运维智能体',
    pain: '故障响应慢、根因定位难、运维流程繁琐、7×24小时值守压力大',
    solution: '基于OpenClaw搭建运维智能体，对接监控、日志、CICD平台，实现异常告警、日志分析、根因定位、修复方案输出、自动化执行修复全流程闭环',
    effect: '故障平均修复时间缩短80%，运维人力成本大幅降低，线上故障发生率显著下降'
  },
  {
    icon: '📚',
    title: '场景4：技术文档自动化生成智能体',
    pain: '文档编写工作量大、更新不及时、与代码不同步、格式不规范',
    solution: '基于OpenClaw搭建文档智能体，对接代码仓库，自动生成接口文档、架构设计文档、二次开发文档、README文件，随代码更新自动同步',
    effect: '文档编写工作量减少90%，文档与代码实时同步，团队协作效率大幅提升'
  }
]
</script>

<style scoped>
.dev-case-view {
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

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.case-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.case-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 102, 255, 0.12);
}

.case-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.case-icon {
  font-size: 40px;
}

.case-header h2 {
  font-size: 22px;
  font-weight: 600;
  color: var(--primary);
}

.case-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.case-section h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.case-section p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.case-section .effect {
  color: var(--secondary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
