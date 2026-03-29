<template>
  <div class="intro-view">
    <div class="hero naked-hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-gradient">AI智能体</span>
          <span class="title-separator">·</span>
          <span class="title-light">应用案例</span>
        </h1>
        <div class="typewriter-container">
          <p class="hero-desc">
            <span class="typewriter-text">{{ displayedText }}</span>
            <span class="cursor" :class="{ 'cursor-blink': !isTyping }">|</span>
          </p>
        </div>
        <div class="hero-tags mt-12">
          <span class="glass-tag">🧠 认知升级</span>
          <span class="glass-tag">🦞 OpenClaw</span>
          <span class="glass-tag">👥 ClawTeam</span>
          <span class="glass-tag">🚀 端侧落地</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = "从认知到落地，构建真正能干活的 AI 智能体"
const displayedText = ref('')
const isTyping = ref(true)

onMounted(() => {
  let i = 0
  const speed = 120 // 120ms per character
  
  const typeWriter = () => {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    } else {
      isTyping.value = false
    }
  }
  
  setTimeout(typeWriter, 400) // initial delay
})
</script>

<style scoped>
.intro-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.hero.naked-hero {
  position: relative;
  text-align: center;
  width: 100%;
  padding: 40px 20px;
  overflow: visible;
}

.hero-content {
  position: relative;
  z-index: 1;
}

/* 巨大的标题 */
.hero-title {
  font-size: 110px;
  font-weight: 900;
  margin-bottom: 30px;
  letter-spacing: -4px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  text-shadow: 0 16px 32px rgba(94, 92, 230, 0.15);
}

.title-gradient {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-separator {
  color: rgba(60, 60, 67, 0.2);
  font-weight: 300;
}

.title-light {
  color: var(--text-primary);
}

/* 打字机副标题 */
.typewriter-container {
  height: 40px; 
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-desc {
  font-size: 26px;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 2px;
  margin: 0;
}

.typewriter-text {
  background: linear-gradient(90deg, var(--text-secondary) 0%, var(--text-muted) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor {
  display: inline-block;
  color: var(--primary);
  font-weight: 900;
  margin-left: 4px;
  transform: translateY(-2px);
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 标签样式 */
.hero-tags {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 48px;
}

.glass-tag {
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 999px;
  font-size: 16px;
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(32, 32, 40, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.glass-tag:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px rgba(32, 32, 40, 0.08);
  border-color: #ffffff;
}

@media (max-width: 1024px) {
  .hero-title { font-size: 80px; letter-spacing: -2px; }
  .hero-desc { font-size: 20px; }
  .typewriter-container { height: 32px; }
}

@media (max-width: 768px) {
  .intro-view { padding: 20px 16px; }
  .hero.naked-hero { padding: 20px 0; }
  .hero-title { font-size: 48px; letter-spacing: -1px; gap: 8px; }
  .hero-desc { font-size: 16px; letter-spacing: 1px; }
  .typewriter-container { height: 28px; margin-bottom: 30px; }
  .glass-tag { padding: 10px 18px; font-size: 14px; }
}
</style>
