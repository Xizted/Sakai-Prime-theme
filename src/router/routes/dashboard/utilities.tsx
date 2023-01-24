import { Navigate } from 'react-router-dom';
import IconsDemo from '../../../views/utilities/icons';

const utilitiesRoutes = [
    {
        path: 'utilities',
        children: [
            {
                path: '/utilities',
                element: <Navigate to="/" replace />
            },
            {
                path: 'icons',
                element: <IconsDemo />
            }
        ]
    }
];

export default utilitiesRoutes;
