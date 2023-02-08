import { useState } from "react";
import FormHeader from "./components/FormHeader";
import Steps from "./components/Steps";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(2);
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
        {currentStep == 1 && (
          <FormHeader title="Personal info">
            Please provide your name, email address, and phone number.
          </FormHeader>
        )}
        {currentStep == 2 && (
          <FormHeader title="Select your plan">
            You have the option of monthly or yearly billing.
          </FormHeader>
        )}
        <form className="multistep-form">
          {currentStep == 1 && (
            <>
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
            </>
          )}
          {currentStep == 2 && (
            <div className="form__plans">
              <div className="form__plan">
                <img src={arcadeIcon} alt="arcade billing plan" />
                <div>
                  <h3>Arcade</h3>
                  <p>
                    $9<span>/mo</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="form__footer">
        {currentStep > 1 && currentStep < 4 && (
          <button onClick={handlePreviousStep} className="form__button-back">
            Go Back
          </button>
        )}
        <button className="form__button" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;

const plans = [
  { id: "arcade", label: "Arcade", price: 9 },
  { id: "advanced", label: "Advanced", price: 12 },
  { id: "pro", label: "Pro", price: 15 },
];
