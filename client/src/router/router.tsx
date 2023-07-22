import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { getOneUser, getUsers } from './loaders/user.loader';

import App from '@/App';
import Home from '@/pages/Home/Home';
const Construction = lazy(() => import('@/pages/Construction/Construction'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const NotFound = lazy(() => import('@/components/NotFound/NotFound'));


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                loader: getUsers,
                element: <Home/>
            },
            {
                path: '/profile/:id',
                loader: getOneUser,
                element: <Profile/>,
            },
            {
                path: '/settings',
                element: <Construction/>
            },
            {
                path: '/community',
                element: <Construction/>
            },
            {
                path: "*",
                element: <NotFound message='Page introuvable'/>
            }
        ]
    }
]);