"use client"

import * as React from "react"
import { X, Send, Bot, MessageSquare, Mic } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mode, setMode] = React.useState<"select" | "chat" | "voice">("select")
  const [messages, setMessages] = React.useState<{role: "user" | "bot", text: string}[]>([
    { role: "bot", text: "Hi! I'm VeriBot. I can help you find case studies, book a demo, or explain our platform features. What would you like to know?" }
  ])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [leadState, setLeadState] = React.useState<"idle" | "asking" | "captured">("idle")
  const [pendingAnswer, setPendingAnswer] = React.useState<string | null>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  // Voice States
  const [isListening, setIsListening] = React.useState(false)
  const [voiceTranscript, setVoiceTranscript] = React.useState("")
  const [synthVoice, setSynthVoice] = React.useState<SpeechSynthesisVoice | null>(null)
  const [isVoiceProcessing, setIsVoiceProcessing] = React.useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, mode, voiceTranscript])

  React.useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        const femaleVoice = voices.find(v => 
          v.name.includes("Female") || 
          v.name.includes("Samantha") || 
          v.name.includes("Zira") ||
          v.name.includes("Victoria") ||
          v.name.includes("Karen")
        ) || voices.find(v => v.lang.startsWith("en-")) || voices[0]
        setSynthVoice(femaleVoice || null)
      }
      // Safari needs timeouts because getVoices is async initially
      loadVoices()
      window.speechSynthesis.onvoiceschanged = loadVoices
      setTimeout(loadVoices, 1000)
    }
  }, [])

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    if (synthVoice) utterance.voice = synthVoice
    utterance.pitch = 1.15
    utterance.rate = 1.05
    window.speechSynthesis.speak(utterance)
  }

  const getKnowledgeBaseAnswer = (userMsg: string) => {
    const lower = userMsg.toLowerCase()
    if (lower.includes("pricing") || lower.includes("cost") || lower.includes("price")) return "Our SaaS platforms like VeriChat start at 4,999 rupees per month. For dedicated enterprise models, our project pricing starts around 8 Lakhs. Shall I direct you to our pricing page or connect you with sales?"
    if (lower.includes("case study") || lower.includes("example") || lower.includes("clients")) return "We've helped a leading NBFC reduce KYC time by 80% using VeriVision, and enabled a Fortune 500 retailer to forecast demand with 94% accuracy, saving 2.1 million dollars annually."
    if (lower.includes("industry") || lower.includes("industries") || lower.includes("sector")) return "We deploy enterprise AI architectures primarily for Healthcare, Finance, Education, Retail, and Security. You can explore these on our Solutions page."
    if (lower.includes("demo") || lower.includes("book") || lower.includes("contact")) return "Excellent! You can schedule a live technical demo or reach out to our team via the 'Contact' page in the top navigation."
    if (lower.includes("accuracy") || lower.includes("accurate") || lower.includes("performance") || lower.includes("metric")) return "Our models are engineered for scale. We typically achieve 96.2% transcription accuracy for voice, and 99.1% defect detection for Computer Vision systems."
    if (lower.includes("stack") || lower.includes("tech") || lower.includes("technology")) return "Our models are trained using PyTorch and TensorFlow, and we deploy via Kubernetes and Docker. The API layer is powered by high-performance microservices."
    if (lower.includes("security") || lower.includes("privacy") || lower.includes("safe")) return "Security is our absolute priority. We are ISO 27001 certified. We offer on-premise deployments or secured VPCs, ensuring your enterprise data never leaks."
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) return "Hello there! I am VeriBot, your AI Assistant. How can I help you today?"
    if (lower.includes("verichat") || lower.includes("chatbot")) return "VeriChat is our intelligent virtual assistant platform. It's trained entirely on your own company data and can integrate into web, WhatsApp, and Telegram in under 2 weeks."
    if (lower.includes("verivision") || lower.includes("vision") || lower.includes("camera") || lower.includes("image")) return "VeriVision is our Computer Vision platform designed for real-time defect detection, crowd analytics, and spatial mapping at the edge."
    if (lower.includes("verivoice") || lower.includes("voice") || lower.includes("audio")) return "VeriVoice provides sub-300ms speech-to-text with advanced speaker diarization, perfect for replacing traditional IVR systems with intent-driven conversations."
    if (lower.includes("service") || lower.includes("consulting")) return "We offer end-to-end AI consulting: from 4-week Discovery Sprints to ongoing retainers and dedicated engineering teams. Which model fits your needs?"
    if (lower.includes("about") || lower.includes("company") || lower.includes("who")) return "Veridian AI Tech is a premier AI engineering firm founded in 2021 in Pune. Our mission is to build explainable and highly accurate AI systems for enterprises."
    if (lower.includes("time") || lower.includes("how long")) return "We focus on rapid, measurable outcomes. Most of our custom enterprise solutions are deployed and creating measurable value within 90 days."
    if (lower.includes("thank")) return "You are very welcome! Let me know if you need anything else."
    
    return "I understand. To give you the most accurate technical information, could you elaborate on your team's specific requirements?"
  }

  const processUserMessage = (userMsg: string, isVoice: boolean) => {
    setIsTyping(true)
    if (isVoice) setIsVoiceProcessing(true)

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
      
      if (isVoice) {
         speak(botResponse)
         setIsVoiceProcessing(false)
      }
    }, 1000)
  }

  const handleSendText = () => {
    if (!inputValue.trim()) return
    const userMsg = inputValue.trim()
    setMessages(prev => [...prev, { role: "user", text: userMsg }])
    setInputValue("")
    processUserMessage(userMsg, false)
  }

  const startVoiceListening = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Voice features are not supported in this browser. Please use Chrome or Edge.")
      return
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = true

    window.speechSynthesis.cancel() // Stop speaking if the user interrupts

    recognition.onstart = () => {
      setIsListening(true)
      setVoiceTranscript("...")
    }

    recognition.onresult = (event: any) => {
      let current = ""
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        current += event.results[i][0].transcript
      }
      setVoiceTranscript(current)
      
      if (event.results[0].isFinal) {
         const finalTranscript = event.results[0][0].transcript
         setIsListening(false)
         setVoiceTranscript("") // Clear live buffer
         setMessages(prev => [...prev, { role: "user", text: finalTranscript }]) // Commit to chat history
         processUserMessage(finalTranscript, true) // Process unified pipeline
      }
    }

    recognition.onerror = () => {
      setIsListening(false)
      setIsVoiceProcessing(false)
      setVoiceTranscript("Microphone error. Tap to try again.")
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
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
            <div className="bg-bg-surface border-b border-border p-4 flex items-center justify-between relative overflow-hidden shrink-0">
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
              <div className="flex items-center gap-1 z-10">
                {mode !== "select" && (
                    <button 
                      onClick={() => { setMode("select"); window.speechSynthesis.cancel(); setVoiceTranscript(""); setIsListening(false); }}
                      className="text-text-muted hover:text-accent-blue text-xs font-semibold mr-2 uppercase tracking-wide transition-colors"
                    >
                      Back
                    </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-text-muted hover:text-text-primary transition-colors focus-ring rounded-sm p-1"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mode: Selection Screen */}
            {mode === "select" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 p-6 flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-bg-secondary to-bg-primary">
                 <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center mb-2 shadow-inner">
                   <Bot className="w-10 h-10 text-accent-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                 </div>
                 <h4 className="text-xl font-display font-semibold text-text-primary text-center mb-2">How would you like to connect?</h4>
                 
                 <button onClick={() => setMode("chat")} className="w-full flex items-center justify-start gap-4 p-4 bg-bg-surface border border-border rounded-xl hover:border-accent-blue hover:shadow-glow transition-all group overflow-hidden relative">
                    <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="bg-bg-primary p-2 flex items-center justify-center rounded-lg border border-border group-hover:border-accent-blue/30 z-10">
                       <MessageSquare className="w-5 h-5 text-accent-blue group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col text-left z-10">
                       <span className="font-semibold text-text-primary">Text Chat</span>
                       <span className="text-xs text-text-muted">Classic messaging agent</span>
                    </div>
                 </button>

                 <button onClick={() => { setMode("voice"); setVoiceTranscript(""); speak("System connected. I am VeriBot, your AI Assistant. How can I help you today?"); }} className="w-full flex items-center justify-start gap-4 p-4 bg-bg-surface border border-border rounded-xl hover:border-accent-violet hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="bg-bg-primary p-2 flex items-center justify-center rounded-lg border border-border group-hover:border-accent-violet/30 z-10">
                       <Mic className="w-5 h-5 text-accent-violet group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col text-left z-10">
                       <span className="font-semibold text-text-primary">Voice Agent</span>
                       <span className="text-xs text-text-muted">Speak naturally with AI</span>
                    </div>
                 </button>
              </motion.div>
            )}

            {/* Mode: Shared Chat/Voice Messages Display */}
            {mode !== "select" && (
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin bg-bg-primary">
                  {messages.map((msg, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                        msg.role === "bot" 
                          ? "bg-bg-surface text-text-primary self-start rounded-tl-sm border border-border"
                          : mode === "chat" 
                             ? "bg-accent-blue text-white self-end rounded-tr-sm shadow-md"
                             : "bg-accent-violet text-white self-end rounded-tr-sm shadow-md"
                      )}
                    >
                      {msg.text}
                    </div>
                  ))}
                  
                  {/* Live Intermittent Voice Transcript */}
                  {mode === "voice" && voiceTranscript && voiceTranscript !== "..." && (
                    <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm bg-accent-violet text-white self-end rounded-tr-sm shadow-md animate-pulse">
                      {voiceTranscript}
                    </div>
                  )}

                  {isTyping && (
                    <div className="bg-bg-surface border border-border self-start rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce"></div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
            )}

            {/* Input Modes Area */}
            {mode === "chat" && (
                <div className="p-3 bg-bg-surface border-t border-border flex gap-2 shrink-0">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendText()}
                    placeholder="Type your message..."
                    className="flex-1 bg-bg-secondary border border-border rounded-full px-4 text-sm text-text-primary focus:outline-none focus:border-accent-blue/50"
                  />
                  <button
                    onClick={handleSendText}
                    disabled={!inputValue.trim()}
                    className="bg-accent-blue text-white p-2 rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-blue-600 transition-colors focus-ring disabled:hover:bg-accent-blue"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
            )}

            {mode === "voice" && (
                <div className="p-4 bg-bg-surface border-t border-border flex flex-col items-center justify-center shrink-0">
                  <div className="text-center mb-3">
                     {isListening ? (
                        <p className="text-text-primary font-medium animate-pulse text-sm">Listening...</p>
                     ) : isVoiceProcessing ? (
                        <p className="text-accent-violet font-medium animate-pulse text-sm">Synthesizing...</p>
                     ) : (
                        <p className="text-text-secondary text-sm">Tap mic to speak</p>
                     )}
                  </div>
                  
                  <div className="relative w-16 h-16 flex items-center justify-center">
                     {(isListening || isVoiceProcessing) && (
                        <>
                          <div className="absolute inset-[-10px] border-[2px] border-accent-violet rounded-full opacity-60 animate-[ping_2s_ease-in-out_infinite]"></div>
                          <div className="absolute inset-0 bg-accent-violet/10 rounded-full blur-lg animate-pulse"></div>
                        </>
                     )}
                     <button 
                        onClick={startVoiceListening} 
                        className={cn(
                          "w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                          isListening ? "bg-accent-violet shadow-[0_0_20px_rgba(139,92,246,0.6)] scale-110" : "bg-bg-secondary border border-border hover:border-accent-violet cursor-pointer"
                        )}
                      >
                        <Mic className={cn("w-6 h-6", isListening ? "text-white animate-pulse" : "text-accent-violet")} />
                     </button>
                  </div>
                </div>
            )}

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
