"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Play, Search, Shield, Bot, Code, Mic } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  // Data dictionary
  const productData = {
    verichat: {
      name: "VeriChat",
      tagline: "Deploy a trained, domain-specific chatbot in 2 weeks.",
      features: [
        "Trained on your knowledge base, docs, and FAQs",
        "Multi-channel: Web, WhatsApp, Telegram, custom apps",
        "Escalation routing to human agents with context handoff",
        "Multilingual: English, Hindi, Marathi + 10 regional languages",
        "Analytics dashboard: intent tracking, unanswered queries, CSAT"
      ],
      demoLabel: "Interactive Chatbot Demo",
      demoContent: (
        <div className="flex flex-col h-96 bg-bg-primary rounded-xl border border-border overflow-hidden">
          <div className="bg-bg-surface p-3 border-b border-border text-sm font-semibold flex items-center gap-2"><Bot className="w-4 h-4 text-accent-blue"/> VeriChat Platform Demo</div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto pt-6">
            <div className="bg-bg-surface p-3 rounded-2xl rounded-tl-sm text-sm self-start max-w-[80%] border border-border">How can I help you today?</div>
            <div className="bg-accent-blue text-white p-3 rounded-2xl rounded-tr-sm text-sm self-end max-w-[80%] ml-auto">What is the status of ticket #1029?</div>
            <div className="bg-bg-surface p-3 rounded-2xl rounded-tl-sm text-sm self-start max-w-[80%] border border-border">Ticket #1029 is currently marked as <strong className="text-accent-teal">In Progress</strong>. The engineering team expects to resolve it by 4:00 PM IST today.</div>
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input type="text" className="flex-1 bg-bg-secondary border border-border rounded-full px-3 text-sm focus:outline-none focus:border-accent-blue" value="Simulated input..." readOnly />
            <button className="bg-accent-blue text-white w-8 h-8 rounded-full flex justify-center items-center"><Play className="w-4 h-4 ml-0.5"/></button>
          </div>
        </div>
      ),
      metric: "Reduces support ticket volume by 65% in 30 days"
    },
    verivoice: {
      name: "VeriVoice",
      tagline: "Voice interfaces that understand intent, not just words.",
      features: [
        "Real-time speech-to-text with < 300ms latency",
        "Speaker diarization (multi-speaker call transcription)",
        "Intent classification + sentiment analysis",
        "IVR replacement: natural conversation flow",
        "Supports noisy environments"
      ],
      demoLabel: "Voice Transcription Demo",
      demoContent: (
        <div className="flex flex-col h-96 bg-bg-primary rounded-xl border border-border overflow-hidden p-6 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(20,184,166,0.5)]">
               <Mic className="w-6 h-6" />
            </div>
            <div>
               <p className="text-xs text-text-muted font-mono uppercase tracking-widest">Listening...</p>
               <div className="flex gap-1 mt-1">
                 {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                   <div key={i} className="w-1 bg-accent-teal rounded-full animate-pulse object-center" style={{height: `${Math.random() * 20 + 4}px`, animationDelay: `${i*0.1}s`}}></div>
                 ))}
               </div>
            </div>
          </div>
          <p className="text-lg font-display text-text-primary leading-relaxed opacity-80 border-l-2 border-accent-teal pl-4">
            "Yes, I need to file a claim for my vehicle. The incident happened yesterday around 4 PM..."
          </p>
          <div className="mt-auto grid grid-cols-2 gap-4">
             <div className="bg-bg-surface p-3 rounded border border-border"><p className="text-xs text-text-muted">Intent</p><p className="font-medium text-accent-blue">File Claim</p></div>
             <div className="bg-bg-surface p-3 rounded border border-border"><p className="text-xs text-text-muted">Sentiment</p><p className="font-medium text-amber-500">Stressed (0.83)</p></div>
          </div>
        </div>
      ),
      metric: "Transcription accuracy: 96.2% on domain-specific vocabulary"
    },
    verivision: {
      name: "VeriVision",
      tagline: "See what humans miss. Act in milliseconds.",
      features: [
        "Real-time object detection, tracking, classification",
        "Defect detection for manufacturing QA",
        "Crowd density and behavior analysis",
        "Works on edge devices and cloud",
        "Model retraining pipeline with your labeled data"
      ],
      demoLabel: "Computer Vision Demo",
      demoContent: (
        <div className="flex flex-col h-96 bg-bg-secondary rounded-xl border border-border overflow-hidden relative group">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')"}}></div>
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent-blue bg-accent-blue/10 flex flex-col justify-end">
             <div className="bg-accent-blue text-white text-[10px] font-mono px-1 py-0.5 w-max">Engine Part [0.99]</div>
          </div>
          <div className="absolute top-1/2 left-2/3 w-16 h-16 border-2 border-rose-500 bg-rose-500/10 flex flex-col justify-end">
             <div className="bg-rose-500 text-white text-[10px] font-mono px-1 py-0.5 w-max">Defect: CRACK [0.92]</div>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/80 p-3 rounded border border-border font-mono text-xs text-text-secondary">
             <p>FPS: <span className="text-text-primary">59.9</span></p>
             <p>Latency: <span className="text-text-primary">12ms</span></p>
          </div>
        </div>
      ),
      metric: "99.1% defect detection accuracy on automotive parts"
    },
    veriguard: {
      name: "VeriGuard",
      tagline: "From passive recording to proactive security.",
      features: [
        "Anomaly detection: loitering, perimeter breach",
        "Real-time alerts via SMS, email",
        "Integration with existing CCTV infrastructure",
        "On-premise deployment option"
      ],
      demoLabel: "Intelligent Surveillance Dash",
      demoContent: (
        <div className="flex flex-col h-96 bg-bg-primary rounded-xl border border-border p-4">
          <div className="flex justify-between items-center border-b border-border pb-2 mb-4">
             <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm animate-pulse"><Shield className="w-4 h-4"/> 1 Active Alert</div>
             <div className="text-xs font-mono text-text-muted">ZONE_04_SOUTH</div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-bg-secondary border border-border rounded relative flex items-center justify-center">
              <span className="text-text-muted font-mono text-xs absolute top-2 left-2">CAM_01</span>
              <div className="w-16 h-16 border border-rose-500 bg-rose-500/10 flex items-center justify-center"><span className="text-rose-500 text-xs font-bold">BREACH</span></div>
            </div>
            <div className="bg-bg-secondary border border-border rounded relative flex flex-col p-3">
              <span className="text-text-muted font-mono text-xs mb-2">EVENT LOG</span>
              <div className="space-y-2">
                <div className="text-[10px] bg-rose-500/20 text-rose-300 p-1 rounded border border-rose-500/30">14:02:11 - Perimeter Breach Detected</div>
                <div className="text-[10px] bg-bg-surface p-1 rounded border border-border text-text-primary">13:55:00 - Routine Scan Complete</div>
                <div className="text-[10px] bg-bg-surface p-1 rounded border border-border text-text-primary">13:20:41 - Object Left Unattended (Resolved)</div>
              </div>
            </div>
          </div>
        </div>
      ),
      metric: "Deployments comply with IT Act 2000 and PDPB"
    },
    veriapi: {
      name: "VeriAPI",
      tagline: "Add AI to your product in days, not months.",
      features: [
        "/classify — Text and image classification",
        "/extract — Entity extraction from documents",
        "/summarize — Long-form document summarization",
        "RESTful JSON API, < 200ms average response time",
        "SDKs: Python, Node.js, Java"
      ],
      demoLabel: "API Explorer",
      demoContent: (
        <div className="flex flex-col h-96 bg-[#0D1117] rounded-xl border border-border overflow-hidden font-mono text-xs">
          <div className="bg-[#161B22] p-2 flex gap-2 border-b border-gray-800">
             <div className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded text-[10px] font-bold">POST</div>
             <div className="px-3 py-1 text-gray-300">/v1/classify</div>
             <button className="ml-auto bg-green-600/20 text-green-500 px-3 py-1 rounded hover:bg-green-600/30">Run Request &rarr;</button>
          </div>
          <div className="flex h-full divide-x divide-gray-800">
             <div className="w-1/2 p-4 text-gray-300 whitespace-pre">
{`{
  "text": "Customer is unable to reset password",
  "categories": [
    "billing", 
    "technical", 
    "account"
  ]
}`}
             </div>
             <div className="w-1/2 p-4 text-green-400 whitespace-pre bg-[#090C10]">
{`{
  "label": "technical",
  "confidence": 0.94,
  "latency_ms": 87,
  "status": "success"
}`}
             </div>
          </div>
        </div>
      ),
      metric: "99.9% uptime SLA with 10k free tier"
    },
    vericustom: {
      name: "Custom AI Solutions",
      tagline: "Tailor-made intelligence for your unique enterprise challenges.",
      features: [
        "End-to-end bespoke model architecture design",
        "Proprietary dataset curation and fine-tuning",
        "Dedicated engineering pods mapped to your time zone",
        "Full intellectual property (IP) ownership transfer",
        "Continuous MLOps, retraining, and drift monitoring"
      ],
      demoLabel: "Custom Solution Architecture",
      demoContent: (
        <div className="flex flex-col h-96 bg-bg-primary rounded-xl border border-border p-6 overflow-hidden">
           <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
              <div className="text-accent-blue font-bold tracking-wider text-sm flex items-center gap-2"><Code className="w-4 h-4"/> ENTERPRISE PIPELINE</div>
              <div className="text-xs text-text-muted font-mono border border-border px-2 py-1 rounded bg-bg-surface">STATUS: ARCHITECTURE MAPPED</div>
           </div>
           
           <div className="flex-1 flex flex-col gap-6 justify-center">
              <div className="flex items-center gap-4">
                 <div className="w-16 h-12 rounded-lg bg-bg-surface border border-border flex items-center justify-center font-mono text-[10px] shadow-sm tracking-widest text-text-primary">DATA</div>
                 <div className="flex-1 border-t-2 border-dashed border-border flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-accent-teal shadow-[0_0_10px_rgba(20,184,166,0.5)] animate-pulse"></div></div>
                 <div className="w-40 h-14 rounded-xl bg-accent-blue/10 border border-accent-blue/40 text-accent-blue flex flex-col items-center justify-center font-bold text-xs uppercase tracking-wider relative">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    Custom Model <span className="text-[9px] text-accent-blue/70">100B PARAMETERS</span>
                 </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="w-40 h-14 rounded-xl bg-accent-violet/10 border border-accent-violet/40 text-accent-violet flex flex-col items-center justify-center font-bold text-xs uppercase tracking-wider ml-auto">
                    API GATEWAY <span className="text-[9px] text-accent-violet/70">GRAPHQL / REST</span>
                 </div>
                 <div className="flex-1 border-t-2 border-dashed border-border flex items-center justify-center relative"><div className="absolute right-1/4 w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-ping"></div></div>
                 <div className="w-16 h-12 rounded-lg bg-bg-surface border border-border flex flex-col items-center justify-center font-mono text-[10px] shadow-sm tracking-widest text-text-primary leading-tight text-center">CLIENT<br/>APP</div>
              </div>
           </div>
        </div>
      ),
      metric: "100% intellectual property ownership retained by client"
    }
  }

  const data = productData[slug as keyof typeof productData]

  if (!data) return (
    <div className="pt-40 container mx-auto px-6 text-center h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-display font-bold mb-4">Product Not Found</h1>
      <Button href="/products">View All Products</Button>
    </div>
  )

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-8">
            <Link href="/products" className="text-accent-blue text-sm hover:underline font-medium">&larr; Back to Products</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">{data.name}</h1>
              <p className="text-xl text-text-secondary mb-10">{data.tagline}</p>
              
              <div className="bg-bg-surface p-6 rounded-xl border border-border mb-10">
                <p className="font-semibold text-accent-violet mb-2 uppercase tracking-wide text-xs">Performance Metric</p>
                <p className="text-lg font-medium text-text-primary">{data.metric}</p>
              </div>

              <h3 className="font-display text-2xl font-semibold mb-6 text-text-primary">Features & Capabilities</h3>
              <ul className="space-y-4 mb-10">
                {data.features.map(f => (
                  <li key={f} className="flex gap-3 text-text-secondary items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Button variant="glow" size="lg" className="h-14 px-8 text-base shadow-glow hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]" href="/contact">Book a Demo</Button>
              </div>
            </div>

            <div className="bg-bg-secondary p-8 rounded-3xl border border-border shadow-2xl glass">
              <div className="flex justify-between items-center mb-6">
                 <h4 className="font-display font-semibold text-text-primary">{data.demoLabel}</h4>
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-border"></div>
                   <div className="w-3 h-3 rounded-full bg-border"></div>
                   <div className="w-3 h-3 rounded-full bg-border"></div>
                 </div>
              </div>
              {data.demoContent}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
