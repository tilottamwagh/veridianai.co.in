import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: "default" | "outline" | "ghost" | "glass" | "glow";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, ...props }, ref) => {
    
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-accent-blue text-white hover:bg-blue-600",
      outline: "border border-border bg-transparent hover:bg-bg-surface text-text-primary",
      ghost: "hover:bg-bg-surface text-text-primary",
      glass: "glass hover:bg-white/5 text-text-primary",
      glow: "bg-accent-blue text-white hover:bg-blue-600 shadow-glow hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
    };
    
    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-8 text-base",
      icon: "h-11 w-11",
    };

    const classes = cn(baseClass, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
