import { useState } from "react";
import { notificationsData } from "./data";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(3);

  return (
    <div className="App">
      <div className="container">
        <Header count={count} />
        <Notifications notifications={notificationsData} />
      </div>
    </div>
  );
}

export default App;

const Notifications = ({ notifications }) => {
  return (
    <ul>
      {notifications.map((notification) => {
        return (
          <li key={notification.id}>
            <Notification {...notification} />
          </li>
        );
      })}
    </ul>
  );
};

const Notification = ({
  avatar,
  username,
  notification,
  post,
  unread,
  group,
  photo,
  message,
  timestamp,
}) => {
  let notificationContent;

  if (post) {
    notificationContent = (
      <span className="notification__post-reaction"> {post}</span>
    );
  }
  if (message) {
    notificationContent = (
      <>
        <Message message={message} />
      </>
    );
  }

  if (photo) {
    notificationContent = <img className="notification__picture" src={photo} />;
  }

  if (group) {
    notificationContent = <span className="notification__group"> {group}</span>;
  }

  return (
    <article className="notification">
      <img className="notification__avatar" src={avatar} alt="avatar image" />
      <div className="notification__info">
        <span className="notification__username">{username} </span>
        <span className="notification__message"> {notification}</span>
        {notificationContent}
      </div>
      {unread && <Dot />}
      <Timestamp timestamp={timestamp} />
    </article>
  );
};

const Dot = () => {
  return <div className="dot" />;
};

const Message = ({ message }) => {
  return <p className="message">{message}</p>;
};

const Timestamp = ({ timestamp }) => {
  return <time className="notification__timestamp">{timestamp}</time>;
};
