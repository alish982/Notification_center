'use client';

import { useState, useEffect } from "react";
import { EllipsisVertical } from "lucide-react";
import SingleNotification from "./notificationItem";

export default function NotificationCenter() {
    const [notifications, setNotifications] = useState([]);
    const [notificationId, setNotificationId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNotifications((prev) => {
                const newId = notificationId + 1;
                const newNotification = {
                    id: newId,
                    message: `New notification ${newId}`,
                    timestamp: new Date().toLocaleTimeString(),
                };
                setNotificationId(newId); 
                return [...prev, newNotification];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow border my-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <EllipsisVertical className="w-5 h-5 text-gray-500" />
            </div>

            {notifications.length === 0 ? (
                <p className="text-gray-500">No new notifications.</p>
            ) : (
                <>
                    <div className="flex gap-4 mb-4 border-b pb-2">
                        <button className="text-blue-600 font-medium border-b-2 border-blue-600">
                            All
                        </button>
                        <button className="text-gray-500 hover:text-black font-medium">
                            Unread
                        </button>
                    </div>

                    <div className="space-y-4 w-full">
                        {notifications.map((notif) => (
                            <div key={notif.id} className="w-full">
                                <SingleNotification
                                    message={notif.message}
                                    timestamp={notif.timestamp}
                                />
                            </div>
                        ))}
                    </div>

                    <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded text-gray-700">
                        See previous notifications
                    </button>
                </>
            )}
        </div>
    );
}
