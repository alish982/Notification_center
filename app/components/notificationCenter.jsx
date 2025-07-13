'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markAllRead, markAsRead } from '../featuers/notificationsSlice';
import NotificationList from './notificationGroup';
import FilterButtons from '../featuers/filterButtons';
import AddNotificationForm from '../services/addNotification';
import { toast } from 'react-toastify';
import { typeStyles } from '../styles/iconsStyle';


function NotificationCenter() {
    const notifications = useSelector((state) => state.notifications.items);
    const dispatch = useDispatch();

    const [filter, setFilter] = useState(null);
    const [visibleCount, setVisibleCount] = useState(4);

    const [newType, setNewType] = useState('info');
    const [newMessage, setNewMessage] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const filteredNotifications = filter
        ? notifications.filter((n) => n.type === filter)
        : notifications;

    const handleAddNotification = () => {
        if (!newMessage.trim()) return;

        dispatch({
            type: 'notifications/addNotification',
            payload: {
                id: Date.now(),
                type: newType,
                message: newMessage,
                description: newDescription,
                timestamp: new Date().toISOString(),
                read: false,
            },
        });
        const { icon, className } = typeStyles[newType];

        toast(
            <div className="flex items-center gap-3">
                {icon}
                <span className="font-medium">New {newType} notification added!</span>
            </div>,
            {
                className: `rounded-lg shadow ${className}`,
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: true,
            }
        );
        setNewMessage('');
        setNewDescription('');
        setNewType('info');
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow rounded-2xl my-4">
            <div className="flex justify-between items-center px-4 py-2 border-b">
                <h2 className="text-xl font-bold">Notifications</h2>
                <button
                    onClick={() => dispatch(markAllRead())}
                    className="text-sm text-blue-600 hover:underline"
                >
                    Mark all as read
                </button>
            </div>

            <FilterButtons
                notifications={notifications}
                filter={filter}
                setFilter={setFilter}
                setVisibleCount={setVisibleCount}
            />

            <NotificationList
                notifications={filteredNotifications}
                visibleCount={visibleCount}
                onMarkAsRead={(id) => dispatch(markAsRead(id))}
                onSeeMore={() => setVisibleCount((prev) => prev + 5)}
                onSeeLess={() => setVisibleCount(5)}
            />

            <AddNotificationForm
                newType={newType}
                newMessage={newMessage}
                newDescription={newDescription}
                setNewType={setNewType}
                setNewMessage={setNewMessage}
                setNewDescription={setNewDescription}
                handleAddNotification={handleAddNotification}
            />
        </div>
    );
}

export default NotificationCenter;
