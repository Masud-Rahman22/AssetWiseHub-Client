import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";


const Main = () => {
    const axiosSecure = UseAxiosSecure();
    const [info,setInfo] = useState();
    const {user} = useAuth()
    useEffect(()=>{
        const getAuth = async()=>{
            const res = await axiosSecure.get(`/allUsers/${user?.email}`)
            setInfo(res.data)
        }
        getAuth()
    },[axiosSecure,user?.email])
    return (
        <div className="bg-[#1a3756]">
            <NavBar info={info}></NavBar>
            <div className="pt-20">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;