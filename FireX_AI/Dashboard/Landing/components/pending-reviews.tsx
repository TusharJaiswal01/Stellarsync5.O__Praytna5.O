"use client"

import { motion } from "framer-motion"
import { Building2, AlertTriangle, Calendar, MapPin } from "lucide-react"

export function PendingReviews() {
  const reviews = [
    {
      building: "Central Plaza",
      address: "123 Main St",
      date: "2024-03-01",
      risk: "high",
    },
    {
      building: "Tech Hub",
      address: "456 Innovation Ave",
      date: "2024-03-02",
      risk: "medium",
    },
    {
      building: "Green Tower",
      address: "789 Eco Blvd",
      date: "2024-03-03",
      risk: "low",
    },
  ]

  return (
    <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-bold">Pending Reviews</h2>
        <p className="text-sm text-gray-400">Upcoming inspections and assessments</p>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ReviewCard({
  building,
  address,
  date,
  risk,
}: {
  building: string
  address: string
  date: string
  risk: "high" | "medium" | "low"
}) {
  const risks = {
    high: "border-red-500/50 hover:bg-red-500/10",
    medium: "border-yellow-500/50 hover:bg-yellow-500/10",
    low: "border-green-500/50 hover:bg-green-500/10",
  }

  return (
    <motion.div
      className={`p-4 rounded-lg border ${risks[risk]} transition-colors`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-white/5">
          <Building2 className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{building}</h3>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              <span className="capitalize">{risk} Risk</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

