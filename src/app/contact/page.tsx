"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  budget: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data) 
      })
      
      if (response.ok) {
        setSuccess(true)
      } else {
        console.error("Form submission failed")
      }
    } catch (e) {
      console.error("Network error during submission:", e)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">Let's build something <span className="text-accent-blue">intelligent.</span></h1>
            <p className="text-lg text-text-secondary">
              Whether you need to automate a workflow, build a custom model, or schedule a demo, our team is ready to help. We aim to respond within 1 business day.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Details */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-text-primary mb-2">Email Us</h3>
                  <p className="text-text-secondary mb-1">For general inquiries and project scopes.</p>
                  <a href="mailto:hello@veridianaitech.com" className="text-accent-blue font-medium hover:underline">hello@veridianaitech.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-teal/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-text-primary mb-2">Call Us</h3>
                  <p className="text-text-secondary mb-1">Mon-Fri from 9:00 AM to 6:30 PM (IST).</p>
                  <div className="flex flex-col">
                    <a href="tel:+918830599371" className="text-accent-teal font-medium hover:underline">+91 883 059 9371</a>
                    <a href="tel:+919168693209" className="text-accent-teal font-medium hover:underline">+91 916 869 3209</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-violet/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-violet" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-text-primary mb-2">Visit Our HQ</h3>
                  <p className="text-text-secondary overflow-hidden">
                    Veridian Innovation Tech Park<br />
                    Kalyani Nagar, Pune<br />
                    Maharashtra, India — 411001
                  </p>
                </div>
              </div>

              <div className="w-full h-64 bg-bg-surface border border-border rounded-xl overflow-hidden glass relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04368133502!2d73.78018659423851!3d18.52459859943284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07982186711%3A0xe53cc831e5bb02e5!2sKalyani%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710927845612!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(100%) hue-rotate(180deg) brightness(85%) contrast(100%) grayscale(15%)" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Veridian AI HQ Location"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-bg-secondary border border-border rounded-2xl p-8 shadow-xl glass">
              {success ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-accent-teal/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent-teal" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-text-primary mb-4">Request Received</h3>
                  <p className="text-text-secondary max-w-md">
                    Thank you for reaching out to Veridian AI Tech. One of our specialists will be in touch with you within 1 business day.
                  </p>
                  <Button variant="outline" className="mt-8" onClick={() => {
                    setSuccess(false);
                    reset();
                  }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name <span className="text-rose-500">*</span></Label>
                      <Input id="fullName" placeholder="John Doe" {...register("fullName")} className={errors.fullName ? "border-rose-500" : ""} />
                      {errors.fullName && <p className="text-rose-500 text-xs">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name <span className="text-rose-500">*</span></Label>
                      <Input id="companyName" placeholder="Acme Corp" {...register("companyName")} className={errors.companyName ? "border-rose-500" : ""} />
                      {errors.companyName && <p className="text-rose-500 text-xs">{errors.companyName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email <span className="text-rose-500">*</span></Label>
                      <Input id="email" type="email" placeholder="john@acme.com" {...register("email")} className={errors.email ? "border-rose-500" : ""} />
                      {errors.email && <p className="text-rose-500 text-xs">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 999 999 9999" {...register("phone")} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select id="projectType" {...register("projectType")} className="flex h-11 w-full rounded-md border border-border bg-bg-surface px-3 text-sm text-text-primary focus-ring">
                        <option value="">Select an option</option>
                        <option value="chatbot">AI Chatbot / Virtual Assistant</option>
                        <option value="cv">Computer Vision / Surveillance</option>
                        <option value="data">Predictive Analytics / Big Data</option>
                        <option value="consulting">General Strategy & Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select id="budget" {...register("budget")} className="flex h-11 w-full rounded-md border border-border bg-bg-surface px-3 text-sm text-text-primary focus-ring">
                        <option value="">Select an option</option>
                        <option value="1L-5L">₹1L - ₹5L</option>
                        <option value="5L-15L">₹5L - ₹15L</option>
                        <option value="15L-50L">₹15L - ₹50L</option>
                        <option value="50L+">₹50L+</option>
                        <option value="notsure">Not Sure / Needs scoping</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message Details <span className="text-rose-500">*</span></Label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="Tell us about the problem you are trying to solve..." 
                      {...register("message")} 
                      className={`flex w-full rounded-md border border-border bg-bg-surface px-3 py-2 text-sm text-text-primary ring-offset-bg-primary placeholder:text-text-muted focus-ring resize-none ${errors.message ? "border-rose-500" : ""}`}
                    />
                    {errors.message && <p className="text-rose-500 text-xs">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" variant="glow" size="lg" className="w-full h-12 text-base shadow-glow" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Request..." : "Request a Demo"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
