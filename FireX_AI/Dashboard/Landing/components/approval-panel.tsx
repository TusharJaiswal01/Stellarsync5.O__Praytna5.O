"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check, X, RotateCcw } from "lucide-react"

export function ApprovalPanel() {
  return (
    <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-bold">Approval Panel</h2>
        <p className="text-sm text-gray-400">AI-assisted verification system</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="aspect-video rounded-lg overflow-hidden relative">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Building preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-bold">Central Plaza Building</h3>
            <p className="text-sm text-gray-300">Last inspection: 2 days ago</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <ActionButton icon={<Check className="h-6 w-6" />} label="Approve" color="green" />
          <ActionButton icon={<X className="h-6 w-6" />} label="Reject" color="red" />
          <ActionButton icon={<RotateCcw className="h-6 w-6" />} label="Revise" color="yellow" />
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">AI Recommendations</h4>
          <div className="space-y-2 text-sm">
            <RecommendationItem text="Update fire extinguisher in lobby" severity="high" />
            <RecommendationItem text="Check emergency exit signage" severity="medium" />
            <RecommendationItem text="Review evacuation plan" severity="low" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ActionButton({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: "red" | "green" | "yellow"
}) {
  const colors = {
    red: "hover:bg-red-500/20 hover:border-red-500/50",
    green: "hover:bg-green-500/20 hover:border-green-500/50",
    yellow: "hover:bg-yellow-500/20 hover:border-yellow-500/50",
  }

  return (
    <motion.button
      className={`p-4 rounded-lg border border-white/10 flex flex-col items-center gap-2 transition-colors ${colors[color]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </motion.button>
  )
}

function RecommendationItem({
  text,
  severity,
}: {
  text: string
  severity: "high" | "medium" | "low"
}) {
  const colors = {
    high: "border-red-500/50 bg-red-500/10",
    medium: "border-yellow-500/50 bg-yellow-500/10",
    low: "border-green-500/50 bg-green-500/10",
  }

  return <div className={`p-3 rounded-lg border ${colors[severity]}`}>{text}</div>
}

