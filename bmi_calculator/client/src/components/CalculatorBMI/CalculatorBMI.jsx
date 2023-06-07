const CalculatorBMI = () => {
  return (
    <section id="calculator__bmi">
      <h2 className="calculator__title">Enter your details below</h2>
      <form>
        <div className="units">
          <div>
            <label htmlFor="metric">Metric</label>
            <input type="checkbox" name="metric" id="metric" />
          </div>
          <div>
            <label htmlFor="imperial">Imperial</label>
            <input type="checkbox" name="imperial" id="imperial" />
          </div>
        </div>
        <label htmlFor="height">Height</label>
        <br />
        <input type="number" name="height" id="height" />
        <br />
        <label htmlFor="weight">Weight</label>
        <br />
        <input type="number" name="weight" id="weight" />
      </form>

      <Results />
    </section>
  );
};

export default CalculatorBMI;

const Results = () => {
  return (
    <div className="results">
      <h3>Your BMI is...</h3>
      <h2 className="result">23.4</h2>
      <p>
        Your BMI suggests you&apos;re a healthy weight. Your ideal weight is
        between <b>63.3kgs - 85.2kgs</b>
      </p>
    </div>
  );
};
