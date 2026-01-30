import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  className?: string;
  animate?: boolean;
}

export function Skeleton({
  variant = "text",
  width,
  height,
  className,
  animate = true,
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={twMerge(
        clsx(
          "bg-[#E8D5C4]",
          animate && "animate-pulse",
          variant === "text" && "h-4 rounded",
          variant === "circular" && "rounded-full",
          variant === "rectangular" && "rounded-lg",
          className
        )
      )}
      style={style}
      aria-hidden="true"
    />
  );
}
