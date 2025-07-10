'use client';
import NotificatioBadge from "./notificationBadge";

export default function SingleNotification() {
    return (
        <div className="flex gap-3 relative w-full">
            <NotificatioBadge />
            <div className="flex-1 text-sm text-gray-700">
                <span className="font-semibold">Username</span> did something
                <div className="text-gray-500 italic text-xs mt-1">
                    “Optional extra message here…”
                </div>
                <div className="text-xs text-gray-400 mt-1">1d</div>
            </div>
        </div>
    );
}
