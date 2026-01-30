import { useState } from "react";
import "./approach.css";

interface ArticleCard {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function PhysicalAndEmotional() {
  const [activeTab, setActiveTab] = useState<"physical" | "emotional">(
    "physical"
  );

  const physicalContent = {
    title: "PHYSICAL TOXINS",
    icon: "/assets/img/Icon1.svg",
    details: [
      {
        heading: "Chemical Overload",
        text: "Over 80,000 synthetic chemicals exist in commerce; only a fraction are tested for safety.",
      },
      {
        heading: "Food Toxins",
        text: "Additives, pesticides, hormones, antibiotics, and plastics leach into what we eat and drink.",
      },
      {
        heading: "Environmental Stress",
        text: "Air pollution, heavy metals, microplastics, and endocrine disruptors strain the body.",
      },
      {
        heading: "Lifestyle Toxins",
        text: "Alcohol, medications, ultra-processed foods, and chronic stress all generate inflammatory byproducts.",
      },
    ],
    symptoms: [
      "Fatigue, brain fog, skin issues",
      "Hormonal imbalance, infertility, low immunity",
      "Increased risk of metabolic syndrome, cancer, and neurodegenerative disease",
    ],
  };

  const emotionalContent = {
    title: "EMOTIONAL TOXINS",
    icon: "/assets/img/Icon.svg",
    details: [
      {
        heading: "Digital Overload",
        text: "Constant stimulation from screens, notifications, and information overload keeps our nervous system in a perpetual state of alert.",
      },
      {
        heading: "Chronic Stress",
        text: "Work pressure, financial worries, relationship tensions, and daily demands create a toxic emotional environment that disrupts natural healing processes.",
      },
      {
        heading: "Unprocessed Trauma",
        text: "Past experiences, suppressed emotions, and unresolved conflicts accumulate in the body, blocking the flow of energy and self-healing mechanisms.",
      },
      {
        heading: "Negative Thought Patterns",
        text: "Self-criticism, fear, anxiety, and limiting beliefs create emotional toxicity that manifests as physical tension and blocks the body's natural regenerative capacity.",
      },
    ],
    symptoms: [
      "Chronic tension, anxiety, and emotional overwhelm",
      "Sleep disturbances, mood swings, and relationship difficulties",
      "Physical pain, digestive issues, and weakened immune response",
    ],
  };

  const articleCards: ArticleCard[] = [
    {
      title: "Parasites & Fungi: The Hidden Burden",
      description:
        "Research shows that most people carry some level of parasitic or fungal load, often without symptoms. These hidden invaders can disrupt gut health, nutrient absorption, and immune function, creating a foundation for chronic health issues.",
      image: "/assets/img/approach/p11.svg",
    },
    {
      title: "Why Emotional Detox Is More Urgent Today",
      description:
        "Modern life is a perfect storm of emotional overwhelm: Digital overload keeps our brains in constant stimulation, chronic stress becomes normalized, and we're disconnected from natural rhythms that support emotional regulation.",
      image: "/assets/img/approach/p33.svg",
    },
    {
      title: "Why Emotional Detox Unlocks Self-Healing",
      description:
        "Just as physical detox clears the liver and gut so cells can regenerate, emotional detox clears the nervous system so the body can access its innate healing intelligence. When emotional blocks are released, physical healing accelerates.",
      image: "/assets/img/approach/p22.svg",
    },
  ];

  return (
    <section className="physical-emotional-section">
      <div className="px-8 py-12 text-center">
        {/* <div className="flex justify-center">
          <span className="inline-block bg-[#E9A15E] text-white text-md px-3 py-1 rounded-full">
            • WE DECLUTTER YOUR SYSTEM
          </span>
        </div> */}

        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 bg-[#E9A15E] text-[18px] text-white text-md px-3 py-2 rounded-full">
            <img
              src="/assets/img/approach/connector.png"
              alt="pill"
              width={25}
              className="inline-block"
            />
            WE DECLUTTER YOUR SYSTEM
          </span>
        </div>

        <h2 className="mt-6 healthcare-title">Physically & Emotionally</h2>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        <div className="row">
          {/* Left Column */}
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="tab-bk">
              {/* Tabs */}
              <div className="menuss">
                <h4
                  className={activeTab === "physical" ? "active" : ""}
                  onClick={() => setActiveTab("physical")}
                >
                  <img src={physicalContent.icon} alt="Physical icon" />
                  PHYSICAL TOXINS
                </h4>

                <h4
                  className={activeTab === "emotional" ? "active" : ""}
                  onClick={() => setActiveTab("emotional")}
                >
                  <img src={emotionalContent.icon} alt="Emotional icon" />
                  EMOTIONAL TOXINS
                </h4>
              </div>

              {/* Content */}
              {activeTab === "physical" ? (
                <div>
                  {physicalContent.details.map((detail, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-semibold text-[#2B2B2B] mb-2">
                        {detail.heading}
                      </h4>
                      <p className="text-sm text-[#686765] leading-relaxed">
                        {detail.text}
                      </p>
                    </div>
                  ))}

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-[#2B2B2B] mb-3">
                      When detox systems are overwhelmed, we see:
                    </p>
                    <ul className="space-y-2">
                      {physicalContent.symptoms.map((symptom, index) => (
                        <li
                          key={index}
                          className="text-sm text-[#686765] flex items-start"
                        >
                          <span className="text-[#d19b61] mr-2">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">
                    Emotional Toxins
                  </h3>

                  <p className="text-sm text-[#686765] leading-relaxed mb-6">
                    Unprocessed emotions don't just weigh on the mind—they leave
                    toxic imprints in the body. Grief burdens the lungs, anger
                    strains the liver, fear weakens the kidneys, shame
                    suppresses immunity, and trauma embeds itself in pain and
                    inflammation.
                  </p>

                  <h4 className="text-base font-semibold text-[#2B2B2B] mb-4">
                    The science is clear:
                  </h4>

                  <ul className="space-y-3 mb-6">
                    <li className="text-sm text-[#686765] flex items-start">
                      <span className="text-[#d19b61] mr-2">•</span>
                      <span>Chronic stress contributes to 90% of illness.</span>
                    </li>
                    <li className="text-sm text-[#686765] flex items-start">
                      <span className="text-[#d19b61] mr-2">•</span>
                      <span>
                        1 in 5 adults lives with anxiety or depression.
                      </span>
                    </li>
                    <li className="text-sm text-[#686765] flex items-start">
                      <span className="text-[#d19b61] mr-2">•</span>
                      <span>
                        Loneliness raises mortality risk as much as smoking 15
                        cigarettes a day.
                      </span>
                    </li>
                    <li className="text-sm text-[#686765] flex items-start">
                      <span className="text-[#d19b61] mr-2">•</span>
                      <span>
                        Emotional suppression is linked to autoimmune disease,
                        heart conditions, and shortened lifespan.
                      </span>
                    </li>
                  </ul>

                  <p className="text-sm font-semibold text-[#2B2B2B] leading-relaxed">
                    This isn't just about mood. Unresolved emotions disrupt
                    immunity, hormones, and even gene expression—blocking the
                    body's innate ability to self-heal.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="rounded-lg overflow-hidden h-full w-full">
              <img
                src={
                  activeTab === "physical"
                    ? "/assets/img/approach/physical.jpg"
                    : "/assets/img/approach/emotional.jpg"
                }
                alt={
                  activeTab === "physical"
                    ? "Physical Detox"
                    : "Emotional Detox"
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articleCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-xl overflow-hidden"
            >
              <div
                className="w-full h-48 overflow-hidden"
                style={{ height: "217px", borderRadius: "18px !important" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    borderBottomLeftRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                  }}
                />
              </div>
              <div className="p-6">
                <h4
                  className="text-lg font-normal text-[#2B2B2B] mb-3 h-10"
                  style={{ fontWeight: "300" }}
                >
                  {card.title}
                </h4>
                <p className="text-sm text-[#686765] leading-relaxed mb-4 line-clamp-2">
                  {card.description}
                </p>
                <button className="bg-[#ffff] text-sm font-medium w-full text-[#2B2B2B] border border-[#2B2B2B] rounded-full px-4 py-2 hover:bg-[#2B2B2B] hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
