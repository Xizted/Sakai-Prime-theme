import authRoutes from './auth';
import dashboardRoutes from './dashboard';

const allRoutes = [...dashboardRoutes, ...authRoutes];

export default allRoutes;
