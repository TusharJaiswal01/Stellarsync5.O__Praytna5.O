"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function RiskAssessment() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Create building model
    const geometry = new THREE.BoxGeometry(2, 3, 2)
    const material = new THREE.MeshPhongMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    })
    const building = new THREE.Mesh(geometry, material)
    scene.add(building)

    // Add risk indicators
    const riskPoints = [new THREE.Vector3(1, 1.5, 1), new THREE.Vector3(-1, 0, 1), new THREE.Vector3(0, -1.5, -1)]

    const riskGeometry = new THREE.SphereGeometry(0.1, 16, 16)
    const riskMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    riskPoints.forEach((point) => {
      const riskIndicator = new THREE.Mesh(riskGeometry, riskMaterial)
      riskIndicator.position.copy(point)
      scene.add(riskIndicator)
    })

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xff0000, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    camera.position.z = 5

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-bold">AI Risk Assessment</h2>
        <p className="text-sm text-gray-400">Real-time 3D visualization of building risks</p>
      </div>
      <div className="aspect-video relative">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute bottom-4 left-4 space-y-2">
          <RiskIndicator level="High" count={3} />
          <RiskIndicator level="Medium" count={5} />
          <RiskIndicator level="Low" count={2} />
        </div>
      </div>
    </div>
  )
}

function RiskIndicator({ level, count }: { level: string; count: number }) {
  const colors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className={`h-3 w-3 rounded-full ${colors[level as keyof typeof colors]}`} />
      <span>
        {level}: {count}
      </span>
    </div>
  )
}

