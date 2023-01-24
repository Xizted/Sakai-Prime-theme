import DashboardLayout from '../../../layout/dashboardLayout';
import homeRoutes from './home';
import pagesRoutes from './pages';
import uiComponentsRoutes from './uiComponents';
import utilitiesRoutes from './utilities';

const dashboardRoutes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [...homeRoutes, ...uiComponentsRoutes, ...utilitiesRoutes, ...pagesRoutes],
  },
];

export default dashboardRoutes;
