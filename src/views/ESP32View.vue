<template>
  <div class="esp32-view">
    <h1 class="page-title">ESP32 机器人开发实践</h1>
    
    <div class="hero-section">
      <div class="hero-card glass-card">
        <div class="hero-visual">
          <div class="robot-animation">
            <div class="robot-body"></div>
            <div class="robot-head"></div>
            <div class="robot-arm left"></div>
            <div class="robot-arm right"></div>
            <div class="robot-wheel left"></div>
            <div class="robot-wheel right"></div>
          </div>
        </div>
        <div class="hero-content">
          <h2>AI + IoT 的完美结合</h2>
          <p>ESP32 作为边缘计算节点，结合 AI 智能体实现本地化机器人控制</p>
          <div class="hero-tags">
            <span class="tag">边缘计算</span>
            <span class="tag">实时控制</span>
            <span class="tag">低功耗</span>
            <span class="tag">WiFi/蓝牙</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">🔧</span>
        硬件架构
      </h2>
      <div class="hardware-grid">
        <div class="hardware-card" v-for="(item, index) in hardware" :key="index">
          <div class="hardware-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <div class="hardware-specs">
            <div class="spec" v-for="spec in item.specs" :key="spec.label">
              <span class="spec-label">{{ spec.label }}</span>
              <span class="spec-value">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">💻</span>
        固件开发框架
      </h2>
      <div class="framework-tabs">
        <button 
          v-for="(fw, index) in frameworks" 
          :key="index"
          class="framework-tab"
          :class="{ active: activeFramework === index }"
          @click="activeFramework = index"
        >
          {{ fw.name }}
        </button>
      </div>
      <div class="framework-content glass-card">
        <div class="framework-info">
          <h3>{{ frameworks[activeFramework].name }}</h3>
          <p>{{ frameworks[activeFramework].desc }}</p>
          <div class="framework-features">
            <h4>核心特性</h4>
            <ul>
              <li v-for="feature in frameworks[activeFramework].features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
        <div class="code-example">
          <div class="code-header">
            <span>示例代码</span>
          </div>
          <pre><code>{{ frameworks[activeFramework].code }}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">📡</span>
        通信架构
      </h2>
      <div class="comm-architecture">
        <div class="arch-flow">
          <div class="arch-node" v-for="(node, index) in commNodes" :key="index">
            <div class="node-icon">{{ node.icon }}</div>
            <div class="node-name">{{ node.name }}</div>
            <div class="node-desc">{{ node.desc }}</div>
          </div>
        </div>
        <div class="protocol-stack">
          <h3>协议栈</h3>
          <div class="stack-layers">
            <div class="stack-layer" v-for="(layer, index) in protocolStack" :key="index">
              <span class="layer-name">{{ layer.name }}</span>
              <span class="layer-protocol">{{ layer.protocol }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">🤖</span>
        实战案例：智能巡检机器人
      </h2>
      <div class="case-study">
        <div class="case-overview glass-card">
          <h3>项目概述</h3>
          <p>基于 ESP32-S3 的仓库巡检机器人，集成温湿度传感器、摄像头、红外避障，通过 OpenClaw 智能体实现自主巡检任务调度。</p>
          <div class="case-stats">
            <div class="case-stat">
              <div class="stat-num">24/7</div>
              <div class="stat-label">全天候运行</div>
            </div>
            <div class="case-stat">
              <div class="stat-num">&lt;100ms</div>
              <div class="stat-label">响应延迟</div>
            </div>
            <div class="case-stat">
              <div class="stat-num">6h</div>
              <div class="stat-label">续航时间</div>
            </div>
          </div>
        </div>
        
        <div class="case-details">
          <div class="detail-card">
            <h4>🎯 功能特性</h4>
            <ul>
              <li>自主路径规划与避障</li>
              <li>环境数据实时采集</li>
              <li>异常情况自动上报</li>
              <li>低电量自动回充</li>
              <li>远程控制与监控</li>
            </ul>
          </div>
          <div class="detail-card">
            <h4>🔌 硬件清单</h4>
            <ul>
              <li>ESP32-S3-WROOM-1</li>
              <li>DHT22 温湿度传感器</li>
              <li>OV2640 摄像头模块</li>
              <li>HC-SR04 超声波传感器 × 3</li>
              <li>L298N 电机驱动板</li>
              <li>18650 锂电池组</li>
            </ul>
          </div>
          <div class="detail-card">
            <h4>⚙️ 软件架构</h4>
            <ul>
              <li>FreeRTOS 任务调度</li>
              <li>MQTT 通信协议</li>
              <li>Edge Impulse 模型推理</li>
              <li>OTA 远程升级</li>
              <li>OpenClaw 智能体集成</li>
            </ul>
          </div>
        </div>
        
        <div class="system-architecture">
          <h3>系统架构图</h3>
          <div class="arch-diagram">
            <div class="arch-layer edge">
              <h4>边缘层 (ESP32)</h4>
              <div class="layer-components">
                <span class="component">传感器采集</span>
                <span class="component">电机控制</span>
                <span class="component">本地推理</span>
                <span class="component">MQTT客户端</span>
              </div>
            </div>
            <div class="arch-arrow">↑ MQTT ↑</div>
            <div class="arch-layer gateway">
              <h4>网关层</h4>
              <div class="layer-components">
                <span class="component">MQTT Broker</span>
                <span class="component">数据缓存</span>
                <span class="component">协议转换</span>
              </div>
            </div>
            <div class="arch-arrow">↑ HTTP/WebSocket ↑</div>
            <div class="arch-layer cloud">
              <h4>智能体层 (OpenClaw)</h4>
              <div class="layer-components">
                <span class="component">任务调度</span>
                <span class="component">路径规划</span>
                <span class="component">异常分析</span>
                <span class="component">数据存储</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">🎮</span>
        交互演示
      </h2>
      <div class="demo-console glass-card">
        <div class="console-tabs">
          <button 
            v-for="(tab, index) in demoTabs" 
            :key="index"
            class="console-tab"
            :class="{ active: activeDemoTab === index }"
            @click="activeDemoTab = index"
          >
            {{ tab.name }}
          </button>
        </div>
        <div class="console-content">
          <!-- 控制面板 -->
          <div v-if="activeDemoTab === 0" class="control-panel">
            <div class="control-grid">
              <button 
                v-for="cmd in robotCommands" 
                :key="cmd.name"
                class="control-btn"
                :class="cmd.type"
                @click="executeCommand(cmd)"
              >
                <span class="cmd-icon">{{ cmd.icon }}</span>
                <span>{{ cmd.name }}</span>
              </button>
            </div>
            <div class="status-display">
              <div class="status-item" v-for="status in robotStatus" :key="status.label">
                <span class="status-label">{{ status.label }}</span>
                <span class="status-value" :class="status.state">{{ status.value }}</span>
              </div>
            </div>
          </div>
          
          <!-- 传感器数据 -->
          <div v-if="activeDemoTab === 1" class="sensor-data">
            <div class="sensor-grid">
              <div class="sensor-card" v-for="sensor in sensors" :key="sensor.name">
                <div class="sensor-icon">{{ sensor.icon }}</div>
                <div class="sensor-info">
                  <div class="sensor-name">{{ sensor.name }}</div>
                  <div class="sensor-value">{{ sensor.value }}</div>
                  <div class="sensor-unit">{{ sensor.unit }}</div>
                </div>
                <div class="sensor-chart">
                  <div class="chart-bar" :style="{ height: sensor.chartHeight + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 日志输出 -->
          <div v-if="activeDemoTab === 2" class="log-output">
            <div class="log-line" v-for="(log, index) in logs" :key="index" :class="log.level">
              <span class="log-time">{{ log.time }}</span>
              <span class="log-level">[{{ log.level }}]</span>
              <span class="log-message">{{ log.message }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">
        <span class="section-icon">📚</span>
        开发资源
      </h2>
      <div class="resources-grid">
        <a 
          v-for="(resource, index) in resources" 
          :key="index"
          :href="resource.url"
          target="_blank"
          class="resource-card"
        >
          <div class="resource-icon">{{ resource.icon }}</div>
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.desc }}</p>
          <span class="resource-link">访问 →</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeFramework = ref(0)
const activeDemoTab = ref(0)

const hardware = [
  {
    icon: '🧠',
    title: 'ESP32-S3',
    desc: '双核 Xtensa LX7 处理器，支持 AI 加速',
    specs: [
      { label: 'CPU', value: '240MHz 双核' },
      { label: '内存', value: '512KB SRAM' },
      { label: 'Flash', value: '8MB QSPI' },
      { label: 'AI', value: '向量指令集' },
    ]
  },
  {
    icon: '📷',
    title: '视觉模块',
    desc: 'OV2640/OV3660 摄像头，支持图像识别',
    specs: [
      { label: '分辨率', value: 'UXGA (1600x1200)' },
      { label: '接口', value: 'DVP 8-bit' },
      { label: '帧率', value: '30fps @ VGA' },
      { label: '特性', value: '自动曝光/白平衡' },
    ]
  },
  {
    icon: '📡',
    title: '通信模块',
    desc: 'WiFi + 蓝牙双模，支持多种协议',
    specs: [
      { label: 'WiFi', value: '802.11 b/g/n' },
      { label: '蓝牙', value: 'BLE 5.0 + 经典' },
      { label: '协议', value: 'MQTT/HTTP/WebSocket' },
      { label: '范围', value: '100m+ (视距)' },
    ]
  },
  {
    icon: '🔋',
    title: '电源管理',
    desc: '低功耗设计，支持多种供电方式',
    specs: [
      { label: '输入', value: '5V USB / 3.7V 锂电' },
      { label: '功耗', value: '深度睡眠 5μA' },
      { label: '充电', value: 'TP4056 管理' },
      { label: '保护', value: '过充/过放/短路' },
    ]
  },
]

const frameworks = [
  {
    name: 'Arduino',
    desc: '最广泛使用的 ESP32 开发框架，适合快速原型开发',
    features: [
      '丰富的库生态',
      '简单的 API 设计',
      '大量社区教程',
      '跨平台支持',
    ],
    code: `#include <WiFi.h>
#include <MQTT.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASS";

WiFiClient net;
MQTTClient client;

void setup() {
  WiFi.begin(ssid, password);
  client.begin("broker.hivemq.com", net);
}

void loop() {
  client.loop();
  if (!client.connected()) {
    reconnect();
  }
  // 发布传感器数据
  client.publish("robot/sensor", "{\"temp\":25.5}");
  delay(1000);
}`
  },
  {
    name: 'ESP-IDF',
    desc: '官方开发框架，完整硬件功能访问，适合生产环境',
    features: [
      '完整的硬件控制',
      'FreeRTOS 集成',
      '官方技术支持',
      '性能优化',
    ],
    code: `#include "freertos/FreeRTOS.h"
#include "esp_wifi.h"
#include "mqtt_client.h"

static void mqtt_event_handler(void *handler_args, 
    esp_event_base_t base, int32_t event_id, void *event_data) {
    // MQTT 事件处理
}

void app_main(void) {
    esp_wifi_init(&cfg);
    esp_mqtt_client_config_t mqtt_cfg = {
        .broker.address.uri = "mqtt://broker.hivemq.com",
    };
    esp_mqtt_client_handle_t client = 
        esp_mqtt_client_init(&mqtt_cfg);
    esp_mqtt_client_start(client);
}`
  },
  {
    name: 'MicroPython',
    desc: 'Python 解释器，适合快速验证和教育场景',
    features: [
      'Python 语法',
      '交互式开发',
      '快速原型',
      '易于学习',
    ],
    code: `import network
from umqtt.simple import MQTTClient

# 连接 WiFi
wlan = network.WLAN(network.STA_IF)
wlan.connect('YOUR_SSID', 'YOUR_PASS')

# MQTT 客户端
client = MQTTClient('esp32', 'broker.hivemq.com')
client.connect()

# 发布消息
client.publish(b'robot/sensor', b'{"temp":25.5}')`
  },
  {
    name: 'PlatformIO',
    desc: '专业级 IoT 开发平台，支持 VSCode 集成',
    features: [
      'IDE 集成',
      '智能代码补全',
      '统一构建系统',
      '库管理器',
    ],
    code: `; platformio.ini
[env:esp32-s3]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
lib_deps = 
    knolleary/PubSubClient@^2.8
    bblanchon/ArduinoJson@^6.21
monitor_speed = 115200`
  },
]

const commNodes = [
  { icon: '🤖', name: 'ESP32 机器人', desc: '边缘计算节点' },
  { icon: '📡', name: 'WiFi/BLE', desc: '无线通信' },
  { icon: '🌐', name: 'MQTT Broker', desc: '消息中继' },
  { icon: '☁️', name: 'OpenClaw', desc: '智能体调度' },
  { icon: '📱', name: '用户界面', desc: '监控控制' },
]

const protocolStack = [
  { name: '应用层', protocol: 'MQTT / HTTP / WebSocket' },
  { name: '传输层', protocol: 'TCP / UDP' },
  { name: '网络层', protocol: 'IP / IPv6' },
  { name: '链路层', protocol: 'WiFi (802.11) / BLE' },
  { name: '物理层', protocol: '2.4GHz RF' },
]

const demoTabs = [
  { name: '控制面板' },
  { name: '传感器' },
  { name: '日志' },
]

const robotCommands = [
  { name: '前进', icon: '↑', type: 'primary' },
  { name: '后退', icon: '↓', type: 'primary' },
  { name: '左转', icon: '↺', type: 'secondary' },
  { name: '右转', icon: '↻', type: 'secondary' },
  { name: '停止', icon: '■', type: 'danger' },
  { name: '巡检', icon: '🔍', type: 'special' },
  { name: '回充', icon: '🔌', type: 'special' },
  { name: '拍照', icon: '📷', type: 'special' },
]

const robotStatus = [
  { label: '连接状态', value: '已连接', state: 'online' },
  { label: '电池电量', value: '78%', state: 'normal' },
  { label: '当前任务', value: '待机中', state: 'idle' },
  { label: '信号强度', value: '-45dBm', state: 'good' },
]

const sensors = [
  { name: '温度', icon: '🌡️', value: 24.5, unit: '°C', chartHeight: 65 },
  { name: '湿度', icon: '💧', value: 58, unit: '%', chartHeight: 58 },
  { name: '距离', icon: '📏', value: 45, unit: 'cm', chartHeight: 45 },
  { name: '光照', icon: '☀️', value: 320, unit: 'lux', chartHeight: 32 },
]

const logs = ref([
  { time: '10:23:45', level: 'INFO', message: '系统启动完成' },
  { time: '10:23:46', level: 'INFO', message: 'WiFi 已连接: Office-5G' },
  { time: '10:23:47', level: 'INFO', message: 'MQTT 连接到 broker.hivemq.com' },
  { time: '10:24:00', level: 'WARN', message: '左前方检测到障碍物，距离 30cm' },
  { time: '10:24:01', level: 'INFO', message: '执行避障动作：右转 30度' },
  { time: '10:24:15', level: 'INFO', message: '开始执行巡检任务' },
])

const resources = [
  { icon: '📖', title: 'ESP-IDF 文档', desc: '官方开发框架完整文档', url: 'https://docs.espressif.com/projects/esp-idf/' },
  { icon: '🔧', title: 'Arduino-ESP32', desc: 'Arduino 核心库文档', url: 'https://docs.espressif.com/projects/arduino-esp32/' },
  { icon: '🎓', title: 'ESP32 教程', desc: '从入门到精通的教程集合', url: 'https://randomnerdtutorials.com/esp32/' },
  { icon: '📚', title: 'Edge Impulse', desc: '边缘 AI 模型训练平台', url: 'https://edgeimpulse.com/' },
]

let logInterval = null

onMounted(() => {
  // 模拟实时日志更新
  logInterval = setInterval(() => {
    const messages = [
      '传感器数据采集完成',
      'MQTT 消息发布成功',
      '电机速度调整: 50%',
      '电池电压正常: 3.8V',
      'WiFi 信号强度: -42dBm',
      '任务执行进度: 45%',
    ]
    const levels = ['INFO', 'INFO', 'INFO', 'DEBUG', 'DEBUG', 'INFO']
    const now = new Date()
    const time = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`
    const idx = Math.floor(Math.random() * messages.length)
    
    logs.value.push({
      time,
      level: levels[idx],
      message: messages[idx]
    })
    
    if (logs.value.length > 20) {
      logs.value.shift()
    }
  }, 2000)
})

onUnmounted(() => {
  clearInterval(logInterval)
})

const executeCommand = (cmd) => {
  const now = new Date()
  const time = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`
  logs.value.push({
    time,
    level: 'INFO',
    message: `执行命令: ${cmd.name}`
  })
}
</script>

<style scoped>
.esp32-view {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-section {
  margin-bottom: 60px;
}

.hero-card {
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 48px;
}

.hero-visual {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.robot-animation {
  width: 120px;
  height: 160px;
  position: relative;
}

.robot-body {
  position: absolute;
  width: 80px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: 12px;
  left: 20px;
  top: 50px;
  animation: robotFloat 3s ease infinite;
}

.robot-head {
  position: absolute;
  width: 50px;
  height: 40px;
  background: linear-gradient(135deg, var(--secondary), var(--secondary));
  border-radius: 10px;
  left: 35px;
  top: 10px;
  animation: robotFloat 3s ease infinite 0.2s;
}

.robot-head::before,
.robot-head::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  top: 12px;
}

.robot-head::before { left: 10px; }
.robot-head::after { right: 10px; }

.robot-arm {
  position: absolute;
  width: 20px;
  height: 40px;
  background: var(--text-muted);
  border-radius: 10px;
  top: 60px;
  animation: robotWave 2s ease infinite;
}

.robot-arm.left { left: 0; }
.robot-arm.right { right: 0; animation-delay: 0.5s; }

.robot-wheel {
  position: absolute;
  width: 30px;
  height: 30px;
  background: var(--text-primary);
  border-radius: 50%;
  bottom: 0;
  animation: wheelSpin 1s linear infinite;
}

.robot-wheel.left { left: 15px; }
.robot-wheel.right { right: 15px; }

@keyframes robotFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes robotWave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-20deg); }
  75% { transform: rotate(20deg); }
}

@keyframes wheelSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-content h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}

.hero-content p {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.hero-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-icon {
  font-size: 32px;
}

.hardware-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.hardware-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 28px;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.hardware-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.hardware-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.hardware-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.hardware-card p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.hardware-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.spec {
  display: flex;
  flex-direction: column;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
}

.spec-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.spec-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.framework-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.framework-tab {
  padding: 12px 24px;
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.framework-tab:hover {
  border-color: var(--primary);
}

.framework-tab.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.framework-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 32px;
}

.framework-info h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}

.framework-info p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.framework-features h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.framework-features ul {
  list-style: none;
}

.framework-features li {
  font-size: 14px;
  color: var(--text-secondary);
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
}

.framework-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: 600;
}

.code-example {
  background: #1a1a2e;
  border-radius: var(--radius);
  overflow: hidden;
}

.code-header {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header span {
  font-size: 13px;
  color: #8892b0;
}

.code-example pre {
  padding: 20px;
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  line-height: 1.6;
  color: #e2e8f0;
  overflow-x: auto;
}

.comm-architecture {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--border);
}

.arch-flow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
}

.arch-flow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  z-index: 0;
}

.arch-node {
  text-align: center;
  position: relative;
  z-index: 1;
  background: white;
  padding: 0 16px;
}

.node-icon {
  font-size: 40px;
  margin-bottom: 8px;
}

.node-name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.node-desc {
  font-size: 12px;
  color: var(--text-muted);
}

.protocol-stack h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

.stack-layers {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stack-layer {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
}

.layer-name {
  font-size: 13px;
  font-weight: 500;
}

.layer-protocol {
  font-size: 13px;
  color: var(--text-muted);
}

.case-overview {
  padding: 32px;
  margin-bottom: 24px;
}

.case-overview h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}

.case-overview p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.7;
}

.case-stats {
  display: flex;
  gap: 40px;
}

.case-stat {
  text-align: center;
}

.stat-num {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 13px;
  color: var(--text-muted);
}

.case-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.detail-card {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  border: 1px solid var(--border);
}

.detail-card h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.detail-card ul {
  list-style: none;
}

.detail-card li {
  font-size: 13px;
  color: var(--text-secondary);
  padding: 6px 0;
  padding-left: 16px;
  position: relative;
}

.detail-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
}

.system-architecture {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--border);
}

.system-architecture h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
}

.arch-diagram {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.arch-layer {
  padding: 20px;
  border-radius: var(--radius);
}

.arch-layer.edge {
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.arch-layer.gateway {
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid rgba(0, 212, 170, 0.2);
}

.arch-layer.cloud {
  background: rgba(155, 89, 182, 0.1);
  border: 1px solid rgba(155, 89, 182, 0.2);
}

.arch-layer h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}

.layer-components {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.component {
  padding: 8px 16px;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  border: 1px solid var(--border);
}

.arch-arrow {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  padding: 8px;
}

.demo-console {
  overflow: hidden;
}

.console-tabs {
  display: flex;
  border-bottom: 1px solid var(--border);
}

.console-tab {
  flex: 1;
  padding: 16px;
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.console-tab:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.console-tab.active {
  background: var(--primary);
  color: white;
}

.console-content {
  padding: 24px;
  min-height: 300px;
}

.control-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.control-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: white;
  cursor: pointer;
  transition: var(--transition);
}

.control-btn:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.control-btn.primary {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.control-btn.danger {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}

.control-btn.special {
  background: var(--secondary);
  border-color: var(--secondary);
  color: white;
}

.cmd-icon {
  font-size: 24px;
}

.status-display {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
}

.status-label {
  font-size: 13px;
  color: var(--text-muted);
}

.status-value {
  font-size: 13px;
  font-weight: 600;
}

.status-value.online { color: var(--secondary); }
.status-value.normal { color: var(--primary); }
.status-value.idle { color: var(--text-muted); }
.status-value.good { color: var(--secondary); }

.sensor-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.sensor-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: var(--radius);
}

.sensor-icon {
  font-size: 32px;
}

.sensor-info {
  flex: 1;
}

.sensor-name {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.sensor-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
}

.sensor-unit {
  font-size: 13px;
  color: var(--text-muted);
}

.sensor-chart {
  width: 40px;
  height: 60px;
  background: white;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.chart-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  border-radius: 0 0 4px 4px;
  transition: height 0.5s ease;
}

.log-output {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.8;
}

.log-line {
  padding: 4px 0;
  display: flex;
  gap: 12px;
}

.log-time {
  color: var(--text-muted);
  min-width: 70px;
}

.log-level {
  min-width: 50px;
  font-weight: 600;
}

.log-level.INFO { color: var(--primary); }
.log-level.WARN { color: var(--accent); }
.log-level.DEBUG { color: var(--text-muted); }

.log-message {
  color: var(--text-secondary);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.resource-card {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

.resource-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.resource-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.resource-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.resource-card p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.resource-link {
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .hero-card {
    flex-direction: column;
    text-align: center;
  }
  
  .hardware-grid {
    grid-template-columns: 1fr;
  }
  
  .framework-content {
    grid-template-columns: 1fr;
  }
  
  .arch-flow {
    flex-direction: column;
    gap: 20px;
  }
  
  .arch-flow::before {
    display: none;
  }
  
  .case-details {
    grid-template-columns: 1fr;
  }
  
  .control-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sensor-grid {
    grid-template-columns: 1fr;
  }
  
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
