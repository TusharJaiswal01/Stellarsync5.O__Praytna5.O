"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Building2, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function Stats() {
  const stats = [
    {
      label: "Total Buildings",
      value: "156",
      icon: Building2,
      color: "blue",
    },
    {
      label: "High Risk",
      value: "23",
      icon: AlertTriangle,
      color: "red",
    },
    {
      label: "Compliant",
      value: "89%",
      icon: CheckCircle,
      color: "green",
    },
    {
      label: "Pending Review",
      value: "12",
      icon: Clock,
      color: "yellow",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} index={index} />
      ))}
    </>
  )
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  index,
}: {
  label: string
  value: string
  icon: React.ElementType
  color: "red" | "green" | "blue" | "yellow"
  index: number
}) {
  const colors = {
    red: "from-red-500/20 to-transparent border-red-500/50",
    green: "from-green-500/20 to-transparent border-green-500/50",
    blue: "from-blue-500/20 to-transparent border-blue-500/50",
    yellow: "from-yellow-500/20 to-transparent border-yellow-500/50",
  }

  return (
    <motion.div
      className={`rounded-xl backdrop-blur-xl bg-gradient-to-b ${colors[color]} border p-6`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8" />
        <div>
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

