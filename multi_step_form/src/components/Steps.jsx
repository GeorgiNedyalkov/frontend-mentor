function Steps({ currentStep, setCurrentStep }) {
  return (
    <div className="steps">
      {[1, 2, 3, 4].map((step) => {
        return (
          <Step
            key={step}
            number={step}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
      })}
    </div>
  );
}

function Step({ number, currentStep, setCurrentStep }) {
  const isCurrentStep = number === currentStep;

  return (
    <div
      className={isCurrentStep ? "step active" : "step"}
      onClick={() => setCurrentStep(number)}
    >
      <p>{number}</p>
    </div>
  );
}

export default Steps;
