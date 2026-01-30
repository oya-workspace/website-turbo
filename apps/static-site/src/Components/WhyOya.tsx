import { ArrowRight } from "lucide-react";

export default function WhyOya() {
  return (
    <section className="counter-section why-oya-section" id="why-oya">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h1 style={{ fontSize: "36px", fontFamily: "Geist" }}>
              Why clients choose OYA
            </h1>
          </div>
          <div className="counter-grids" data-aos="fade-up">
            <div
              className="stat-box"
              style={{ maxWidth: "100%", paddingLeft: "unset" }}
            >
              <div className="icon-wrapper">
                <img src="/assets/img/pencil.svg" alt="" />
              </div>
              <h4>Personalized</h4>
              <p>Not generic</p>
            </div>
            <div className="stat-box" style={{ maxWidth: "100%" }}>
              <div className="icon-wrapper">
                <img src="/assets/img/allergens.svg" alt="" />
              </div>
              <h4>Whole-person approach</h4>
              <p>Biology + Emotions</p>
            </div>
            <div
              className="stat-box"
              style={{ maxWidth: "100%", paddingRight: "unset" }}
            >
              <div className="icon-wrapper">
                <img src="/assets/img/setting.svg" alt="" />
              </div>
              <h4>Real humans + smart tech</h4>
              <p>Available when you need us</p>
            </div>
          </div>
          <div className="col-12 text-center mt-5" data-aos="fade-up">
            <p className="pricing-text mb-1 text-[#2B2B2B]">
              Ready to commit to your future?
            </p>
            {/* <p className="pricing-text">
              Join today for <strong>$299/month (3-month commitment)</strong> and start your guided reset. OYA.health provides wellness services and educational guidance. Not a substitute for medical diagnosis or treatment.
            </p> */}
            <a
              href="mailto:weare@oya.health"
              className="get-started-btn bg-[#E8C9AE] text-black"
            >
              Let's Get Started
              <img src="/assets/img/partner/line-arrow-right.svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
