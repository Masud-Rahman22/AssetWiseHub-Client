import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";


const useProfile = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useAuth()
    const {data:usersInfo={}}=useQuery({
        queryKey: ['userInfo', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/allUsers/${user?.email}`)
            return res?.data
        }
    })
    return {role: usersInfo?.role}
};

export default useProfile;