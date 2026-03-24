import Link from "next/link"
import { ArrowRight, Lightbulb, Settings, Database, Activity, RefreshCw } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "AI Services & Consulting | Veridian AI Tech",
  description: "End-to-end AI integration into legacy systems, custom consulting, predictive modeling, and MLOps.",
}

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consulting",
    desc: "4-week discovery engagement to map AI opportunities in your operations.",
    features: ["Readiness Assessment", "ROI Modeling", "Technology Stack Review"],
    outcome: "Prioritized AI roadmap with ROI estimates."
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    desc: "End-to-end AI integration into legacy systems and workflows.",
    features: ["Legacy Modernization", "Workflow Automation", "Change Management"],
    outcome: "40–70% reduction in manual processing."
  },
  {
    icon: Settings,
    title: "System Integration",
    desc: "Connect AI models to your ERP, CRM, HRMS, or custom software.",
    features: ["API Gateway Design", "Middleware Development", "Real-time Sync"],
    outcome: "Seamless data flow with zero silos."
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    desc: "Build data pipelines, dashboards, and predictive models on your data.",
    features: ["Data Lake Setup", "Real-time Dashboards", "ETL Pipelines"],
    outcome: "Real-time operational intelligence."
  },
  {
    icon: Activity,
    title: "Predictive Modeling",
    desc: "Forecast demand, churn, maintenance needs, and financial risks.",
    features: ["Time Series Forecasting", "Anomaly Detection", "Risk Scoring"],
    outcome: "20–35% improvement in planning accuracy."
  },
  {
    icon: Settings,
    title: "MLOps & AI Operations",
    desc: "Deploy, monitor, retrain, and maintain AI models in production.",
    features: ["Continuous Training", "Model Registry", "Drift Detection"],
    outcome: "Models that stay accurate over time."
  }
]

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Expertise applied.</h1>
            <p className="text-lg text-text-secondary">
              From initial readiness assessments to full-scale enterprise AI rollout, we guide organizations through every step of their intelligent transformation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border border-border rounded-2xl p-8 bg-bg-secondary h-full flex flex-col hover:border-accent-blue/50 transition-colors group glass">
                <div className="w-14 h-14 bg-bg-surface rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-blue" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 flex-1">{service.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                      <span className="text-sm text-text-muted">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-bg-primary rounded-lg p-5 border border-border mt-auto">
                  <p className="text-xs uppercase tracking-wider font-semibold text-accent-violet mb-1">Outcome</p>
                  <p className="text-sm font-medium text-text-primary">{service.outcome}</p>
                </div>
                
                <Button variant="outline" className="w-full mt-6" href="/contact">
                  Get a Quote
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
