interface QuestionStepProps {
  step: any;
  onAnswer: (stepKey: number, value: number | string) => void;
  answers: { [key: number]: any };
}

export default function QuestionStep({ step, onAnswer, answers }: QuestionStepProps) {
  return (
    <div className="step question-step">
      <h2 className="step-title">{step.title}</h2>

      <div className="options-container">
        {step.options.map((opt: any) => (
          <button
            key={opt.id}
            className={`option-button ${
              answers[step.step] === opt.id ? "active" : ""
            }`}
            onClick={() => onAnswer(step.step, opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
