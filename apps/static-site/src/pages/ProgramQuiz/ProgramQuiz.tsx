import { useState, useMemo } from "react";
import steps from "../../data/quizSteps.json";
import "./programQuiz.css";
import StepRenderer from "./StepRenderer";
import { NavLink } from "react-router-dom";

interface Answers {
  [key: number]: string | number | number[] | null;
}

export default function ProgramQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentStep = steps[current];
  const totalSteps = steps.length;
  const progressPercentage = ((current + 1) / totalSteps) * 100;

  const handleAnswer = (stepKey: number, value: string | number | number[]) => {
    setAnswers((prev) => ({ ...prev, [stepKey]: value }));

    // Auto-advance from step 0
    if (current === 0) {
      setTimeout(() => {
        if (current < totalSteps - 1) setCurrent(current + 1);
      }, 300);
    }
  };

  const handleSubmit = async (email: string) => {
    try {
      const finalAnswers = { ...answers, [currentStep.step]: email };
      console.log("Quiz submitted with answers:", finalAnswers);

      // Here you would send the data to your backend
      // await fetch('/api/quiz-submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(finalAnswers)
      // });

      // After successful submission, you can redirect or show a message
      // For now, just log success
      console.log("Quiz submission successful");
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  // Check if current step has a valid answer
  const isStepValid = useMemo(() => {
    const stepAnswer = answers[currentStep.step];

    // Info, stats, and guidelines steps don't require answers - always valid
    if (["info", "stats", "guidelines"].includes(currentStep.type)) {
      return true;
    }

    // Email submit step has its own submit button - no Continue button needed
    if (currentStep.type === "email-submit") {
      return false;
    }

    // Question step: needs a single answer (not null/undefined)
    if (currentStep.type === "question") {
      return stepAnswer !== null && stepAnswer !== undefined;
    }

    // Multi-select step: needs at least one selection (array with length > 0)
    if (currentStep.type === "multi-select") {
      return Array.isArray(stepAnswer) && stepAnswer.length > 0;
    }

    return false;
  }, [answers, currentStep]);

  const next = () => {
    if (current < totalSteps - 1 && isStepValid) {
      setCurrent(current + 1);
    }
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="program-quiz-wrapper">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="step-counter">
          <NavLink to="/">
            <img src={"/assets/img/dark-logo.png"} alt="OYA Health Logo" />
          </NavLink>
          <div className="step-indicator">
            <span className="current-step">{current + 1}</span>{" "}
            <span className="total-steps">/ {totalSteps}</span>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Quiz Container */}
      <div className="quiz-container">
        <StepRenderer
          step={currentStep}
          onAnswer={handleAnswer}
          answers={answers}
          onSubmit={handleSubmit}
        />

        {/* Navigation */}
        {current > 0 ? (
          <div className="quiz-nav">
            {currentStep.type !== "email-submit" && (
              <>
                {current > 0 && (
                  <button className="nav-button back-button" onClick={back}>
                    Back
                  </button>
                )}
                {current < totalSteps - 1 && (
                  <button
                    className={`nav-button continue-button ${!isStepValid ? "disabled" : ""}`}
                    onClick={next}
                    disabled={!isStepValid}
                  >
                    Continue
                  </button>
                )}
              </>
            )}
          </div>
        ) : (
          <>
            <p className="step-one-description">
              We'll ask about your health to provide relevant information about
              Seed products. Any personal or health information collected will
              be used in accordance with our Consumer Health Data Privacy Policy
              and Privacy Policy. By continuing, you consent to such use. Opt
              out of marketing by accessing your account or using unsubscribe
              links in emails.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
