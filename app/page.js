'use client'
import NotificationCenter from "./components/notificationCenter";
import usePollingNotifications from "./hooks/simulateNoti";

export default function Home() {

  usePollingNotifications();

  return (
    <div>
      <NotificationCenter />
    </div>
  );
}
