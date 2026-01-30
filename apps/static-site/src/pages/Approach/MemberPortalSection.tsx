import { useState } from "react";

const memberPortalFeatures = [
  {
    label: "Upload unlimited tests",
    icon: "/assets/img/approach/tests.svg",
  },
  {
    label: "Connect wearable devices",
    icon: "/assets/img/approach/wearable.png",
  },
  {
    label: "Supplement recommendations",
    icon: "/assets/img/approach/pill.svg",
  },
  {
    label: "Insights & action plan",
    icon: "/assets/img/approach/action.svg",
  },
  {
    label: "Track your health in one dashboard",
    icon: "/assets/img/approach/dashboard.svg",
  },
];

const MemberPortalSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navbarPath =
    "M30 1H85C95 1 103 6 109 13C113 19 119 23 126 23C133 23 139 19 143 13C149 6 157 1 167 1H247C257 1 265 6 271 13C275 19 281 23 288 23C295 23 301 19 305 13C311 6 319 1 329 1H409C419 1 427 6 433 13C437 19 443 23 450 23C457 23 463 19 467 13C473 6 481 1 491 1H571C581 1 589 6 595 13C599 19 605 23 612 23C619 23 625 19 629 13C635 6 643 1 653 1H708C732 1 751 18 751 40C751 62 732 79 708 79H653C643 79 635 74 629 67C625 61 619 57 612 57C605 57 599 61 595 67C589 74 581 79 571 79H491C481 79 473 74 467 67C463 61 457 57 450 57C443 57 437 61 433 67C427 74 419 79 409 79H329C319 79 311 74 305 67C301 61 295 57 288 57C281 57 275 61 271 67C265 74 257 79 247 79H167C157 79 149 74 143 67C139 61 133 57 126 57C119 57 113 61 109 67C103 74 95 79 85 79H30C6 79 1 62 1 40C1 18 6 1 30 1Z";

  const hoverPaths = [
    "M30 1H85C95 1 103 6 109 13C113 19 119 23 126 23L126 57C119 57 113 61 109 67C103 74 95 79 85 79H30C6 79 1 62 1 40C1 18 6 1 30 1Z",
    "M126 23C133 23 139 19 143 13C149 6 157 1 167 1H247C257 1 265 6 271 13C275 19 281 23 288 23L288 57C281 57 275 61 271 67C265 74 257 79 247 79H167C157 79 149 74 143 67C139 61 133 57 126 57L126 23Z",
    "M288 23C295 23 301 19 305 13C311 6 319 1 329 1H409C419 1 427 6 433 13C437 19 443 23 450 23L450 57C443 57 437 61 433 67C427 74 419 79 409 79H329C319 79 311 74 305 67C301 61 295 57 288 57L288 23Z",
    "M450 23C457 23 463 19 467 13C473 6 481 1 491 1H571C581 1 589 6 595 13C599 19 605 23 612 23L612 57C605 57 599 61 595 67C589 74 581 79 571 79H491C481 79 473 74 467 67C463 61 457 57 450 57L450 23Z",
    "M612 23C619 23 625 19 629 13C635 6 643 1 653 1H708C732 1 751 18 751 40C751 62 732 79 708 79H653C643 79 635 74 629 67C625 61 619 57 612 57L612 23Z",
  ];

  const positions = [58, 207, 369, 531, 680];

  return (
    <section className="px-8 py-12">
      <h2 className="our-how-title text-center">
        Included in your member portal
      </h2>
      <div className="max-w-6xl mx-auto mt-8">
        <svg
          viewBox="0 0 751 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <clipPath id="memberPortalClip">
              <path d={navbarPath} />
            </clipPath>

            <linearGradient
              id="memberPortalBg"
              x1="0"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient
              id="memberGradient0"
              x1="0"
              y1="67"
              x2="172"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7FC5FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F5DFD0" stopOpacity="1" />
              <stop offset="80%" stopColor="#E8C9AE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8C9AE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="memberGradient1"
              x1="126"
              y1="67"
              x2="298"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7FC5FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F5DFD0" stopOpacity="1" />
              <stop offset="80%" stopColor="#E8C9AE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8C9AE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="memberGradient2"
              x1="288"
              y1="67"
              x2="460"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7FC5FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F5DFD0" stopOpacity="1" />
              <stop offset="80%" stopColor="#E8C9AE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8C9AE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="memberGradient3"
              x1="450"
              y1="67"
              x2="622"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7FC5FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F5DFD0" stopOpacity="1" />
              <stop offset="80%" stopColor="#E8C9AE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8C9AE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="memberGradient4"
              x1="612"
              y1="67"
              x2="751"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7FC5FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F5DFD0" stopOpacity="1" />
              <stop offset="80%" stopColor="#E8C9AE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8C9AE" stopOpacity="0" />
            </linearGradient>
          </defs>

          {memberPortalFeatures.map((feature, index) => {
            const isHovered = index === hoveredIndex;
            const shouldFade = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <g
                key={feature.label}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <image
                  href={feature.icon}
                  x={positions[index] - 10}
                  y="18"
                  width="20"
                  height="20"
                  style={{
                    opacity: shouldFade ? 0.4 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <text
                  x={positions[index]}
                  y="52"
                  textAnchor="middle"
                  className="select-none"
                  style={{
                    fill: isHovered ? "#000000" : "#2B2B2B",
                    fontFamily: "'Geist', var(--font-family-base)",
                    fontWeight: isHovered ? 600 : 400,
                    fontSize: "11px",
                    letterSpacing: "-0.02em",
                    opacity: shouldFade ? 0.4 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {(() => {
                    const words = feature.label.split(" ");
                    const mid = Math.ceil(words.length / 2);
                    const line1 = words.slice(0, mid).join(" ");
                    const line2 = words.slice(mid).join(" ");
                    return (
                      <>
                        <tspan x={positions[index]} dy="0">
                          {line1}
                        </tspan>
                        {line2 && (
                          <tspan x={positions[index]} dy="1.2em">
                            {line2}
                          </tspan>
                        )}
                      </>
                    );
                  })()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default MemberPortalSection;
