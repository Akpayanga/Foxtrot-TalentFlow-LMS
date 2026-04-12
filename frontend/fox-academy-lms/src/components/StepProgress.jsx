import React from "react";

export default function StepProgress({ currentStep }) {
  const steps = [
    { id: 1, subtitle: "Step 1", title: "Activate Account" },
    { id: 2, subtitle: "Step 2", title: "Set Up Profile" },
    { id: 3, subtitle: "Step 3", title: "Go to Dashboard" },
  ];

  return (
    <div className="w-full max-w-[500px] mb-12">
      <div className="flex items-start justify-between relative">
        {/* Connecting Lines */}
        <div className="absolute top-[14px] left-[15%] right-[15%] h-[1px] flex items-center z-0">
          <div
            className={`h-full w-1/2 ${currentStep > 1 ? "bg-[#27C93F]" : "bg-gray-200"}`}
          ></div>
          <div
            className={`h-full w-1/2 ${currentStep > 2 ? "bg-[#27C93F]" : "bg-gray-200"}`}
          ></div>
        </div>

        {/* Step Items */}
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center relative z-10 w-32"
          >
            {/* Icon */}
            <div
              className={`w-[28px] h-[28px] rounded-full flex items-center justify-center transition-all mb-3.5
              ${
                step.id < currentStep
                  ? "bg-[#27C93F] text-white"
                  : step.id === currentStep
                    ? "bg-[#27C93F] text-white"
                    : "bg-white border border-gray-200 text-gray-300"
              }
            `}
            >
              {step.id < currentStep ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : step.id === currentStep ? (
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              ) : null}
            </div>

            {/* Text Labels */}
            <span
              className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${step.id <= currentStep ? "text-gray-900" : "text-gray-400 opacity-60"}`}
            >
              {step.subtitle}
            </span>
            <span
              className={`text-[11px] font-bold text-center leading-tight tracking-tight ${step.id <= currentStep ? "text-gray-900" : "text-gray-400 opacity-60"}`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
