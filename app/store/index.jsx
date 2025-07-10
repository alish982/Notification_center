'use client'
import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../featuers/notificationsSlice'

export const store = configureStore({
    reducer: {
        notifications: notificationReducer,
    },
});
