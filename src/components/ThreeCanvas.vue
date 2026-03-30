<template>
  <div class="canvas-container" ref="canvasWrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const canvasWrapper = ref(null)
const canvas = ref(null)

let scene, camera, renderer, object, group
let rafId = null

onMounted(() => {
  initThree()
  createScrollAnimation()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (renderer) renderer.dispose()
})

const initThree = () => {
  scene = new THREE.Scene()
  scene.background = null // Transparent background

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 10

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create an abstract sleek geometry (TorusKnot or Icosahedron for 'AI' feel)
  group = new THREE.Group()
  scene.add(group)

  const geometry = new THREE.IcosahedronGeometry(2, 0)
  
  // Minimalist wireframe/glass material
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x000000,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.9, // glass-like
    ior: 1.5,
    thickness: 0.5,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  })

  // Add an inner solid core
  const coreGeo = new THREE.IcosahedronGeometry(1.2, 2)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x1d1d1f,
    roughness: 0.2,
    metalness: 0.8
  })

  object = new THREE.Mesh(geometry, material)
  const core = new THREE.Mesh(coreGeo, coreMat)
  
  group.add(object)
  group.add(core)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 2)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight)
  
  const blueLight = new THREE.PointLight(0x0066cc, 5, 20)
  blueLight.position.set(-5, -5, -5)
  scene.add(blueLight)

  // Resize handler
  window.addEventListener('resize', onWindowResize)

  // Animation Loop for base idle rotation
  const animate = () => {
    rafId = requestAnimationFrame(animate)
    
    // Idle rotation
    object.rotation.y += 0.002
    object.rotation.x += 0.001
    core.rotation.y -= 0.005
    
    renderer.render(scene, camera)
  }
  animate()
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const createScrollAnimation = () => {
  // Bind Group rotation and position to document scroll
  gsap.to(group.rotation, {
    y: Math.PI * 4,
    x: Math.PI * 2,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  })

  gsap.to(group.position, {
    y: -2,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  })
}
</script>

<style scoped>
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}
</style>
