import { useState } from "react";

interface TabContent {
  title: string;
  description: React.ReactNode;
  image: string;
}

export default function TakeControl() {
  const [selected, setSelected] = useState("Blood Biomarkers");

  const tabs = [
    "Blood Biomarkers",
    "Cardio-Metabolic Health Scan",
    "Subclinical Analysis",
    "EMSI (emotional somatic mapping)",
  ];

  const tabContents: Record<string, TabContent> = {
    "Blood Biomarkers": {
      title: "Blood Biomarkers",
      description: (
        <>
          Choose a core panel or advanced test with up to 130+ <br />
          biomarkers—or upload your own results— and get a fully
          <br /> personalized health strategy built just for you.
        </>
      ),
      image: "/assets/img/approach/control.svg",
    },

    "Cardio-Metabolic Health Scan": {
      title: "Cardio-Metabolic Health Scan",
      description: (
        <>
          Powered by next-gen Photoplethysmography (PPG) with the
          <br /> Polar Verity Sense™ — the same clinically validated tech used
          in <br />
          hospitals and elite wearables — our scan captures your
          <br /> cardiovascular rhythms in real time.
          <br />
          <br />
          The result: a precise, needle-free, non-invasive snapshot of your{" "}
          <br />
          inner health, from blood pressure and oxygen saturation to stress
          <br /> balance, heart age, cholesterol, glucose risk, and more.
          <br />
          <br />
          Effortless science. Powerful insight.
        </>
      ),
      image: "/assets/img/approach/controltwo.svg",
    },

    "Subclinical Analysis": {
      title: "Subclinical Analysis",
      description: (
        <>
          Detect what standard checkups miss. Using advanced
          <br /> biofeedback technology, we map the frequency patterns of your
          <br />
          cells, organs, and systems — revealing subtle shifts in function{" "}
          <br />
          long before symptoms appear.This early-warning scan shows <br />
          exactly where your body needs attention, helping you rebalance
          <br /> before imbalance turns into illness.
        </>
      ),
      image: "/assets/img/approach/controlthree.svg",
    },

    "EMSI (emotional somatic mapping)": {
      title: "ESM (Emotional Somatic Mapping)",
      description: (
        <>
          Your body remembers what your mind forgets. Our scan reveals
          <br /> where unresolved emotions live in your organs and systems — and
          <br /> how stress silently reshapes your immunity, hormones, and{" "}
          <br />
          overall health. By decoding these hidden imprints, we uncover the{" "}
          <br />
          emotional roots behind physical imbalance, giving your body the <br />
          freedom to self-heal and return to balance.
        </>
      ),
      image: "/assets/img/approach/Card.png",
    },
  };

  const currentContent =
    tabContents[selected] || tabContents["Blood Biomarkers"];

  return (
    <>
      <div className="px-8 py-12">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 bg-[#264653] text-[18px] text-white text-md px-3 py-2 rounded-full">
            <img
              src="/assets/img/approach/take-control-pill-icon.png"
              alt="pill"
              width={25}
              className="inline-block"
            />
            WE ASSESS - MULTIDIMENSIONALLY
          </span>
        </div>

        <h2 className="mt-6 take-control-title">
          The more we know, the better we serve
        </h2>
        <p className="mt-4 text-center text-[16px] text-[#2B2B2B] font-weight-400 max-w-[750px] mx-auto">
          You will see everything from inspired rituals for better energy, focus & flow to clinical data and recommendations on hydration, movement, nutrition & supplements.
        </p>
        <p className="mt-4 text-center text-[16px] text-[#2B2B2B] font-weight-400 max-w-[750px] mx-auto">
          Our virtual coaches are here to share key learnings and insights to support your journey.
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12 take-control-section">
        <div className="rounded-2xl overflow-hidden">
          <div className="py-12 pt-0 pb-2">
            <h1
              className="mt-0 text-center text-4xl md:text-4xl font-weight-300 text-[#2B2B2B]"
              style={{ fontSize: "48px" }}
            >
              Take control, your way.
            </h1>
            <p
              className="mt-3 text-center text-[#2B2B2B] opacity-70 max-w-3xl mx-auto"
              style={{ fontSize: "16px" }}
            >
              We've handpicked the most advanced and reliable testing
              options—all in your Member Portal. You <br /> decide how deep you
              want to go, knowing everything you need for real results lives in
              one place.
            </p>
            <p
              className="mt-3 text-center text-sm text-[#2B2B2B] opacity-70 max-w-3xl mx-auto"
              style={{ fontSize: "16px" }}
            >
              We recommend starting with baseline testing—it's your blueprint.
              With it, we can deliver insights and tools that create not just
              change, but lasting transformation.
            </p>
            <p
              className="mt-3 text-center text-sm text-[#2B2B2B] opacity-70 max-w-3xl mx-auto"
              style={{ fontSize: "16px" }}
            >
              The clearer the picture, the stronger the results.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex bg-[#b59a75] p-1 rounded-full shadow-sm gap-1 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelected(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selected === tab
                        ? "bg-white text-[#2b2b2b]"
                        : "bg-[#b59a75] text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pb-10">
            <div
              className="mt-6 bg-[#51423459]/50 backdrop-blur-lg rounded-xl shadow-inner p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ paddingBlock: "40px", paddingInline: "16px" }}
            >
              <div className="md:w-1/2 text-white pl-5 approach-section">
                <h3 className="text-2xl font-medium">{currentContent.title}</h3>
                <p className="mt-3 text-base font-weight-300">
                  {currentContent.description}
                </p>
                <button className="mt-6 inline-block bg-white text-[#2B2B2B] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#f0f0f0] transition-colors duration-300">
                  Read More
                </button>
              </div>

              <div className="md:w-1/2 w-full">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="h-auto block"
                  style={{
                    width: selected === tabs[tabs.length - 1] ? "92%" : "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
