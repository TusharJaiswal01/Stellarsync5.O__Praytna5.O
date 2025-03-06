"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your FireGuard AI assistant. How can I help you with fire safety inspections today?",
      sender: "ai",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("inspection")) {
        response =
          "To schedule a new inspection, go to the Calendar section and click 'New Inspection'. You'll need to provide the property details, preferred date, and inspection type."
      } else if (input.toLowerCase().includes("report")) {
        response =
          "You can generate reports from the Analytics section. Select the property, date range, and report type, then click 'Generate Report'. Reports can be exported as PDF or shared directly."
      } else if (input.toLowerCase().includes("hazard") || input.toLowerCase().includes("risk")) {
        response =
          "I've detected several common hazards in recent inspections: blocked fire exits, outdated extinguishers, and improper storage of flammable materials. Would you like specific recommendations for addressing these issues?"
      } else {
        response =
          "I can help with scheduling inspections, generating reports, analyzing fire safety data, and providing compliance recommendations. What specific information do you need?"
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        content: response,
        sender: "ai",
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  message.sender === "user" ? "bg-blue-500 text-white" : "bg-white/10 text-white"
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-white/10">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div
                    className="h-2 w-2 rounded-full bg-white/50 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="h-2 w-2 rounded-full bg-white/50 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border-white/10"
          />
          <Button type="submit" size="icon" className="bg-blue-500 hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

