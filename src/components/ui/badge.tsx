import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glow";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-bg-surface text-text-primary hover:bg-bg-surface/80",
    secondary: "border-transparent bg-accent-teal/10 text-accent-teal hover:bg-accent-teal/20",
    outline: "text-text-primary border-border",
    glow: "border-transparent bg-accent-blue/10 text-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.2)]",
  }

  return (
    <div className={cn(baseClasses, variants[variant], className)} {...props} />
  )
}

export { Badge }
