// 'use client';

// import { useState, useEffect } from "react";
// import { EllipsisVertical } from "lucide-react";
// import SingleNotification from "./notificationItem";
// import { sampleNotifications } from "../services/fakeDataGenerator";

// export default function NotificationCenter() {
//     const [notifications, setNotifications] = useState([]);
//     const [notificationId, setNotificationId] = useState(0);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setNotifications((prev) => {
//                 if (index >= sampleNotifications.length) return prev;

//                 const nextNotification = sampleNotifications[index];
//                 setIndex((prevIndex) => prevIndex + 1);

//                 return [...prev, nextNotification];
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [index]);

//     return (
//         <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow border my-5">
//             <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-lg font-semibold">Notifications</h2>
//                 <EllipsisVertical className="w-5 h-5 text-gray-500" />
//             </div>

//             {notifications.length === 0 ? (
//                 <p className="text-gray-500">No new notifications.</p>
//             ) : (
//                 <>
//                     <div className="flex gap-4 mb-4 border-b pb-2">
//                         <button className="text-blue-600 font-medium border-b-2 border-blue-600">
//                             All
//                         </button>
//                         <button className="text-gray-500 hover:text-black font-medium">
//                             Unread
//                         </button>
//                     </div>

//                         <div className="space-y-4 w-full">
//                             {sampleNotifications.map((notif) => (
//                                 <div key={notif.id} className="w-full">
//                                     <SingleNotification
//                                         id={notif.id}
//                                         type={notif.type}
//                                         message={notif.message}
//                                         description={notif.description}
//                                         timestamp={notif.timestamp}
//                                         read={notif.read}
//                                     />
//                                 </div>
//                             ))}
//                         </div>


//                     <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded text-gray-700">
//                         See previous notifications
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// }


// /src/components/Notification/NotificationCenter.jsx
'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markAllRead } from '../featuers/notificationsSlice';

function NotificationCenter() {
    const notifications = useSelector((state) => state.notifications.items);
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto bg-white shadow rounded-lg">
            <div className="flex justify-between items-center px-4 py-2 border-b">
                <h2 className="text-xl font-bold">Notifications</h2>
                <button
                    onClick={() => dispatch(markAllRead())}
                    className="text-sm text-blue-600 hover:underline"
                >
                    Mark all as read
                </button>
            </div>
            <div className="space-y-2 p-4">
                {notifications.length === 0 ? (
                    <p className="text-gray-500 text-center">No notifications yet.</p>
                ) : (
                    notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={`p-3 rounded border-l-4 ${notif.type === 'error'
                                    ? 'border-red-500'
                                    : notif.type === 'warning'
                                        ? 'border-yellow-500'
                                        : notif.type === 'success'
                                            ? 'border-green-500'
                                            : 'border-blue-500'
                                } bg-white shadow`}
                        >
                            <div className="font-semibold">{notif.message}</div>
                            <div className="text-sm text-gray-600">{notif.description}</div>
                            <div className="text-xs text-gray-400 mt-1">
                                {new Date(notif.timestamp).toLocaleString()}
                            </div>
                            {!notif.read && (
                                <div className="text-xs font-medium text-red-500 mt-1">Unread</div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default NotificationCenter;
