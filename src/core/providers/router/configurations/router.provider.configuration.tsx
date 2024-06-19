// Vendors
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import { AppLayout } from 'core/layouts/app.layout';
// Routes
import { atomsRoutes } from '../routes/atoms.routes';
import { moleculesRoutes } from '../routes/molecules.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [...atomsRoutes, ...moleculesRoutes],
  },
]);

export { router };
