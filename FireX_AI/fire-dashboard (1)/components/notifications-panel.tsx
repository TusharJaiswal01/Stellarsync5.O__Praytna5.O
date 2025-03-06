"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, Clock, FileText } from "lucide-react"

export function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Critical Issue Detected",
      message: "Blocked fire exit at Skyline Tower requires immediate attention",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "info",
      title: "Inspection Scheduled",
      message: "New inspection for Oceanview Apartments on March 3rd",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "success",
      title: "Inspection Completed",
      message: "Highland Office Park inspection verified with no issues",
      time: "3 hours ago",
    },
    {
      id: 4,
      type: "alert",
      title: "Equipment Maintenance Required",
      message: "Fire extinguishers at Riverside Complex need replacement",
      time: "Yesterday",
    },
    {
      id: 5,
      type: "info",
      title: "Report Generated",
      message: "Monthly compliance report is ready for review",
      time: "2 days ago",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-400" />
      case "info":
        return <Clock className="h-5 w-5 text-blue-400" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      default:
        return <FileText className="h-5 w-5 text-white" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "alert":
        return "bg-red-500/10 border-red-500/30"
      case "info":
        return "bg-blue-500/10 border-blue-500/30"
      case "success":
        return "bg-green-500/10 border-green-500/30"
      default:
        return "bg-white/5 border-white/10"
    }
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-3 rounded-lg border ${getBackgroundColor(notification.type)}`}
        >
          <div className="flex gap-3">
            <div className="mt-0.5">{getIcon(notification.type)}</div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm">{notification.title}</h4>
              <p className="text-xs text-white/70 mt-1">{notification.message}</p>
              <p className="text-xs text-white/50 mt-2">{notification.time}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

