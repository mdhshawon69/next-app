import React, { useContext } from "react";
import Notification from "../ui/notification.jsx";
import Header from "./MainHeader.jsx";
import NotificationContext from "../../store/notification-contex";

const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
