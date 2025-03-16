import { RouteObject, useRoutes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Landing />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
