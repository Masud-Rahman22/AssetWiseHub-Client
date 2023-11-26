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
import AdminHome from "../Main Layout/Dashboard_admin/Admin_Home/AdminHome";
import AdminEmployeeHome from "../Main Layout/Dashboard_admin/AdminEmployeeHome";

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
            }
        ]    
    },
]);

export default router;