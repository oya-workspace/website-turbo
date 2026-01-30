import React, { useState } from "react";

interface EmailSubmitStepProps {
  step: any;
  onSubmit?: (email: string) => void;
}

export default function EmailSubmitStep({
  step,
  onSubmit,
}: EmailSubmitStepProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        console.warn("onSubmit handler is not provided");
      }
    } catch (error) {
      console.error("Error in email submission:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="step email-submit-step">
      <div className="email-header">
        <h2 className="email-title">{step.title}</h2>
        {step.description && (
          <p className="email-subtitle">{step.description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="email-form-container">
        <div className="email-input-wrapper">
          <svg
            className="email-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5.00001C1.66667 4.08334 2.41667 3.33334 3.33333 3.33334Z"
              stroke="#2B2B2B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3333 5L10 10.8333L1.66667 5"
              stroke="#2B2B2B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="email-input-field"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        {step.image && (
          <div className="email-image-wrapper">
            <img src={step.image} alt={step.title} className="email-image" />
          </div>
        )}

        <button
          type="submit"
          className="email-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : step.submitButtonText || "Submit"}
        </button>
      </form>
    </div>
  );
}
