// Vendors
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import { AppLayout } from 'core/layouts/app.layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
]);

export { router };
