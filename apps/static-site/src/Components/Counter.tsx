import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Counter() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="counter-section" id="conter-edits">
      <div className="container">
        <div className="row">
          <div className="counter-grids" data-aos="fade-up">
            <div className="stat-box" style={{ maxWidth: "100%" }}>
              <h4>Your body stores what your mind can't process</h4>
              <h2>
                70<span>%</span>
              </h2>
              <p>
                Of chronic tension has emotional roots, yet emotional health is
                rarely part of the wellness plan.
              </p>
            </div>
            <div className="stat-box" style={{ maxWidth: "100%" }}>
              <h4>When homeostasis lasts, life extends</h4>
              <h2>
                9<span>/10</span>
              </h2>
              <p>
                Most adults in the U.S. live outside of metabolic homeostasis,
                with a dysregulated gut–brain axis.
              </p>
            </div>
            <div className="stat-box" style={{ maxWidth: "100%" }}>
              <h4>Toxins block healing. Our method unlocks it.</h4>
              <h2>
                1<span>/3</span>
              </h2>
              <p>
                Adults carry undetected toxin buildup, stress overload, or
                microbial imbalances - like parasites - that silently disrupt
                energy, mood, and healing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
