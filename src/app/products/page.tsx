import Link from "next/link"
import { ArrowRight, MessageSquare, Mic, Eye, ShieldAlert, Cpu, Code } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "AI Products & Platforms | Veridian AI Tech",
  description: "Enterprise AI platforms for Chatbots, Voice, Computer Vision, Surveillance, and APIs.",
}

const products = [
  {
    id: "verichat",
    icon: MessageSquare,
    name: "VeriChat",
    tagline: "Deploy a trained, domain-specific chatbot in 2 weeks.",
    features: ["Trained on your knowledge base", "Multi-channel: Web, WhatsApp, Telegram", "Human escalation with context handoff"],
    metrics: "Reduces support ticket volume by 65% in 30 days"
  },
  {
    id: "verivoice",
    icon: Mic,
    name: "VeriVoice",
    tagline: "Voice interfaces that understand intent, not just words.",
    features: ["Real-time speech-to-text <300ms latency", "Speaker diarization", "Noise-cancellation for factory floors"],
    metrics: "Transcription accuracy: 96.2% on domain vocabulary"
  },
  {
    id: "verivision",
    icon: Eye,
    name: "VeriVision",
    tagline: "See what humans miss. Act in milliseconds.",
    features: ["Real-time object detection", "Manufacturing QA defect detection", "Works on edge devices"],
    metrics: "99.1% defect detection accuracy in auto inspection"
  },
  {
    id: "veriguard",
    icon: ShieldAlert,
    name: "VeriGuard",
    tagline: "From passive recording to proactive security.",
    features: ["Anomaly and loitering detection", "Existing CCTV integration", "On-premise deployment"],
    metrics: "91% incident detection rate, zero false positives"
  },
  {
    id: "veriapi",
    icon: Cpu,
    name: "VeriAPI",
    tagline: "Add AI to your product in days, not months.",
    features: ["RESTful JSON API <200ms", "Classification, extraction, OCR", "SDKs for Python, Node.js, Java"],
    metrics: "99.9% uptime SLA with 10k free tier"
  },
  {
    id: "vericustom",
    icon: Code,
    name: "Custom AI Solutions",
    tagline: "Tailor-made intelligence for your unique enterprise challenges.",
    features: ["End-to-end bespoke model training", "Proprietary dataset integration", "Dedicated engineering pods"],
    metrics: "100% IP ownership and custom SLA"
  }
]

export default function Products() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Our Core Platforms</h1>
            <p className="text-lg text-text-secondary">
              Enterprise-grade AI products, engineered for scale and designed for rapid integration. Choose the solution that accelerates your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={0.1}>
              <div className="flex flex-col lg:flex-row glass border border-border rounded-3xl overflow-hidden hover:border-accent-blue/30 transition-all duration-300">
                <div className="lg:w-1/3 bg-bg-secondary p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <product.icon className="w-12 h-12 text-accent-blue mb-6 relative z-10" />
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-2 relative z-10">{product.name}</h2>
                  <p className="text-text-secondary font-medium leading-relaxed relative z-10">{product.tagline}</p>
                </div>
                
                <div className="lg:w-2/3 p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-8">
                      {product.features.map(f => (
                        <li key={f} className="flex items-start gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                          <span className="text-text-secondary">{f}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-bg-primary border border-border rounded-xl p-5 mb-8">
                      <p className="text-xs uppercase tracking-wider font-semibold text-accent-violet mb-2">Performance</p>
                      <p className="text-sm text-text-primary font-medium">{product.metrics}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="glow" href={`/products/${product.id}`}>
                      View Demo & Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" href="/contact">
                      Request Enterprise Pricing
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
