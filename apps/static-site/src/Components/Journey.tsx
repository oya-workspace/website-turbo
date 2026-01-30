// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Pagination } from "swiper/modules";
// Import Lucide icons
import {
  FileText,
  FlaskConical,
  Users,
  Smartphone,
  Pill,
  ArrowRight,
  LucideIcon,
  Scan,
  Brain,
  User,
  Droplet,
  Headphones,
  Sprout,
} from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const conciergeFeatures: FeatureItem[] = [
  {
    icon: Droplet,
    title: "Comprehensive blood work review & guidance",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id vestibulum auctor massa volutpat sit id. Morbi semper elementum eget et platea ut. Vulputate sit sed in.",
  },
  {
    icon: Scan,
    title: "Longevity Scan at our New York or Miami locations",
    description:
      "In-person scan that reveals imbalances before symptoms appear (currently available in New York & Miami)",
  },
  {
    icon: Brain,
    title: "Emotional Somatic Mapping (ESM) to decode stress patterns",
    description:
      "Advanced emotional and somatic analysis to identify and address stress patterns in your body.",
  },
  {
    icon: FileText,
    title:
      "Tailored Action Plan for health span, performance, and emotional balance",
    description:
      "Personalized plan designed specifically for your health goals and needs.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Lab Access",
    description: "Access to comprehensive laboratory testing and analysis.",
  },
  {
    icon: Sprout,
    title: "Foundational Detox Starter Pack (personalized to your profile)",
    description:
      "Customized detox program tailored to your individual health profile.",
  },
  {
    icon: Pill,
    title:
      "Custom Supplement Formulation (monthly supplement cost varies by individual)",
    description:
      "Personalized supplement regimen designed for your unique needs.",
  },
  {
    icon: User,
    title: "1:1 Session with a Longevity Expert",
    description: "Direct consultation with our longevity specialists.",
  },
  {
    icon: Users,
    title: "1:1 Coaching with an OYA.health-certified coach",
    description:
      "Personalized coaching sessions with certified health coaches.",
  },
  {
    icon: Headphones,
    title: "24/7 In-App Live Support for health & mental well-being questions",
    description:
      "Round-the-clock access to support for all your health and wellness questions.",
  },
  {
    icon: Smartphone,
    title: "Premium App Access with progress tracking and protocols",
    description:
      "Full access to premium features including progress tracking and personalized protocols.",
  },
];

const conciergeFeaturesList = conciergeFeatures;

export default function Journey() {
  return (
    <section className="journey bg-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 text-center mb-5" data-aos="fade-up">
            <h1>Start your journey</h1>
          </div>
          <div className="col-12 desktop-card mb-4" data-aos="fade-up">
            <div className="card-journey">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <small>ALL-IN-ONE</small>
                  <h3>OYA Concierge Care</h3>
                  <p className="mb-2 ff-newsreader">
                    3-month commitment • NYC & Miami
                  </p>
                  <p>
                    Feel better, think clearer, and move toward your best labs
                    and lifestyle—without guessing. Our team <br /> guides you
                    step-by-step and adapts as you progress.
                  </p>
                </div>
                {/* <h2 className="price-right">
                  $299 <span>/MONTH</span>
                </h2> */}
              </div>
              <a
                href="mailto:weare@oya.health"
                className="get-started-btn bg-black"
              >
                Let's Get Started
                <span className="arrow-circle">
                  <ArrowRight className="inline-block" size={16} />
                </span>
              </a>
              <div className="toggle-bk">
                <small>WHAT'S INCLUDED</small>
                {conciergeFeaturesList.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <details
                      key={index}
                      open={index === 0}
                      className={index > 0 ? "mt-3" : ""}
                    >
                      <summary>
                        <div className="icon-circle">
                          <IconComponent size={18} />
                        </div>
                        <p>{feature.title}</p>
                      </summary>
                      {feature.description && <p>{feature.description}</p>}
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[EffectFlip, Pagination]}
            className="mySwiper mobile-slider"
          >
            <SwiperSlide>
              <div className="card-journey">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <small>ALL-IN-ONE</small>
                    <h3>OYA Concierge Care</h3>
                    <p className="mb-1">3-month commitment • NYC & Miami</p>
                    <p>
                      Feel better, think clearer, and move toward your best labs
                      and lifestyle—without guessing. Our team guides you
                      step-by-step and adapts as you progress.
                    </p>
                  </div>
                  {/* <h2 className="price-right">
                    $299 <span>/MONTH</span>
                  </h2> */}
                </div>
                <a href="mailto:weare@oya.health" className="get-started-btn">
                  Let's Get Started
                  <span className="arrow-circle">
                    <ArrowRight className="inline-block" size={16} />
                  </span>
                </a>
                <div className="toggle-bk">
                  <small>WHAT'S INCLUDED</small>
                  {conciergeFeaturesList.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <details
                        key={index}
                        open={index === 0}
                        className={index > 0 ? "mt-3" : ""}
                      >
                        <summary>
                          <div className="icon-circle">
                            <IconComponent size={18} />
                          </div>
                          <p>{feature.title}</p>
                        </summary>
                        {feature.description && <p>{feature.description}</p>}
                      </details>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
