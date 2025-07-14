'use client';

export default function SingleNotification({ notif, onClick }) {

    const getBorderColor = (type) => {
        switch (type) {
            case 'error':
                return 'border-red-500';
            case 'warning':
                return 'border-yellow-500';
            case 'success':
                return 'border-green-500';
            default:
                return 'border-blue-500';
        }
    }

    const getDateText = (timestamp) => {
        const ts = new Date(timestamp);
        const now = new Date();
        const diffTime = now.setHours(0, 0, 0, 0) - ts.setHours(0, 0, 0, 0);
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        return `${Math.floor(diffDays)} days ago`;
    };
    
    return (
        <div
            onClick={onClick}
            className={`p-3 border-l-4 my-3 rounded-2xl cursor-pointer transition hover:bg-gray-50
        ${getBorderColor(notif.type)} bg-white shadow`}
        >
            <div className="font-semibold">{notif.message}</div>
            <div className="text-sm text-gray-600">{notif.description}</div>
            <div className="text-xs text-gray-400 mt-1">
                {getDateText(notif.timestamp)} at{' '}
                {new Date(notif.timestamp)
                    .toLocaleTimeString()
                    .split(':')
                    .slice(0, 2)
                    .join(':')}
            </div>
            {!notif.read && (
                <div className="text-xs font-medium text-red-500 mt-1">Unread</div>
            )}
        </div>
    );
}
