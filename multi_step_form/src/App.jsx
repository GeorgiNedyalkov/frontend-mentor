import { useState } from "react";
import FormHeader from "./components/FormHeader";
import Plans from "./components/Plans";
import Steps from "./components/Steps";
import ArcadeIcon from "./assets/images/icon-arcade.svg";
import AdvancedIcon from "./assets/images/icon-advanced.svg";
import ProIcon from "./assets/images/icon-pro.svg";
import CheckmarkIcon from "./assets/images/icon-checkmark.svg";
import ThankYouIcon from "./assets/images/icon-thank-you.svg";

import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(2);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
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
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
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
        {currentStep == 3 && (
          <FormHeader title="Pick add-ons">
            Add-ons help enhance your gaming experience
          </FormHeader>
        )}
        {currentStep == 4 && (
          <FormHeader title="Finishing up">
            Double-check everything looks OK before confirming.
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
              <Plans plans={formPlans} />

              <div className="form__plan-type">
                <p className="form__plan-type-active">Monthly</p>
                {/* TODO: Toggle */}
                <div className="toggle">
                  <div className="toggleDot"></div>
                </div>
                <p>Yearly</p>
              </div>
            </div>
          )}
          {currentStep == 3 && (
            <div className="form__addons">
              <div className="form__addon">
                <input type="checkbox" name="online" id="online" />
                <div>
                  <label htmlFor="online">Online service</label>
                  <p>Access to multiplayer games</p>
                </div>
              </div>
            </div>
          )}
          {currentStep == 4 && <div className="form__confirmation"></div>}
        </form>
      </div>

      <div className="form__footer">
        {currentStep > 1 && currentStep < 4 && (
          <button onClick={handlePreviousStep} className="form__button-back">
            Go Back
          </button>
        )}

        <ButtonNext handleNextStep={handleNextStep} />

        <button className="form__button" onClick={handleNextStep}>
          {currentStep == 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
}

export default App;

function ButtonNext({ handleNextStep }) {
  <button className="form__button" onClick={handleNextStep}>
    Next
  </button>;
}

const formPlans = [
  { id: "arcade", label: "Arcade", price: 9, icon: ArcadeIcon },
  { id: "advanced", label: "Advanced", price: 12, icon: AdvancedIcon },
  { id: "pro", label: "Pro", price: 15, icon: ProIcon },
];
