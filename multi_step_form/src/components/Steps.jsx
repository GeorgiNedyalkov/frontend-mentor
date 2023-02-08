function Steps({ currentStep }) {
  return (
    <div className="steps">
      {[1, 2, 3, 4].map((step) => {
        return <Step key={step} number={step} currentStep={currentStep} />;
      })}
    </div>
  );
}

function Step({ number, currentStep }) {
  const isCurrentStep = number === currentStep;

  return (
    <div className={isCurrentStep ? "step active" : "step"}>
      <p>{number}</p>
    </div>
  );
}

export default Steps;
