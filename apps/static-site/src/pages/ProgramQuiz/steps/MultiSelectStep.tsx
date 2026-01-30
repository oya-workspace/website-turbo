interface MultiSelectStepProps {
  step: any;
  onAnswer: (stepKey: number, value: number[]) => void;
  answers: { [key: number]: any };
}

export default function MultiSelectStep({
  step,
  onAnswer,
  answers,
}: MultiSelectStepProps) {
  const selected = answers[step.step] || [];

  const toggle = (id: number) => {
    let updated;
    if (selected.includes(id)) {
      updated = selected.filter((v: number) => v !== id);
    } else {
      updated = [...selected, id];
    }
    onAnswer(step.step, updated);
  };

  return (
    <div className="step multi-select-step">
      <h2 className="step-title">{step.title}</h2>
      {step.subtitle && <p className="info-subtitle">{step.subtitle}</p>}

      <div className="options-container">
        {step.options.map((opt: any) => (
          <button
            key={opt.id}
            className={`option-button ${selected.includes(opt.id) ? "active" : ""
              }`}
            onClick={() => toggle(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {step.note && <p className="info-note">{step.note}</p>}
    </div>
  );
}
