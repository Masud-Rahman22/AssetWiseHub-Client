import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main Layout/Main";
import Home from "../Pages/Home/Home";
import EmployeeForm from "../Pages/Employee form/EmployeeForm";
import AdminForm from "../Pages/Admin Form/AdminForm";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
            }

        ]
    },
]);

export default router;