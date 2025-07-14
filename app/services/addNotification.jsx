import React from 'react';

function AddNotificationForm({
    newType,
    newMessage,
    newDescription,
    setNewType,
    setNewMessage,
    setNewDescription,
    handleAddNotification,
}) {
    return (
        <div className="border-t p-4">
            <h3 className="text-lg font-semibold mb-2">Add New Notifications</h3>

            <div className="flex gap-6 flex-wrap mb-4">
                {['info', 'success', 'warning', 'error'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="type"
                            value={type}
                            checked={newType === type}
                            onChange={(e) => setNewType(e.target.value)}
                            className="accent-blue-600"
                        />
                        <span className="capitalize text-sm">{type}</span>
                    </label>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                    type="text"
                    placeholder="Message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>

            <button
                onClick={handleAddNotification}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
                Add Notification
            </button>
        </div>
    );
}

export default AddNotificationForm;
