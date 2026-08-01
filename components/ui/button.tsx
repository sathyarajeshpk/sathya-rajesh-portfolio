"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fabric-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-fabric-700 text-white hover:bg-fabric-800 shadow-lg shadow-fabric-700/25":
              variant === "default",
            "border-2 border-fabric-700 text-fabric-700 hover:bg-fabric-50":
              variant === "outline",
            "hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
            "text-fabric-700 underline-offset-4 hover:underline":
              variant === "link",
            "glass text-white hover:bg-white/20": variant === "glass",
          },
          {
            "h-10 px-5 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
