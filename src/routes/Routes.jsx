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
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/Authentication/AllJobs";

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
            element:<PrivateRoute><JobDetails/></PrivateRoute>,
            loader: ({params}) => fetch(`https://market-server-ruby.vercel.app/job/${params.id}`),
        },
        {
            path:'/job/:id',
            element:<JobDetails/>,
            loader: ({params}) => fetch(`https://market-server-ruby.vercel.app/job/${params.id}`),
        },
        {
            path:'/add-job',
            element:<PrivateRoute><AddJob/></PrivateRoute>
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><UpdateJob/></PrivateRoute>,
            loader: ({params}) => fetch(`https://market-server-ruby.vercel.app/job/${params.id}`),
        },
        {
            path:'/my-posted-jobs',
            element:<PrivateRoute><MyPostedJobs/></PrivateRoute>
        },
        {
            path:'/my-bids',
            element:<PrivateRoute><MyBids/></PrivateRoute>
        },
        {
            path:'/bid-requests',
            element:<PrivateRoute><BidRequests/></PrivateRoute>
        },
        {
            path:'/all-jobs',
            element:<AllJobs/>
        },
    ]
    },
])


export default router;

