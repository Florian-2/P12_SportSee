import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import App from '../App';
import Home from '../pages/Home/Home';
const Construction = lazy(() => import('../pages/Construction/Construction'));
const Profile = lazy(() => import('../pages/Profile/Profile'));


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/profil',
                element: <Profile/>,
            },
            {
                path: '/construction',
                element: <Construction/>
            }
        ]
    }
]);