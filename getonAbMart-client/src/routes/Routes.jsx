import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import MainLayout from '../layouts/MainLayout'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Homepage/>,
            }
        ]
    }
])