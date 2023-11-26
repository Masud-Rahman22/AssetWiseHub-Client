import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

export const infoContext = createContext(null)
const Main = () => {
    const axiosSecure = UseAxiosSecure();
    const {user,loading} = useAuth()
    const {data: info={}, isLoading: infoLoading, error: infoError, refetch: infoRefetch} = useQuery({
        queryKey: ['info', user],
        enabled: (!loading && (!!user)),
        queryFn: async()=>{
            const res = await axiosSecure.get(`/allUsers/${user?.email}`)
            return res.data
        }
    })
    const value = {
        info,
        role: info?.role,
        infoLoading,
        infoError,
        infoRefetch
    }
    return (
        <infoContext.Provider value={value}>
        <div className="bg-[#1a3756]">
            <NavBar info={info}></NavBar>
            <div className="pt-20">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </infoContext.Provider>
    );
};

export default Main;