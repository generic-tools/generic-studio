import { RouteObject, useRoutes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import MergePDF from '../pages/pdf/merge/MergePDF';

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/pdf/merge',
      element: <MergePDF />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
