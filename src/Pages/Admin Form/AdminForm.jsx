import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
    const axiosSecure = UseAxiosSecure();
    const {Register} = useContext(AuthContext)
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const adminName = data.name
        const adminCompanyName = data.companyName 
        const adminCompanyLogo = data.companyLogo 
        const adminEmail = data.email
        const password = data.password
        const dob = data.dob
        const packages = data.package
        const adminData = {
            adminName,
            adminCompanyName,
            adminCompanyLogo,
            adminEmail,
            password,
            dob,
            packages,
            role: 'admin'
        }
        const userEmail = {
            email:adminEmail,
            logo:adminCompanyLogo
        }
        Register(adminEmail,password)
        .then(()=>{
        })
        .catch()
        console.log(adminData);
        const res = await axiosSecure.post('/adminInfo', adminData)
        console.log(res.data);
        const allUsers = await axiosSecure.post('/allUsers', userEmail)
        console.log(allUsers.data);
        if (res.data.insertedId) {
            reset()
            navigate('/servicePage')
            Swal.fire({
                title: "You Registered as an Admin",
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-4/5 mx-auto mt-16 h-[50vh] mb-20">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('name')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('companyName')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('companyLogo')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Logo</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" {...register('email')} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" {...register('password')} id="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="date" {...register('dob')} id="dob" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="dob floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of birth:</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <select className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-[#1a3756]" placeholder=" " required {...register('package')} id="package">
                        <option value="default">Default</option>
                        <option value="standard"> 5 Members for $5</option>
                        <option value='premium'>10 Members for $8</option>
                        <option value='logistical'> 20 Members for $15</option>
                    </select>
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Packages</label>
                </div>
                <button type="submit" className="glass p-2 w-full text-white hover:bg-black">Sign Up</button>
            </form>
        </div>
    );
};

export default AdminForm;