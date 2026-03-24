"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Factory, Stethoscope, Building, ShieldAlert, ShoppingBag, GraduationCap } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  const industryData = {
    education: {
      name: "Education",
      icon: GraduationCap,
      tagline: "Empower learning through intelligent automation.",
      description: "From automated grading systems to 24/7 AI student advisors, we help educational institutions scale personalized learning without compromising quality.",
      useCases: [
        "AI-Powered Student Support Desk",
        "Automated Essay & Assignment Grading",
        "Predictive Dropout Prevention Models",
        "Adaptive Learning Path Generation"
      ],
      caseStudy: "University admissions ticket volume reduced by 72% using VeriChat custom deployment."
    },
    healthcare: {
      name: "Healthcare",
      icon: Stethoscope,
      tagline: "Precision AI for better patient outcomes.",
      description: "Secure, HIPAA/PDPB compliant AI systems reducing administrative burden and assisting in clinical decision support.",
      useCases: [
        "Clinical Document NLP Extraction",
        "Medical Imaging Anomaly Detection",
        "Automated Patient Triage Systems",
        "Predictive Resource Allocation"
      ],
      caseStudy: "Multi-specialty hospital reduced triage wait times by 45% with VeriVoice ambient scribing."
    },
    finance: {
      name: "Financial Services",
      icon: Building,
      tagline: "Secure intelligence for modern finance.",
      description: "Detect anomalies in milliseconds, automate compliance, and generate hyper-personalized financial insights.",
      useCases: [
        "Real-time Fraud & AML Detection",
        "Automated KYC/OCR Document Processing",
        "Algorithmic Credit Risk Scoring",
        "Customer Churn Prediction"
      ],
      caseStudy: "Tier 1 NBFC automated 80% of KYC document verification, saving $1.2M annually."
    },
    security: {
      name: "Deep Security",
      icon: ShieldAlert,
      tagline: "Proactive intelligence for physical security.",
      description: "Upgrade passive CCTV networks into active threat-detection mesh networks with edge computer vision.",
      useCases: [
        "Perimeter Breach Detection",
        "Unattended Object Tracking",
        "Crowd Density & Flow Analysis",
        "Authorized Personnel Verification"
      ],
      caseStudy: "Smart City deployment reached 99.1% incident detection rate with zero false positive alerts."
    },
    retail: {
      name: "Intelligent Retail",
      icon: ShoppingBag,
      tagline: "From supply chain prediction to autonomous checkout.",
      description: "Forecast inventory needs with high precision and map physical store footprints using computer vision analytics.",
      useCases: [
        "Granular Demand Forecasting",
        "Footfall & Heatmap Analytics",
        "Dynamic Pricing Algorithms",
        "Automated Visual Merchandising QA"
      ],
      caseStudy: "National retail chain reduced inventory stockouts by 35% using our predictive models."
    }
  }

  const data = industryData[slug as keyof typeof industryData]

  if (!data) return (
    <div className="pt-40 container mx-auto px-6 text-center h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-display font-bold mb-4">Industry Blueprint Not Found</h1>
      <Button href="/solutions">View All Industry Solutions</Button>
    </div>
  )

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-8">
            <Link href="/solutions" className="text-accent-blue text-sm hover:underline font-medium">&larr; Back to Solutions Map</Link>
          </div>
          <div className="bg-bg-secondary p-10 md:p-16 rounded-3xl border border-border shadow-2xl glass mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 cursor-default pointer-events-none"></div>
             <data.icon className="w-16 h-16 text-accent-blue mb-8 relative z-10" />
             <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6 relative z-10">{data.name} AI Blueprint</h1>
             <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl relative z-10">{data.tagline}</p>
             <p className="text-lg text-text-muted max-w-3xl mb-12 relative z-10">{data.description}</p>
             <div className="flex gap-4 relative z-10">
                <Button variant="glow" size="lg" className="h-14 px-8 text-base shadow-glow hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]" href="/contact">Schedule an Industry Demo</Button>
             </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <h3 className="font-display text-3xl font-semibold mb-8 text-text-primary">Key Architectural Use Cases</h3>
            <div className="space-y-4">
              {data.useCases.map(uc => (
                <div key={uc} className="flex gap-4 items-center bg-bg-surface p-6 rounded-xl border border-border hover:border-accent-teal/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent-teal shrink-0" />
                  <span className="text-lg font-medium text-text-primary">{uc}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-bg-primary to-bg-surface p-10 rounded-3xl border border-border border-l-4 border-l-accent-violet h-full flex flex-col justify-center shadow-lg transition-transform hover:scale-[1.02]">
               <h4 className="text-accent-violet font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Certified Impact Showcase</h4>
               <p className="text-2xl md:text-3xl font-display text-text-primary leading-relaxed mb-8">"{data.caseStudy}"</p>
               <Button variant="outline" href="/contact" className="w-fit">Read Full Technical Case Study</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
