import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  default: "bg-gray-100 text-gray-800 border border-gray-200",
  outline: "bg-transparent text-gray-700 border border-gray-300",
  filled: "bg-gray-800 text-white border border-gray-800",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center rounded-full font-medium",
          variantStyles[variant],
          sizeStyles[size],
          className
        )
      )}
    >
      {children}
    </span>
  );
}
