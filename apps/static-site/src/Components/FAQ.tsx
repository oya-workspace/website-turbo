import { Minus, Plus } from "lucide-react";
const defaultFaqs = [
  {
    id: 1,
    question: "What is OYA.health?",
    answer: `
      OYA.health is a precision health and longevity ecosystem that integrates 
      <strong>advanced diagnostics, personalized therapeutics, and emotional health intelligence</strong>—all delivered through a seamless digital and in-person experience.
      <br/><br/>
      We bridge <strong>science, technology, and human insight</strong> to help individuals and businesses bring 
      data-driven wellness and emotional balance into daily life.
    `,
  },
  {
    id: 2,
    question: "How does the OYA diagnostic system work?",
    answer: `
      Our proprietary assessment suite uses non-invasive frequency and facial scanning technologies 
      as well as traditional labs and biomarker testing.
      <br/><br/>
      Within minutes, clients receive a <strong>personalized vitality report</strong> with actionable insights 
      on physical, metabolic, and emotional markers—linked directly to recommended protocols, supplements, 
      and therapies.
    `,
  },
  {
    id: 3,
    question:
      "What makes OYA different from other longevity or wellness programs?",
    answer: `
      OYA merges <strong>emotional and physical health intelligence</strong>—combining somatic decoding, 
      bioenergetic diagnostics, and medical-grade data analysis.
      <br/><br/>
      Unlike traditional clinics, OYA identifies <strong>root imbalances across the mind and body</strong>, 
      then curates a plan for restoration, regulation, and renewal—designed to evolve with you over time.
    `,
  },
  {
    id: 4,
    question: "What products or services are offered through OYA?",
    answer: `
      Each client receives access to a curated ecosystem including:
      <ul class="list-unstyled">
        <li><strong>Personalized supplements & peptides</strong> formulated from real diagnostic data</li>
        <li><strong>Longevity & emotional wellness programs</strong> guided through our digital portal</li>
        <li><strong>Telehealth and lab testing</strong> via our nationwide clinical network</li>
        <li><strong>AI-driven lifestyle coaching</strong> through the SoulMade™ assistant</li>
        <li><strong>Access to the OYA Longevity Lounge™</strong> for in-person diagnostics & therapies</li>
      </ul>
    `,
  },
  {
    id: 5,
    question: "What is the Emotional Somatic Mapping™?",
    answer: `
      The Emotional Somatic Mapping™ is OYA’s framework that maps 
      <strong>emotional and trauma imprints within the body</strong>, linking them to physiological patterns 
      and organ function.
      <br/><br/>
      This supports deeper understanding of <strong>emotional roots of imbalance</strong> and guides targeted 
      recovery through scientific and somatic interventions.
    `,
  },
  {
    id: 6,
    question: "How can my business partner with OYA?",
    answer: `
      Through our <strong>B2B Longevity Lounge Platform</strong>, OYA transforms spas, clinics, hotels, and 
      fitness centers into <strong>precision wellness destinations</strong>.
      <br/><br/>
      We provide devices, dashboards, telehealth access, white-labeled supplements, and operational support—so 
      partners can offer OYA-level services under their own brand.
    `,
  },
  {
    id: 7,
    question: "Are OYA supplements and peptides safe?",
    answer: `
      Yes. All formulations are <strong>clinically reviewed and compounded in certified U.S. facilities</strong>, 
      and aligned with the latest longevity and integrative health research.
      <br/><br/>
      Each formula is approved by licensed physicians and personalized to your biology, goals, and health status.
    `,
  },
  {
    id: 8,
    question: "Where is OYA available?",
    answer: `
      OYA.health operates globally through:
      <ul class="list-unstyled">
        <li><strong>On-site installations</strong> in spas, clinics, hotels, retreats</li>
        <li><strong>Telehealth & mail-in diagnostics</strong> in all 50 U.S. states</li>
        <li><strong>Global expansion</strong> through OYA-certified partner lounges</li>
      </ul>
    `,
  },
  {
    id: 9,
    question: "How can I start?",
    answer: `
      For individuals:
      <br/>
      → Start with the <strong>OYA Longevity Scan</strong> in <strong>New York</strong> or <strong>Miami</strong>, 
      or begin online with a metabolic scan or blood panel.
      <br/><br/>
      For business partners:
      <br/>
      → Book a discovery call to explore brand elevation, revenue expansion, and precision-health services.
    `,
  },
];

export default function FAQ({ faqs = defaultFaqs }) {
  const faqList = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          {/* LEFT IMAGE */}
          <div
            className="col-12 col-lg-6 flex justify-center"
            data-aos="fade-right"
          >
            <img
              src="/assets/img/faq.png"
              alt="FAQ"
              className=" h-full object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="col-12 col-lg-6 faq-sec" data-aos="fade-left">
            <h2>Frequently Asked Questions</h2>

            <a
              href="#"
              className="get-started-btn"
              style={{ background: "black" }}
            >
              View FAQ <img src="/assets/img/partner/line-arrow-right.svg" />
            </a>

            <div className="flex flex-column">
              {faqList.map((faq) => (
                <details key={faq.id} className="border-lines">
                  <summary>
                    <span>{faq.question}</span>
                    <Plus className="faq-icon default-icon" strokeWidth={1.5} />
                    <Minus className="faq-icon open-icon" strokeWidth={1.5} />
                    {/* <Plus className="faq-toggle-icon" strokeWidth={1.5} /> */}
                  </summary>

                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
