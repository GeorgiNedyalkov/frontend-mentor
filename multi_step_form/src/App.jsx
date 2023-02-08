import { useState } from "react";
import FormHeader from "./components/FormHeader";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  function handleNextStep() {
    setCurrentStep(currentStep + 1);
  }

  function handlePreviousStep() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className="App">
      <div className="container">
        <p>{currentStep}</p>
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
