import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  { name: "John Doe", text: "HealthCare+ has revolutionized how I manage my health.", avatar: "👨" },
  { name: "Jane Smith", text: "The telemedicine feature saved me so much time and worry.", avatar: "👩" },
  { name: "Mike Johnson", text: "I love how easy it is to track my medications and vitals.", avatar: "🧑" },
]

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          What Our Users Say
        </h2>
        <div className="max-w-2xl mx-auto relative h-64">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-blue-800 to-purple-800 p-8 rounded-lg shadow-lg">
                <div className="text-6xl mb-4">{testimonials[index].avatar}</div>
                <p className="text-lg mb-4 text-blue-200">{testimonials[index].text}</p>
                <p className="font-semibold text-purple-300">{testimonials[index].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

