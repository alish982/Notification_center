import React from 'react';
import NotificationItem from './NotificationItem';

function NotificationList({ notifications, visibleCount, onMarkAsRead, onSeeMore, onSeeLess }) {
    const visibleNotifications = notifications.slice(0, visibleCount);

    return (
        <div className="space-y-2 p-4 cursor-pointer">
            {visibleNotifications.length === 0 ? (
                <p className="text-gray-500 text-center">No notifications to show.</p>
            ) : (
                <>
                    {visibleNotifications.map((notif) => (
                        <NotificationItem
                            key={notif.id}
                            notif={notif}
                            onClick={() => {
                                if (!notif.read) {
                                    onMarkAsRead(notif.id);
                                }
                            }}
                        />
                    ))}

                    {notifications.length > 5 && (
                        <div className="text-center mt-4">
                            {visibleCount < notifications.length ? (
                                <button
                                    onClick={onSeeMore}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    See more
                                </button>
                            ) : (
                                <button
                                    onClick={onSeeLess}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    See less
                                </button>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default NotificationList;
