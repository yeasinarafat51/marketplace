/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[{
            index:true,
            element:<Home/>,
            
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/registration',
            element:<Register/>
        },
        {
            path:'/job/:id',
            element:<JobDetails/>,
            loader: ({params}) => fetch(`http://localhost:9000/job/${params.id}`),
        },
        {
            path:'/add-job',
            element:<AddJob/>
        },
    ]
    },
])


export default router;

