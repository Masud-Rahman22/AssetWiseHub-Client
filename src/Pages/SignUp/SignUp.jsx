import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../../Config/firebase.config";
import { FaGoogle } from "react-icons/fa";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const {googleLogin,Register} = useAuth()
    const axiosSecure = UseAxiosSecure()
    const location = useLocation()
    const navigate = useNavigate()
    const handleRegister = async(e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const dob = form.dob.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const userInfo = {
            name,
            dob,
            photo,
            email,
            password
        }
        console.log(userInfo);
        Register(email,password)
        .then(()=>{
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            }).then(() => {
                console.log('profile updated');
            }).catch((error) => {
                console.log(error);
            });
        })
        const allUsers = await axiosSecure.post('/user', userInfo)
        console.log(allUsers.data);
        if (allUsers.data.insertedId) {
            navigate(location?.state ? location?.state : '/')
            Swal.fire({
                title: "You are Registered",
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
                    title: "You're Registered",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location?.state : '/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="h-[80vh] flex items-center justify-center">
            <Helmet>
                <title>AssetWise | Sign Up</title>
            </Helmet>
        <form onSubmit={handleRegister} className="relative flex flex-col text-white bg-[#1a3756] shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#ec5349] to-[#ec5349] bg-clip-border ">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                    Sign Up
                </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type='name'
                        name='name'
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec5349] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ec5349] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ec5349] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ec5349] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Full Name
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type='date'
                        name='dob'
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec5349] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ec5349] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ec5349] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ec5349] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Date of Birth
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type='text'
                        name='photo'
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec5349] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ec5349] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ec5349] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ec5349] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        photo
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type='email'
                        name='email'
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec5349] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ec5349] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ec5349] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ec5349] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        type="password" name='password'
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec5349] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ec5349] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ec5349] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ec5349] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>
                </div>

            </div>
            <div className="p-6 pt-0">
                <button
                    type="submit"
                    className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#ec5349] to-[#ec5349] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#ec5349]/20 transition-all hover:shadow-lg hover:shadow-[#ec5349]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                    data-ripple-light="true"
                >
                    Sign Up
                </button>
                <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit gap-3">
                    Or you can Login with!!
                    <button onClick={handleToGoogleLogin}><FaGoogle className="text-2xl"></FaGoogle></button>
                </p>
            </div>
        </form>
    </div>
    );
};

export default SignUp;