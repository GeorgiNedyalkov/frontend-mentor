const Results = ({ bmi }) => {
  return (
    <div className="results">
      <h3>Your BMI is...</h3> <h2 className="result">{bmi}</h2>
      <p>
        Your BMI suggests you&apos;re a healthy weight. Your ideal weight is
        between <b>63.3kgs - 85.2kgs</b>
      </p>
    </div>
  );
};

export default Results;
