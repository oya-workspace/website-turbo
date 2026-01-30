interface InfoStepProps {
  step: any;
}
export default function InfoStep({ step }: InfoStepProps) {
  return (
    <div className="step info-step">
      <div className="info-container">
        <div className="info-header-section">
          <h2 className="step-title">{step.title}</h2>
          <p className="info-description">{step.description}</p>
        </div>
        {step.image && (
          <div className="info-image-wrapper">
            <img src={step.image} alt={step.title} className="info-image" />
          </div>
        )}
        {step.quotes && (
          <p className="info-quote">
            {step.quotes}
          </p>
        )}

        {step.linkTitle && step.link && (
          <div className="info-quote">
            <span className="link-text">{step.linkTitle}</span>
            <a
              className="link"
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {step.link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
