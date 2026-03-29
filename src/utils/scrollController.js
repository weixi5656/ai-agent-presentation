/**
 * 苹果官网风格滚动控制器
 * 实现视口锁定滚动、视差滚动和元素动画
 */

class ScrollController {
  constructor(options = {}) {
    this.options = {
      scrollThreshold: 50, // 滚动阈值
      scrollCooldown: 800, // 滚动冷却时间
      snapDuration: 600, // 吸附动画持续时间
      easeFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // 缓动函数
      parallaxFactor: 0.3, // 视差滚动因子
      ...options
    }

    this.currentSection = 0
    this.totalSections = 0
    this.isScrolling = false
    this.isAnimating = false
    this.scrollDirection = 0 // 1: down, -1: up
    this.scrollY = 0
    this.sectionHeight = window.innerHeight
    this.parallaxElements = []
    this.animatedElements = []
    this.rafId = null

    this.init()
  }

  init() {
    this.bindEvents()
    this.updateSectionHeight()
    this.startAnimationLoop()
    
    // 禁用浏览器的默认滚动行为
    this.disableNativeScroll()
    
    // 添加滚动进度指示器
    this.createScrollProgressIndicator()
  }

  bindEvents() {
    // 滚轮事件
    window.addEventListener('wheel', this.onWheel.bind(this), { passive: false })
    
    // 触摸事件
    window.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: true })
    window.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: true })
    
    // 键盘事件
    window.addEventListener('keydown', this.onKeyDown.bind(this))
    
    // 窗口大小变化
    window.addEventListener('resize', this.onResize.bind(this))
    
    // 滚动事件（用于检测手动滚动）
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true })
  }

  onWheel(event) {
    if (this.isScrolling || this.isAnimating) {
      event.preventDefault()
      return
    }

    const delta = event.deltaY
    const absDelta = Math.abs(delta)

    // 防止过快的连续滚动
    if (this.lastScrollTime && Date.now() - this.lastScrollTime < this.options.scrollCooldown) {
      event.preventDefault()
      return
    }

    if (absDelta > this.options.scrollThreshold) {
      event.preventDefault()
      event.stopPropagation()
      
      this.scrollDirection = delta > 0 ? 1 : -1
      this.lastScrollTime = Date.now()
      this.scrollToNextSection()
    }
  }

  onTouchStart(event) {
    if (this.isScrolling || this.isAnimating) return
    
    this.touchStartY = event.touches[0].clientY
    this.touchStartTime = Date.now()
  }

  onTouchEnd(event) {
    if (this.isScrolling || this.isAnimating) return

    const touchEndY = event.changedTouches[0].clientY
    const touchEndTime = Date.now()
    const deltaY = this.touchStartY - touchEndY
    const deltaTime = touchEndTime - this.touchStartTime

    // 检测滑动手势
    if (Math.abs(deltaY) > 50 && deltaTime < 300) {
      this.scrollDirection = deltaY > 0 ? 1 : -1
      this.scrollToNextSection()
    }
  }

  onKeyDown(event) {
    if (this.isScrolling || this.isAnimating) return

    switch (event.key) {
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
        event.preventDefault()
        this.scrollDirection = 1
        this.scrollToNextSection()
        break
      case 'ArrowUp':
      case 'PageUp':
        event.preventDefault()
        this.scrollDirection = -1
        this.scrollToNextSection()
        break
      case 'Home':
        event.preventDefault()
        this.scrollToSection(0)
        break
      case 'End':
        event.preventDefault()
        this.scrollToSection(this.totalSections - 1)
        break
    }
  }

  onResize() {
    this.updateSectionHeight()
    this.scrollToSection(this.currentSection, false) // 立即跳转，不带动画
  }

  onScroll() {
    // 检测手动滚动，更新当前section
    if (!this.isAnimating) {
      const scrollTop = window.scrollY
      const sectionIndex = Math.round(scrollTop / this.sectionHeight)
      
      if (sectionIndex >= 0 && sectionIndex < this.totalSections && sectionIndex !== this.currentSection) {
        this.currentSection = sectionIndex
        this.updateProgress()
        this.triggerSectionChange()
      }
    }
  }

  scrollToNextSection() {
    const nextSection = this.currentSection + this.scrollDirection
    
    if (nextSection >= 0 && nextSection < this.totalSections) {
      this.scrollToSection(nextSection)
    }
  }

  scrollToSection(sectionIndex, animate = true) {
    if (sectionIndex < 0 || sectionIndex >= this.totalSections) return
    if (this.isAnimating) return

    this.isAnimating = true
    this.currentSection = sectionIndex

    const targetScroll = sectionIndex * this.sectionHeight
    const currentScroll = window.scrollY
    const distance = Math.abs(targetScroll - currentScroll)

    if (animate && distance > 10) {
      this.animateScroll(currentScroll, targetScroll)
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'instant' })
      this.isAnimating = false
    }

    this.updateProgress()
    this.triggerSectionChange()
  }

  animateScroll(start, end) {
    const startTime = performance.now()
    const duration = this.options.snapDuration
    const distance = Math.abs(end - start)
    
    // 根据距离调整持续时间
    const adjustedDuration = Math.min(duration, Math.max(400, distance / 2))

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / adjustedDuration, 1)
      
      // 使用缓动函数
      const easeProgress = this.ease(progress)
      const currentScroll = start + (end - start) * easeProgress
      
      window.scrollTo({ top: currentScroll, behavior: 'instant' })
      
      // 更新视差效果
      this.updateParallax()
      
      if (progress < 1) {
        this.rafId = requestAnimationFrame(animate)
      } else {
        this.isAnimating = false
        this.rafId = null
        
        // 动画完成后触发完成事件
        this.triggerAnimationComplete()
      }
    }

    this.rafId = requestAnimationFrame(animate)
  }
  
  triggerAnimationComplete() {
    const event = new CustomEvent('scrollanimationcomplete', {
      detail: {
        sectionIndex: this.currentSection
      }
    })
    window.dispatchEvent(event)
  }

  ease(t) {
    // cubic-bezier(0.25, 0.46, 0.45, 0.94) 实现
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  updateSectionHeight() {
    this.sectionHeight = window.innerHeight
  }

  updateProgress() {
    // 更新进度指示器
    const progress = ((this.currentSection + 1) / this.totalSections) * 100
    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
  }

  triggerSectionChange() {
    // 触发section变化事件
    const event = new CustomEvent('sectionchange', {
      detail: {
        sectionIndex: this.currentSection,
        direction: this.scrollDirection
      }
    })
    window.dispatchEvent(event)
  }

  registerParallaxElement(element, options = {}) {
    this.parallaxElements.push({
      element,
      factor: options.factor || this.options.parallaxFactor,
      direction: options.direction || 'vertical',
      offset: options.offset || 0
    })
  }

  registerAnimatedElement(element, options = {}) {
    this.animatedElements.push({
      element,
      animation: options.animation || 'fadeInUp',
      threshold: options.threshold || 0.2,
      delay: options.delay || 0,
      duration: options.duration || 800,
      once: options.once !== false
    })
  }

  startAnimationLoop() {
    const update = () => {
      this.scrollY = window.scrollY
      this.updateParallax()
      this.checkAnimations()
      this.rafId = requestAnimationFrame(update)
    }
    this.rafId = requestAnimationFrame(update)
  }

  updateParallax() {
    const scrollProgress = this.scrollY / (this.totalSections * this.sectionHeight)
    
    this.parallaxElements.forEach(item => {
      const { element, factor, direction, offset } = item
      const parallaxValue = scrollProgress * factor * 100 + offset
      
      if (direction === 'vertical') {
        element.style.transform = `translateY(${parallaxValue}px)`
      } else if (direction === 'horizontal') {
        element.style.transform = `translateX(${parallaxValue}px)`
      } else if (direction === 'scale') {
        const scale = 1 + scrollProgress * factor
        element.style.transform = `scale(${scale})`
      }
    })
  }

  checkAnimations() {
    const viewportHeight = window.innerHeight
    
    this.animatedElements.forEach((item, index) => {
      const { element, animation, threshold, delay, duration, once } = item
      
      if (!element || !element.getBoundingClientRect) return
      
      const rect = element.getBoundingClientRect()
      const isInView = rect.top < viewportHeight * (1 - threshold) && rect.bottom > viewportHeight * threshold
      
      if (isInView && !item.animated) {
        // 使用requestAnimationFrame确保在下一帧执行
        requestAnimationFrame(() => {
          // 添加基础动画类
          if (animation) {
            element.classList.add(animation)
          }
          
          // 添加苹果风格滚动显示类
          if (element.classList.contains('apple-scroll-reveal')) {
            element.classList.add('revealed')
          }
          
          // 设置动画属性
          if (duration) {
            element.style.animationDuration = `${duration}ms`
          }
          
          if (delay) {
            element.style.animationDelay = `${delay}ms`
          }
          
          // 添加will-change优化
          element.classList.add('will-change-transform-opacity')
          
          if (once) {
            item.animated = true
          }
        })
      }
    })
  }

  setTotalSections(count) {
    this.totalSections = count
    this.updateProgress()
  }
  
  // 初始化页面动画
  initPageAnimations() {
    // 添加初始加载动画
    setTimeout(() => {
      const firstSection = document.querySelector('.floor')
      if (firstSection) {
        firstSection.classList.add('animated', 'revealed')
        
        // 触发第一个楼层的内部动画
        const innerElements = firstSection.querySelectorAll('.animate-on-scroll, .apple-scroll-reveal')
        innerElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('animated')
            if (el.classList.contains('apple-scroll-reveal')) {
              el.classList.add('revealed')
            }
          }, index * 150)
        })
      }
    }, 500)
  }

  disableNativeScroll() {
    // 防止默认滚动行为
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }
  
  enableNativeScroll() {
    // 恢复默认滚动行为
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
  
  createScrollProgressIndicator() {
    // 如果进度指示器不存在则创建
    if (!document.querySelector('.scroll-progress')) {
      const progressBar = document.createElement('div')
      progressBar.className = 'scroll-progress'
      document.body.appendChild(progressBar)
    }
  }
  
  updateProgress() {
    // 更新进度指示器
    const progress = ((this.currentSection + 1) / this.totalSections) * 100
    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
    
    // 更新进度条元素
    const progressBar = document.querySelector('.scroll-progress')
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress / 100})`
    }
  }
  
  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
    
    // 恢复原生滚动
    this.enableNativeScroll()
    
    // 移除事件监听器
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchend', this.onTouchEnd)
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
    
    // 移除进度指示器
    const progressBar = document.querySelector('.scroll-progress')
    if (progressBar && progressBar.parentNode) {
      progressBar.parentNode.removeChild(progressBar)
    }
  }
}

export default ScrollController