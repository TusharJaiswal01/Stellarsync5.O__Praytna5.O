import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import * as THREE from "three"

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      // Create a DNA helix
      const dnaGeometry = new THREE.TorusKnotGeometry(3, 0.5, 100, 16, 2, 3)
      const dnaMaterial = new THREE.MeshPhongMaterial({ color: 0x4a90e2, wireframe: true })
      const dna = new THREE.Mesh(dnaGeometry, dnaMaterial)
      dna.position.set(0, 2, -5)
      scene.add(dna)

      // Create a heart
      const heartShape = new THREE.Shape()
      heartShape.moveTo(0, 0)
      heartShape.bezierCurveTo(0, 3, 3, 4, 3, 0)
      heartShape.bezierCurveTo(3, -1, 1.5, -2, 0, -3)
      heartShape.bezierCurveTo(-1.5, -2, -3, -1, -3, 0)
      heartShape.bezierCurveTo(-3, 4, 0, 3, 0, 0)
      const heartGeometry = new THREE.ExtrudeGeometry(heartShape, { depth: 0.5, bevelEnabled: false })
      const heartMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b6b, wireframe: true })
      const heart = new THREE.Mesh(heartGeometry, heartMaterial)
      heart.scale.set(0.5, 0.5, 0.5)
      heart.position.set(-5, 0, -2)
      scene.add(heart)

      // Create a stethoscope
      const torusGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100)
      const torusMaterial = new THREE.MeshPhongMaterial({ color: 0x54d1db, wireframe: true })
      const stethoscope = new THREE.Mesh(torusGeometry, torusMaterial)
      stethoscope.position.set(5, 0, -2)
      stethoscope.rotation.x = Math.PI / 2
      scene.add(stethoscope)

      // Create a pill
      const pillGeometry = new THREE.CapsuleGeometry(0.5, 1.5, 8, 16)
      const pillMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700, wireframe: true })
      const pill = new THREE.Mesh(pillGeometry, pillMaterial)
      pill.position.set(-4, 4, -3)
      pill.rotation.z = Math.PI / 4
      scene.add(pill)

      // Create a medical cross
      const crossGeometry = new THREE.BoxGeometry(0.5, 2, 0.5)
      const crossMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, wireframe: true })
      const verticalCross = new THREE.Mesh(crossGeometry, crossMaterial)
      const horizontalCross = new THREE.Mesh(crossGeometry, crossMaterial)
      horizontalCross.rotation.z = Math.PI / 2
      const cross = new THREE.Group()
      cross.add(verticalCross)
      cross.add(horizontalCross)
      cross.position.set(4, -3, -4)
      scene.add(cross)

      // Create a microscope
      const microscopeBase = new THREE.CylinderGeometry(0.5, 0.7, 0.5, 16)
      const microscopeStand = new THREE.CylinderGeometry(0.1, 0.1, 2, 16)
      const microscopeHead = new THREE.SphereGeometry(0.5, 16, 16)
      const microscopeMaterial = new THREE.MeshPhongMaterial({ color: 0x808080, wireframe: true })
      const microscopeBaseMesh = new THREE.Mesh(microscopeBase, microscopeMaterial)
      const microscopeStandMesh = new THREE.Mesh(microscopeStand, microscopeMaterial)
      const microscopeHeadMesh = new THREE.Mesh(microscopeHead, microscopeMaterial)
      microscopeStandMesh.position.y = 1
      microscopeHeadMesh.position.y = 2
      microscopeHeadMesh.rotation.x = Math.PI / 4
      const microscope = new THREE.Group()
      microscope.add(microscopeBaseMesh)
      microscope.add(microscopeStandMesh)
      microscope.add(microscopeHeadMesh)
      microscope.position.set(-6, -3, -5)
      microscope.scale.set(0.7, 0.7, 0.7)
      scene.add(microscope)

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Add point light
      const pointLight = new THREE.PointLight(0xffffff, 1)
      pointLight.position.set(5, 5, 5)
      scene.add(pointLight)

      camera.position.z = 15

      const animate = () => {
        requestAnimationFrame(animate)

        dna.rotation.x += 0.01
        dna.rotation.y += 0.005

        heart.rotation.y += 0.02

        stethoscope.rotation.z += 0.01

        pill.rotation.x += 0.015
        pill.rotation.y += 0.01

        cross.rotation.y += 0.02

        microscope.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      controls.start({ opacity: 1, y: 0 })

      return () => {
        window.removeEventListener("resize", handleResize)
        renderer.dispose()
      }
    }
  }, [controls])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 opacity-80"></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to HealthCare+
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Your all-in-one healthcare support platform
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(66, 153, 225, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  )
}

export default Hero

