import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";


const Main = () => {
    return (
        <div className="bg-[#1a3756]">
            <NavBar></NavBar>
            <div className="pt-20">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;