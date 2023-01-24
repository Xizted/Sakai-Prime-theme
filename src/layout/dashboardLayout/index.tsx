import { Outlet } from 'react-router-dom';
import Layout from './layout';

const DashboardLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default DashboardLayout;
