// Vendors
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import { AppLayout } from 'core/layouts/app.layout';
// Routes
import { atomsRoutes } from '../routes/atoms.routes';
import { moleculesRoutes } from '../routes/molecules.routes';
import { themeRoutes } from '../routes/theme.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [...atomsRoutes, ...moleculesRoutes, ...themeRoutes],
  },
]);

export { router };
