import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from "./components/error-page";

import Home from '../Home';
import Signup from '../Signup';
import Signin from '../Signin';
import Profile from '../Profile';
import Schedule from '../Schedule';
import Vehicle from '../Vehicle';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage/>
    },
    {
        path: '/signup',
        element: <Signup />,
        errorElement: <ErrorPage/>
    },
    {
        path: '/signin',
        element: <Signin />,
        errorElement: <ErrorPage/>
    },
    {
        path: '/profile',
        element: <Profile />,
        errorElement: <ErrorPage/>
    },
    {
        path: '/schedule',
        element: <Schedule />,
        errorElement: <ErrorPage/>
    },
    {
        path: '/vehicle',
        element: <Vehicle />,
        errorElement: <ErrorPage/>
    },
    // {
    //     path: '/schedule',
    //     element: <Schedule />,
    //     children: [
    //         {
    //             path: "/schedule/:id",
    //             element: "",
    //         }
    //     ]
    // },
]);

export default router;