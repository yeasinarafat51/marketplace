/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
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
            path:'/job/:id',
            element:<JobDetails/>,
            loader: ({params}) => fetch(`http://localhost:9000/job/${params.id}`),
        },
        {
            path:'/add-job',
            element:<AddJob/>
        },
        {
            path:'/update/:id',
            element:<UpdateJob/>,
            loader: ({params}) => fetch(`http://localhost:9000/job/${params.id}`),
        },
        {
            path:'/my-posted-jobs',
            element:<MyPostedJobs/>
        },
    ]
    },
])


export default router;

