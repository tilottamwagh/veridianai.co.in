import { ArrowRight, Lightbulb, Beaker, FileText, FlaskConical, ShieldAlert, Cpu, Eye } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"

export const metadata = { title: "R&D Lab | Veridian AI Tech", description: "Explore Veridian AI's Lab capabilities, ongoing research, and innovation roadmap." }

export default function Research() {
  return (
    <div className="pt-32 pb-24">
       <div className="container mx-auto px-6">
         <ScrollReveal>
             <div className="max-w-4xl mx-auto text-center mb-20">
               <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Veridian AI Lab</h1>
               <p className="text-xl text-text-secondary">Pushing the boundaries of enterprise AI. Our dedicated R&D division focuses on multimodal learning, explainability, and privacy-preserving architectures.</p>
               <div className="mt-8 flex justify-center gap-6 text-text-primary font-display font-bold divide-x divide-border">
                  <div className="pr-6"><span className="text-3xl text-accent-blue block mb-1">12</span>Researchers</div>
                  <div className="px-6"><span className="text-3xl text-accent-teal block mb-1">3</span>Active Patents</div>
                  <div className="pl-6"><span className="text-3xl text-accent-violet block mb-1">2</span>Published Papers</div>
               </div>
             </div>
         </ScrollReveal>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {[
              { icon: Beaker, title: "Multimodal Learning", desc: "Combining vision and language models for comprehensive document and environment understanding." },
              { icon: ShieldAlert, title: "Federated Learning", desc: "Privacy-preserving AI that trains across decentralized edge devices without exchanging patient or financial data." },
              { icon: Cpu, title: "Tiny ML", desc: "Optimizing neural networks to run locally on low-power IoT and edge devices for milliseconds latency." },
              { icon: Eye, title: "Explainable AI (XAI)", desc: "Developing transparent decision architectures for regulated industries like healthcare and finance." }
            ].map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                 <div className="p-8 bg-bg-surface border border-border rounded-xl flex gap-6 h-full">
                    <div className="w-12 h-12 bg-bg-primary border border-border rounded-lg flex justify-center items-center shrink-0">
                       <r.icon className="w-6 h-6 text-text-primary" />
                    </div>
                    <div>
                       <h3 className="text-xl font-display font-bold mb-2">{r.title}</h3>
                       <p className="text-text-secondary">{r.desc}</p>
                    </div>
                 </div>
              </ScrollReveal>
            ))}
         </div>

         <ScrollReveal>
            <div className="bg-bg-secondary p-12 border border-border rounded-3xl mb-24 glass">
               <h2 className="text-3xl font-display font-bold mb-8">Innovation Roadmap</h2>
               <div className="space-y-6">
                 {[
                   { date: "Q1 2025", title: "VeriVision 3.0", target: "Real-time 3D object detection & spatial mapping." },
                   { date: "Q3 2025", title: "VeriChat Multilingual Core", target: "Native support for 22 Indian regional languages." },
                   { date: "Q1 2026", title: "Federated Learning Platform", target: "Beta release for healthcare consortiums." },
                   { date: "Q3 2026", title: "AutoML Sandbox", target: "No-code model training platform for non-technical users." }
                 ].map((rm, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-4 border-b border-border/50 last:border-0 hover:bg-bg-surface/50 rounded-lg transition-colors">
                     <div className="bg-accent-blue/10 text-accent-blue font-mono font-bold px-3 py-1 rounded w-fit">{rm.date}</div>
                     <div className="flex-1">
                        <h4 className="font-display font-bold text-lg text-text-primary">{rm.title}</h4>
                        <p className="text-text-secondary text-sm">{rm.target}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
         </ScrollReveal>
       </div>
    </div>
  )
}
