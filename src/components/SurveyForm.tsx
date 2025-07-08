import { useState } from "react";
import { SurveyInput } from "../types/survey";

const steps = [
  {
    label: "Budget",
    key: "budget",
    min: 1,
    max: 5,
    help: "How important is affordable rent?",
  },
  {
    label: "Safety",
    key: "safety",
    min: 1,
    max: 5,
    help: "How important is low crime?",
  },
  {
    label: "Walkability",
    key: "walkability",
    min: 1,
    max: 5,
    help: "How important is being able to walk everywhere?",
  },
  {
    label: "Commute",
    key: "commute",
    min: 1,
    max: 5,
    help: "How important is a short commute to business hubs?",
  },
  {
    label: "Greenery",
    key: "greenery",
    min: 1,
    max: 5,
    help: "How important are parks and green spaces?",
  },
];

type StepKey = keyof SurveyInput;

interface SurveyFormProps {
  onSubmit: (input: SurveyInput) => void;
  loading?: boolean;
}

export default function SurveyForm({ onSubmit, loading }: SurveyFormProps) {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<SurveyInput>({
    budget: 3,
    safety: 3,
    walkability: 3,
    commute: 3,
    greenery: 3,
  });

  const handleChange = (val: number) => {
    setInput({ ...input, [steps[step].key]: val });
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto"
    >
      <h2 className="text-lg font-bold mb-2">{steps[step].label}</h2>
      <p className="mb-4 text-gray-500">{steps[step].help}</p>
      <input
        type="range"
        min={steps[step].min}
        max={steps[step].max}
        value={input[steps[step].key as StepKey]}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-full mb-2"
      />
      <div className="flex justify-between text-sm mb-4">
        <span>{steps[step].min}</span>
        <span>{steps[step].max}</span>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
            disabled={loading}
          >
            {loading ? "Matching..." : "See Results"}
          </button>
        )}
      </div>
    </form>
  );
}
