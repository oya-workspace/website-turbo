import "./approach.css";

export default function PerformanceOptimization() {
  return (
    <section className="py-12">
      {/* Section 1: Performance Optimization */}
      <div className="performance-section">
        <div className="px-8 text-center">
          <div className="flex justify-center">
            {/* <span className="inline-block bg-[#A58EC0] text-white text-md px-3 py-1 rounded-full">
                            • WE OPTIMIZE YOUR PERFORMANCE
                        </span> */}

            <span className="inline-flex items-center gap-2 bg-[#A58EC0] text-[18px] text-white text-md px-3 py-2 rounded-full">
              <img
                src="/assets/img/approach/optimize.png"
                alt="pill"
                width={25}
                className="inline-block"
              />
              WE OPTIMIZE YOUR PERFORMANCE
            </span>
          </div>

          <h2 className="mt-6 take-control-title">
            By Building Your Personalized Protocol
          </h2>

          <div className="mt-3 max-w-3xl mx-auto">
            <p className="leading-relaxed performance-description">
              At OYA.health, we've built a different approach: the world's most
              complete longevity system. A comprehensive platform that unites
              advanced diagnostics, emotional decoding, and trusted therapeutics
              into one clear path—designed not just to extend lifespan, but to
              restore vitality, balance, and joy along the way.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Emotional and Nervous System Stabilization */}
      <div className="nervous-system-section mt-16">
        <div className="px-8 py-12 text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-[#75B298] text-[18px] text-white text-md px-3 py-2 rounded-full">
              <img
                src="/assets/img/approach/stabilize.png"
                alt="pill"
                width={25}
                className="inline-block"
              />
              WE STABILIZE YOUR NERVOUS SYSTEM
            </span>
          </div>

          <h2 className="mt-6 common-title">
            Your health is not just physical. It's deeply emotional.
          </h2>

          {/* <div className="mt-5 text-center">
                        <h3 className="text-3xl font-normal text-[#2B2B2B] ff-newsreader">Why? We don't treat your emotions as a background noise.</h3>
                    </div> */}

          <div className="mt-6">
            <p className="performance-description mx-auto">
              Your biology and emotions are inseparable—what you feel shapes how
              you function. That's why we treat neuro-somatic signals with the
              same weight as lab results.
            </p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="container px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-[32px] font-weight-300 text-[#2B2B2B] mb-4">
                Stabilizing the Nervous System <br />
                with OYA.health
              </h3>

              <p className="text-[16px] text-[#2B2B2B] leading-relaxed max-w-[600px]">
                Resilience is about a nervous system that feels safe. At OYA, we
                use Emotional Somatic Mapping (ESM) to identify stress patterns
                and emotional imprints that keep the body in survival mode. We
                address the root cause and create a personalized plan, pairing
                you with the right therapist. Your therapist also trains your
                OYA.chat companion, an AI <br /> coach available 24/7. We
                provide self-care tools like journaling <br /> prompts and
                meditations to help you restore balance.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden w-full h-full">
                <img
                  src="/assets/img/approach/nervous-system.jpg"
                  alt="Nervous System Stabilization"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="performance-cta-wrapper">
        <div className="performance-cta-card">
          <p className="text-[24px] font-weight-300 mb-3 leading-relaxed">
            By following our baseline testing & treatment plan, we can assure
            you that the results will be life transforming
          </p>
          <p className="text-[16px] font-weight-300 leading-relaxed">
            Just like all the other fellow members
          </p>
        </div>
      </div>
    </section>
  );
}
