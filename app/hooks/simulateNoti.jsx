'use client';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../featuers/notificationsSlice';
import { sampleNotifications } from '../services/fakeDataGenerator';

export default function usePollingNotifications() {
    const dispatch = useDispatch();
    const indexRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (indexRef.current >= sampleNotifications.length) return;

            const next = sampleNotifications[indexRef.current];
            dispatch(addNotification(next));
            indexRef.current += 1;
        }, 3000); // every 3 seconds

        return () => clearInterval(interval);
    }, [dispatch]);
}
