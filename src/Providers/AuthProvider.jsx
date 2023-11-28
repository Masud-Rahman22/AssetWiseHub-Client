import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Config/firebase.config";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const axiosSecure = UseAxiosSecure()
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                // get token
                const userEmail = {email: currentUser.email}
                axiosSecure.post('/jwt',userEmail)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('Access-token',res.data.token);
                        setLoading(false)
                    }
                })
            }
            else{
                // remove token
                localStorage.removeItem('Access-token');
                setLoading(false)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [user?.email])
    const authInformation= {
        googleLogin,
        loading,
        user,
        login,
        Logout,
        Register
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;