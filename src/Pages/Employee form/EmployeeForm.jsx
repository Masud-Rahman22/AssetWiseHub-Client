import { useForm } from "react-hook-form"
import { FaArrowAltCircleDown, FaGoogle } from 'react-icons/fa';
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../Config/firebase.config";
import { Helmet } from "react-helmet-async";
const EmployeeForm = () => {
    const { googleLogin, Register } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const EmployeeName = data.name
        const EmployeeEmail = data.email
        const photoURL = data.photo
        const password = data.password
        const dob = data.dob
        const EmployeeData = {
            EmployeeName,
            EmployeeEmail,
            photoURL,
            password,
            dob,
            role: 'employee'
        }
        const userEmail = { email: EmployeeEmail, role: 'employee' }
        Register(EmployeeEmail, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: EmployeeName, photoURL: photoURL
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch()
        console.log(EmployeeData);
        const res = await axiosSecure.post('/employeesInfo', EmployeeData)
        const allUsers = await axiosSecure.post('/allUsers', userEmail)
        console.log(allUsers.data);
        if (res.data.insertedId) {
            reset()
            Swal.fire({
                title: "You Registered as an Employee",
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
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You're logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <Helmet>
                <title>AssetWise | Join As Employee</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-4/5 mx-auto mt-16 h-[50vh] mb-20">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('name')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" {...register('email')} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('photo')} id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo</label>
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
                <button type="submit" className="glass p-2 w-full text-white hover:bg-black">Sign Up</button>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-[#ec5349] mt-5 mb-3 font-Roboto text-2xl">Social Login</h2>
                    <FaArrowAltCircleDown className="text-3xl bg-[#dbeeed]"></FaArrowAltCircleDown>
                    <button onClick={handleToGoogleLogin} className="glass px-10 py-3 mt-5 text-white hover:bg-black"><FaGoogle></FaGoogle></button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;