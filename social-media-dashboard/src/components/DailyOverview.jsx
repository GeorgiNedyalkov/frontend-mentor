import { dailyData } from "../data";
import Down from "../assets/images/icon-down.svg";
import Up from "../assets/images/icon-up.svg";

const DailyOverview = () => {
  return (
    <div className="overview">
      <h2 className="overview__header">Overview - Today</h2>
      <ul className="stats">
        {dailyData.map((dailyStat) => (
          <li key={dailyStat.id}>
            <DailyStat {...dailyStat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyOverview;

const DailyStat = ({ title, stat, icon, today }) => {
  return (
    <div className="stat">
      <div className="stat__right">
        <p className="stat__title">{title}</p>
        <h2 className="stat__number">{stat}</h2>
      </div>
      <div className="stat__left">
        <div>
          <img className="stat__platform" src={icon} alt="Statistic platform" />
        </div>
        {today > 0 ? (
          <div className="up">
            <img className="icon" src={Up} />
            {today}
          </div>
        ) : (
          <div className="down">
            <img className="icon" src={Down} />
            {today}
          </div>
        )}
      </div>
    </div>
  );
};
