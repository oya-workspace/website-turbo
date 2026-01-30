
interface Guideline {
  icon: string;
  title: string;
  description: string;
}

interface GuidelinesStepProps {
  step: {
    title: string;
    description?: string;
    guidelines: Guideline[];
    cta?: string;
  };
}


export default function GuidelinesStep({ step }: GuidelinesStepProps) {
  return (
    <div className="step stats-step">
    <h2 className="step-title">{step.title}</h2>
    {step.description && <p className="info-subtitle">{step.description}</p>}

      <div className="guidelines-container">
        <div className="guidelines-icons-section">
          {step.guidelines.map((guideline, index) => (
            <div key={index} className="guideline-icon-wrapper">
              <div className={`stat-circle ${index === step.guidelines.length - 1 ? "guideline-circle" : ""}`}>
              {guideline.icon && (
                  <img src={guideline.icon} alt="" className="stat-icon-img" />
                )}
              </div>
             
            </div>
          ))}
        </div>
        
        <div className="guidelines-content-section">
          {step.guidelines.map((guideline, index) => (
            <div key={index} className="guideline-content-item">
              <h3 className="guideline-title">{guideline.title}</h3>
              <p className="description">{guideline.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
