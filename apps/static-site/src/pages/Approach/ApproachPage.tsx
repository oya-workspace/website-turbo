import { useEffect } from "react";
import "./approach.css";
import Healthcare from "./HealthCare";
import OurHow from "./OurHow";
import TakeControl from "../../Components/TakeControl";
import PhysicalAndEmotional from "./PhysicalAndEmotional";
import PerformanceOptimization from "./PerformanceOptimization";
import FAQ from "../../Components/FAQ";
// import Start from '../../Components/Start';
import Testimonals from "../../Components/Testimonals";
import Howwedo from "./Howwedo";
import BodyData from "./BodyData";
import Solutions from "./Solutions";
import MemberPortalSection from "./MemberPortalSection";
import WelcomeVideo from "./WelcomeVideo";
import { WELCOME_VIDEO_URL } from "../../config/constant.config";

export default function ApproachPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqData = [
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
  return (
    <>
      <WelcomeVideo videoUrl={WELCOME_VIDEO_URL} />
      <Healthcare />
      <OurHow />
      {/* <Solutions /> */}
      <TakeControl />
      <MemberPortalSection />
      {/* <PhysicalAndEmotional /> */}
      <PerformanceOptimization />
      <Howwedo />
      <BodyData />
      <Testimonals />
      <FAQ faqs={faqData} />
    </>
  );
}
