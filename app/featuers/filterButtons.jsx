import React from 'react';
import { useMemo } from 'react';

function FilterButtons({ notifications, filter, setFilter, setVisibleCount }) {
    const uniqueTypes = useMemo(() => {
        return [...new Set(notifications.map((n) => n.type))];
    }, [notifications]);

    return (
        <div className="px-4 py-2">
            {notifications.length > 0 && (
                <div className="flex gap-3 animate-fade-in-up">
                    {uniqueTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => {
                                setFilter(type);
                                setVisibleCount(5);
                            }}
                            className={`capitalize rounded px-3 py-1 shadow border transition-colors duration-200 
                ${filter === type ? 'bg-blue-100 font-semibold' : 'bg-white font-normal'}`}
                            style={{ minWidth: '70px' }}
                        >
                            {type}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setFilter(null);
                            setVisibleCount(5);
                        }}
                        className={`capitalize rounded px-3 py-1 shadow border transition-colors duration-200 
              ${filter === null ? 'bg-blue-100 font-semibold' : 'bg-white font-normal'}`}
                        style={{ minWidth: '70px' }}
                    >
                        All
                    </button>
                </div>
            )}
        </div>
    );
}

export default FilterButtons;
