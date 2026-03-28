<template>
  <div class="esp32-case-view">
    <h1 class="page-title">进阶拓展：ESP32 端侧智能体开发实践</h1>
    
    <div class="value-section">
      <div class="value-card">
        <h2>案例核心价值</h2>
        <p>突破纯软件智能体局限，实现「端侧感知-云端智能体规划-端侧执行」的完整闭环，拓展AI智能体在嵌入式、物联网、端侧AI场景的落地思路</p>
      </div>
    </div>
    
    <div class="content-grid">
      <div class="demo-section">
        <h2 class="section-title">成品效果演示</h2>
        <div class="features-list">
          <div class="feature-item" v-for="(feature, index) in features" :key="index">
            <span class="feature-check">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>
      
      <div class="tech-section">
        <h2 class="section-title">硬件方案与核心技术</h2>
        <div class="tech-cards">
          <div class="tech-card">
            <h3>硬件方案</h3>
            <ul>
              <li>ESP32-S3核心板（双核240MHz，8MB PSRAM）</li>
              <li>I2S麦克风模块（INMP441）</li>
              <li>I2S扬声器模块（MAX98357）</li>
              <li>陀螺仪传感器（MPU6050）</li>
              <li>触控模块（TTP223）</li>
              <li>SPI显示屏（GC9A01或ST7735）</li>
            </ul>
          </div>
          <div class="tech-card">
            <h3>核心技术点</h3>
            <ul>
              <li>低功耗适配（深度睡眠5μA）</li>
              <li>I2S音频采集与播放</li>
              <li>WebSocket/MQTT协议对接</li>
              <li>智能体API接入（OpenClaw/豆包/讯飞）</li>
              <li>离线语音唤醒（VAD检测）</li>
              <li>异步多任务调度（asyncio）</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 开发流程详细步骤 -->
    <div class="flow-section">
      <h2 class="section-title">开发流程与Demo代码</h2>
      
      <div class="flow-steps">
        <div class="step-card" v-for="(step, index) in flowSteps" :key="index">
          <div class="step-header">
            <span class="step-num">{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
          </div>
          <div class="step-content">
            <p class="step-desc">{{ step.desc }}</p>
            <div class="code-block" v-if="step.code">
              <pre><code>{{ step.code }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  '语音唤醒',
  '自然语言交互',
  '端侧数据采集',
  '云端智能体任务规划',
  '执行结果反馈'
]

const flowSteps = [
  {
    title: '环境搭建 - 刷写MicroPython固件',
    desc: '下载ESP32-S3专用固件，使用esptool工具刷写到开发板',
    code: `# 下载MicroPython固件
wget https://micropython.org/resources/firmware/ESP32_GENERIC_S3-20240222-v1.22.2.bin

# 擦除Flash并刷写固件
esptool.py --chip esp32s3 --port /dev/ttyUSB0 erase_flash
esptool.py --chip esp32s3 --port /dev/ttyUSB0 --baud 460800 \\
    write_flash -z 0x0 ESP32_GENERIC_S3-20240222-v1.22.2.bin`
  },
  {
    title: 'WiFi连接与基础配置',
    desc: '配置WiFi连接，建立网络基础',
    code: `import network
import time

def connect_wifi(ssid, password):
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, password)
    
    while not wlan.isconnected():
        time.sleep(1)
    
    print('WiFi已连接:', wlan.ifconfig())
    return wlan

# 连接WiFi
connect_wifi('Your_SSID', 'Your_Password')`
  },
  {
    title: 'I2S音频采集模块初始化',
    desc: '初始化INMP441麦克风，配置I2S接口',
    code: `from machine import I2S, Pin
import struct

# I2S配置
I2S_SCK = 40  # 串行时钟
I2S_WS = 41   # 字选择
I2S_SD = 39   # 串行数据

# 初始化I2S麦克风
audio_in = I2S(
    0,
    sck=Pin(I2S_SCK),
    ws=Pin(I2S_WS),
    sd=Pin(I2S_SD),
    mode=I2S.RX,
    bits=16,
    format=I2S.MONO,
    rate=16000,
    ibuf=64000
)

# 读取音频数据
def record_audio(duration=5):
    buf = bytearray(1024)
    audio_data = []
    samples = int(duration * 16000 / 512)
    
    for _ in range(samples):
        audio_in.readinto(buf)
        audio_data.extend(buf)
    
    return bytes(audio_data)`
  },
  {
    title: '语音活动检测（VAD）',
    desc: '实现简单的能量检测，识别有效语音',
    code: `import math

def vad_detect(audio_buffer, threshold=500):
    """语音活动检测 - 基于能量阈值"""
    # 计算音频能量
    energy = 0
    for i in range(0, len(audio_buffer), 2):
        if i + 1 < len(audio_buffer):
            sample = audio_buffer[i] | (audio_buffer[i+1] << 8)
            if sample & 0x8000:
                sample = -((~sample & 0xFFFF) + 1)
            energy += abs(sample)
    
    avg_energy = energy / (len(audio_buffer) // 2)
    
    # 判断是否超过阈值
    is_speech = avg_energy > threshold
    return is_speech, avg_energy

# 使用示例
buf = bytearray(1024)
audio_in.readinto(buf)
is_speech, energy = vad_detect(buf)
print(f'检测到语音: {is_speech}, 能量: {energy}')`
  },
  {
    title: 'WebSocket连接云端智能体',
    desc: '建立与OpenClaw/豆包等云端智能体的WebSocket连接',
    code: `import uwebsockets.client as websocket
import ujson as json
import uasyncio as asyncio

class AIAgentClient:
    def __init__(self, ws_url, api_key):
        self.ws_url = ws_url
        self.api_key = api_key
        self.ws = None
    
    async def connect(self):
        """连接WebSocket服务"""
        self.ws = await websocket.connect(self.ws_url)
        # 发送认证信息
        auth_msg = {
            'type': 'auth',
            'api_key': self.api_key
        }
        await self.ws.send(json.dumps(auth_msg))
        print('已连接到云端智能体')
    
    async def send_audio(self, audio_data):
        """发送音频数据"""
        msg = {
            'type': 'audio',
            'data': audio_data.hex(),
            'format': 'pcm16',
            'sample_rate': 16000
        }
        await self.ws.send(json.dumps(msg))
    
    async def receive_response(self):
        """接收智能体响应"""
        response = await self.ws.recv()
        return json.loads(response)

# 使用示例
client = AIAgentClient('wss://api.example.com/ws', 'your_api_key')
await client.connect()`
  },
  {
    title: '端云协同完整流程',
    desc: '整合语音采集、VAD、云端交互、结果播报的完整流程',
    code: `import uasyncio as asyncio

class VoiceAssistant:
    def __init__(self):
        self.client = AIAgentClient('wss://api.example.com/ws', 'your_key')
        self.is_recording = False
    
    async def run(self):
        """主循环"""
        await self.client.connect()
        print('语音助手已启动，等待唤醒...')
        
        while True:
            # 1. 监听唤醒词（简化版：检测语音能量）
            buf = bytearray(1024)
            audio_in.readinto(buf)
            is_speech, energy = vad_detect(buf)
            
            if is_speech and not self.is_recording:
                self.is_recording = True
                print('检测到语音，开始录音...')
                
                # 2. 采集音频（3秒）
                audio_data = await self.record_audio(3)
                
                # 3. 发送到云端智能体
                await self.client.send_audio(audio_data)
                
                # 4. 接收响应
                response = await self.client.receive_response()
                print('智能体回复:', response['text'])
                
                # 5. 语音播报（通过I2S扬声器播放）
                await self.play_response(response['audio'])
                
                self.is_recording = False
            
            await asyncio.sleep(0.1)
    
    async def record_audio(self, duration):
        """录音指定时长"""
        buf = bytearray(1024)
        audio_data = []
        samples = int(duration * 16000 / 512)
        
        for _ in range(samples):
            audio_in.readinto(buf)
            audio_data.extend(buf)
            await asyncio.sleep(0)
        
        return bytes(audio_data)
    
    async def play_response(self, audio_data):
        """播放响应音频"""
        # 通过I2S扬声器播放
        audio_out.write(audio_data)

# 启动助手
assistant = VoiceAssistant()
asyncio.run(assistant.run())`
  }
]
</script>

<style scoped>
.esp32-case-view {
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

.value-section {
  margin-bottom: 50px;
}

.value-card {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 170, 0.1));
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.value-card h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
}

.value-card p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-primary);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  align-items: stretch;
}

.demo-section, .tech-section {
  display: flex;
  flex-direction: column;
}

.features-list, .tech-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tech-cards {
  justify-content: space-between;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border-radius: 10px;
  border: 1px solid var(--border);
  flex: 1;
}

.feature-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.tech-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--border);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tech-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--primary);
}

.tech-card ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  align-content: flex-start;
}

.tech-card li {
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* 开发流程 */
.flow-section {
  margin-top: 40px;
}

.flow-steps {
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
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.step-content {
  padding: 24px;
}

.step-desc {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.code-block {
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
}

.code-block pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
}

.code-block code {
  color: #e2e8f0;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
