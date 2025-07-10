'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    unreadCount: 0,
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
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
    },
});

export const { addNotification, markAllRead } = notificationSlice.actions;
export default notificationSlice.reducer;