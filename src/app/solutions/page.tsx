import Link from "next/link"
import { ArrowRight, BookOpen, HeartPulse, Building, ShieldAlert, ShoppingBag } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata = {
  title: "Industry Solutions | Veridian AI Tech",
  description: "AI solutions tailored for Education, Healthcare, Finance, Security, and Retail."
}

export default function Solutions() {
  const industries = [
    { name: "Education", icon: BookOpen, href: "/solutions/education", desc: "Adaptive learning, automated grading, and AI student advisor chatbots." },
    { name: "Healthcare", icon: HeartPulse, href: "/solutions/healthcare", desc: "Medical image analysis, clinical NLP for EMR, and patient triage." },
    { name: "Finance", icon: Building, href: "/solutions/finance", desc: "Real-time fraud detection, automated KYC, and credit risk scoring." },
    { name: "Security", icon: ShieldAlert, href: "/solutions/security", desc: "Intelligent surveillance, threat classification, and crowd management." },
    { name: "Retail", icon: ShoppingBag, href: "/solutions/retail", desc: "Demand forecasting, CV recommendations, and footfall analytics." }
  ]

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Industry Solutions</h1>
            <p className="text-lg text-text-secondary">We deliver tailored AI architectures that respect the unique constraints, compliance requirements, and terminology of your specific industry.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.1}>
              <Link href={ind.href} className="block h-full group">
                <div className="p-8 border border-border rounded-xl bg-bg-secondary hover:border-accent-blue/50 glass h-full flex flex-col transition-all duration-300">
                  <ind.icon className="w-10 h-10 text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3">{ind.name}</h3>
                  <p className="text-text-secondary flex-1 mb-6">{ind.desc}</p>
                  <div className="flex items-center text-accent-blue font-medium mt-auto group-hover:translate-x-2 transition-transform w-fit">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
