import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Statistics from "./components/Statistics"
import CTA from "./components/CTA"

const App: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Hero />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Features />
        <Testimonials />
        <Statistics />
        <CTA />
      </motion.div>
    </div>
  )
}

export default App

