import Down from "../assets/images/icon-down.svg";
import Up from "../assets/images/icon-up.svg";

const FollowersCards = ({ followers }) => {
  return (
    <ul className="followers__cards">
      {followers.map((card, cardId) => (
        <li key={cardId}>
          <FollowersCard {...card} />
        </li>
      ))}
    </ul>
  );
};

const FollowersCard = ({ username, platform, followers, today }) => {
  return (
    <article className="followers__card">
      <div className="followers_username">
        <img src={platform} alt="Platform logo" />
        <p className="username">{username}</p>
      </div>
      <h2 className="followers_count">{followers}</h2>
      <p className="followers">FOLLOWERS</p>
      <div className="followers_day_stat">
        {today > 0 ? (
          <div className="up">
            <img src={Up} alt="" />
            {today} Today
          </div>
        ) : (
          <div className="down">
            <img src={Down} alt="" />
            {today} Today
          </div>
        )}
      </div>
    </article>
  );
};

export default FollowersCards;
