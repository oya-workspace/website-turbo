import Counter from "./Counter";

export default function Portal() {
  return (
    <>
      {/* <Counter /> */}

      <section className="patient-portal">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h1>Perks of Your Patient Portal</h1>
              <p>
                We are your ecosystem for prevention, clinically trusted
                solutions, and holistic support for mental health and lifestyle
                harmony.
              </p>
              <a href="#" className="get-started-btn">
                Join Today
                <img src="/assets/img/partner/line-arrow-right.svg" />
              </a>
            </div>
            <div className="col-12 " data-aos="fade-up">
              <img
                src="/assets/img/pic6.svg"
                alt="Patient Portal"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
