"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, Clock, Eye, MoreHorizontal, RefreshCw } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const inspections = [
  {
    id: 1,
    property: "Skyline Tower",
    address: "123 Main St",
    date: "2025-02-25",
    status: "pending",
    progress: 0,
    inspector: "John Smith",
  },
  {
    id: 2,
    property: "Oceanview Apartments",
    address: "456 Beach Rd",
    date: "2025-02-24",
    status: "in-review",
    progress: 65,
    inspector: "Sarah Johnson",
  },
  {
    id: 3,
    property: "Highland Office Park",
    address: "789 Mountain Ave",
    date: "2025-02-23",
    status: "verified",
    progress: 100,
    inspector: "Michael Brown",
  },
  {
    id: 4,
    property: "Riverside Complex",
    address: "321 River Ln",
    date: "2025-02-22",
    status: "rejected",
    progress: 100,
    inspector: "Emily Davis",
    issues: 3,
  },
]

export function InspectionStatusBoard() {
  const [activeTab, setActiveTab] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-blue-400" />
      case "in-review":
        return <RefreshCw className="h-4 w-4 text-orange-400 animate-spin-slow" />
      case "verified":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "rejected":
        return <AlertTriangle className="h-4 w-4 text-red-400" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="border-blue-500/50 text-blue-400">
            Pending
          </Badge>
        )
      case "in-review":
        return (
          <Badge variant="outline" className="border-orange-500/50 text-orange-400">
            In Review
          </Badge>
        )
      case "verified":
        return (
          <Badge variant="outline" className="border-green-500/50 text-green-400">
            Verified
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="border-red-500/50 text-red-400">
            Rejected
          </Badge>
        )
      default:
        return null
    }
  }

  const filteredInspections =
    activeTab === "all" ? inspections : inspections.filter((inspection) => inspection.status === activeTab)

  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-5 bg-black/40 border border-white/10">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="in-review">In Review</TabsTrigger>
        <TabsTrigger value="verified">Verified</TabsTrigger>
        <TabsTrigger value="rejected">Rejected</TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className="mt-4">
        <div className="space-y-3">
          {filteredInspections.map((inspection) => (
            <motion.div
              key={inspection.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-black/40 flex items-center justify-center">
                    {getStatusIcon(inspection.status)}
                  </div>
                  <div>
                    <h4 className="font-medium">{inspection.property}</h4>
                    <p className="text-xs text-white/60">{inspection.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusBadge(inspection.status)}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-white/60">Date</p>
                  <p className="text-sm">{new Date(inspection.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-white/60">Inspector</p>
                  <p className="text-sm">{inspection.inspector}</p>
                </div>
                <div>
                  <p className="text-xs text-white/60">Progress</p>
                  <div className="flex items-center gap-2">
                    <Progress value={inspection.progress} className="h-2 flex-1 bg-white/10" />
                    <span className="text-xs">{inspection.progress}%</span>
                  </div>
                </div>
              </div>

              {inspection.status === "rejected" && (
                <div className="mt-3 p-2 rounded bg-red-500/10 border border-red-500/30">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <p className="text-xs text-red-400">{inspection.issues} critical issues require attention</p>
                  </div>
                </div>
              )}

              <div className="mt-3 flex justify-end">
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                  <Eye className="mr-2 h-3 w-3" />
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

