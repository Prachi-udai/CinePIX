import { useState } from "react";


const NotificationInbox = () => {
  const [notifications] = useState([
    { id: 1, message: "New movie added: Inception" },
    { id: 2, message: "Your favorite movie is on sale!" },]);

  return (
    <div className="notification-inbox">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default NotificationInbox;