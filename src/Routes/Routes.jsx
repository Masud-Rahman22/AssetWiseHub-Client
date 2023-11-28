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
                path: '/servicePage',
                element: <ServicePage></ServicePage>
            },
            {
                path: '/admin-home',
                element: <AdminEmployeeHome></AdminEmployeeHome>
            },
            // admin pages
            {
                path: '/addAnAsset',
                element: <AddAnAsset></AddAnAsset>
            },
            {
                path: '/assetList',
                element: <AssetList></AssetList>
            },
            {
                path: '/assetUpdate/:id',
                element: <AssetUpdate></AssetUpdate>,
                loader: ({params})=> fetch(`http://localhost:5000/assetUpdate/${params.id}`) 
            },
            {
                path: '/allRequests',
                element: <AllRequests></AllRequests>
            },
            {
                path: '/adminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/adminProfileUpdate',
                element: <AdminProfileUpdate></AdminProfileUpdate>
            },
            {
                path: '/customRequestsLists',
                element: <CustomRequestsLists></CustomRequestsLists>
            },
            {
                path: '/addAnEmployee',
                element: <AddAnEmployee></AddAnEmployee>
            },
            // Employee pages
            {
                path: '/requestForAnAsset',
                element : <RequestForAnAsset></RequestForAnAsset>
            },
            {
                path: '/makeACustomRequest',
                element: <MakeACustomRequest></MakeACustomRequest>
            },
            {
                path: '/myAssets',
                element: <MyAssets></MyAssets>
            },
            {
                path: '/employeeProfile',
                element: <EmployeeProfile></EmployeeProfile>
            },
            {
                path: '/employeeProfileUpdate',
                element: <EmployeeProfileUpdate></EmployeeProfileUpdate>
            }
        ]    
    },
]);

export default router;