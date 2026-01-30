import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Healthcare = () => {
  const [expandedItem, setExpandedItem] = useState(0);

  const healthIssues = [
    {
      title: "Health Spending, Shorter Lives",
      description:
        "Lifespan is reversing, despite trillions invested in healthcare.",
    },
    {
      title: "168 Chemicals a Day",
      description:
        "The average person is exposed to hundreds of chemicals daily through food, water, and products.",
    },
    {
      title: "Fertility in Decline",
      description:
        "Reproductive health is declining globally at an alarming rate.",
    },
    {
      title: "Metabolic Health Crisis",
      description:
        "Over 90% of Americans have at least one marker of metabolic dysfunction.",
    },
    {
      title: "1 in 2 Will Face Cancer",
      description:
        "Cancer rates continue to rise despite advances in treatment.",
    },
    {
      title: "The Source of Disability",
      description:
        "Chronic diseases are the leading cause of disability worldwide.",
    },
    {
      title: "Growth of Obesity",
      description:
        "This isn’t just a collection of statistics—it’s a signal. A signal that our current model is focused on managing disease rather than creating health.",
    },
  ];

  return (
    <section className="relative my-16">
      <div className="container mx-auto px-6">
        <div className="founder-quote" data-aos="fade-in">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <img
                src="/assets/img/OYA health icon1.svg"
                alt="OYA Health Icon"
                style={{ width: "80px" }}
              />
              <h2 className="mt-5">
                “Health Deserves a Revolution not by inventing something new—{" "}
                <br />
                but by returning to what we’ve always known: <br />
                we are whole, interconnected, and meant to thrive in harmony.”
              </h2>
              <p className="founder-quote-name ff-sans !text-base ">
                Michella Metzler
              </p>
              <p className="founder-quote-title ff-sans">
                Founder of OYA.health
              </p>
            </div>
          </div>
        </div>
        {/* Main Content Card */}
        <div className="healthcare-failing-section rounded-3xl p-8 md:p-12">
          {/* Badge */}
          <div className="approach-pill">HEALTHCARE IS FAILING US</div>

          {/* Heading */}
          <div className="text-center mb-8 healthcare-heading-section">
            <h2 className="healthcare-title">
              We live in a world where being
              <br />
              healthy should be easier than ever—
              <br />
              yet it's never been harder.
            </h2>
            <p className="healthcare-intro" style={{ lineHeight: "130%" }}>
              Nutrient-depleted food, invisible environmental toxins, and a
              lifestyle that overloads our biology are silently reshaping human
              health. And the systems designed to protect us are struggling to
              keep pace.
            </p>
            <p className="text-foreground/80 font-medium">
              The evidence is clear:
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
            {/* Left: Accordion List */}
            <div className="space-y-4">
              {healthIssues.map((issue, index) => (
                <div
                  key={index}
                  className="healthcare-accordion-item border-b border-dotted border-border/50 pb-4 cursor-pointer"
                  onClick={() =>
                    setExpandedItem(expandedItem === index ? -1 : index)
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className=" text-[20px] font-weight-400 mb-1 ff-newsreader">
                        {issue.title}
                      </h3>
                      {expandedItem === index && (
                        <p className="evidence-description mt-3">
                          {issue.description}
                        </p>
                      )}
                    </div>
                    <button className="mt-1 text-foreground/60 hover:text-foreground transition-colors">
                      {expandedItem === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
              <p>
                This isn’t just a collection of statistics—it’s a signal. A
                signal that our current model is focused on managing disease
                rather than creating health.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end h-full">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/assets/img/approach/man-back.jpg"
                  alt="Health wellness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Blurred Section */}
          <div className="healthcare-cta-wrapper">
            <div className="healthcare-cta-card">
              {/* <p className="text-sm mb-3 leading-relaxed">
                This isn't just a collection of statistics—it's a signal. A signal that our current model is focused on managing disease
                rather than creating health.
              </p> */}
              <p className="healthcare-cta-description">
                At OYA.health, we’ve built a different approach: the world’s
                most complete longevity system. A comprehensive platform that
                unites advanced diagnostics, emotional decoding, and trusted
                therapeutics into one clear path—designed not just to extend
                lifespan, but to restore vitality, balance, and joy along the
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
