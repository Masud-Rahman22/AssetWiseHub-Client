import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main Layout/Main";
import Home from "../Pages/Home/Home";
import EmployeeForm from "../Pages/Employee form/EmployeeForm";
import AdminForm from "../Pages/Admin Form/AdminForm";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServicePage from "../Pages/ServicePage/ServicePage";
import AdminEmployeeHome from "../Main Layout/Dashboard_admin/AdminEmployeeHome";
import AddAnAsset from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/AddAnAsset";
import AssetList from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/AssetList/AssetList";
import AssetUpdate from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/AssetList/AssetUpdate";
import RequestForAnAsset from "../Main Layout/Dashboard_admin/EmployeeHome/RequestForAnAsset";
import MakeACustomRequest from "../Main Layout/Dashboard_admin/EmployeeHome/MakeACustomRequest";
import AllRequests from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/AllRequests";
import MyAssets from "../Main Layout/Dashboard_admin/EmployeeHome/MyAssets";
import AdminProfile from "../Main Layout/Dashboard_admin/Admin_Home/AdminProfile";
import EmployeeProfile from "../Main Layout/Dashboard_admin/EmployeeHome/EmployeeProfile";
import EmployeeProfileUpdate from "../Main Layout/Dashboard_admin/EmployeeHome/EmployeeProfileUpdate";
import AdminProfileUpdate from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/AdminProfileUpdate";
import CustomRequestsLists from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/CustomRequestsLists";
import AddAnEmployee from "../Main Layout/Dashboard_admin/Admin_Home/Admin_pages/AddAnEmployee/AddAnEmployee";
import SignUp from "../Pages/SignUp/SignUp";
import Payment from "../Shared/Payment";
import PaymentPage from "../Component/PaymentPage";
import MyEmployeeList from "../Main Layout/Dashboard_admin/Admin_Home/MyEmployeeList";
import MyTeam from "../Main Layout/Dashboard_admin/EmployeeHome/MyTeam";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/employeeForm',
                element: <EmployeeForm></EmployeeForm>
            },
            {
                path: '/adminForm',
                element: <AdminForm></AdminForm>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element : <SignUp></SignUp>
            },
            {
                path: '/servicePage',
                element: <PrivateRoute><ServicePage></ServicePage></PrivateRoute>
            },
            {
                path: '/admin-home',
                element: <PrivateRoute><AdminEmployeeHome></AdminEmployeeHome></PrivateRoute>
            },
            {
                path: '/payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ()=> fetch('https://asset-wise-hub-server.vercel.app/packages')
            },
            {
                path: '/paymentPage/:_id',
                element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>,
                loader: ({params})=> fetch(`https://asset-wise-hub-server.vercel.app/packages/${params._id}`)
            },
            // admin pages
            {
                path: '/addAnAsset',
                element: <PrivateRoute><AddAnAsset></AddAnAsset></PrivateRoute>
            },
            {
                path: '/assetList',
                element: <PrivateRoute><AssetList></AssetList></PrivateRoute>
            },
            {
                path: '/assetUpdate/:id',
                element: <PrivateRoute><AssetUpdate></AssetUpdate></PrivateRoute>,
                loader: ({params})=> fetch(`https://asset-wise-hub-server.vercel.app/assetUpdate/${params.id}`) 
            },
            {
                path: '/allRequests',
                element: <PrivateRoute><AllRequests></AllRequests></PrivateRoute>
            },
            {
                path: '/adminProfile',
                element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
            },
            {
                path: '/adminProfileUpdate',
                element: <PrivateRoute><AdminProfileUpdate></AdminProfileUpdate></PrivateRoute>
            },
            {
                path: '/customRequestsLists',
                element: <PrivateRoute><CustomRequestsLists></CustomRequestsLists></PrivateRoute>
            },
            {
                path: '/addAnEmployee',
                element: <PrivateRoute><AddAnEmployee></AddAnEmployee></PrivateRoute>
            },
            {
                path: '/myEmployeeList',
                element: <PrivateRoute><MyEmployeeList></MyEmployeeList></PrivateRoute>
            },
            // Employee pages
            {
                path: '/requestForAnAsset',
                element : <PrivateRoute><RequestForAnAsset></RequestForAnAsset></PrivateRoute>
            },
            {
                path: '/makeACustomRequest',
                element: <PrivateRoute><MakeACustomRequest></MakeACustomRequest></PrivateRoute>
            },
            {
                path: '/myAssets',
                element: <PrivateRoute><MyAssets></MyAssets></PrivateRoute>
            },
            {
                path: '/employeeProfile',
                element: <PrivateRoute><EmployeeProfile></EmployeeProfile></PrivateRoute>
            },
            {
                path: '/employeeProfileUpdate',
                element: <PrivateRoute><EmployeeProfileUpdate></EmployeeProfileUpdate></PrivateRoute>
            },
            {
                path: '/myTeam',
                element: <PrivateRoute><MyTeam></MyTeam></PrivateRoute>
            }
        ]    
    },
]);

export default router;