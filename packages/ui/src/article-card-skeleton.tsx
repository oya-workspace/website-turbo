import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ArticleCardSkeletonProps {
  className?: string;
}

function SkeletonBox({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={twMerge(clsx("bg-[#E8D5C4] animate-pulse", className))}
      style={style}
      aria-hidden="true"
    />
  );
}

export function ArticleCardSkeleton({ className }: ArticleCardSkeletonProps) {
  return (
    <article
      className={twMerge(
        clsx(
          "flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm",
          className
        )
      )}
      aria-hidden="true"
    >
      {/* Image placeholder */}
      <SkeletonBox className="w-full aspect-[4/3] rounded-none" />

      {/* Body */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category badge */}
        <SkeletonBox className="rounded-full" style={{ width: 80, height: 20 }} />

        {/* Title - 2 lines */}
        <div className="flex flex-col gap-2">
          <SkeletonBox className="rounded h-5 w-full" />
          <SkeletonBox className="rounded h-5 w-3/4" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 mt-auto">
        <SkeletonBox className="rounded" style={{ width: 100, height: 16 }} />
      </div>
    </article>
  );
}
