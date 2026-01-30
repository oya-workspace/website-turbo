import { useState, useRef, useEffect, useCallback } from "react";

interface Testimonial {
  id: string;
  name: string;
  category: string;
  quote: string;
  videoSrc: string;
  thumbnail: string;
  hasPlayButton?: boolean;
}

// Video base URL
const VIDEO_BASE_URL = "https://videos.oya.health";

// Testimonial data matching Figma layout
const testimonialsData = {
  // Column 1 - Tall with play button
  jennifer: {
    id: "jennifer",
    name: "Jennifer",
    category: "Fertility",
    quote:
      '"We optimized my cycle and labs—I\'m hopeful about fertility again."',
    videoSrc: `${VIDEO_BASE_URL}/jennifer-fertility.mp4`,
    thumbnail: "",
    hasPlayButton: true,
  },
  // Column 2 - Two short stacked
  claire: {
    id: "claire",
    name: "Claire",
    category: "Autoimmune & Anxiety",
    quote:
      '"Autoimmune flares eased and my anxiety finally quieted—steady days I can trust."',
    videoSrc: `${VIDEO_BASE_URL}/claire-autoimmune-anxiety.mp4`,
    thumbnail: "",
    hasPlayButton: false,
  },
  alexis: {
    id: "alexis",
    name: "Alexis",
    category: "Relationships",
    quote: '"Reconnecting with myself changed everything."',
    videoSrc: `${VIDEO_BASE_URL}/alexis-relationship.mp4`,
    thumbnail: "",
    hasPlayButton: false,
  },
  // Column 3 - Tall with play button
  kate: {
    id: "kate",
    name: "Kate",
    category: "WellCare",
    quote:
      '"Their precision protocols translated into calm, consistent results."',
    videoSrc: `${VIDEO_BASE_URL}/kate-wellcare.mp4`,
    thumbnail: "",
    hasPlayButton: true,
  },
  // Column 4 - Two short stacked
  john: {
    id: "john",
    name: "John",
    category: "Renewal",
    quote: '"From burnout to steady energy—simple changes I could sustain."',
    videoSrc: `${VIDEO_BASE_URL}/john-testimonial.mp4`,
    thumbnail: "",
    hasPlayButton: false,
  },
  katie: {
    id: "katie",
    name: "Katie",
    category: "Digestive & Stress",
    quote:
      '"Healing my gut and addressing old stress changed everything—sleep, mood, routine."',
    videoSrc: `${VIDEO_BASE_URL}/katie-digestive.mp4`,
    thumbnail: "",
    hasPlayButton: false,
  },
  // Column 5 - Tall with play button
  thomas: {
    id: "thomas",
    name: "Thomas",
    category: "Wellness",
    quote:
      '"A personalized approach that truly made a difference in my daily life."',
    videoSrc: `${VIDEO_BASE_URL}/thomas.mp4`,
    thumbnail: "",
    hasPlayButton: true,
  },
  // Column 6 - Two short stacked
  peter: {
    id: "peter",
    name: "Peter",
    category: "Weight & Depression",
    quote: '"Finally found a path forward—lost weight and lifted my mood."',
    videoSrc: `${VIDEO_BASE_URL}/peter-weight-depression.mp4`,
    thumbnail: "",
    hasPlayButton: false,
  },
  john2: {
    id: "john2",
    name: "John",
    category: "Renewal",
    quote: '"From burnout to steady energy—simple changes I could sustain."',
    videoSrc: `${VIDEO_BASE_URL}/john-testimonial.mp4`,
    thumbnail: "",
    hasPlayButton: false,
  },
};

export default function Testimonals() {
  const [activeSlide, setActiveSlide] = useState(2);
  const [modalVideo, setModalVideo] = useState<Testimonial | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const testimonial = Object.values(testimonialsData).find(
      (t) => t.id === id
    );
    if (testimonial) {
      setModalVideo(testimonial);
    }
  };

  const closeModal = useCallback(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalVideo(null);
  }, []);

  // Close modal on Escape key and auto-play video when modal opens
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalVideo) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);

    // Auto-play video when modal opens
    if (modalVideo && modalVideoRef.current) {
      modalVideoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [modalVideo, closeModal]);

  const handlePaginationClick = (index: number) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const columnWidth = 356 + 20; // width + gap
      // Each pagination dot represents 2 columns (6 columns / 3 dots = 2 columns per dot)
      const scrollPosition = index * columnWidth * 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Update active slide based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const columnWidth = 356 + 20; // width + gap
      // Calculate which pagination dot should be active (each dot represents 2 columns)
      const columnIndex = Math.round(scrollLeft / columnWidth);
      const paginationIndex = Math.floor(columnIndex / 2);
      const clampedSlide = Math.min(Math.max(0, paginationIndex), 2);
      setActiveSlide(clampedSlide);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const PlayButton = ({
    onClick,
  }: {
    onClick: (e: React.MouseEvent) => void;
  }) => (
    <div
      onClick={onClick}
      style={{
        width: 96,
        height: 96,
        left: 130,
        top: 204,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.50)",
        overflow: "hidden",
        borderRadius: 99,
        backdropFilter: "blur(2px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none">
        <path d="M35 20L0 40V0L35 20Z" fill="white" />
      </svg>
    </div>
  );

  const TallCard = ({
    data,
    variant = "default",
    noBlur = false,
  }: {
    data: Testimonial;
    variant?: "default" | "kate";
    noBlur?: boolean;
  }) => {
    // Kate's card has slightly different gradient positioning in Figma
    const gradientTop = variant === "kate" ? 232 : 175;

    return (
      <div
        className="video-testi"
        onClick={(e) => handlePlayClick(data.id, e)}
        style={{
          width: 356,
          // height: 504, // Full height of the grid
          flexShrink: 0,
          position: "relative",
          background: "#000",
          overflow: "hidden",
          borderRadius: 16,
          cursor: "pointer",
          willChange: "transform",
        }}
      >
        <video
          ref={(el) => (videoRefs.current[data.id] = el)}
          src={data.videoSrc}
          poster={data.thumbnail}
          playsInline
          muted
          loop
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            backgroundColor: "#000",
            willChange: "transform",
          }}
        />
        <div
          style={{
            width: 356,
            // height: gradientHeight,
            left: 0,
            top: gradientTop,
            position: "absolute",
            // background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)',
            // ...(noBlur ? {} : { backdropFilter: 'blur(7.50px)' })
          }}
        ></div>
        <div
          style={{
            width: 356,
            padding: 24,
            left: 0,
            top: 409,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)",
            ...(noBlur ? {} : { backdropFilter: "blur(7.50px)" }),
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "white",
              fontSize: 16,
              fontFamily: "Newsreader",
              fontWeight: 400,
              lineHeight: "19.20px",
              wordWrap: "break-word",
            }}
          >
            {data.quote}
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "white",
              fontSize: 12,
              fontFamily: "Geist",
              fontWeight: 300,
              textTransform: "uppercase",
              lineHeight: "15.60px",
              wordWrap: "break-word",
            }}
          >
            {data.name} — {data.category}
          </div>
        </div>
        {data.hasPlayButton && (
          <PlayButton onClick={(e) => handlePlayClick(data.id, e)} />
        )}
      </div>
    );
  };

  const ShortCard = ({
    data,
    quoteWidth,
    noBlur = false,
    gradientTop = 114,
  }: {
    data: Testimonial;
    quoteWidth?: number;
    noBlur?: boolean;
    gradientTop?: number;
  }) => (
    <div
      onClick={(e) => handlePlayClick(data.id, e)}
      style={{
        width: 356,
        height: 242, // Half height minus gap: (504 - 20) / 2 = 242
        flex: "1 1 0",
        position: "relative",
        background: "#000",
        overflow: "hidden",
        borderRadius: 16,
        cursor: "pointer",
        willChange: "transform",
      }}
    >
      <video
        ref={(el) => (videoRefs.current[data.id] = el)}
        src={data.videoSrc}
        poster={data.thumbnail}
        playsInline
        muted
        loop
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "#000",
          willChange: "transform",
        }}
      />
      <div
        style={{
          width: 356,
          // height: gradientHeight,
          left: 0,
          top: gradientTop,
          position: "absolute",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)",
          ...(noBlur ? {} : { backdropFilter: "blur(7.50px)" }),
        }}
      ></div>
      <div
        style={{
          width: 356,
          padding: 24,
          left: 0,
          top: 118,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 29,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            ...(quoteWidth ? { width: quoteWidth } : { alignSelf: "stretch" }),
            color: "white",
            fontSize: 16,
            fontFamily: "Newsreader",
            fontWeight: 400,
            lineHeight: "19.20px",
            wordWrap: "break-word",
          }}
        >
          {data.quote}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            color: "white",
            fontSize: 12,
            fontFamily: "Geist",
            fontWeight: 300,
            textTransform: "uppercase",
            lineHeight: "15.60px",
            wordWrap: "break-word",
          }}
        >
          {data.name} — {data.category}
        </div>
      </div>
      <div
        onClick={(e) => handlePlayClick(data.id, e)}
        style={{
          width: 64,
          height: 64,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          background: "rgba(0, 0, 0, 0.50)",
          overflow: "hidden",
          borderRadius: 99,
          backdropFilter: "blur(2px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <svg width="24" height="28" viewBox="0 0 35 40" fill="none">
          <path d="M35 20L0 40V0L35 20Z" fill="white" />
        </svg>
      </div>
    </div>
  );

  const StackedColumn = ({
    top,
    bottom,
    topQuoteWidth,
    bottomQuoteWidth,
    noBlur = false,
    bottomGradientTop,
  }: {
    top: Testimonial;
    bottom: Testimonial;
    topQuoteWidth?: number;
    bottomQuoteWidth?: number;
    noBlur?: boolean;
    bottomGradientTop?: number;
  }) => (
    <div
      style={{
        width: 356,
        height: 520, // Full height to match TallCard
        flexShrink: 0,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 20,
        display: "flex",
      }}
    >
      <ShortCard data={top} quoteWidth={topQuoteWidth} noBlur={noBlur} />
      <ShortCard
        data={bottom}
        quoteWidth={bottomQuoteWidth}
        noBlur={noBlur}
        gradientTop={bottomGradientTop}
      />
    </div>
  );

  return (
    <section className="testimonials-figma" data-aos="fade-up">
      <div className="testimonials-bg"></div>

      {/* Main Container - exact Figma styles */}
      <div
        className="full-card-bk"
        style={{
          alignSelf: "stretch",
          paddingTop: 80,
          paddingBottom: 40,
          paddingLeft: 80,
          paddingRight: 80,
          background: "rgba(81.07, 66.01, 51.93, 0.35)",
          overflow: "hidden",
          borderRadius: 32,
          backdropFilter: "blur(18.50px)",
          WebkitBackdropFilter: "blur(18.50px)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
          display: "inline-flex",
          maxWidth: 1344,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            alignSelf: "stretch",
            height: 81,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 4,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 4,
                height: 4,
                background: "white",
                borderRadius: 9999,
              }}
            ></div>
            <div
              style={{
                color: "white",
                fontSize: 12,
                fontFamily: "Geist",
                fontWeight: 400,
                textTransform: "uppercase",
                lineHeight: "14.40px",
                wordWrap: "break-word",
              }}
            >
              testimonials
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "flex",
            }}
          >
            <div
              className="title-testi"
              style={{
                alignSelf: "stretch",
                color: "white",
                fontSize: 48,
                fontFamily: "Geist",
                fontWeight: 300,
                lineHeight: "48px",
                wordWrap: "break-word",
              }}
            >
              Real People, Real Stories
            </div>
          </div>
        </div>

        {/* Grid - Horizontal scroll */}
        <div
          className="testi-cards"
          ref={scrollContainerRef}
          style={{
            alignSelf: "stretch",
            // height: 504,
            justifyContent: "flex-start",
            alignItems: "stretch",
            gap: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Column 1 - Jennifer (Tall) */}
          <TallCard data={testimonialsData.jennifer} />

          {/* Column 2 - Claire & Alexis (Stacked) - Alexis has fixed width quote (191px) */}
          <StackedColumn
            top={testimonialsData.claire}
            bottom={testimonialsData.alexis}
            bottomQuoteWidth={191}
          />

          {/* Column 3 - Kate (Tall) - with variant for different gradient */}
          <TallCard data={testimonialsData.kate} variant="kate" />

          {/* Column 4 - John & Katie (Stacked) */}
          <StackedColumn
            top={testimonialsData.john}
            bottom={testimonialsData.katie}
          />

          {/* Column 5 - Thomas (Tall) - no blur on gradient */}
          <TallCard data={testimonialsData.thomas} noBlur={true} />

          {/* Column 6 - Peter & John2 (Stacked) - no blur, bottom has taller gradient (184px at top 58px) */}
          <StackedColumn
            top={testimonialsData.peter}
            bottom={testimonialsData.john2}
            noBlur={true}
            bottomGradientTop={58}
          />
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 6,
            paddingBottom: 6,
            background: "rgba(255, 255, 255, 0.30)",
            borderRadius: 999,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12,
            display: "inline-flex",
          }}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => handlePaginationClick(index)}
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                border: activeSlide === index ? "none" : "1px white solid",
                background: activeSlide === index ? "white" : "transparent",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {modalVideo && (
        <div className="testimonial-modal-overlay" onClick={closeModal}>
          <div
            className="testimonial-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="testimonial-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="testimonial-modal-video-wrapper">
              <video
                ref={modalVideoRef}
                src={modalVideo.videoSrc}
                controls
                autoPlay
                className="testimonial-modal-video"
              />
            </div>
            <div className="testimonial-modal-info">
              <div className="testimonial-modal-quote">{modalVideo.quote}</div>
              <div className="testimonial-modal-author">
                {modalVideo.name} — {modalVideo.category}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
