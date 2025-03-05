"use client"

import { RiskAssessment } from "@/components/risk-assessment"
import { ApprovalPanel } from "@/components/approval-panel"
import { NotificationCenter } from "@/components/notification-center"
import { Stats } from "@/components/stats"
import { PendingReviews } from "@/components/pending-reviews"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stats />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskAssessment />
        <ApprovalPanel />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PendingReviews />
        </div>
        <NotificationCenter />
      </div>
    </div>
  )
}

