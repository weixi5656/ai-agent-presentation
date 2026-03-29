/**
 * 性能优化器 - 优化苹果官网风格滚动网站的性能和用户体验
 */

class PerformanceOptimizer {
  constructor() {
    this.optimizations = {
      lazyLoading: true,
      imageOptimization: true,
      animationThrottling: true,
      memoryManagement: true,
      touchOptimization: true
    }
    
    this.init()
  }
  
  init() {
    this.setupPerformanceMonitoring()
    this.optimizeAnimations()
    this.optimizeImages()
    this.setupLazyLoading()
    this.setupMemoryManagement()
    this.setupTouchOptimization()
    this.setupAccessibility()
  }
  
  // 设置性能监控
  setupPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
      // 监控长任务
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('长任务检测:', entry)
            this.throttleAnimations()
          }
        }
      })
      
      longTaskObserver.observe({ entryTypes: ['longtask'] })
      
      // 监控布局偏移
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            console.warn('布局偏移检测:', entry)
            this.stabilizeLayout()
          }
        }
      })
      
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })
    }
  }
  
  // 优化动画性能
  optimizeAnimations() {
    // 使用will-change优化
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .apple-scroll-reveal, .parallax-layer')
    
    animatedElements.forEach(element => {
      element.classList.add('will-change-transform-opacity')
      
      // 减少移动端动画复杂度
      if (window.innerWidth <= 768) {
        element.style.animationDuration = '0.6s'
      }
    })
    
    // 动画节流
    if (this.optimizations.animationThrottling) {
      this.throttleAnimations = this.debounce(() => {
        const now = Date.now()
        if (!this.lastAnimationTime || now - this.lastAnimationTime > 16) {
          this.lastAnimationTime = now
          return true
        }
        return false
      }, 16)
    }
  }
  
  // 优化图片加载
  optimizeImages() {
    if (!this.optimizations.imageOptimization) return
    
    const images = document.querySelectorAll('img')
    
    images.forEach(img => {
      // 添加懒加载
      if (!img.loading) {
        img.loading = 'lazy'
      }
      
      // 添加解码异步
      if (img.decode) {
        img.decode().catch(() => {
          // 解码失败时正常加载
        })
      }
      
      // 响应式图片处理
      if (img.srcset) {
        const sizes = img.getAttribute('sizes')
        if (!sizes) {
          const viewportWidth = window.innerWidth
          let size = '100vw'
          
          if (viewportWidth >= 1200) size = '1200px'
          else if (viewportWidth >= 768) size = '768px'
          else size = '100vw'
          
          img.setAttribute('sizes', size)
        }
      }
    })
  }
  
  // 设置懒加载
  setupLazyLoading() {
    if (!this.optimizations.lazyLoading) return
    
    // 图片懒加载
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset
            img.removeAttribute('data-srcset')
          }
          observer.unobserve(img)
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
    
    // 组件懒加载
    const componentObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const component = entry.target
          component.classList.add('loaded')
          observer.unobserve(component)
        }
      })
    }, {
      rootMargin: '100px 0px',
      threshold: 0.1
    })
    
    document.querySelectorAll('.lazy-component').forEach(component => {
      componentObserver.observe(component)
    })
  }
  
  // 内存管理
  setupMemoryManagement() {
    if (!this.optimizations.memoryManagement) return
    
    // 清理不再需要的动画元素
    setInterval(() => {
      const animatedElements = document.querySelectorAll('.animated')
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        // 如果元素在视口外很远处，清理will-change
        if (rect.bottom < -500 || rect.top > window.innerHeight + 500) {
          el.classList.remove('will-change-transform-opacity')
        }
      })
    }, 10000)
    
    // 监控内存使用
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          console.warn('内存使用过高，清理缓存')
          this.cleanupMemory()
        }
      }, 30000)
    }
  }
  
  // 触摸优化
  setupTouchOptimization() {
    if (!this.optimizations.touchOptimization) return
    
    // 添加触摸反馈
    document.addEventListener('touchstart', () => {
      // 添加触摸激活状态
    }, { passive: true })
    
    // 防止双击缩放
    let lastTouchEnd = 0
    document.addEventListener('touchend', (event) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }, { passive: false })
    
    // 优化滚动性能
    document.addEventListener('touchmove', (event) => {
      if (event.scale !== 1) {
        event.preventDefault()
      }
    }, { passive: false })
  }
  
  // 可访问性优化
  setupAccessibility() {
    // 键盘导航支持
    document.addEventListener('keydown', (event) => {
      // 确保所有可交互元素有焦点指示
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
    })
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation')
    })
    
    // 减少运动偏好
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduce-motion')
    }
    
    // 高对比度模式
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast')
    }
  }
  
  // 工具函数
  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  throttle(func, limit) {
    let inThrottle
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
  
  // 稳定布局
  stabilizeLayout() {
    // 为动态内容预留空间
    const dynamicElements = document.querySelectorAll('.dynamic-content')
    dynamicElements.forEach(el => {
      if (!el.style.minHeight) {
        const rect = el.getBoundingClientRect()
        el.style.minHeight = `${rect.height}px`
      }
    })
  }
  
  // 清理内存
  cleanupMemory() {
    // 清理不再需要的图片
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      const rect = img.getBoundingClientRect()
      if (rect.bottom < -1000 || rect.top > window.innerHeight + 1000) {
        if (img.src && !img.dataset.important) {
          img.src = ''
          img.srcset = ''
        }
      }
    })
    
    // 触发垃圾回收（如果可用）
    if (window.gc) {
      window.gc()
    }
  }
  
  // 销毁优化器
  destroy() {
    // 清理所有观察器
    if (this.imageObserver) {
      this.imageObserver.disconnect()
    }
    
    if (this.componentObserver) {
      this.componentObserver.disconnect()
    }
    
    // 移除事件监听器
    document.removeEventListener('touchstart', this.touchStartHandler)
    document.removeEventListener('touchend', this.touchEndHandler)
    document.removeEventListener('touchmove', this.touchMoveHandler)
    document.removeEventListener('keydown', this.keyDownHandler)
    document.removeEventListener('mousedown', this.mouseDownHandler)
  }
}

// 导出优化器
export default PerformanceOptimizer

// 自动初始化
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    // 延迟初始化以避免影响首屏加载
    setTimeout(() => {
      window.performanceOptimizer = new PerformanceOptimizer()
    }, 1000)
  })
}