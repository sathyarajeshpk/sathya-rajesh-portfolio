"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Form controls share one underlined style driven by CSS variables, so light
 * and dark themes stay in step without a second set of `dark:` classes.
 */
const controlClass =
  "w-full border-0 border-b bg-transparent px-0 py-2.5 text-[0.9375rem] text-[var(--fg)] " +
  "border-[var(--rule-strong)] placeholder:text-[var(--fg-subtle)] " +
  "transition-colors duration-200 focus:border-[var(--accent)] focus:outline-none focus:ring-0 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(controlClass, className)} {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} rows={5} className={cn(controlClass, "resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(controlClass, "cursor-pointer appearance-none pr-7", className)}
      {...props}
    >
      {children}
    </select>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[var(--fg-subtle)]"
    >
      ▾
    </span>
  </div>
));
Select.displayName = "Select";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="label mb-2 block text-subtle">
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <p className="mt-2 text-xs text-subtle">{hint}</p> : null}
    </div>
  );
}
