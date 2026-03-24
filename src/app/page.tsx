import Link from "next/link"
import { ArrowRight, BarChart, Binary, Bot, Shield, Zap, Activity, BrainCircuit } from "lucide-react"

import { ParticleNetwork } from "@/components/ParticleNetwork"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <ParticleNetwork />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge variant="glow" className="mb-6">Enterprise-Grade AI Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            Transforming Businesses with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Intelligent AI Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            From automation to advanced analytics — we deploy production-ready AI systems that reduce operational costs by up to 60% and deliver ROI within 90 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="lg" className="h-14 px-8 text-base" href="/contact">
              Book a Free Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="h-14 px-8 text-base border-border" href="/solutions">
              Explore Our Solutions
            </Button>
          </div>

          <div className="mt-20 pt-10 border-t border-border/50 max-w-4xl mx-auto">
            <p className="text-sm font-medium text-text-muted mb-6 uppercase tracking-widest">Trusted by leaders across 6+ industries</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="font-display font-bold text-xl flex items-center gap-2"><Zap className="w-5 h-5"/>EduTech</div>
              <div className="font-display font-bold text-xl flex items-center gap-2"><Activity className="w-5 h-5"/>HealthCorp</div>
              <div className="font-display font-bold text-xl flex items-center gap-2"><Shield className="w-5 h-5"/>SecureLife</div>
              <div className="font-display font-bold text-xl flex items-center gap-2"><BarChart className="w-5 h-5"/>FinFlow</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS STRIP */}
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-border/50 text-center">
            <ScrollReveal delay={0.1}>
              <div className="pt-8 lg:pt-0">
                <div className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">120+</div>
                <div className="text-sm text-text-muted font-medium uppercase tracking-wider">AI Projects Delivered</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="pt-8 lg:pt-0 border-t lg:border-t-0 border-border/50 lg:border-l">
                <div className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">94.7%</div>
                <div className="text-sm text-text-muted font-medium uppercase tracking-wider">Avg Model Accuracy</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="pt-8 lg:pt-0 border-t lg:border-t-0 border-border/50 lg:border-l">
                <div className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">60%</div>
                <div className="text-sm text-text-muted font-medium uppercase tracking-wider">Reduction in Manual Work</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="pt-8 lg:pt-0 border-t lg:border-t-0 border-border/50 lg:border-l">
                <div className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">&lt; 90 Days</div>
                <div className="text-sm text-text-muted font-medium uppercase tracking-wider">Avg Deployment Time</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">How We Help You Automate, Analyze, and Scale</h2>
              <p className="text-lg text-text-secondary">We build models trained on your data, not generic datasets. Delivering measurable impact across your entire organization.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom AI Model Development", desc: "We build models trained on your data, not generic datasets.", icon: Binary },
              { title: "Intelligent Process Automation", desc: "Replace repetitive workflows with AI that learns and adapts.", icon: Zap },
              { title: "Computer Vision Systems", desc: "Real-time visual intelligence for quality control, surveillance, and retail.", icon: Shield },
              { title: "Natural Language Processing", desc: "Extract meaning from documents, calls, and customer feedback at scale.", icon: Bot },
              { title: "Predictive Analytics", desc: "Forecast demand, detect fraud, and reduce churn before it happens.", icon: BarChart },
              { title: "AI API & Platform Development", desc: "Embed AI capabilities into your existing systems via our REST APIs.", icon: BrainCircuit },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full hover:border-accent-blue/50 transition-colors group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-bg-surface rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES PREVIEW */}
      <section className="py-24 bg-bg-surface border-t border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">Proven Outcomes</h2>
                <p className="text-lg text-text-secondary">Explore how we helped enterprise clients solve complex challenges with custom AI systems.</p>
              </div>
              <Button variant="outline" href="/solutions">
                View All Case Studies &rarr;
              </Button>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                tag: "Education", client: "State University System", prob: "Manual grading overwhelmed faculty.",
                res: "78% reduction in faculty admin time; 4.2× faster query resolution.",
                labels: ["NLP", "Chatbot"]
              },
              { 
                tag: "Retail", client: "Regional E-Commerce Platform", prob: "High return rates due to fit mismatches.",
                res: "34% reduction in return rate; ₹2.1Cr saved in 6 months.",
                labels: ["Computer Vision", "Recommendation AI"]
              },
              { 
                tag: "Security", client: "Smart City Project", prob: "Manual CCTV monitoring missed incidents.",
                res: "91% incident detection rate; 3× faster response time.",
                labels: ["Computer Vision", "Surveillance"]
              }
            ].map((cs, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full flex flex-col group hover:shadow-glow transition-all duration-300">
                  <div className="p-6 pb-0 flex gap-2">
                    {cs.labels.map(l => <Badge key={l} variant="secondary">{l}</Badge>)}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{cs.client}</CardTitle>
                    <p className="text-sm text-text-muted mt-2">Problem: {cs.prob}</p>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="bg-bg-primary p-4 rounded-lg border border-border">
                      <p className="text-accent-blue font-semibold font-display text-sm tracking-wide uppercase mb-1">Result</p>
                      <p className="text-text-primary font-medium">{cs.res}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">Why Veridian AI?</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "⚡", title: "Deployed in < 90 days", desc: "Not months of consultancy before delivery." },
              { stat: "🏗️", title: "Custom-built models", desc: "Trained on your data, not repurposed APIs." },
              { stat: "🏭", title: "Industry-specific", desc: "Deep domain expertise, not one-size-fits-all." },
              { stat: "💰", title: "Transparent pricing", desc: "Fixed-scope projects with clear ROI milestones." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 bg-bg-surface rounded-xl border border-border h-full hover:bg-bg-secondary transition-colors">
                  <div className="text-4xl mb-6 bg-bg-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg border border-border">{item.stat}</div>
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-32 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-violet/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">Ready to see AI work for your business?</h2>
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Book a 30-minute demo. No sales pitch — just a live walkthrough of what we'd build for you.
            </p>
            <Button variant="glow" size="lg" className="h-14 px-10 text-lg" href="/contact">
              Schedule a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
