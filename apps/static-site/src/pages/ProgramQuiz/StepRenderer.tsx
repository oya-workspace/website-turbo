import QuestionStep from "./steps/QuestionStep";
import MultiSelectStep from "./steps/MultiSelectStep";
import InfoStep from "./steps/InfoStep";
import EmailSubmitStep from "./steps/EmailSubmitStep";
import StatsStep from "./steps/StatsStep";
import GuidelinesStep from "./steps/GuidelinesSteps";

interface StepProps {
  step: any;
  onAnswer: (stepKey: number, value: any) => void;
  answers: { [key: number]: any };
  onSubmit?: (email: string) => void;
}

export default function StepRenderer({
  step,
  onAnswer,
  answers,
  onSubmit,
}: StepProps) {
  switch (step.type) {
    case "question":
      return <QuestionStep step={step} onAnswer={onAnswer} answers={answers} />;
    case "multi-select":
      return (
        <MultiSelectStep step={step} onAnswer={onAnswer} answers={answers} />
      );
    case "info":
      return <InfoStep step={step} />;
    case "stats":
      return <StatsStep step={step} />;
    case "guidelines":
      return <GuidelinesStep step={step} />;
    case "email-submit":
      return <EmailSubmitStep step={step} onSubmit={onSubmit} />;
    default:
      return <p>Unknown step type</p>;
  }
}
