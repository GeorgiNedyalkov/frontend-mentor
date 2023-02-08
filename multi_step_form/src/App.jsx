import { useState } from "react";
import FormHeader from "./components/FormHeader";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    setUserForm({
      ...userForm,
      [event.target.id]: [event.target.value],
    });
  }

  function handleNextStep() {
    setCurrentStep(currentStep + 1);
  }

  function handlePreviousStep() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className="App">
      <Steps currentStep={currentStep} />
      <div className="container">
        <FormHeader title="Personal info">
          Please provide your name, email address, and phone number.
        </FormHeader>
        <form className="multistep-form">
          <div className="form__field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="e.g. Stephen King" />
          </div>
          <div className="form__field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="form__field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              value={userForm.phoneNumber}
              onChange={handleChange}
              type="number"
              placeholder="e.g. + 1 234 567 890"
            />
          </div>
        </form>
      </div>
      <div className="form__footer">
        <button className="form__button" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;

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
