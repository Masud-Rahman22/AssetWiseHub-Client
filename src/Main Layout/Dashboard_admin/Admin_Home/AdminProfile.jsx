import { useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const AdminProfile = () => {
    const {user} = useAuth()
    const axiosSecure = UseAxiosSecure();
    const [adminInfo,setAdminInfo] = useState({})
    useEffect(()=>{
        axiosSecure.get(`/adminInfo/${user?.email}`)
        .then(res =>{
            setAdminInfo(res.data)
        })
    },[axiosSecure,user?.email])
    console.log(adminInfo);
    return (
        <div className="h-fit flex items-center justify-center">
            <div className="relative flex flex-col  bg-[#1a3756] shadow-md w-96 rounded-xl bg-clip-border text-white">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 md:h-80 flex items-center justify-center rounded-xl bg-clip-border">
                    <img className="rounded-full md:w-60" src={adminInfo?.photoURL} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {adminInfo?.adminName}
                    </h4>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {adminInfo?.adminEmail}
                    </h4>
                    <Link to='/adminProfileUpdate'><button className="btn mt-5">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;