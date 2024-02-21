import React, { lazy, Suspense } from 'react';
import { useRoutes, useNavigate, Navigate } from 'react-router-dom';
import Layout from '../components/core/layout/Layout';
import Signup from '../pages/Signup';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));


const Routes = () => {
//   const navigate = useNavigate();
//   const { isLoggedIn } = useAuth();
const isLoggedIn = true;

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          { <Layout children={<Home />} /> }
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {isLoggedIn ? <Layout children={<Login />} /> : <Navigate to="/" />}
        </Suspense>
      ),
    },
    {
      path: '/signup',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {isLoggedIn ? <Layout children={<Signup />} /> : <Navigate to="/" />}
        </Suspense>
      ),
    },
    // {
    //   path: '/ssl',
    //   element: (
    //     <Suspense fallback={<div>Loading...</div>}>
    //       {isLoggedIn ? <Layout children={<SSL />} /> : <Navigate to="/login" />}
    //     </Suspense>
    //   ),
    // },
   
  ]);

  return routes;
};

export default Routes;
