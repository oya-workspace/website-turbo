interface StatsStepProps {
  step: any;
}

export default function StatsStep({ step }: StatsStepProps) {
  return (
    <div className="step stats-step">
      <h2 className="step-title">{step.title}</h2>
      {step.subtitle && <p className="info-subtitle">{step.subtitle}</p>}

      <div className="stats-container">
        <div className="stats-icons-section">
          {step.stats.map((stat: any, index: number) => (
            <div key={index} className="stat-icon-wrapper">
              <div className="stat-circle">
                {stat.icon && (
                  <img src={stat.icon} alt="" className="stat-icon-img" />
                )}
              </div>
              {index < step.stats.length - 1 && (
                <div className="stat-line"></div>
              )}
            </div>
          ))}
        </div>
        <div className="stats-content-section">
          {step.stats.map((stat: any, index: number) => (
            <div key={index} className="stat-content-item">
              <div className={`stat-value ${step.unitPosition === "top" ? "unit-top" : ""}`}>
                {stat.value}
                {stat.unit && (
                  <span className="stat-unit">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}