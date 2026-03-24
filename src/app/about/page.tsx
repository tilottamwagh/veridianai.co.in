import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, ShieldCheck, Zap, Activity, Users, Award, Calendar } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Veridian AI Tech",
  description: "Learn about Veridian AI Tech's mission, vision, and the team driving enterprise AI innovation.",
}

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary mb-6">
                Intelligence, <span className="text-accent-blue">Engineered.</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Founded in 2021 in Pune, India, Veridian AI Tech is a premier artificial intelligence engineering firm. With a dedicated team of over 45 experts, we serve 8 industries across 3 countries, deploying models that create measurable value.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal delay={0.1}>
              <Card className="h-full bg-bg-secondary border-border hover:border-accent-blue/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">Our Vision</h3>
                  <p className="text-text-secondary leading-relaxed">
                    A world where every organization, regardless of size, can harness the power of AI to solve real problems safely and securely.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="h-full bg-bg-secondary border-border hover:border-accent-blue/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent-violet/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-accent-violet" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">Our Mission</h3>
                  <p className="text-text-secondary leading-relaxed">
                    To build AI systems that are accurate, explainable, and ethically deployed — creating measurable value for our clients within 90 days.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">Our Core Values</h2>
              <p className="text-lg text-text-secondary">Principles that guide our engineering and partnerships.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: "Outcome-first", desc: "We measure success by your business results, not project milestones." },
              { icon: Heart, title: "Honest AI", desc: "We won't recommend AI where a simpler solution works better." },
              { icon: Eye, title: "Explainability", desc: "Every model deployed comes with clear documentation of its logic." },
              { icon: Zap, title: "Speed without shortcuts", desc: "Rapid deployment, no compromises on accuracy or security." },
            ].map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 h-full border border-border rounded-xl glass hover:bg-bg-surface transition-colors">
                  <val.icon className="w-8 h-8 text-accent-teal mb-4" />
                  <h4 className="text-xl font-display font-semibold text-text-primary mb-2">{val.title}</h4>
                  <p className="text-text-secondary text-sm">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">Company Timeline</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { year: "2021", event: "Founded in Pune with a team of 6 AI researchers" },
              { year: "2022", event: "First enterprise client in healthcare; launched VeriChat beta" },
              { year: "2023", event: "₹2.5Cr seed funding acquired; team grew to 25" },
              { year: "2024", event: "VeriGuard deployed in Smart City project; crossed 50+ clients milestone" },
              { year: "2025", event: "Expanded operations to UAE and Singapore markets" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-bg-primary text-accent-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 z-10 transition-transform group-hover:scale-110 group-hover:bg-accent-blue group-hover:text-white">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-border group-hover:border-accent-blue/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold text-xl text-accent-blue">{item.year}</span>
                    </div>
                    <div className="text-text-secondary">{item.event}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-12">Certifications & Trust</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {['ISO 27001 Certified', 'NASSCOM Member', 'Startup India Registered', 'MeitY Empanelled Vendor'].map(cert => (
                <div key={cert} className="flex items-center gap-3 bg-bg-surface border border-border rounded-full px-6 py-3">
                  <ShieldCheck className="w-5 h-5 text-accent-blue" />
                  <span className="font-medium text-text-primary">{cert}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-bg-surface to-bg-primary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">Build the future with us.</h2>
            <Button variant="glow" size="lg" className="h-14 px-10 text-lg mt-4" href="/contact">
              Partner with Veridian <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
