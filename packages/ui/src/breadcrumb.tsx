import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  itemClassName?: string;
  activeClassName?: string;
  linkClassName?: string;
}

const breadcrumbBaseStyles =
  "font-['Geist'] font-normal text-[18px] leading-[120%] tracking-[-0.05em] uppercase";

function ChevronSeparator() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2 opacity-70"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Breadcrumb({
  items,
  separator = <ChevronSeparator />,
  className,
  itemClassName,
  activeClassName,
  linkClassName,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={twMerge(clsx("flex items-center", className))}>
      <ol className="flex items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className={twMerge(
                    clsx(
                      breadcrumbBaseStyles,
                      "opacity-70 hover:opacity-100 transition-opacity",
                      linkClassName
                    )
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={twMerge(
                    clsx(
                      breadcrumbBaseStyles,
                      isLast ? "opacity-100" : "opacity-70",
                      isLast ? activeClassName : itemClassName
                    )
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && separator}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
