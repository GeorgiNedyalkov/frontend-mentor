import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="balance">
        <div>
          <p className="balance__heading">My balance</p>
          <p className="balance__value">$921.48</p>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <h1>Spending - Last 7 days</h1>
        <div className="chart">
          <Bar day="mon" />
          <Bar day="tue" />
          <Bar day="wed" />
          <Bar day="thu" />
          <Bar day="fri" />
          <Bar day="sat" />
          <Bar day="sun" />
        </div>
        <hr className="line" />
        <div className="total">
          <div>
            <p>Total this month</p>
            <h2 className="total__value">$478.33</h2>
          </div>
          <div className="change">
            <h4>+2.4%</h4>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const Bar = ({ day }) => {
  return (
    <div className="bar__container">
      {day}
      <div className={`bar ${day}`}></div>
    </div>
  );
};
