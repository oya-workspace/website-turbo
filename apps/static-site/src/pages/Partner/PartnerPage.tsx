import "./partner.css";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import FAQ from "../../Components/FAQ";

const cardData = [
  {
    id: 1,
    title: "Testing",
    text: "Provide quick diagnostics for gut health, immunity, and skin issues. Testing takes under five minutes for personalized health.",
  },
  {
    id: 2,
    title: "Emotional Wellbeing Support",
    text: "We offer solutions for wellbeing and balance. Our therapists and AI pathways boost resilience and harmony.",
  },
  {
    id: 3,
    title: "Data-Driven Action Plan",
    text: "Our platform synthesizes bloodwork into a personalized action plan. AI reports create scalable care pathways for ongoing health.",
  },
  {
    id: 4,
    title: "White Label Solutions",
    text: "Transform your brand into a longevity platform. OYA.health offers technology, reports, and supplements for a seamless client experience.",
  },
  {
    id: 5,
    title: "Personalized Supplements",
    text: "Tailored nutraceuticals for each client, crafted with bioavailable ingredients. Delivered quarterly to support health goals.",
  },
  {
    id: 6,
    title: "Data Driven Upsell",
    text: "Transform client data into revenue. Results drive personalized recommendations that boost sales.",
  },
  {
    id: 7,
    title: "Advanced Prescriptions",
    text: "Our platform connects clients to telehealth prescriptions with medical oversight. OYA.health is HIPAA-compliant and offers secure fulfillment.",
  },
  {
    id: 8,
    title: "Recurring Revenue Model",
    text: "Results drive personalized recommendations, boosting sales, upgrades, and care—creating recurring revenue and loyalty.",
  },
  {
    id: 9,
    title: "Nutrition Lifestyle Skin Health",
    text: "Empower clients with nutrition planning and skin optimization. Our technology guides tailored treatments for better results.",
  },
];

const sliderData = [
  {
    id: 1,
    title: "Data-Driven Lead Generation for Wellness Practices",
    text: "Each OYA assessment becomes a personalized roadmap—linking diagnostics to the services you already offer and turning curiosity into booked care.",
    image: "/assets/img/partner/sliderone.png",
  },
  {
    id: 2,
    title: "Programs That Sell Themselves",
    text: "Clear, client-specific plans translate results into immediate next steps—IVs, red light, supplements, coaching—so recommendations feel inevitable, not salesy.",
    image: "/assets/img/partner/slidertwo.png",
  },
  {
    id: 3,
    title: "Retest Rhythm",
    text: "Built-in re-testing cycles show visible progress, trigger timely upgrades, and create predictable renewal revenue.",
    image: "/assets/img/partner/sliderthree.png",
  },
  {
    id: 4,
    title: "Team-Friendly Workflow",
    text: "One platform, clinic-branded. Intake, plans, reminders, and POS-ready guidance keep your staff aligned and your operations smooth—day one.",
    image: "/assets/img/partner/sliderfour.png",
  },
];

export const faqData = [
  {
    id: 1,
    question: "How does OYA drive growth without adding new staff?",
    answer: `
      OYA integrates a 5–phase workflow — Scan → Analyze → Plan → Implement → Retest — with automated dashboards, supplement fulfillment, and telehealth support.
      <br/><br/>
      This allows your existing team to deliver precision diagnostics, personalized programs, and recurring memberships from day one, without increasing payroll or clinical overhead.
    `,
  },
  {
    id: 2,
    question: "What ROI can a spa, clinic, or wellness center expect?",
    answer: `
      Partners typically see gains across three levers:
      <ul>
        <li><strong>Higher conversion:</strong> Every Longevity Scan turns into a natural upsell for peptides, supplements, and lifestyle programs.</li>
        <li><strong>Stronger retention:</strong> Clients return every 6–12 weeks for rescan and protocol updates.</li>
        <li><strong>Increased revenue per client:</strong> Data-driven personalization creates measurable value from services you already offer — now backed by real metrics.</li>
      </ul>
    `,
  },
  {
    id: 3,
    question: "How quickly can we launch OYA in our facility?",
    answer: `
      Usually within a few days.
      <br/><br/>
      The hardware is portable and turnkey — setup requires minimal space, and we provide all onboarding materials, marketing assets, and staff scripts so you can start assessments and upsells immediately.
    `,
  },
  {
    id: 4,
    question: "What space and equipment are needed?",
    answer: `
      Only a small testing area is required — similar to a facial, massage, or consultation room.
      <br/><br/>
      All OYA devices are compact and wireless, integrating seamlessly into existing studios, med-spas suites, or hotel wellness areas. No build-out required.
    `,
  },
  {
    id: 5,
    question: "Is the Longevity Scan accurate?",
    answer: `
      The system combines biofeedback, electro-dermal frequency mapping, and heart-brain coherence metrics to evaluate adaptive balance across 45+ organs and systems.
      <br/><br/>
      It is designed for functional insight and personalization, not for medical diagnosis — serving as the front end for blood biomarker testing, peptide protocols, and telehealth review.
    `,
  },
];

export default function PartnerPage() {
  // First card open initially
  const [openCard, setOpenCard] = useState(cardData[0].id);

  const toggleCard = (id: any) => {
    setOpenCard(openCard === id ? null : id);
  };
  const principles = [
    {
      icon: "Icon1.svg",
      title: "Elevate Your Brand",
      description:
        "Differentiate with cutting-edge wellness technologies and a premium client experience.",
    },
    {
      icon: "Icon2.svg",
      title: "Build Lasting Loyalty",
      description:
        "Drive engagement with personalized insights, precision protocols, and continuous care pathways.",
    },
    {
      icon: "Icon3.svg",
      title: "Expand Revenue Streams",
      description:
        "Integrate diagnostics, supplements, peptides, and long-term programs into a scalable model.",
    },
    {
      icon: "Icon4.svg",
      title: "Maximize Upsell Potential",
      description:
        "Leverage fast, non-invasive, data-driven diagnostics to create seamless upgrade pathways into your existing services.",
    },
  ];

  return (
    <>
      <section
        className="partner-hero bg"
        style={{
          backgroundImage: 'url("/assets/img/partner/partner-hero.svg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 margin-contents">
              <p>One platform. Every solution. Maximum growth.</p>
              <h1 className="hide-mob">
                Expanding your wellness business has never been easier.
              </h1>
              <p className="hide-mob">
                Explore our all in one system, that integrates testing, care,
                and longevity technologies—making it simple to deliver better
                outcomes, higher loyalty, and scalable revenue.
              </p>
            </div>
            <div className="col-12 col-md-5">
              {/* <img src='/assets/img/partner/partner-hero.svg' /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="partner-hero show-mob">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 margin-contents">
              <h1>Expanding your wellness business has never been easier.</h1>
              <p>
                Explore our all in one system, that integrates testing, care,
                and longevity technologies—making it simple to deliver better
                outcomes, higher loyalty, and scalable revenue.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="withoya-section">
        <div className="container">
          <div className="withoya-card">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="our-how-heading" style={{ color: "#000000" }}>
                With OYA, you can:
              </h2>
            </div>

            {/* Cards Grid */}

            <div className="principles-grid hide-mob">
              {principles.map((principle, index) => {
                return (
                  <div key={index} className="principle-card">
                    <div className="principle-icon">
                      <img
                        src={`/assets/img/partner/${principle.icon}`}
                        alt={principle.title}
                      />
                    </div>

                    <div>
                      <h3 className="principle-card-title ff-newsreader">
                        {principle.title}
                      </h3>
                      <p className="principle-card-description">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper principles-grid show-mob"
            >
              {principles.map((principle, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="principle-card">
                      <div className="principle-icon">
                        <img
                          src={`/assets/img/partner/${principle.icon}`}
                          alt={principle.title}
                        />
                      </div>

                      <div>
                        <h3 className="principle-card-title">
                          {principle.title}
                        </h3>
                        <p className="principle-card-description">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="bottom-section">
              <p>
                Across spas, clinics, hotels, and fitness destinations,
                OYA.health unites these three importan items elevating client
                experiences and advancing competitive edge for your business.
              </p>
              <div className="cap-three">
                <a href="#">Highlight Assessment</a>
                <a href="#">Intervention</a>
                <a href="#">Results</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="business-growth-section"
        style={{
          backgroundImage: 'url("/assets/img/partner/business-bg.png")',
        }}
      >
        <div className="container">
          <div className="row bg-card">
            <div className="approach-pill text-center">
              A powerful Wellness Business Growth System:
            </div>

            <h1>Acquisition, Retention & Upsell</h1>

            <p>
              OYA.health partners see a 34% boost in new client interest, higher
              retention, and 56% success in data-driven upsells
            </p>

            <div className="mb-5">
              <a href="mailto:weare@oya.health" className="get-started-btn">
                Sample Personalized Journey
                <img src="/assets/img/partner/line-arrow-right.svg" />
              </a>
            </div>

            {/* ---------- DESKTOP VIEW (Dynamic) ---------- */}
            {cardData.map((card) => (
              <div className="col-12 col-lg-6 mb-3 hide-mob" key={card.id}>
                <div className="points-card">
                  <img src="/assets/img/partner/points.svg" />

                  <div className="content">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>

                  <img
                    className="toggle-drop-down show-mob"
                    src="/assets/img/partner/arrow-down.svg"
                    style={{
                      width: "10.5px",
                      height: "10.5px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* ---------- MOBILE VIEW (Already Dynamic) ---------- */}
            <div className="col-12 show-mob">
              {cardData.map((card) => (
                <div
                  className="points-card mb-4"
                  key={card.id}
                  onClick={() => toggleCard(card.id)}
                >
                  <img src="/assets/img/partner/points.svg" alt="" />

                  <div className="content">
                    <h3>{card.title}</h3>
                    <p
                      style={{
                        display: openCard === card.id ? "block" : "none",
                      }}
                    >
                      {card.text}
                    </p>
                  </div>

                  <img
                    src="/assets/img/partner/arrow-down.svg"
                    className="toggle-drop-down show-mob"
                    alt=""
                    style={{
                      width: "10.5px",
                      height: "10.5px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 body-data-section pb-0">
        {/* Section 1: Performance Optimization */}
        <div className="performance-section">
          <div className="px-8 text-center">
            <a
              href="https://cal.com/oya.health/oya.health-longevity-lounge-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn mb-5 w-[120px] h-[50px]"
            >
              OYA Profit Calculator
              <i className="fa fa-arrow-right" style={{ color: "black" }}></i>
            </a>
            <div className="counter-grids pt-5" data-aos="fade-up">
              <div className="stat-box" style={{ maxWidth: "100%" }}>
                <img src="/assets/img/partner/text-file.svg" />
                <p>
                  Higher conversion from assessments to programs (objective,
                  personalized recommendations).
                </p>
              </div>
              <div className="stat-box" style={{ maxWidth: "100%" }}>
                <img src="/assets/img/partner/browser-graph.svg" />
                <p>
                  Higher retention via visible progress, retesting, and program
                  upgrades.
                </p>
              </div>
              <div className="stat-box" style={{ maxWidth: "100%" }}>
                <img src="/assets/img/partner/graph-bar.svg" />
                <p>
                  Higher revenue per client with ethical, data-driven
                  cross-sells to services you already offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="the-phases-bk" id="phases-bk">
        {/* <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12 text-center">
            <small><span>●</span> The Phases</small>
            <h3>The 4 Phase Method™</h3>
            <p>Because transformation works when it’s made for you</p>
          </div>
        </div>
      </div> */}
        <div className="container pt-0">
          <div className="row phase-rows mt-5">
            <div
              className="col-12 col-lg-6 pt-5 pb-5 noone"
              data-aos="fade-right"
            >
              <div className="contents">
                <h2>1</h2>
                <div className="lg-content">
                  <h3>Attract & Assess</h3>
                  <p>
                    Meet clients where curiosity becomes conversion. In less{" "}
                    <br />
                    than 5 minutes,{" "}
                    <u>
                      <a href="https://oya.health/">OYA.health</a>
                    </u>{" "}
                    delivers a non-invasive health
                    <br /> snapshot via advanced biofeedback and clinically
                    backed
                    <br /> cardio-metabolic scanning—translating up to 87
                    biomarker <br />
                    signals into clear, decision-ready insights. An instant,
                    data-
                    <br />
                    informed Action Plan drafts next steps across health <br />
                    optimization, nutrition, lifestyle, recovery and emotional{" "}
                    <br />
                    balance.
                  </p>
                  <p className="mt-4 mb-4">
                    Prefer deeper onboarding from day one?
                  </p>
                  <p>
                    Offer branded self-collection blood kits for rapid lab
                    visibility while keeping your brand front and center. Deploy
                    the OYA Longevity Lounge as a sleek micro-station or a
                    premium lobby centerpiece to engage walk-ins, events, and
                    VIPs without adding operational friction.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 pt-5 pb-5 twonone"
              data-aos="fade-left"
            >
              <img
                src="/assets/img/partner/card-blocks.svg"
                alt="Micro-organisms illustration"
                className="micro"
              />
            </div>
            <div className="col-12 col-lg-6  mob-blow" data-aos="fade-right">
              <img
                src="/assets/img/partner/three-cards.svg"
                alt="Phase 2 illustration"
                className="tablagt"
              />
            </div>
            <div
              className="col-12 col-lg-6  mob-up"
              style={{ alignContent: "center" }}
              data-aos="fade-left"
            >
              <div className="contents right">
                <h2>2</h2>
                <div className="lg-content">
                  <h3>Unite Data in One Profile</h3>
                  <p>
                    Eliminate fragmentation and reclaim clinical clarity. Scans,
                    labs, wearables, and in-clinic or partner tests flow into a
                    single, clinic-branded profile. OYA normalizes inputs, flags
                    priorities, and presents your client with a cohesive
                    wellbeing picture and action plan with precise next steps. 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 py-5 fivenone"
              data-aos="fade-right"
            >
              <div className="contents">
                <h2>3</h2>
                <div className="lg-content">
                  <h3>
                    Personalize the <br />
                    Care Pathway
                  </h3>
                  <p>
                    Turn insights into signature experiences. <br />
                    Activate OYA protocols or embed your own to
                    <br /> guide each client through a phased journey—
                    <br />
                    Reset → Replenish → Regulate → Rise. Plans <br />
                    include cadence, check-ins, and reminders, with <br />
                    real progress tracking to demonstrate
                    <br /> outcomes. Adapt quickly across nutrition,
                    <br /> movement, sleep, emotional health, and device-
                    <br />
                    based therapies so every touchpoint feels
                    <br /> tailored, consistent, and on brand.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 pb-5 sixnone !justify-end"
              data-aos="fade-left"
            >
              <img
                src="/assets/img/nerves-2.png"
                alt="Phase 3 illustration"
                className="left-img"
              />
            </div>
            <div
              className="col-12 col-lg-6 pb-5 mt-5 sevennone"
              data-aos="fade-right"
            >
              <img
                src="/assets/img/partner/Cards.png"
                alt="Phase 4 illustration"
              />
            </div>
            <div
              className="col-12 col-lg-6 pb-5 mt-5 eight"
              data-aos="fade-left"
            >
              <div className="contents right">
                <h2>4</h2>
                <div className="lg-content">
                  <h3>Convert, Brand, and Scale</h3>
                  <p>
                    Make precision profitable. Recommendations flow seamlessly
                    into booked services and tailored retail—IV therapy, red
                    light, infrared sauna, lymphatic support, and personalized
                    supplements—supported by POS-ready guidance inside the
                    platform.
                  </p>
                  <p>
                    The experience is fully customizable and white-label
                    capable: you own the relationship and the brand equity; OYA
                    powers the engine, analytics, and profit-share programs. The
                    result is higher retention, predictable re-testing cycles,
                    and a scalable longevity offering that grows revenue without
                    growing overhead.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <a
                href="mailto:weare@oya.health"
                className="get-started-btn mb-5"
              >
                Sample of Client Journey{" "}
                <i className="fa fa-arrow-right" style={{ color: "black" }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elevating-business-section"
        style={{
          backgroundImage: 'url("/assets/img/partner/elevating-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="bg-card">
            <h1 className="mb-5">Elevating Your Business Together</h1>
            <div className="row">
              <div className="col-12 col-lg-5 mb-4">
                <div className="elevating-card">
                  <img src="/assets/img/partner/cardelevating-1.jpg" />
                  <h3>True Personalization</h3>
                  <p>
                    OYA will create a personalized supplement with unique dosage
                    and ingredients compounded precisely for each client, while
                    eliminating anything they are sensitive to.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-7 mb-4">
                <div className="elevating-card">
                  <img src="/assets/img/partner/cardelevating-2.png" />
                  <h3>Let us Handle the Heavy Lifting</h3>
                  <p>
                    Access a HIPAA-compliant platform with certified telehealth
                    coaches and licensed physicians nationwide. Our network
                    supports clients, reviews cases, and authorizes
                    prescriptions or protocols as needed.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="elevating-card">
                  <img src="/assets/img/partner/cardelevating-3.jpg" />
                  <h3>Seamless Integration—Day One</h3>
                  <p>
                    OYA.health integrates seamlessly: automated systems,
                    marketing funnels, and client journeys ready to use. Launch
                    services instantly and convert interest into booked
                    programs.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="elevating-card">
                  <img src="/assets/img/partner/cardelevating-4.jpg" />
                  <h3>Gain Exclusivity. Build Your Brand.</h3>
                  <p>
                    Choose a model: partner with OYA.health for support or go
                    white-label for a custom experience. We ensure your offering
                    looks premium and runs smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 footer-contenst">
              <p>
                * Clinical services are delivered by independent licensed
                professionals in accordance with state regulations and your
                clinic’s scope of practice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="quicks-section">
        <div className="container">
          <div className="row bg-card">
            <div className="col-12 col-lg-6 mb-4">
              <h1>Quick setup. Zero hassle. Instant scale.</h1>
              <p>
                OYA converts client data into clear, personalized plans—and
                gives your practice a repeatable engine for acquisition,
                retention, and upsell. Trusted across integrative and functional
                medicine, holistic wellness, nutrition, coaching, and emotional
                health, OYA helps you deliver data-driven programs that scale
                impact and revenue.
              </p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <img src="/assets/img/partner/quick.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="satisfied-part-section">
        <div className="container">
          <p>Satisfied Partners</p>
          <div className="row bg-card mt-5">
            <div className="col-12">
              <div className="logo-marquee">
                <div className="logo-track">
                  <img src="/assets/img/partner/Logo (1).svg" />
                  <img src="/assets/img/partner/Logo (2).svg" />
                  <img src="/assets/img/partner/Logo (3).svg" />
                  <img src="/assets/img/partner/Logo (4).svg" />
                  <img src="/assets/img/partner/Logo (5).svg" />
                  <img src="/assets/img/partner/Logo (6).svg" />
                  <img src="/assets/img/partner/Logo (7).svg" />

                  <img src="/assets/img/partner/Logo (1).svg" />
                  <img src="/assets/img/partner/Logo (2).svg" />
                  <img src="/assets/img/partner/Logo (3).svg" />
                  <img src="/assets/img/partner/Logo (4).svg" />
                  <img src="/assets/img/partner/Logo (5).svg" />
                  <img src="/assets/img/partner/Logo (6).svg" />
                  <img src="/assets/img/partner/Logo (7).svg" />
                </div>
              </div>
            </div>
            {/* <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (1).svg' />
            </div>
            <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (2).svg' />
            </div>
            <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (3).svg' />
            </div>
            <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (4).svg' />
            </div>
            <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (5).svg' />
            </div>
            <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (6).svg' />
            </div>
            <div className='col mb-4'>
              <img src='/assets/img/partner/Logo (7).svg' />
            </div> */}
          </div>
        </div>
      </section>
      <img className="full-bg-img" src="/assets/img/partner/full-bg.svg" />
      <section className="full-contents-section">
        <div className="container">
          <div className="row bg-card">
            <div className="col-12 col-lg-12">
              <h1>Why Wellness Business Growth Starts with OYA.health</h1>
              <p className="pt-4 pb-4">
                Most centers deliver excellent services—but struggle to map them
                to what each client actually needs. OYA solves that by placing a
                fast, portable testing step at the front of every journey. In
                under five minutes, capture signals across up to 87
                biomarkers—biological age, cardiac workload, diabetes risk,
                energy and immune status, gut health, micronutrients and diet,
                psychosomatics, BMI, stress index, and more. Our platform turns
                these assessments into precise programs and personalized
                products, then continuously refines them as new data flows in.
              </p>
              <p>
                The impact: higher conversion from assessment to program with a
                full continuum of care; direct monetization across treatments;
                stronger retention through visible progress, re-testing, and
                upgrades; and higher revenue per client via data-driven
                cross-sells to services you already offer. This
                diagnostic-to-program engine is how OYA creates predictable
                wellness business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elevating-business-section"
        id="edit-elevating-business-section"
        style={{ backgroundImage: 'url("/assets/img/partner/waves-bg.png")' }}
      >
        <div className="container">
          <h1>How Oya.health Drives Wellness Business Growth, Practically</h1>
          <div className="row bg-card">
            <div className="col-12 paddingremove">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {sliderData.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="row">
                      <div
                        className="col-12 col-lg-6"
                        style={{ alignContent: "center" }}
                      >
                        <div className="elevating-card">
                          <h3>{slide.title}</h3>
                          <p>{slide.text}</p>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqData} />
      <section className="partner-forms">
        <div className="container">
          <div className="row">
            <h1>Partner With Us</h1>
            <p>Take your customers to the next level of wellbeing</p>
            <div className="col-12 col-lg-8" style={{ margin: "0 auto" }}>
              <form>
                <div className="grid-rows">
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lasttname"
                    className="form-control"
                    placeholder="Last Name"
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    placeholder="Phone number"
                  />
                  <input
                    type="number"
                    name="Company name"
                    className="form-control"
                    placeholder="Company name"
                  />
                  <input
                    type="number"
                    name="number-ofcutomers"
                    className="form-control"
                    placeholder="Number of Customers"
                  />
                </div>
                <textarea
                  className="form-control row-span-5"
                  id="exampleFormControlTextarea1"
                  placeholder="Let us know why you’re interested n a partnership!"
                ></textarea>
                <a href="#" className="get-started-btn black">
                  Get started today
                  <img src="/assets/img/partner/line-arrow-right.svg" />
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="partner-content">
        <div className="container">
          <div className="partner-cards">
            <div className="partner-card">
              <h3>Clinical Partners</h3>
              <p>Highlight how providers can integrate Oya.Health.</p>
            </div>
            <div className="partner-card">
              <h3>Employers</h3>
              <p>Outline wellness benefits and support models.</p>
            </div>
            <div className="partner-card">
              <h3>Researchers</h3>
              <p>Share co-development opportunities and pilots.</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
