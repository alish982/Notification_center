'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    unreadCount: 0,
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        items: [],
    },
    reducers: {
        addNotification: (state, action) => {
            state.items.unshift(action.payload);
            if (!action.payload.read) {
                state.unreadCount += 1;
            }
        },
        markAllRead: (state) => {
            state.items = state.items.map((n) => ({ ...n, read: true }));
            state.unreadCount = 0;
        },
        addNotification: (state, action) => {
            state.items.unshift(action.payload)
        }, 
        markAsRead: (state, action) => {
            const notification = state.items.find(n => n.id === action.payload);
            if (notification) {
                notification.read = true;
            }
        }
    },
});

export const { addNotification, markAllRead, markAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;