import { useState } from "react";

const solutions = [
  { label: "We Assess" },
  { label: "We Declutter" },
  { label: "We Stabilize" },
  { label: "We Optimize" },
];

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navbarPath =
    "M45 1H92C105.3 1 117.2 5.2 125.3 11.8C131.4 17.2 139.5 21 149.1 21C158.7 21 166.9 17.2 173 11.8C181 5.2 193 1 206.3 1H309.5C322.8 1 334.7 5.2 342.8 11.8C348.8 17.2 357 21 366.6 21C376.2 21 384.3 17.2 390.4 11.8C398.4 5.2 410.4 1 423.7 1H494.8C508.1 1 520 5.2 528 11.8C534.1 17.2 542.2 21 551.8 21C561.5 21 569.6 17.2 575.7 11.8C583.7 5.2 595.6 1 608.9 1H674C698.3 1 718 15.5 718 33.5C718 51.5 698.3 66 674 66H608.9C595.6 66 583.7 61.8 575.7 55.2C569.6 49.8 561.5 46 551.8 46C542.2 46 534.1 49.8 528 55.2C520 61.8 508.1 66 494.8 66H423.7C410.4 66 398.4 61.8 390.4 55.2C384.3 49.8 376.2 46 366.6 46C357 46 348.8 49.8 342.8 55.2C334.7 61.8 322.8 66 309.5 66H206.3C193 66 181 61.8 173 55.2C166.9 49.8 158.7 46 149.1 46C139.5 46 131.4 49.8 125.3 55.2C117.2 61.8 105.3 66 92 66H45C20.7 66 1 51.5 1 33.5C1 15.8 20.2 1.5 43.9 1L45 1Z";

  const hoverPaths = [
    "M45 1H92C105.3 1 117.2 5.2 125.3 11.8C131.4 17.2 139.5 21 149.1 21L149.1 46C139.5 46 131.4 49.8 125.3 55.2C117.2 61.8 105.3 66 92 66H45C20.7 66 1 51.5 1 33.5C1 15.8 20.2 1.5 43.9 1L45 1Z",
    "M149.1 21C158.7 21 166.9 17.2 173 11.8C181 5.2 193 1 206.3 1H309.5C322.8 1 334.7 5.2 342.8 11.8C348.8 17.2 357 21 366.6 21L366.6 46C357 46 348.8 49.8 342.8 55.2C334.7 61.8 322.8 66 309.5 66H206.3C193 66 181 61.8 173 55.2C166.9 49.8 158.7 46 149.1 46L149.1 21Z",
    "M366.6 21C376.2 21 384.3 17.2 390.4 11.8C398.4 5.2 410.4 1 423.7 1H494.8C508.1 1 520 5.2 528 11.8C534.1 17.2 542.2 21 551.8 21L551.8 46C542.2 46 534.1 49.8 528 55.2C520 61.8 508.1 66 494.8 66H423.7C410.4 66 398.4 61.8 390.4 55.2C384.3 49.8 376.2 46 366.6 46L366.6 21Z",
    "M551.8 21C561.5 21 569.6 17.2 575.7 11.8C583.7 5.2 595.6 1 608.9 1H674C698.3 1 718 15.5 718 33.5C718 51.5 698.3 66 674 66H608.9C595.6 66 583.7 61.8 575.7 55.2C569.6 49.8 561.5 46 551.8 46L551.8 21Z",
  ];

  const textPositions = [65, 258, 459, 645];

  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">
        This integrated approach delivers effective, lasting solutions for true
        balance.
      </h2>
      <p className="mt-3 text-center text-base font-normal text-[#2B2B2B] opacity-70">
        Hover and click on which section you would like to learn more.
      </p>
      <div className="max-w-6xl mx-auto mt-8">
        <svg
          viewBox="0 0 718 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <clipPath id="solutionsClip">
              <path d={navbarPath} />
            </clipPath>

            <linearGradient
              id="solutionsBg"
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
              id="activeGradient0"
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
              id="activeGradient1"
              x1="149"
              y1="67"
              x2="385"
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
              id="activeGradient2"
              x1="366"
              y1="67"
              x2="570"
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
              id="activeGradient3"
              x1="551"
              y1="67"
              x2="718"
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

          <g clipPath="url(#solutionsClip)">
            <path d={navbarPath} fill="url(#solutionsBg)" />

            {hoveredIndex !== null && (
              <path
                d={hoverPaths[hoveredIndex]}
                fill={`url(#activeGradient${hoveredIndex})`}
              />
            )}
          </g>

          <path d={navbarPath} fill="none" stroke="#E9A15E" strokeWidth="1" />

          {solutions.map((solution, index) => {
            const isHovered = index === hoveredIndex;
            const shouldFade = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <text
                key={solution.label}
                x={textPositions[index]}
                y="38"
                textAnchor="middle"
                className="select-none cursor-pointer"
                style={{
                  fill: isHovered ? "#000000" : "#2B2B2B",
                  fontFamily: "'Geist', var(--font-family-base)",
                  fontWeight: isHovered ? 600 : 400,
                  fontSize: "18px",
                  letterSpacing: "-0.02em",
                  opacity: shouldFade ? 0.4 : 1,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {solution.label}
              </text>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
