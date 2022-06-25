import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState(false);

  useEffect(() => {
    if (
      (activeNotification && activeNotification.status === "success") ||
      activeNotification.status === "error"
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (data) => {
    setActiveNotification(data);
  };

  const hideNotificationHandler = (data) => {
    setActiveNotification(false);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
