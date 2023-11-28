import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useEffect } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useState } from "react";


const EmployeeProfile = () => {
    const axiosSecure = UseAxiosSecure();
    const [employeeInfo,setEmployeeInfo] = useState({})
    const {user} = useAuth();
    useEffect(()=>{
        axiosSecure.get(`/employeesInfo/${user?.email}`)
        .then(res =>{
            setEmployeeInfo(res.data)
        })
    },[axiosSecure,user?.email])
    console.log(employeeInfo);
    return (
        <div className="h-fit flex items-center justify-center">
            <div className="relative flex flex-col  bg-[#1a3756] shadow-md w-96 rounded-xl bg-clip-border text-white">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700  h-80 flex items-center justify-center rounded-xl bg-clip-border">
                    <img className="rounded-full" src={employeeInfo?.photoURL} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {employeeInfo?.EmployeeName}
                    </h4>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {employeeInfo?.EmployeeEmail}
                    </h4>
                    <Link to='/employeeProfileUpdate'>
                    <button className="btn mt-5">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;