"use client"
import * as React from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const [annual, setAnnual] = React.useState(true)

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Pricing built for ROI</h1>
            <p className="text-lg text-text-secondary mb-10">Whether you need an off-the-shelf SaaS tool or a custom enterprise model, our pricing is designed to scale with your measurable business outcomes.</p>
            
            <div className="inline-flex items-center p-1 bg-bg-surface border border-border rounded-full mx-auto shadow-sm">
              <button onClick={() => setAnnual(false)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!annual ? 'bg-bg-secondary text-text-primary shadow border border-border' : 'text-text-secondary hover:text-text-primary'}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-6 py-2 flex items-center gap-2 rounded-full text-sm font-medium transition-all duration-300 ${annual ? 'bg-accent-blue text-white shadow border border-accent-blue' : 'text-text-secondary hover:text-text-primary'}`}>
                Annually
                <span className="text-[10px] bg-white text-accent-blue px-2 py-0.5 rounded-full font-bold shadow-sm">Save 20%</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          <ScrollReveal delay={0.1}>
            <div className="relative z-20 border border-border rounded-2xl p-8 bg-bg-secondary glass h-full flex flex-col hover:border-accent-blue/50 transition-colors pointer-events-auto">
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">Starter</h3>
              <p className="text-text-muted text-sm mb-6">For startups & small teams</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-text-primary">₹{annual ? '3,999' : '4,999'}</span>
                <span className="text-text-secondary font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['1 chatbot instance', '5,000 conversations/mo', 'Web channel only', 'Standard email support'].map(f => (
                  <li key={f} className="flex gap-3 text-sm text-text-secondary items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent-teal shrink-0" /> 
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full relative z-50 pointer-events-auto" href="/contact">Start Free Trial</Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="border-2 border-accent-blue relative rounded-2xl p-8 bg-bg-surface shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col scale-100 md:scale-105 z-10">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent-blue text-white text-[10px] tracking-wider font-bold px-4 py-1.5 rounded-full uppercase">Most Popular</div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">Professional</h3>
              <p className="text-text-muted text-sm mb-6">For growing mid-market businesses</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-text-primary">₹{annual ? '11,999' : '14,999'}</span>
                <span className="text-text-secondary font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['3 chatbot instances', '25,000 conversations/mo', 'Web + WhatsApp integration', 'Analytics & Intent dashboard', 'Priority 12/5 support'].map(f => (
                  <li key={f} className="flex gap-3 text-sm text-text-primary items-start font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" /> 
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="glow" className="w-full h-12 text-base relative z-50 pointer-events-auto" href="/contact">Get Started</Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative z-20 border border-border rounded-2xl p-8 bg-bg-secondary glass h-full flex flex-col hover:border-accent-blue/50 transition-colors pointer-events-auto">
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">Enterprise</h3>
              <p className="text-text-muted text-sm mb-6">For large scale organizations</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-text-primary">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Unlimited instances', 'Unlimited conversations volume', 'All channels + custom mobile apps', 'Custom model fine-tuning with your data', 'Dedicated CSM & strict SLA'].map(f => (
                  <li key={f} className="flex gap-3 text-sm text-text-secondary items-start">
                    <CheckCircle2 className="w-5 h-5 text-text-muted shrink-0" /> 
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full relative z-50 pointer-events-auto" href="/contact">Contact Sales</Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto border border-border rounded-2xl bg-bg-surface p-10 glass">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-8 text-center">Consulting Engagement Models</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-xl bg-bg-primary hover:border-accent-blue/30 transition-colors">
                <h4 className="font-semibold text-text-primary text-lg flex items-center gap-2 mb-2">Discovery Sprint</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">4-week AI opportunity assessment and strategy roadmap formulation.</p>
                <p className="font-medium text-accent-blue border-t border-border/50 pt-4 mt-auto">₹1.5L Fixed Phase</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-bg-primary hover:border-accent-blue/30 transition-colors">
                <h4 className="font-semibold text-text-primary text-lg flex items-center gap-2 mb-2">Project-Based</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">Fixed scope, fixed price engagements. Predictable delivery cycles under 90 days.</p>
                <p className="font-medium text-accent-blue border-t border-border/50 pt-4 mt-auto">₹8L–₹50L Range</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-bg-primary hover:border-accent-blue/30 transition-colors">
                <h4 className="font-semibold text-text-primary text-lg flex items-center gap-2 mb-2">Retainer</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">Monthly ongoing AI development and MLOps maintenance packages.</p>
                <p className="font-medium text-accent-blue border-t border-border/50 pt-4 mt-auto">From ₹75K/month</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-bg-primary hover:border-accent-blue/30 transition-colors">
                <h4 className="font-semibold text-text-primary text-lg flex items-center gap-2 mb-2">Dedicated Team</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">Embedded AI expert team (2–5 engineers) dedicated solely to your enterprise.</p>
                <p className="font-medium text-accent-blue border-t border-border/50 pt-4 mt-auto">Custom Enterprise Pricing</p>
              </div>
            </div>
            <div className="mt-10 text-center">
               <p className="text-text-muted text-sm mb-4">Not sure which model best fits your organizational needs?</p>
               <Button variant="outline" href="/contact">Request a Custom Quote <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
