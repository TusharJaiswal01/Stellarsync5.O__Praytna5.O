"use client"

import { useState } from "react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { Calendar, ChevronDown, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const complianceData = [
  { name: "Jan", value: 78 },
  { name: "Feb", value: 82 },
  { name: "Mar", value: 85 },
  { name: "Apr", value: 79 },
  { name: "May", value: 88 },
  { name: "Jun", value: 92 },
]

const issueTypeData = [
  { name: "Blocked Exits", value: 35 },
  { name: "Equipment Issues", value: 25 },
  { name: "Electrical Hazards", value: 20 },
  { name: "Structural Problems", value: 15 },
  { name: "Other", value: 5 },
]

const buildingComplianceData = [
  { name: "Skyline Tower", compliance: 95, violations: 2 },
  { name: "Oceanview Apts", compliance: 78, violations: 8 },
  { name: "Highland Office", compliance: 88, violations: 4 },
  { name: "Riverside Complex", compliance: 65, violations: 12 },
  { name: "Metro Center", compliance: 92, violations: 3 },
  { name: "Harbor Point", compliance: 85, violations: 5 },
]

const COLORS = ["#FF5555", "#FF8C38", "#FFCD56", "#4BC0C0", "#36A2EB"]

export function DataVisualizations() {
  const [timeRange, setTimeRange] = useState("6m")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Tabs defaultValue="overview" className="w-auto">
          <TabsList className="bg-black/40 border border-white/10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="hazards">Hazards</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{timeRange === "6m" ? "Last 6 Months" : timeRange === "1y" ? "Last Year" : "All Time"}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-xl border-white/10">
              <DropdownMenuItem onClick={() => setTimeRange("6m")}>Last 6 Months</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeRange("1y")}>Last Year</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeRange("all")}>All Time</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Compliance Trend */}
        <Card className="bg-black/40 backdrop-blur-md border-white/10 col-span-2">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Compliance Trend</h3>
              <p className="text-sm text-white/60">Monthly compliance score</p>
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={complianceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCompliance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4BC0C0" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4BC0C0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#4BC0C0" fillOpacity={1} fill="url(#colorCompliance)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Issue Types */}
        <Card className="bg-black/40 backdrop-blur-md border-white/10">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Issue Types</h3>
              <p className="text-sm text-white/60">Distribution of safety issues</p>
            </div>
            <div className="h-[240px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={issueTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {issueTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Building Compliance */}
        <Card className="bg-black/40 backdrop-blur-md border-white/10 col-span-1 md:col-span-3">
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Building Compliance</h3>
              <p className="text-sm text-white/60">Compliance scores by property</p>
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buildingComplianceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="compliance" name="Compliance %" fill="#4BC0C0" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="violations" name="Violations" fill="#FF5555" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

