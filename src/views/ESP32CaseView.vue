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
    title: '开发环境要求',
    desc: '硬件和软件环境准备',
    code: `【硬件要求】
- ESP32-S3开发板（推荐N16R8，16MB Flash + 8MB PSRAM）
- INMP441 I2S麦克风模块
- MAX98357 I2S扬声器模块
- MPU6050陀螺仪传感器
- 电容触控模块（TTP223）
- SPI显示屏（GC9A01圆形屏或ST7735）
- USB数据线（Type-C）

【软件要求】
- Python 3.8+
- esptool（固件刷写工具）
- Thonny IDE（推荐）或 VSCode
- MicroPython固件（ESP32-S3专用）

【固件下载】
wget https://micropython.org/resources/firmware/ESP32_GENERIC_S3-20240222-v1.22.2.bin

【刷写命令】
esptool.py --chip esp32s3 --port /dev/ttyUSB0 erase_flash
esptool.py --chip esp32s3 --port /dev/ttyUSB0 --baud 460800 \\
    write_flash -z 0x0 ESP32_GENERIC_S3-20240222-v1.22.2.bin`
  },
  {
    title: '功能1：语音唤醒 - 离线VAD检测',
    desc: '实现本地语音活动检测，识别有效语音输入',
    code: `from machine import I2S, Pin
import time

# I2S麦克风配置（INMP441）
audio_in = I2S(
    0,
    sck=Pin(40),   # BCLK
    ws=Pin(41),    # LRCK
    sd=Pin(39),    # DATA
    mode=I2S.RX,
    bits=16,
    format=I2S.MONO,
    rate=16000,
    ibuf=64000
)

def vad_detect(audio_buffer, threshold=800):
    """语音活动检测 - 基于能量阈值"""
    energy = 0
    for i in range(0, len(audio_buffer), 2):
        if i + 1 < len(audio_buffer):
            sample = audio_buffer[i] | (audio_buffer[i+1] << 8)
            if sample & 0x8000:
                sample = -((~sample & 0xFFFF) + 1)
            energy += abs(sample)
    
    avg_energy = energy / (len(audio_buffer) // 2)
    is_speech = avg_energy > threshold
    return is_speech, avg_energy

# 实时监听唤醒
def wait_for_wake_word():
    print('等待语音唤醒...')
    buf = bytearray(1024)
    
    while True:
        audio_in.readinto(buf)
        is_speech, energy = vad_detect(buf)
        
        if is_speech:
            print(f'检测到语音! 能量: {energy}')
            return True
        
        time.sleep_ms(50)

# 使用
wait_for_wake_word()`
  },
  {
    title: '功能2：自然语言交互 - 云端AI对接',
    desc: '通过WebSocket连接云端大模型（OpenClaw/豆包/讯飞），实现自然语言交互',
    code: `import uwebsockets.client as websocket
import ujson as json
import uasyncio as asyncio

class CloudAIAgent:
    def __init__(self, config):
        self.ws_url = config['ws_url']
        self.api_key = config['api_key']
        self.model = config.get('model', 'doubao')
        self.ws = None
        self.session_id = None
    
    async def connect(self):
        """连接云端智能体服务"""
        self.ws = await websocket.connect(self.ws_url)
        
        # 发送认证和配置
        auth_msg = {
            'type': 'session.start',
            'api_key': self.api_key,
            'model': self.model,
            'config': {
                'voice': 'zh_female',
                'temperature': 0.7
            }
        }
        await self.ws.send(json.dumps(auth_msg))
        
        # 接收确认
        resp = await self.ws.recv()
        data = json.loads(resp)
        self.session_id = data.get('session_id')
        print(f'已连接云端AI，会话ID: {self.session_id}')
    
    async def send_text(self, text):
        """发送文本消息"""
        msg = {
            'type': 'conversation.item.create',
            'content': {
                'role': 'user',
                'content': text
            }
        }
        await self.ws.send(json.dumps(msg))
    
    async def send_audio(self, audio_data):
        """发送音频数据"""
        import ubinascii
        audio_b64 = ubinascii.b2a_base64(audio_data).decode().strip()
        
        msg = {
            'type': 'input_audio_buffer.append',
            'audio': audio_b64,
            'format': 'pcm16',
            'sample_rate': 16000
        }
        await self.ws.send(json.dumps(msg))
        
        # 提交音频
        await self.ws.send(json.dumps({'type': 'input_audio_buffer.commit'}))
    
    async def receive_response(self):
        """接收AI响应（流式）"""
        full_response = {'text': '', 'audio': b''}
        
        while True:
            resp = await self.ws.recv()
            data = json.loads(resp)
            
            if data['type'] == 'response.text.delta':
                full_response['text'] += data['delta']
            elif data['type'] == 'response.audio.delta':
                import ubinascii
                audio_chunk = ubinascii.a2b_base64(data['delta'])
                full_response['audio'] += audio_chunk
            elif data['type'] == 'response.done':
                break
        
        return full_response

# 配置示例
config = {
    'ws_url': 'wss://openspeech.bytedance.com/api/v3/vc/tts',
    'api_key': 'your_doubao_api_key',
    'model': 'doubao-pro'
}

agent = CloudAIAgent(config)`
  },
  {
    title: '功能3：端侧数据采集 - 传感器融合',
    desc: '采集陀螺仪、触控等传感器数据，作为上下文信息',
    code: `from machine import I2C, Pin
import time
import struct

# MPU6050陀螺仪地址
MPU6050_ADDR = 0x68

class SensorManager:
    def __init__(self):
        # I2C总线初始化
        self.i2c = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)
        
        # 初始化MPU6050
        self._init_mpu6050()
        
        # 触控按钮
        self.touch_pin = Pin(4, Pin.IN, Pin.PULL_UP)
        
        print('传感器初始化完成')
    
    def _init_mpu6050(self):
        """初始化MPU6050"""
        # 唤醒MPU6050
        self.i2c.writeto_mem(MPU6050_ADDR, 0x6B, b'\\x00')
        time.sleep_ms(100)
        
        # 设置量程
        self.i2c.writeto_mem(MPU6050_ADDR, 0x1B, b'\\x00')  # ±250°/s
        self.i2c.writeto_mem(MPU6050_ADDR, 0x1C, b'\\x00')  # ±2g
    
    def read_accel_gyro(self):
        """读取加速度和陀螺仪数据"""
        data = self.i2c.readfrom_mem(MPU6050_ADDR, 0x3B, 14)
        
        # 解析数据
        accel_x = struct.unpack('>h', data[0:2])[0] / 16384.0
        accel_y = struct.unpack('>h', data[2:4])[0] / 16384.0
        accel_z = struct.unpack('>h', data[4:6])[0] / 16384.0
        
        gyro_x = struct.unpack('>h', data[8:10])[0] / 131.0
        gyro_y = struct.unpack('>h', data[10:12])[0] / 131.0
        gyro_z = struct.unpack('>h', data[12:14])[0] / 131.0
        
        return {
            'accel': {'x': accel_x, 'y': accel_y, 'z': accel_z},
            'gyro': {'x': gyro_x, 'y': gyro_y, 'z': gyro_z}
        }
    
    def read_touch(self):
        """读取触控状态"""
        return not self.touch_pin.value()  # 低电平触发
    
    def get_context(self):
        """获取完整传感器上下文"""
        sensor_data = self.read_accel_gyro()
        touch_state = self.read_touch()
        
        # 检测设备姿态
        accel = sensor_data['accel']
        if accel['z'] > 0.8:
            orientation = '正面朝上'
        elif accel['z'] < -0.8:
            orientation = '反面朝上'
        else:
            orientation = '倾斜状态'
        
        return {
            'orientation': orientation,
            'motion': '静止' if abs(sensor_data['gyro']['z']) < 5 else '旋转中',
            'touched': touch_state,
            'raw_data': sensor_data
        }

# 使用示例
sensors = SensorManager()
context = sensors.get_context()
print(f"设备状态: {context}")`
  },
  {
    title: '功能4：云端智能体任务规划 - 提示词工程',
    desc: '设计结构化提示词，让云端AI理解端侧上下文并生成任务规划',
    code: `def build_system_prompt(context, history=None):
    """构建系统提示词 - Co-STAR框架"""
    
    prompt = f"""【Context - 上下文】
你是一个智能助手，当前运行在ESP32设备上。
设备状态信息：
- 设备姿态: {context['orientation']}
- 运动状态: {context['motion']}
- 触控状态: {'被触摸' if context['touched'] else '未触摸'}

【Objective - 目标】
理解用户的语音指令，生成适合在ESP32设备上执行的任务规划。

【Style - 风格】
简洁、指令化、可执行。

【Tone - 语气】
专业、友好。

【Response - 响应格式】
请以JSON格式返回，包含以下字段：
- understanding: 对用户意图的理解
- task_plan: 任务执行步骤列表
- response_text: 给用户的语音回复文本
- need_display: 是否需要显示内容
- display_content: 显示内容（如有）

【示例】
用户说："帮我记录今天的会议要点"
响应：
{{
    "understanding": "用户需要创建语音备忘录",
    "task_plan": [
        "1. 启动录音",
        "2. 等待用户说完",
        "3. 保存到本地存储",
        "4. 生成摘要"
    ],
    "response_text": "好的，请开始说话，我会记录您的会议要点",
    "need_display": true,
    "display_content": "🎤 录音中..."
}}
"""
    
    return prompt

def build_user_message(audio_text, context):
    """构建用户消息"""
    return {
        'role': 'user',
        'content': f"""
用户语音输入："{audio_text}"

当前设备状态：
{json.dumps(context, indent=2)}

请生成任务规划。
"""
    }

# 使用示例
context = sensors.get_context()
system_prompt = build_system_prompt(context)
user_msg = build_user_message("打开客厅灯", context)

# 发送到云端AI
await agent.send_text(system_prompt + "\\n" + user_msg['content'])
response = await agent.receive_response()
print(response['text'])`
  },
  {
    title: '功能5：本地记忆存储 - 上下文持久化',
    desc: '使用本地文件系统存储对话历史、用户偏好、任务状态',
    code: `import json
import os

class LocalMemory:
    def __init__(self, memory_file='memory.json'):
        self.memory_file = memory_file
        self.memory = self._load_memory()
    
    def _load_memory(self):
        """从文件加载记忆"""
        try:
            with open(self.memory_file, 'r') as f:
                return json.load(f)
        except:
            # 初始化默认记忆结构
            return {
                'user_preferences': {},
                'conversation_history': [],
                'task_status': {},
                'device_config': {}
            }
    
    def _save_memory(self):
        """保存记忆到文件"""
        with open(self.memory_file, 'w') as f:
            json.dump(self.memory, f)
    
    def add_conversation(self, role, content):
        """添加对话记录"""
        self.memory['conversation_history'].append({
            'role': role,
            'content': content,
            'timestamp': time.time()
        })
        
        # 只保留最近20轮对话
        if len(self.memory['conversation_history']) > 40:
            self.memory['conversation_history'] = self.memory['conversation_history'][-40:]
        
        self._save_memory()
    
    def get_recent_context(self, n=5):
        """获取最近n轮对话上下文"""
        return self.memory['conversation_history'][-n*2:]
    
    def set_preference(self, key, value):
        """设置用户偏好"""
        self.memory['user_preferences'][key] = value
        self._save_memory()
    
    def get_preference(self, key, default=None):
        """获取用户偏好"""
        return self.memory['user_preferences'].get(key, default)
    
    def update_task_status(self, task_id, status):
        """更新任务状态"""
        self.memory['task_status'][task_id] = {
            'status': status,
            'updated_at': time.time()
        }
        self._save_memory()

# 使用示例
memory = LocalMemory()

# 保存对话
memory.add_conversation('user', '今天天气怎么样')
memory.add_conversation('assistant', '今天晴天，25度')

# 获取上下文
context = memory.get_recent_context(3)

# 保存偏好
memory.set_preference('preferred_voice', 'zh_female')
memory.set_preference('volume', 80)`
  },
  {
    title: '功能6：执行结果反馈 - 多模态输出',
    desc: '通过语音播报、显示屏、LED等多种方式反馈执行结果',
    code: `from machine import I2S, Pin, SPI
import struct

class MultiModalOutput:
    def __init__(self):
        # I2S扬声器（MAX98357）
        self.audio_out = I2S(
            1,
            sck=Pin(12),
            ws=Pin(14),
            sd=Pin(13),
            mode=I2S.TX,
            bits=16,
            format=I2S.MONO,
            rate=24000,
            ibuf=40000
        )
        
        # LED指示灯
        self.led = Pin(2, Pin.OUT)
        
        # 显示屏（假设已初始化）
        self.display = None  # GC9A01或ST7735实例
    
    def play_audio(self, audio_data, sample_rate=24000):
        """播放音频"""
        # 重采样（如果需要）
        if sample_rate != 24000:
            audio_data = self._resample(audio_data, sample_rate, 24000)
        
        # 写入I2S
        self.audio_out.write(audio_data)
        
        # 播放时LED闪烁
        self.led.value(1)
        time.sleep_ms(100)
        self.led.value(0)
    
    def display_text(self, text, icon=None):
        """显示文本"""
        if self.display:
            self.display.fill(0)
            
            # 显示图标
            if icon:
                self.display.draw_icon(60, 20, icon)
            
            # 显示文字
            lines = text.split('\\n')
            y = 80
            for line in lines:
                self.display.text(line, 10, y, 0xFFFF)
                y += 20
            
            self.display.show()
    
    def show_status(self, status):
        """显示状态"""
        status_icons = {
            'listening': ('🎤', '聆听中...'),
            'thinking': ('🤔', '思考中...'),
            'speaking': ('🔊', '播报中...'),
            'error': ('❌', '出错了')
        }
        
        icon, text = status_icons.get(status, ('❓', '未知状态'))
        self.display_text(text, icon)
    
    def feedback_result(self, response_data):
        """综合反馈执行结果"""
        # 1. 语音播报
        if 'audio' in response_data:
            self.play_audio(response_data['audio'])
        
        # 2. 显示内容
        if response_data.get('need_display'):
            self.display_text(
                response_data.get('display_content', ''),
                response_data.get('icon')
            )
        
        # 3. LED反馈
        if response_data.get('success'):
            self.led.value(1)
            time.sleep(0.5)
            self.led.value(0)

# 使用示例
output = MultiModalOutput()

# 显示状态
output.show_status('listening')

# 反馈结果
result = {
    'audio': audio_bytes,
    'need_display': True,
    'display_content': '已为您打开客厅灯',
    'icon': '💡',
    'success': True
}
output.feedback_result(result)`
  },
  {
    title: '完整主程序 - 端云协同智能体',
    desc: '整合所有功能的完整实现',
    code: `import uasyncio as asyncio
from machine import Pin

class ESP32AIAgent:
    def __init__(self):
        # 初始化各模块
        self.sensors = SensorManager()
        self.memory = LocalMemory()
        self.cloud = CloudAIAgent(config)
        self.output = MultiModalOutput()
        self.audio_in = audio_in  # I2S麦克风
        
        self.is_running = False
    
    async def run(self):
        """主循环"""
        # 连接云端
        await self.cloud.connect()
        self.is_running = True
        
        print('ESP32 AI Agent 已启动')
        self.output.show_status('listening')
        
        while self.is_running:
            try:
                # 1. 等待语音唤醒
                if await self._wait_for_wake():
                    # 2. 采集语音
                    audio_data = await self._record_audio(5)
                    
                    # 3. 获取传感器上下文
                    sensor_context = self.sensors.get_context()
                    
                    # 4. 获取历史对话
                    history = self.memory.get_recent_context(3)
                    
                    # 5. 发送到云端AI
                    self.output.show_status('thinking')
                    
                    # 构建提示词
                    system_prompt = build_system_prompt(sensor_context)
                    await self.cloud.send_text(system_prompt)
                    await self.cloud.send_audio(audio_data)
                    
                    # 6. 接收响应
                    response = await self.cloud.receive_response()
                    
                    # 7. 保存对话
                    self.memory.add_conversation('user', '[语音输入]')
                    self.memory.add_conversation('assistant', response['text'])
                    
                    # 8. 反馈结果
                    self.output.show_status('speaking')
                    self.output.feedback_result(response)
                    
                    # 9. 恢复监听状态
                    self.output.show_status('listening')
                
            except Exception as e:
                print(f'Error: {e}')
                self.output.show_status('error')
                await asyncio.sleep(2)
    
    async def _wait_for_wake(self):
        """等待唤醒"""
        buf = bytearray(1024)
        silence_count = 0
        
        while True:
            self.audio_in.readinto(buf)
            is_speech, energy = vad_detect(buf)
            
            if is_speech:
                return True
            
            await asyncio.sleep_ms(50)
    
    async def _record_audio(self, duration):
        """录音"""
        buf = bytearray(1024)
        audio_data = []
        samples = int(duration * 16000 / 512)
        
        for _ in range(samples):
            self.audio_in.readinto(buf)
            audio_data.extend(buf)
            await asyncio.sleep(0)
        
        return bytes(audio_data)

# 启动
async def main():
    agent = ESP32AIAgent()
    await agent.run()

asyncio.run(main())`
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
