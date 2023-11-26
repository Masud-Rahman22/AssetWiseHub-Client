import { useContext } from "react";
import AdminHome from "./Admin_Home/AdminHome";
import { infoContext } from "../Main";
import EmployeeHome from "./EmployeeHome/EmployeeHome";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const AdminEmployeeHome = () => {
    const {role,infoLoading,infoError,infoRefetch} = useContext(infoContext)
    const {loading} = useAuth()
    // to do task
    console.log(role,infoLoading);
    if(infoError){
        return <button onClick={infoRefetch}>Reload</button>
    }
    if(infoLoading || loading){
        return <div>loading</div>
    }
    if(role === 'admin'){
        return <AdminHome></AdminHome>
    }
    else if(role === 'employee'){
        return <EmployeeHome></EmployeeHome>
    }
    else{
        return <Navigate to='/' replace></Navigate>
    }

};

export default AdminEmployeeHome;