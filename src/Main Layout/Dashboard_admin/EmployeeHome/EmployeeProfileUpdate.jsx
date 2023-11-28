import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";


const EmployeeProfileUpdate = () => {
    const axiosSecure = UseAxiosSecure();
    const [employeeInfo,setEmployeeInfo] = useState({})
    const {user} = useAuth()
    useEffect(()=>{
        axiosSecure.get(`/employeesInfo/${user?.email}`)
        .then(res =>{
            setEmployeeInfo(res.data)
        })
    },[axiosSecure,user?.email])
    console.log(employeeInfo);
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const name = data.name
        const email = user?.email
        const userName = {
            name,
            email
        }
        console.log(userName);
        const res = await axiosSecure.put('/employeesInfo',{userName})
        console.log(res.data);
        if(res.data.modifiedCount > 0) {
            Swal.fire({
                title: "You updated your information",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
                }
            });
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-4/5 mx-auto mt-16 h-[50vh] mb-20">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('name')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={employeeInfo?.EmployeeName} placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" {...register('email')} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={employeeInfo?.EmployeeEmail} placeholder=" " required  readOnly/>
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <button type="submit" className="glass p-2 w-full text-white hover:bg-black">Update</button>
            </form>
    );
};

export default EmployeeProfileUpdate;