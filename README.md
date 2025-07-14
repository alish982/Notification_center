This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

See a Demo here: https://notification-center-74um.vercel.app/


1).  Component Structure of Notification Center 

.
├── components
│   ├── notificationCenter.jsx
│   ├── notificationGroup.jsx
│   └── notificationItem.jsx
├── featuers
│   ├── filterButtons.jsx
│   └── notificationsSlice.jsx
├── globals.css
├── hooks
│   └── simulateNoti.jsx
├── layout.js
├── page.js
├── services
│   ├── addNotification.jsx
│   └── fakeDataGenerator.jsx
├── store
│   └── index.jsx
├── styles
│   └── iconsStyle.jsx
└── wrapper.jsx

components/
        Contains reusable UI components used to build the notification interface.
        notificationCenter.jsx: Main panel that includes the entire notification system (list, filters, form).
        notificationGroup.jsx: Displays a list of notifications with pagination logic (see more/less).
        notificationItem.jsx: Renders an individual notification item with styling and timestamp.


featuers/
        Handles feature-specific logic and UI components.
        notificationsSlice.jsx: Redux Toolkit slice containing logic for adding, reading, and tracking unread notifications.
        filterButtons.jsx: UI component for filtering notifications by type.


hooks/
        Contains custom React hooks.
        simulateNoti.jsx: A hook that simulates live notifications by dispatching from a sample list at regular intervals.


layout.js
        Defines the global layout of the app. Typically used in Next.js to wrap all pages with a consistent structure (header, footer, etc.).


page.js
        Main entry point of the application. Renders the NotificationCenter and serves as the root view for the user.


services/
        Holds logic or utilities that support the core functionality.
        addNotification.jsx: UI component for manually adding a new notification via form.
        fakeDataGenerator.jsx: Provides a static list of sample notifications used for testing or simulation.


store/
        Sets up and exports the Redux store used across the application.
        index.jsx: Configures the store and registers reducers.


styles/
        Centralizes UI style definitions and theming for consistency.
        iconsStyle.jsx: Maps notification types to styled icon components and associated class styles.
        

wrapper.jsx
        Likely used to wrap the entire application in providers (e.g., Redux Provider), or to apply global context or layout behavior.




2). How new notifications types can be integrated?

->  Right now, we can just add another notification in fake data generator or add through form.


3). State management approach and rationale

->  This project uses Redux Toolkit to manage notification state globally in a single slice.
    Notifications (list and read status) are stored centrally for easy access and updates across components.
    The slice handles adding new notifications, marking them read, and tracking unread counts.
    Components use React Redux hooks (useSelector and useDispatch) to interact cleanly with the store.


4). How you handle real-time updates? 

-> The project simulates real-time updates using a React hook that dispatches sample notifications to Redux every few seconds. This updates the UI instantly with     new notifications. It allows testing without a backend.


5). Edge Cases and Performance Considerations
      Limit visible notifications to avoid UI slowdown also pagination helps for this.
      Prevent duplicate IDs to maintain state integrity.
      Batch rapid updates to reduce re-renders.
      Immutable state updates prevent bugs.
      Batch rapid updates to reduce frequent UI re-renders and improve performance.
      Use immutable state updates to avoid bugs and ensure reliable change detection.
