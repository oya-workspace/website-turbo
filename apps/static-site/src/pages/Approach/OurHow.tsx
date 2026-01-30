const OurHow = () => {
  const principles = [
    {
      icon: "how-1.png",
      title: "Your body already knows how to heal",
      description:
        "Our job is to remove what's in a way and bring it back to balance.",
      titleWidth: "87%",
    },
    {
      icon: "how-2.png",
      title: "Detox: The ultimate strategy for inner balance",
      description:
        "Detoxification is the body's reset switch. When pathways stall, homeostasis breaks down - triggering fatigue, inflammation, and chronic disease risk.",
      titleWidth: "100%",
    },
    {
      icon: "how-3.png",
      title: "One size does not fits all",
      description:
        "True precision means personalization - health solutions tailored to your unique biology.",
      titleWidth: "100%",
    },
  ];

  return (
    <section className="our-how-section">
      <div className="container">
        <div className="our-how-card">
          {/* Badge */}
          <div className="approach-pill">OUR HOW</div>

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="our-how-title text-white">
              Our proprietary system is rooted in core principles—treating body
              and mind as one.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="principles-grid">
            {principles.map((principle, index) => {
              return (
                <div key={index} className="principle-card">
                  <div className="principle-icon">
                    <img
                      src={`/assets/img/approach/${principle.icon}`}
                      alt={principle.title}
                    />
                  </div>

                  <div>
                    <h3
                      className="principle-card-title ff-newsreader"
                      style={{ width: principle.titleWidth }}
                    >
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
        </div>
      </div>
    </section>
  );
};

export default OurHow;
