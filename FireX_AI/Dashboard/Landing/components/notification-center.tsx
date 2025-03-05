"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react"

export function NotificationCenter() {
  return (
    <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Notifications</h2>
          <p className="text-sm text-gray-400">Real-time alerts & updates</p>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Bell className="h-6 w-6 text-red-500" />
        </motion.div>
      </div>
      <div className="p-4 space-y-4">
        <NotificationItem
          icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
          title="High Risk Alert"
          description="Fire hazard detected in Building A"
          time="2m ago"
          priority="high"
        />
        <NotificationItem
          icon={<CheckCircle className="h-5 w-5 text-green-500" />}
          title="Inspection Complete"
          description="Building B passed all safety checks"
          time="1h ago"
          priority="low"
        />
        <NotificationItem
          icon={<Info className="h-5 w-5 text-blue-500" />}
          title="System Update"
          description="New AI features available"
          time="3h ago"
          priority="medium"
        />
      </div>
    </div>
  )
}

function NotificationItem({
  icon,
  title,
  description,
  time,
  priority,
}: {
  icon: React.ReactNode
  title: string
  description: string
  time: string
  priority: "high" | "medium" | "low"
}) {
  const priorities = {
    high: "border-red-500/50 hover:bg-red-500/10",
    medium: "border-blue-500/50 hover:bg-blue-500/10",
    low: "border-green-500/50 hover:bg-green-500/10",
  }

  return (
    <motion.div
      className={`p-4 rounded-lg border ${priorities[priority]} transition-colors cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex gap-4">
        <div className="mt-1">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{title}</h3>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

