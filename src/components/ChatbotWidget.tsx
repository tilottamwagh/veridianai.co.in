"use client"

import * as React from "react"
import { MessageSquare, X, Send, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<{role: "user" | "bot", text: string}[]>([
    { role: "bot", text: "Hi! I'm VeriBot. I can help you find case studies, book a demo, or explain our platform features. What would you like to know?" }
  ])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [leadState, setLeadState] = React.useState<"idle" | "asking" | "captured">("idle")
  const [pendingAnswer, setPendingAnswer] = React.useState<string | null>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const getKnowledgeBaseAnswer = (userMsg: string) => {
    const lower = userMsg.toLowerCase()
    if (lower.includes("pricing") || lower.includes("cost") || lower.includes("price")) {
      return "Our SaaS platforms like VeriChat start at ₹4,999/mo. For dedicated enterprise models, our project pricing starts around ₹8L. Shall I direct you to our pricing page or connect you with sales?"
    } else if (lower.includes("case study") || lower.includes("example") || lower.includes("clients")) {
      return "We've helped a leading NBFC reduce KYC time by 80% using VeriVision, and enabled a Fortune 500 retailer to forecast demand with 94% accuracy, saving $2.1M annually."
    } else if (lower.includes("industry") || lower.includes("industries") || lower.includes("sector")) {
      return "We deploy enterprise AI architectures primarily for Healthcare, Finance, Education, Retail, and Security. You can explore these on our Solutions page."
    } else if (lower.includes("demo") || lower.includes("book") || lower.includes("contact")) {
      return "Excellent! You can schedule a live technical demo or reach out to our team via the 'Contact' page in the top navigation."
    } else if (lower.includes("accuracy") || lower.includes("accurate") || lower.includes("performance") || lower.includes("metric")) {
      return "Our models are engineered for scale. We typically achieve 96.2% transcription accuracy for voice, and 99.1% defect detection for CV systems."
    } else if (lower.includes("stack") || lower.includes("tech") || lower.includes("technology")) {
      return "Our models are trained using PyTorch and TensorFlow, and we deploy via Kubernetes and Docker. The API layer is powered by high-performance Node.js and Go microservices."
    } else if (lower.includes("security") || lower.includes("privacy") || lower.includes("safe")) {
      return "Security is our priority. We are ISO 27001 certified. We offer on-premise deployments or secured VPCs, ensuring your enterprise data never leaks."
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return "Hello there! How can I assist you with Veridian AI Tech today?"
    } else if (lower.includes("verichat") || lower.includes("chatbot")) {
      return "VeriChat is our intelligent virtual assistant platform. It's trained entirely on your own company data and can integrate into web, WhatsApp, and Telegram in under 2 weeks."
    } else if (lower.includes("verivision") || lower.includes("vision") || lower.includes("camera") || lower.includes("image")) {
      return "VeriVision is our Computer Vision platform designed for real-time defect detection, crowd analytics, and spatial mapping at the edge."
    } else if (lower.includes("verivoice") || lower.includes("voice") || lower.includes("audio")) {
      return "VeriVoice provides sub-300ms speech-to-text with advanced speaker diarization—perfect for replacing traditional IVR systems with intent-driven conversations."
    } else if (lower.includes("service") || lower.includes("consulting")) {
      return "We offer end-to-end AI consulting: from 4-week Discovery Sprints to ongoing retainers and dedicated engineering teams. Which model fits your needs?"
    } else if (lower.includes("about") || lower.includes("company") || lower.includes("who")) {
      return "Veridian AI Tech is a premier AI engineering firm founded in 2021 in Pune. Our mission is to build explainable and highly accurate AI systems for enterprises."
    } else if (lower.includes("time") || lower.includes("how long")) {
      return "We focus on rapid, measurable outcomes. Most of our custom enterprise solutions are deployed and creating measurable value within 90 days."
    } else if (lower.includes("thank")) {
      return "You're very welcome! Let me know if you need anything else."
    }
    return "I understand. To give you the most accurate technical information, could you elaborate on your team's specific requirements?"
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMsg = inputValue.trim()
    setMessages(prev => [...prev, { role: "user", text: userMsg }])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response logic
    setTimeout(() => {
      let botResponse = ""
      const isGreeting = userMsg.toLowerCase().match(/^(hi|hey|hello|thank)/)
      
      if (leadState === "idle" && !isGreeting) {
        setPendingAnswer(getKnowledgeBaseAnswer(userMsg))
        setLeadState("asking")
        botResponse = "I can definitely answer that! Before I do, could I get your work email so our team can send you a detailed follow-up later? (You can also reply 'no')"
      } else if (leadState === "asking") {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userMsg)
        setLeadState("captured")
        if (isEmail) {
           botResponse = `Thanks! We've saved your info. Regarding your question: ${pendingAnswer}`
        } else {
           botResponse = `No problem at all. Regarding your question: ${pendingAnswer}`
        }
        setPendingAnswer(null)
      } else {
        botResponse = getKnowledgeBaseAnswer(userMsg)
      }

      setMessages(prev => [...prev, { role: "bot", text: botResponse }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[320px] h-[480px] bg-bg-secondary border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Chat with VeriBot"
          >
            {/* Header */}
            <div className="bg-bg-surface border-b border-border p-4 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent pointer-events-none"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-blue rounded-full blur-md opacity-50 animate-pulse"></div>
                  <div className="bg-bg-primary border border-accent-blue/40 p-2 rounded-full relative z-10 text-accent-blue shadow-glow">
                    <Bot className="w-5 h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary text-sm flex items-center gap-2">
                    VeriBot <span className="bg-accent-blue/20 border border-accent-blue/30 text-accent-blue text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">AI Agent</span>
                  </h3>
                  <div className="text-xs text-accent-teal flex items-center gap-1.5 mt-0.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(20,184,166,0.8)] animate-[ping_1.5s_ease-in-out_infinite]"></span>
                    Neural Core Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition-colors focus-ring rounded-sm p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                    msg.role === "bot" 
                      ? "bg-bg-surface text-text-primary self-start rounded-tl-sm"
                      : "bg-accent-blue text-white self-end rounded-tr-sm"
                  )}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-bg-surface self-start rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-bg-surface border-t border-border flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-bg-secondary border border-border rounded-full px-4 text-sm text-text-primary focus:outline-none focus:border-accent-blue/50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-accent-blue text-white p-2 rounded-full disabled:opacity-50 hover:bg-blue-600 transition-colors focus-ring disabled:hover:bg-accent-blue"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-bg-secondary border-2 border-border shadow-[0_0_40px_rgba(59,130,246,0.2)] rounded-full flex items-center justify-center text-white hover:border-accent-blue hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all duration-300 focus-ring relative group"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <div className="absolute inset-0 bg-accent-blue rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity" />
        {isOpen ? (
          <X className="w-6 h-6 text-text-muted group-hover:text-text-primary" />
        ) : (
          <div className="relative">
            <div className="absolute inset-0 bg-accent-blue scale-150 blur-lg opacity-40 animate-pulse"></div>
            <Bot className="w-8 h-8 text-accent-blue relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          </div>
        )}
      </button>
    </div>
  )
}
