"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  Bell,
  Building2,
  FileText,
  FlameKindling,
  LayoutDashboard,
  Settings,
  Shield,
} from "lucide-react"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <motion.div
      className="h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 p-4 flex flex-col"
      initial={{ width: 240 }}
      animate={{ width: isExpanded ? 240 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <FlameKindling className="h-8 w-8 text-red-500" />
        {isExpanded && (
          <motion.h1
            className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FireSafe AI
          </motion.h1>
        )}
      </div>
      <nav className="space-y-2 flex-1">
        <NavItem icon={<LayoutDashboard />} label="Dashboard" isExpanded={isExpanded} />
        <NavItem icon={<Building2 />} label="Buildings" isExpanded={isExpanded} />
        <NavItem icon={<AlertTriangle />} label="Risks" isExpanded={isExpanded} />
        <NavItem icon={<Shield />} label="Compliance" isExpanded={isExpanded} />
        <NavItem icon={<FileText />} label="Reports" isExpanded={isExpanded} />
        <NavItem icon={<Bell />} label="Notifications" isExpanded={isExpanded} />
      </nav>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-auto p-2 hover:bg-white/5 rounded-lg transition-colors"
      >
        <Settings className="h-5 w-5" />
      </button>
    </motion.div>
  )
}

function NavItem({ icon, label, isExpanded }: { icon: React.ReactNode; label: string; isExpanded: boolean }) {
  return (
    <Link href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group relative">
      <div className="relative">
        {icon}
        <div className="absolute inset-0 bg-red-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {isExpanded && (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {label}
        </motion.span>
      )}
    </Link>
  )
}

