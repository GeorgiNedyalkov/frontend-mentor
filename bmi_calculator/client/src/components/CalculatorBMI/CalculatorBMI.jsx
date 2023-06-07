/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Results from "./Results/Results";

const INITIAL_MEASUREMENTS = {
  height: 0,
  weight: 0,
  feet: 0,
  inches: 0,
  stones: 0,
  pounds: 0,
};

const CalculatorBMI = () => {
  const [bmi, setBmi] = useState(0);
  const [measurementSystem, setMeasurementSystem] = useState("metric");
  const [measurements, setMeasurements] = useState(INITIAL_MEASUREMENTS);

  const onChooseMeasurementSystem = (e) => {
    setMeasurementSystem(e.target.name);
    setMeasurements(INITIAL_MEASUREMENTS);
    setBmi(0);
  };

  const onFormChange = (e) => {
    setMeasurements((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const calculateBMI = (height, weight) => {
    if (measurementSystem === "metric") {
      return weight / (height / 100) ** 2;
    } else if (measurementSystem === "imperial") {
      let result = (weight / height ** 2) * 703;
      console.log(result);
      return result;
    }
  };

  useEffect(() => {
    if (measurements.weight != "" && measurements.height != "") {
      const resultBMI = calculateBMI(
        Number(measurements.height),
        Number(measurements.weight)
      ).toFixed(1);

      setBmi(resultBMI);
    }

    if (
      measurements.feet != "" &&
      measurements.inches != "" &&
      measurements.stones != "" &&
      measurements.pounds != ""
    ) {
      let inches =
        (Number(measurements.feet) + Number(measurements.inches) / 100) * 12;
      let pounds =
        (Number(measurements.stones) + Number(measurements.pounds) / 10) * 14;
      const resultBMI = calculateBMI(inches, pounds);

      setBmi(resultBMI.toFixed(1));
    }
  }, [measurements, measurementSystem]);

  return (
    <section id="calculator__bmi">
      <h2 className="calculator__title">Enter your details below</h2>
      <form>
        <fieldset>
          <div className="units__container">
            <input
              onChange={onChooseMeasurementSystem}
              type="radio"
              name="metric"
              id="metric"
              checked={measurementSystem === "metric"}
            />
            <label htmlFor="metric">Metric</label>
          </div>
          <div className="units__container">
            <input
              onChange={onChooseMeasurementSystem}
              type="radio"
              name="imperial"
              id="imperial"
              checked={measurementSystem === "imperial"}
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
        </fieldset>
      </form>

      {measurementSystem === "metric" && (
        <div>
          <div>
            <label htmlFor="height" className="measurements">
              Height
            </label>
            <br />
            <div className="input__wrapper">
              <input
                value={measurements.height === 0 ? "" : measurements.height}
                onChange={onFormChange}
                type="number"
                name="height"
                id="height"
              />
              <span>cm</span>
            </div>
          </div>
          <div>
            <label htmlFor="weight" className="measurements">
              Weight
            </label>
            <br />
            <div className="input__wrapper">
              <input
                value={measurements.weight === 0 ? "" : measurements.weight}
                onChange={onFormChange}
                type="number"
                name="weight"
                id="weight"
              />
              <span>kg</span>
            </div>
          </div>
        </div>
      )}

      {measurementSystem === "imperial" && (
        <div>
          <label htmlFor="height" className="measurements">
            Height
          </label>
          <div className="measurement__inputs">
            <div className="input__wrapper">
              <input
                value={measurements.feet === 0 ? "" : measurements.feet}
                onChange={onFormChange}
                type="number"
                name="feet"
                id="feet"
              />
              <span>ft</span>
            </div>
            <div className="input__wrapper">
              <input
                value={measurements.inches === 0 ? "" : measurements.inches}
                onChange={onFormChange}
                type="number"
                name="inches"
                id="inches"
              />
              <span>in</span>
            </div>
          </div>
          <label htmlFor="weight" className="measurements">
            Weight
          </label>
          <div className="measurement__inputs">
            <div className="input__wrapper">
              <input
                value={measurements.stones === 0 ? "" : measurements.stones}
                onChange={onFormChange}
                type="number"
                name="stones"
                id="stones"
              />
              <span>st</span>
            </div>
            <div className="input__wrapper">
              <input
                value={measurements.pounds === 0 ? "" : measurements.pounds}
                onChange={onFormChange}
                type="number"
                name="pounds"
                id="pounds"
              />
              <span>lbs</span>
            </div>
          </div>
        </div>
      )}

      <Results bmi={bmi} />
    </section>
  );
};

export default CalculatorBMI;
