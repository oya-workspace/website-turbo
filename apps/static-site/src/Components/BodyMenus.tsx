import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BodyMenus() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const menuItems = ["Body", "Emotions", "Energy", "Health"];

  // Full navbar path for the background (718x90 scaled)
  const navbarPath =
    "M45 1H92C105.3 1 117.2 6.9 125.3 16.2C131.4 23.2 139.5 29.5 149.1 29.5C158.7 29.5 166.9 23.2 173 16.2C181 6.9 193 1 206.3 1H309.5C322.8 1 334.7 6.9 342.8 16.2C348.8 23.2 357 29.5 366.6 29.5C376.2 29.5 384.3 23.2 390.4 16.2C398.4 6.9 410.4 1 423.7 1H494.8C508.1 1 520 6.9 528 16.2C534.1 23.2 542.2 29.5 551.8 29.5C561.5 29.5 569.6 23.2 575.7 16.2C583.7 6.9 595.6 1 608.9 1H674C698.3 1 718 20.6 718 44.8C718 68.9 698.3 88.5 674 88.5H608.9C595.6 88.5 583.7 82.6 575.7 73.3C569.6 66.4 561.5 60.5 551.8 60.5C542.2 60.5 534.1 66.4 528 73.3C520 82.6 508.1 88.5 494.8 88.5H423.7C410.4 88.5 398.4 82.6 390.4 73.3C384.3 66.4 376.2 60.5 366.6 60.5C357 60.5 348.8 66.4 342.8 73.3C334.7 82.6 322.8 88.5 309.5 88.5H206.3C193 88.5 181 82.6 173 73.3C166.9 66.4 158.7 60.5 149.1 60.5C139.5 60.5 131.4 66.4 125.3 73.3C117.2 82.6 105.3 88.5 92 88.5H45C20.7 88.5 1 68.9 1 44.8C1 21 20.2 1.7 43.9 1.1L45 1Z";

  // Individual hover paths - each follows the wavy button shape
  const hoverPaths = [
    // Body - pill left, pinched right
    "M45 1H92C105.3 1 117.2 6.9 125.3 16.2C131.4 23.2 139.5 29.5 149.1 29.5L149.1 60.5C139.5 60.5 131.4 66.4 125.3 73.3C117.2 82.6 105.3 88.5 92 88.5H45C20.7 88.5 1 68.9 1 44.8C1 21 20.2 1.7 43.9 1.1L45 1Z",
    // Emotions
    "M149.1 29.5C158.7 29.5 166.9 23.2 173 16.2C181 6.9 193 1 206.3 1H309.5C322.8 1 334.7 6.9 342.8 16.2C348.8 23.2 357 29.5 366.6 29.5L366.6 60.5C357 60.5 348.8 66.4 342.8 73.3C334.7 82.6 322.8 88.5 309.5 88.5H206.3C193 88.5 181 82.6 173 73.3C166.9 66.4 158.7 60.5 149.1 60.5L149.1 29.5Z",
    // Energy
    "M366.6 29.5C376.2 29.5 384.3 23.2 390.4 16.2C398.4 6.9 410.4 1 423.7 1H494.8C508.1 1 520 6.9 528 16.2C534.1 23.2 542.2 29.5 551.8 29.5L551.8 60.5C542.2 60.5 534.1 66.4 528 73.3C520 82.6 508.1 88.5 494.8 88.5H423.7C410.4 88.5 398.4 82.6 390.4 73.3C384.3 66.4 376.2 60.5 366.6 60.5L366.6 29.5Z",
    // Health - pinched left, pill right
    "M551.8 29.5C561.5 29.5 569.6 23.2 575.7 16.2C583.7 6.9 595.6 1 608.9 1H674C698.3 1 718 20.6 718 44.8C718 68.9 698.3 88.5 674 88.5H608.9C595.6 88.5 583.7 82.6 575.7 73.3C569.6 66.4 561.5 60.5 551.8 60.5L551.8 29.5Z",
  ];

  // Text center positions for each button (x coordinate)
  const textPositions = [65, 258, 459, 645];

  return (
    <section className="body-menus" data-aos="fade-left">
      <div className="container">
        <div className="boby-nevbar-wrapper">
          {/* Main navbar SVG */}
          <svg
            viewBox="0 0 718 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navbar-svg"
          >
            <defs>
              {/* Clip path to contain everything inside the navbar shape */}
              <clipPath id="navbarClip">
                <path d={navbarPath} />
              </clipPath>

              <linearGradient
                id="navbarBg"
                x1="0"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#514234" stopOpacity="0.5" />
                <stop offset="1" stopColor="#514234" stopOpacity="0.2" />
              </linearGradient>

              {/* Hover gradients - blue bottom-left to peach/orange top-right, fading to transparent */}
              <linearGradient
                id="hoverGradient0"
                x1="0"
                y1="90"
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
                id="hoverGradient1"
                x1="149"
                y1="90"
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
                id="hoverGradient2"
                x1="366"
                y1="90"
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
                id="hoverGradient3"
                x1="551"
                y1="90"
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

            {/* Everything clipped to navbar shape */}
            <g clipPath="url(#navbarClip)">
              {/* Background navbar shape */}
              <path d={navbarPath} fill="url(#navbarBg)" />

              {/* Hover highlight - white fading to transparent */}
              {hoveredIndex !== null && (
                <path
                  d={hoverPaths[hoveredIndex]}
                  fill={`url(#hoverGradient${hoveredIndex})`}
                />
              )}
            </g>

            {/* Text labels positioned in SVG for precise centering */}
            {menuItems.map((item, index) => (
              <text
                key={item}
                x={textPositions[index]}
                y="52"
                textAnchor="middle"
                className={`svg-menu-text ${hoveredIndex === index ? "hovered" : ""}`}
                style={{
                  fill: hoveredIndex === index ? "#2B2B2B" : "#ffffff",
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: hoveredIndex === index ? 400 : 300,
                  letterSpacing: "-0.03em",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
