import { BookOpen, Users, Building, Laptop, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Training and Education | Veridian AI Tech", description: "Corporate AI literacy, Machine Learning workshops, and specialized deep learning courses." }

export default function Training() {
  const courses = [
    { title: "AI Fundamentals for Business Leaders", level: "Beginner", duration: "2 days", format: "Workshop", outcome: "Understand AI ROI, ask the right questions.", icon: Users },
    { title: "Machine Learning with Python", level: "Intermediate", duration: "6 weeks", format: "Online", outcome: "Build and deploy basic ML models.", icon: Laptop },
    { title: "Deep Learning & Computer Vision", level: "Advanced", duration: "8 weeks", format: "Online + Lab", outcome: "Train CNNs for real-world vision tasks.", icon: BookOpen },
    { title: "NLP & Generative AI", level: "Advanced", duration: "6 weeks", format: "Online", outcome: "Fine-tune LLMs, build RAG pipelines.", icon: Laptop },
    { title: "AI for Healthcare Professionals", level: "Intermediate", duration: "3 days", format: "Workshop", outcome: "Apply AI in clinical workflows.", icon: Users },
    { title: "Corporate AI Literacy Program", level: "All levels", duration: "Custom", format: "On-site", outcome: "Company-wide AI adoption.", icon: Building }
  ]

  return (
    <div className="pt-32 pb-24">
       <div className="container mx-auto px-6">
         <ScrollReveal>
             <div className="max-w-4xl mx-auto text-center mb-20">
               <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Equip your team for the AI era.</h1>
               <p className="text-xl text-text-secondary">From executive workshops to deep technical bootcamps, our training programs bridge the AI skills gap inside your organization.</p>
             </div>
         </ScrollReveal>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {courses.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                 <div className="bg-bg-secondary border border-border p-8 rounded-xl h-full flex flex-col hover:border-accent-blue/50 glass">
                    <c.icon className="w-8 h-8 text-accent-blue mb-6" />
                    <div className="flex gap-2 mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-bg-surface border border-border rounded text-text-secondary">{c.level}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-bg-surface border border-border rounded text-text-secondary">{c.format}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-text-primary mb-2 line-clamp-2 title-min-h">{c.title}</h3>
                    <p className="text-text-muted text-sm mb-6 flex-1">{c.duration}</p>
                    <div className="bg-bg-primary p-4 border border-border rounded-lg mb-6">
                       <span className="block text-xs uppercase text-accent-teal font-bold mb-1">Outcome</span>
                       <span className="text-sm font-medium">{c.outcome}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-auto" href="/contact">Enroll Now</Button>
                 </div>
              </ScrollReveal>
            ))}
         </div>

         <ScrollReveal>
            <div className="bg-gradient-to-r from-bg-surface to-bg-secondary border border-border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
               <div className="flex-1">
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-4">Custom Corporate Training</h2>
                  <p className="text-text-secondary text-lg mb-6">Need a specialized curriculum mapping to your organization&apos;s tech stack? We build custom learning pathways for teams of 10 or more.</p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center justify-center md:justify-start gap-3 text-text-primary"><CheckCircle2 className="text-accent-teal w-5 h-5"/> Certificate of completion from Veridian AI Tech</li>
                    <li className="flex items-center justify-center md:justify-start gap-3 text-text-primary"><CheckCircle2 className="text-accent-teal w-5 h-5"/> NASSCOM / NSDC aligned certification pathways</li>
                    <li className="flex items-center justify-center md:justify-start gap-3 text-text-primary"><CheckCircle2 className="text-accent-teal w-5 h-5"/> Hands-on lab environments with proprietary datasets</li>
                  </ul>
                  <Button variant="glow" size="lg" href="/contact">Request Custom Training Quote</Button>
               </div>
               <div className="md:w-1/3">
                  <div className="w-64 h-64 mx-auto bg-bg-primary border-4 border-bg-surface rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.15)] relative group">
                     <Users className="w-24 h-24 text-accent-blue group-hover:scale-110 transition-transform" />
                  </div>
               </div>
            </div>
         </ScrollReveal>
       </div>
    </div>
  )
}
