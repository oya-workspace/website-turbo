import "./approach.css";

export default function PerformanceOptimization() {
  return (
    <section className="py-12 body-data-section">
      {/* Section 1: Performance Optimization */}
      <div className="performance-section">
        <div className="px-8 text-center">
          <h2 className="mt-6 text-center healthcare-title max-w-[700px]">
            Your Body. Your Data. Your Path to Health & Balance.
          </h2>
          <p>
            All your emotional and biological signals, brought together,
            simplified, visualized, and turned into your personalized healing
            blueprint.
          </p>

          <a
            href="https://form.typeform.com/to/FUJjZtpw"
            className="get-started-btn"
          >
            Get Started{" "}
            <i className="fa fa-arrow-right" style={{ color: "black" }}></i>
          </a>
          <img src="/assets/img/approach/apple-ipad.png" />
        </div>
      </div>
    </section>
  );
}
