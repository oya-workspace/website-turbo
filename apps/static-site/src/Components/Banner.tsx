import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="main-banner" data-aos="fade-up">
      <div className="container">
        <div className="contents-bk">
          <h1>Personalized longevity, powered by mind–body intelligence</h1>
          <p>The first system aligning data and emotions to redefine your health.</p>
          <div className="btn-bk">
            <Link to="/program-quiz" className="btn-icons ">
              Is This Program Right For You?
              <img src="/assets/img/Arrow.svg" alt="arrow" />
            </Link>
            <a href="mailto:weare@oya.health" className="btn-circle">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
