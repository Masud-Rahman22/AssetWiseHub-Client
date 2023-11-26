import { Link, NavLink } from "react-router-dom";
import Logo from '../../../public/logo/fagnqbmi.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import useProfile from "../../Hooks/useProfile";

const NavBar = ({info}) => {
    const { user, Logout } = useContext(AuthContext)
    const handleToLogout = () => {
        Logout()
            .then()
            .catch()
    }
    const Links = <>
    {
        info?.role === 'admin' ? 
        <div>
        <li className="text-[#dbeeed]"><NavLink
            to="/admin-home"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/assetList"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Asset List
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/addAnAsset"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Add an Asset
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/allRequests"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            All Requests
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/customRequestsLists"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Custom Requests List
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/myEmployeeList"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            My Employee List
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/addAnEmployee"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Add an Employee
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/adminProfile"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Profile
        </NavLink></li>
        {user ? '' : <li className="text-[#dbeeed]"><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Login
        </NavLink></li>}
        </div>
        :
        info?.role === 'employee' ? 
        <div>
        <li className="text-[#dbeeed]"><NavLink
            to="/admin-home"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Employee Home
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/myAssets"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            My Assets
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/myTeam"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            My team
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/requestForAnAsset"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Request For an Asset
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/makeACustomRequest"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Make a custom request
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/employeeProfile"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Profile
        </NavLink></li>
        {user ? '' : <li className="text-[#dbeeed]"><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Login
        </NavLink></li>}
        </div>
        :
        <div>
        <li className="text-[#dbeeed]"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >Home
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/employeeForm"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Join as Employee
        </NavLink></li>
        <li className="text-[#dbeeed]"><NavLink
            to="/adminForm"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Join as HR/Admin
        </NavLink></li>
        {user ? '' : <li className="text-[#dbeeed]"><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-[#ec5349]" : ""
            }
        >
            Login
        </NavLink></li>}
        </div>
    }
    
    </>
    return (
        <div className="navbar bg-[#1a3756] fixed z-10 text-[#dbeeed]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1a3756] rounded-box w-52">
                        {Links}
                    </ul>
                </div>
            </div>
            <Link to='/' className="navbar-center">
                <img className="h-[50px] w-[50px]" src={info?.role === 'admin' ? info?.logo : Logo} alt="" />
            </Link>
            <div className="navbar-end">
                {
                    user &&
                    <button onClick={handleToLogout} className="btn bg-[#ec5349] md:mt-2 text-white border-none">Logout</button>
                }
            </div>
        </div>
    );
};

export default NavBar;