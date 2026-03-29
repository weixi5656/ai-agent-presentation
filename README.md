# AI智能体案例分享会 - 交互式网页演示

> 🚀 一套具有未来感和科技感的交互式网页演示系统，用于展示AI智能体概念、OpenClaw原理及未来发展趋势。

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📑 项目简介

本项目是一个完整的、具有未来感和科技感的交互式网页分享演示，包含以下10个核心模块：

1. **封面** - 分享会介绍与主题展示
2. **分享议程** - 议程概览与学习收益说明
3. **认知与原理** - AI Agent 核心概念、执行闭环、五大能力模块
4. **研发场景** - 代码/测试/运维/文档/协作等典型落地案例
5. **OpenClaw 架构** - Channel、Gateway、Node、Session、Skills、Memory 协同关系
6. **OpenClaw 实操** - 3步跑通第一个研发智能体
7. **ClawTeam 协作** - 多智能体架构、分工模板与实操步骤
8. **提示词工程** - 8种提示词框架、省Token方法与智能体模板
9. **端侧实践** - ESP32 端侧智能体的完整实现代码与思路
10. **趋势展望** - AI 智能体技术前沿趋势与演进判断

### ✨ 核心特性

- 🎨 **科技感设计** - 浅色/白色背景，渐变光效，玻璃态卡片
- 🎯 **丰富交互** - 页面过渡动画、标签切换、自动播放演示
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 🖥️ **实时演示** - 模拟多智能体协作的完整工作流程
- 🌐 **跨平台** - 支持 Mac OS 和 Windows 系统

---

## 🛠️ 环境要求

### 必需软件

| 软件 | 版本要求 | 下载链接 |
|------|---------|---------|
| Node.js | ≥ 18.0 | https://nodejs.org/ |
| npm | ≥ 9.0 | 随 Node.js 安装 |
| Git | 任意版本 | https://git-scm.com/ |

### 验证安装

```bash
# 检查 Node.js 版本
node --version
# 应显示 v18.x.x 或更高版本

# 检查 npm 版本
npm --version
# 应显示 9.x.x 或更高版本

# 检查 Git 版本
git --version
```

---

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <项目仓库地址>
cd ai-agent-presentation
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 访问项目

浏览器自动打开，或手动访问：http://localhost:3000

---

## 💻 详细部署指南

### Mac OS 系统

#### 步骤 1：安装 Homebrew（如未安装）

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 步骤 2：安装 Node.js

**方式一：使用 Homebrew（推荐）**

```bash
brew install node
```

**方式二：使用官方安装包**

1. 访问 https://nodejs.org/
2. 下载 LTS 版本的 macOS Installer
3. 双击安装包，按提示完成安装

#### 步骤 3：验证安装

```bash
node --version  # 应显示 v18.x.x 或更高
npm --version   # 应显示 9.x.x 或更高
```

#### 步骤 4：项目部署

```bash
# 进入项目目录
cd ai-agent-presentation

# 安装项目依赖
npm install

# 启动开发服务器
npm run dev

# 或使用特定端口
npm run dev -- --port 8080
```

#### 常见问题（Mac OS）

**问题 1：权限错误（EACCES）**

```bash
# 解决方案：更改 npm 默认目录
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

**问题 2：端口被占用**

```bash
# 查找占用 3000 端口的进程
lsof -i :3000

# 终止进程（将 <PID> 替换为实际进程号）
kill -9 <PID>

# 或使用其他端口启动
npm run dev -- --port 8080
```

**问题 3：M1/M2 Mac 的 Rosetta 问题**

```bash
# 确保使用 ARM 架构的 Node.js
arch -arm64 brew install node

# 或在 Rosetta 模式下运行
arch -x86_64 npm install
```

---

### Windows 系统

#### 步骤 1：安装 Node.js

1. 访问 https://nodejs.org/
2. 下载 **Windows Installer (.msi)** 的 LTS 版本
3. 双击安装包，按提示完成安装
   - 确保勾选 "Add to PATH" 选项
   - 建议安装路径：`C:\Program Files\nodejs`

#### 步骤 2：验证安装

打开 **命令提示符 (CMD)** 或 **PowerShell**：

```cmd
node --version
npm --version
```

#### 步骤 3：安装 Git（如未安装）

1. 访问 https://git-scm.com/download/win
2. 下载 64-bit Git for Windows Setup
3. 按默认选项安装即可

#### 步骤 4：项目部署

**使用 CMD：**

```cmd
cd ai-agent-presentation
npm install
npm run dev
```

**使用 PowerShell：**

```powershell
cd ai-agent-presentation
npm install
npm run dev
```

#### 常见问题（Windows）

**问题 1：'npm' 不是内部或外部命令**

```cmd
# 解决方案：手动添加环境变量
# 1. 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
# 2. 在 Path 中添加 Node.js 安装路径：
#    C:\Program Files\nodejs\
# 3. 重启命令提示符
```

**问题 2：PowerShell 执行策略限制**

```powershell
# 以管理员身份运行 PowerShell，执行：
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# 输入 Y 确认
```

**问题 3：端口被占用**

```cmd
# 查找占用 3000 端口的进程
netstat -ano | findstr :3000

# 终止进程（将 <PID> 替换为实际进程号）
taskkill /PID <PID> /F

# 或使用其他端口
npm run dev -- --port 8080
```

**问题 4：路径过长错误**

```powershell
# 启用长路径支持（需要管理员权限）
# 或使用以下命令安装依赖
npm install --legacy-peer-deps
```

---

## 📦 生产部署

### 构建生产版本

```bash
# 生成优化后的生产文件
npm run build

# 构建输出位于 dist/ 目录
```

### 预览生产版本

```bash
# 本地预览生产构建
npm run preview
```

### 静态部署

构建完成后，`dist/` 目录中的文件可以部署到任何静态服务器：

- **Nginx** - 将 `dist/` 目录配置为网站根目录
- **Apache** - 同上
- **GitHub Pages** - 推送 `dist/` 内容到 gh-pages 分支
- **Vercel/Netlify** - 直接拖拽 `dist/` 目录上传

---

## 🔧 项目结构

```
ai-agent-presentation/
├── public/                 # 静态资源（SVG箭头等）
├── src/
│   ├── views/              # 页面视图（共10个）
│   │   ├── IntroView.vue             # 封面页
│   │   ├── AgendaView.vue            # 分享议程
│   │   ├── ConceptView.vue           # 认知与原理（AI Agent核心概念）
│   │   ├── DevCaseView.vue           # 研发场景落地案例
│   │   ├── OpenClawArchitectureView.vue  # OpenClaw 架构流程
│   │   ├── OpenClawPracticeView.vue  # OpenClaw 快速上手实操
│   │   ├── ClawTeamView.vue          # ClawTeam 多智能体协作
│   │   ├── PracticeView.vue          # 提示词工程实战
│   │   ├── ESP32CaseView.vue         # ESP32 端侧智能体实践
│   │   └── TrendView.vue             # AI智能体前沿趋势展望
│   ├── App.vue             # 根组件（导航、进度、翻页）
│   ├── main.js             # 入口文件（路由配置）
│   └── style.css           # 全局样式（CSS变量、Aurora背景）
├── index.html              # HTML模板
├── package.json            # 项目配置
├── vite.config.js          # Vite配置
└── README.md               # 项目说明
```

---

## 📝 可用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装项目依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |

---

## 🌐 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🤝 协作开发

### 代码规范

- 使用 Vue 3 Composition API
- 组件名使用 PascalCase
- 样式使用 CSS 变量（在 style.css 中定义）

### 提交规范

```bash
# 功能开发
git commit -m "feat: 添加新功能"

# 问题修复
git commit -m "fix: 修复某问题"

# 文档更新
git commit -m "docs: 更新文档"

# 样式调整
git commit -m "style: 调整样式"
```

---

## 📞 技术支持

如遇到部署问题，请检查：

1. Node.js 版本是否符合要求（≥ 18）
2. 端口 3000 是否被其他程序占用
3. 防火墙是否阻止了本地服务器访问
4. 依赖是否完整安装（可删除 `node_modules` 重新 `npm install`）

---

## 📄 许可证

MIT License

---

---

## 🤖 ESP32 机器人开发模块

### 硬件要求

如需实际演示 ESP32 机器人开发内容，需准备以下硬件：

| 组件 | 型号/规格 | 数量 | 参考价格 |
|------|----------|------|---------|
| 主控板 | ESP32-S3-DevKitC-1 | 1 | ¥35 |
| 电机驱动 | L298N 双路电机驱动 | 1 | ¥12 |
| 直流电机 | TT 马达 + 车轮 | 2-4 | ¥20 |
| 电池组 | 18650 锂电池 3.7V | 2 | ¥25 |
| 传感器 | HC-SR04 超声波 | 2-3 | ¥15 |
| 传感器 | DHT22 温湿度 | 1 | ¥12 |
| 底盘 | 亚克力/金属小车底盘 | 1 | ¥20 |

**总预算约：¥150-200**

### 软件框架

- **Arduino-ESP32** - 快速原型开发
- **ESP-IDF** - 官方开发框架，生产环境
- **MicroPython** - Python 脚本开发
- **PlatformIO** - 专业级 IDE 集成

### 通信协议

- **MQTT** - 物联网消息传输
- **WebSocket** - 实时双向通信
- **HTTP REST** - 标准 API 接口
- **Bluetooth LE** - 低功耗蓝牙控制

---

**🎉 祝您分享会圆满成功！**
