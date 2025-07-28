import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ className, variant = "default", children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const variants = {
    default: "bg-gray-100 text-gray-800",
    free: "bg-gray-100 text-gray-700 border border-gray-200",
    member: "bg-gradient-to-r from-secondary/10 to-primary/10 text-primary border border-primary/20",
    master: "bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border border-amber-200"
  };
  
  return (
    <span
      className={cn(baseClasses, variants[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;