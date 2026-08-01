import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glass";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        {
          "border-transparent bg-fabric-700 text-white hover:bg-fabric-800":
            variant === "default",
          "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200":
            variant === "secondary",
          "text-slate-950 border-slate-200": variant === "outline",
          "border-white/20 bg-white/10 text-white backdrop-blur-md":
            variant === "glass",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
