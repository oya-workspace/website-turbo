import { useRef, useState, useEffect } from "react";

export default function Understand() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        slider.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.85;
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.85;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="understanding">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <div className="card-understanding">
                <button
                  className={`slider-arrow slider-arrow-left ${!canScrollLeft ? "disabled" : ""}`}
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  <i className="fa fa-chevron-left"></i>
                </button>
                <div className="card-contents">
                  <small>understand the process</small>
                  <h3>
                    A personalized system that balances your physical and
                    emotional wellbeing
                  </h3>
                </div>
                <div className="card-content-slider-wrapper">
                  <div className="card-content-slider" ref={sliderRef}>
                    <div className="slider-bk">
                      <div className="left-content">
                        <h4 className="ff-newsreader">Assess & Decode</h4>
                        <p>Discover the root. Map your blueprint.</p>
                        <p>
                          We start by understanding your full picture,
                          physically and emotionally.
                        </p>
                        <p>
                          Using up to 150+ biomarkers, frequency mapping, facial
                          scans, and our patented Emotional Somatic Mapping
                          (ESM), we uncover hidden emotional imprints and
                          biological patterns behind your symptoms.
                        </p>
                        <p>
                          No more guesswork—just clarity on what's holding you
                          back.
                        </p>
                      </div>
                      <img
                        src="/assets/img/contentslider.svg"
                        alt="Content slider"
                        className="img-bk"
                      />
                    </div>
                    <div className="slider-bk">
                      <div className="left-content">
                        <h4 className="ff-newsreader">
                          Expert Plan & Direction
                        </h4>
                        <p>
                          Your personal action plans begin with a real person.
                        </p>
                        <p>
                          Your personalized roadmap is crafted by experts using
                          your data.
                        </p>
                        <p>
                          We focus first on restoring balance—clearing physical
                          toxins, regulating emotional imprints, and rebalancing
                          nervous system patterns—so your foundation is strong.
                        </p>
                        <p>✨ Real data. Real change. Real support.</p>
                      </div>
                      <img
                        src="/assets/img/Group 10.svg"
                        alt="Group illustration"
                        className="img-bk"
                      />
                    </div>
                    <div className="slider-bk">
                      <div className="left-content">
                        <h4 className="ff-newsreader">
                          Resilience Meets Precision
                        </h4>
                        <p>
                          With your foundation restored, we design a
                          personalized protocol using vitamins, peptides, and
                          targeted nutrients—crafted specifically for your
                          biochemistry, not a one-size-fits-all formula.
                        </p>
                        <p>
                          Emotional support continues through daily guidance
                          from SoulMade™—our proprietary AI coach, uniquely
                          trained by expert therapists to understand your
                          emotional blueprint and meet you exactly where you
                          are. This isn’t generic AI—it’s personalized,
                          intelligent support for your transformation journey.
                        </p>
                        <p>✨ Your next-level of performance starts here.</p>
                      </div>
                      <img
                        src="/assets/img/Group 11.png"
                        alt="Group illustration"
                        className="img-bk"
                      />

                      {/* <img src="/assets/img/Group 11.png" alt="Group illustration" className="img-bk" /> */}
                    </div>
                    <div className="slider-bk">
                      <div className="left-content">
                        <h4 className="ff-newsreader">Upgrade & Stabilize</h4>
                        <p>
                          This is where it all comes together—habits shift,
                          energy rises, and you begin to live your longevity. We
                          fine-tune your plan with advanced supplements,
                          lifestyle upgrades, and ongoing emotional support to
                          lock in lasting change.
                        </p>
                        <p>
                          Your personalized roadmap is crafted by experts using
                          your data.
                        </p>
                        <p>
                          ✨ This is your new normal—stable, strong, and
                          aligned.
                        </p>
                      </div>
                      <img
                        src="/assets/img/Group 12.svg"
                        alt="Group illustration"
                        className="img-bk"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className={`slider-arrow slider-arrow-right ${!canScrollRight ? "disabled" : ""}`}
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
