import { Navigate } from 'react-router-dom';
import Documentation from '../../../views/documentation';
import Crud from '../../../views/pages/crud';
import EmptyPage from '../../../views/pages/empty';
import TimelineDemo from '../../../views/pages/timeline';

const pagesRoutes = [
  {
    path: 'documentation',
    element: <Documentation />,
  },
  {
    path: '/pages',
    children: [
      {
        path: '/pages',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'crud',
        element: <Crud />,
      },
      {
        path: 'timeline',
        element: <TimelineDemo />,
      },
      {
        path: 'empty',
        element: <EmptyPage />,
      },
    ],
  },
];

export default pagesRoutes;
