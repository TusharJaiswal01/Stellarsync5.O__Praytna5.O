"use client"

import { useState } from "react"
import {
  Bell,
  Building,
  Calendar,
  ChevronDown,
  Command,
  FileText,
  Flame,
  Home,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Upload,
  User,
  X,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import { InspectionStatusBoard } from "@/components/inspection-status-board"
import { UploadSection } from "@/components/upload-section"
import { DataVisualizations } from "@/components/data-visualizations"
import { NotificationsPanel } from "@/components/notifications-panel"
import { AIAssistant } from "@/components/ai-assistant"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTheme, setActiveTheme] = useState<"cyberpunk" | "minimalist" | "holographic">("cyberpunk")
  const [showNotifications, setShowNotifications] = useState(false)
  const [showAIAssistant, setShowAIAssistant] = useState(false)

  return (
    <div className={`min-h-screen bg-black text-white ${activeTheme}`}>
      {/* Glassmorphism background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vh] rounded-full bg-red-500/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vh] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-[40%] right-[30%] w-[20vw] h-[20vh] rounded-full bg-orange-500/10 blur-[100px]" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex h-screen overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          className="h-full bg-black/40 backdrop-blur-xl border-r border-white/10"
          initial={{ width: isSidebarOpen ? 280 : 80 }}
          animate={{ width: isSidebarOpen ? 280 : 80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <motion.div className="flex items-center gap-3" animate={{ opacity: isSidebarOpen ? 1 : 0 }}>
                <Flame className="h-6 w-6 text-red-500" />
                <span className="font-bold text-lg">FireGuard AI</span>
              </motion.div>
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex-1 py-4 px-2 space-y-1">
              {[
                { icon: Home, label: "Dashboard", active: true },
                { icon: Building, label: "Properties" },
                { icon: FileText, label: "Reports" },
                { icon: Calendar, label: "Schedule" },
                { icon: Shield, label: "Compliance" },
                { icon: User, label: "Team" },
              ].map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start ${item.active ? "bg-gradient-to-r from-red-500/20 to-blue-500/20 text-white" : ""}`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {isSidebarOpen && <span>{item.label}</span>}
                </Button>
              ))}
            </nav>

            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                {isSidebarOpen && (
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Fire Safety Inspector</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 backdrop-blur-lg bg-black/40 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-[200px] lg:w-[300px] pl-8 bg-background/50 border-white/10 focus-visible:ring-red-500/50"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="relative border-white/10 hover:bg-white/5 hover:text-red-400"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px]">
                  3
                </span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-white/10 hover:bg-white/5 hover:text-blue-400"
                onClick={() => setShowAIAssistant(!showAIAssistant)}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    <Settings className="h-5 w-5 mr-2" />
                    <span>Settings</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/80 backdrop-blur-xl border-white/10">
                  <DropdownMenuLabel>Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className={activeTheme === "cyberpunk" ? "bg-white/10" : ""}
                    onClick={() => setActiveTheme("cyberpunk")}
                  >
                    Dark Cyberpunk
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={activeTheme === "minimalist" ? "bg-white/10" : ""}
                    onClick={() => setActiveTheme("minimalist")}
                  >
                    Sci-Fi Minimalist
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={activeTheme === "holographic" ? "bg-white/10" : ""}
                    onClick={() => setActiveTheme("holographic")}
                  >
                    Holographic
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Command className="mr-2 h-4 w-4" />
                    <span>Command Center</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Fire Inspection Dashboard</h1>
                <p className="text-muted-foreground">Monitor and manage fire safety inspections</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                  <FileText className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                  <Upload className="mr-2 h-4 w-4" />
                  New Inspection
                </Button>
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Upload Section */}
              <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-black/40 backdrop-blur-md border-white/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-500/20 to-blue-500/20 border-b border-white/10">
                  <CardTitle>AI-Powered Upload</CardTitle>
                  <CardDescription className="text-white/70">Upload building images for AI analysis</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <UploadSection />
                </CardContent>
              </Card>

              {/* Inspection Status Board */}
              <Card className="col-span-1 md:col-span-2 bg-black/40 backdrop-blur-md border-white/10">
                <CardHeader className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10">
                  <CardTitle>Inspection Status</CardTitle>
                  <CardDescription className="text-white/70">Real-time inspection tracking and status</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <InspectionStatusBoard />
                </CardContent>
              </Card>

              {/* Data Visualizations */}
              <Card className="col-span-1 lg:col-span-3 bg-black/40 backdrop-blur-md border-white/10">
                <CardHeader className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-b border-white/10">
                  <CardTitle>Analytics & Insights</CardTitle>
                  <CardDescription className="text-white/70">Fire safety trends and compliance metrics</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <DataVisualizations />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Notifications Panel */}
        <AnimatePresence>
          {showNotifications && (
            <motion.div
              className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-black/80 backdrop-blur-xl border-l border-white/10 z-40"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="font-semibold">Notifications</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowNotifications(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <NotificationsPanel />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Assistant */}
        <AnimatePresence>
          {showAIAssistant && (
            <motion.div
              className="fixed bottom-6 right-6 w-96 h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg z-40"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  <h3 className="font-semibold">FireGuard AI Assistant</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowAIAssistant(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 h-[calc(100%-8rem)]">
                <AIAssistant />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

