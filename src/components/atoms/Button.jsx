import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ className, variant = "primary", size = "md", children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transform hover:scale-105 focus:ring-primary",
    secondary: "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
    accent: "bg-gradient-to-r from-accent to-orange-500 text-white hover:from-accent/90 hover:to-orange-500/90 shadow-md hover:shadow-lg transform hover:scale-105 focus:ring-accent",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-50"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;